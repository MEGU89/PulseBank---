import { useState, useCallback } from "react";

export interface LocationData {
  latitude: number;
  longitude: number;
  address?: string;
}

interface UseLocationDetectionReturn {
  location: LocationData | null;
  isLoading: boolean;
  error: string | null;
  detectedAddress: string | null;
  requestLocation: () => void;
  clearError: () => void;
}

export const useLocationDetection = (): UseLocationDetectionReturn => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [detectedAddress, setDetectedAddress] = useState<string | null>(null);

  const getAddressFromCoordinates = async (
    latitude: number,
    longitude: number
  ): Promise<string> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
      );
      const data = await response.json();

      if (data.address) {
        const addr = data.address;
        const parts = [];

        // Add house number and street if available
        if (addr.house_number) parts.push(addr.house_number);
        if (addr.road) parts.push(addr.road);

        // Add suburb/neighbourhood/village (sector/area) - try multiple fields
        if (addr.suburb) parts.push(addr.suburb);
        else if (addr.neighbourhood) parts.push(addr.neighbourhood);
        else if (addr.village) parts.push(addr.village);
        else if (addr.hamlet) parts.push(addr.hamlet);

        // Add city/town
        if (addr.city) parts.push(addr.city);
        else if (addr.town) parts.push(addr.town);

        // Add postcode/pincode
        if (addr.postcode) parts.push(`Pin Code ${addr.postcode}`);

        // Add state
        if (addr.state) parts.push(addr.state);

        // Add country
        if (addr.country) parts.push(addr.country);

        const fullAddress = parts.filter(Boolean).join(", ");
        return fullAddress || "Location detected";
      }

      return "Location detected";
    } catch (err) {
      console.error("Error fetching address:", err);
      return "Location detected";
    }
  };

  const requestLocation = useCallback(() => {
    setIsLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocation not supported on this device");
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          console.log("[useLocationDetection] Got coordinates:", latitude, longitude);
          
          // Get address from coordinates
          const address = await getAddressFromCoordinates(latitude, longitude);
          
          setLocation({ latitude, longitude, address });
          setDetectedAddress(address);
          setError(null);
        } catch (err) {
          console.error("Error processing location:", err);
          setError("Failed to process location");
        } finally {
          setIsLoading(false);
        }
      },
      (geoError) => {
        let errorMessage = "Failed to get location";
        
        if (geoError.code === geoError.PERMISSION_DENIED) {
          errorMessage = "Location permission denied. Enable it in browser settings.";
        } else if (geoError.code === geoError.POSITION_UNAVAILABLE) {
          errorMessage = "Location unavailable. Make sure location services are enabled.";
        } else if (geoError.code === geoError.TIMEOUT) {
          errorMessage = "Location request timed out. Check your internet and try again.";
        }
        
        console.error("[useLocationDetection] Geolocation error:", geoError.code, errorMessage);
        setError(errorMessage);
        setLocation(null);
        setIsLoading(false);
      },
      { 
        timeout: 30000, // Increased from 10s to 30s
        enableHighAccuracy: true,
        maximumAge: 0 // Don't use cached position
      }
    );
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    location,
    isLoading,
    error,
    detectedAddress,
    requestLocation,
    clearError,
  };
};
