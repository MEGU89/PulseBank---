"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { MapPin, Phone, Hospital, Navigation, Droplet } from "lucide-react";

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), { ssr: false });

const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Function to convert coordinates to readable address using reverse geocoding
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

      // Add suburb/neighbourhood/village (sector/area)
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

export default function RecipientHospitalMap({ recipientLocation, requests = [] }: any) {
  const [hospitals, setHospitals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [recipientLat, setRecipientLat] = useState(recipientLocation?.latitude || 21.1466);
  const [recipientLon, setRecipientLon] = useState(recipientLocation?.longitude || 79.0889);
  const [recipientAddress, setRecipientAddress] = useState<string | null>(null);
  const [addressLoading, setAddressLoading] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<any>(null);
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Update location when prop changes and refetch hospitals
  useEffect(() => {
    if (recipientLocation && recipientLocation.latitude && recipientLocation.longitude) {
      console.log("[RecipientHospitalMap] Location updated from prop:", recipientLocation);
      setRecipientLat(recipientLocation.latitude);
      setRecipientLon(recipientLocation.longitude);
      // Clear error when location changes so we fetch again
      setError(null);
      
      // Fetch address from coordinates
      setAddressLoading(true);
      getAddressFromCoordinates(recipientLocation.latitude, recipientLocation.longitude)
        .then((address) => {
          setRecipientAddress(address);
          setAddressLoading(false);
        })
        .catch((err) => {
          console.error("Error getting address:", err);
          setAddressLoading(false);
        });
    }
  }, [recipientLocation]);

  // Get user location if not provided by prop
  useEffect(() => {
    if (!recipientLocation && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          console.log("[RecipientHospitalMap] Got geolocation:", position.coords);
          setRecipientLat(position.coords.latitude);
          setRecipientLon(position.coords.longitude);
          
          // Fetch address from coordinates
          setAddressLoading(true);
          try {
            const address = await getAddressFromCoordinates(
              position.coords.latitude,
              position.coords.longitude
            );
            setRecipientAddress(address);
          } catch (err) {
            console.error("Error getting address:", err);
          } finally {
            setAddressLoading(false);
          }
        },
        (error) => {
          console.log("[RecipientHospitalMap] Geolocation error - using default location:", error);
        }
      );
    }
  }, [recipientLocation]);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log("[RecipientHospitalMap] Fetching hospitals for location:", { recipientLat, recipientLon });
        
        const response = await fetch("http://localhost:5000/hospital/all");
        console.log("[RecipientHospitalMap] Response status:", response.status);
        
        if (!response.ok) {
          throw new Error(`API returned status ${response.status}`);
        }
        
        const data = await response.json();
        console.log("[RecipientHospitalMap] Hospital API Response:", data);

        if (data.success && data.hospitals && data.hospitals.length > 0) {
          // Calculate distance for each hospital
          const hospitalsWithDistance = data.hospitals.map((hospital: any) => {
            const hospitalLat = hospital.location?.latitude || 21.1466;
            const hospitalLon = hospital.location?.longitude || 79.0889;
            
            const distance = calculateDistance(
              recipientLat,
              recipientLon,
              hospitalLat,
              hospitalLon
            );
            
            console.log(`[RecipientHospitalMap] Hospital: ${hospital.hospitalName}, Distance: ${distance} km`);
            
            return {
              ...hospital,
              distance: distance.toFixed(2),
            };
          });

          // Filter hospitals within 0-50 km radius (increased from 20 km)
          const nearbyHospitals = hospitalsWithDistance.filter((h: any) => {
            const dist = parseFloat(h.distance);
            return dist >= 0 && dist <= 50;
          });

          console.log("[RecipientHospitalMap] Nearby hospitals found:", nearbyHospitals.length);

          // Sort by distance
          nearbyHospitals.sort((a: any, b: any) => 
            parseFloat(a.distance) - parseFloat(b.distance)
          );

          if (nearbyHospitals.length === 0) {
            // Don't show error, just empty state - hospitals may not have saved locations
            setError(null);
            setHospitals([]); 
          } else {
            setError(null); // Clear error when hospitals are found
            setHospitals(nearbyHospitals);
            console.log("[RecipientHospitalMap] Successfully loaded", nearbyHospitals.length, "hospitals");
          }
        } else {
          setError(null);
          setHospitals([]);
          console.log("[RecipientHospitalMap] No hospitals data:", data);
        }
      } catch (error) {
        console.error("[RecipientHospitalMap] Error fetching hospitals:", error);
        setError(`Failed to fetch hospitals: ${error instanceof Error ? error.message : "Unknown error"}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHospitals();
  }, [recipientLat, recipientLon]);

  // Prepare hospital data for map - use proper structure for LeafletMap
  const hospitalsForMap = hospitals.map((hospital: any) => ({
    location: {
      latitude: hospital.location?.latitude || 21.1466,
      longitude: hospital.location?.longitude || 79.0889
    },
    fullName: hospital.hospitalName || "Hospital",
    bloodType: hospital.bloodType || "Hospital",
  }));

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200">
        <div className="flex items-center gap-3 mb-6">
          <Hospital className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-blue-700">Nearby Hospitals</h2>
        </div>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600 font-semibold">Loading hospitals...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-red-200">
        <div className="flex items-center gap-3 mb-6">
          <Hospital className="w-8 h-8 text-red-600" />
          <h2 className="text-3xl font-bold text-red-700">Nearby Hospitals</h2>
        </div>
        <div className="text-center py-12 bg-red-50 rounded-xl border-2 border-red-200">
          <Hospital className="w-12 h-12 text-red-300 mx-auto mb-3" />
          <p className="text-gray-700 font-semibold">No hospital on your location</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200">
      <div className="flex items-center gap-3 mb-6">
        <Hospital className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold text-blue-700">Your Blood Requests & Nearby Hospitals</h2>
      </div>

      {/* RECIPIENT REQUESTS SECTION */}
      {requests && requests.length > 0 && (
        <div className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
          <h3 className="text-lg font-bold text-purple-700 mb-4 flex items-center gap-2">
            <Droplet className="w-5 h-5 text-purple-600 fill-purple-600" />
            Your Active Blood Requests
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {requests.map((request: any, index: number) => (
              <div
                key={index}
                onClick={() => setSelectedRequest(request)}
                className={`p-4 rounded-lg cursor-pointer transition-all border-2 ${
                  selectedRequest?._id === request._id
                    ? "bg-purple-200 border-purple-600 shadow-lg"
                    : "bg-white border-purple-200 hover:border-purple-400 hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">RE-{request._id?.substring(0, 6).toUpperCase()}</h4>
                    <p className="text-sm text-purple-700 font-semibold">{request.bloodType}</p>
                  </div>
                  <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {request.unitsNeeded} units
                  </span>
                </div>
                
                <div className="text-xs text-gray-600 space-y-1">
                  <p><strong>Status:</strong> {request.status || "Pending"}</p>
                  <p><strong>Urgency:</strong> {request.urgency || "Moderate"}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Request Details */}
          {selectedRequest && (
            <div className="mt-4 pt-4 border-t-2 border-purple-200">
              <h4 className="font-bold text-purple-700 mb-2">Request Details: RE-{selectedRequest._id?.substring(0, 6).toUpperCase()}</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-bold text-purple-600 uppercase">Blood Type</p>
                  <p className="text-2xl font-bold text-red-600">{selectedRequest.bloodType}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-600 uppercase">Units Needed</p>
                  <p className="text-2xl font-bold text-orange-600">{selectedRequest.unitsNeeded}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-600 uppercase">Status</p>
                  <p className="text-xl font-bold text-blue-600">{selectedRequest.status || "Pending"}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {hospitals.length === 0 ? (
        <div className="text-center py-12 bg-blue-50 rounded-xl">
          <MapPin className="w-12 h-12 text-blue-300 mx-auto mb-3" />
          <p className="text-gray-600 font-semibold">No hospitals found nearby</p>
          <p className="text-sm text-gray-500 mt-2">Hospitals may not have saved their locations yet. Check back later.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="md:col-span-2">
            <div className="rounded-xl overflow-hidden shadow-lg h-96 border-2 border-blue-100">
              <LeafletMap
                hospitals={hospitalsForMap}
                currentLocation={{ latitude: recipientLat, longitude: recipientLon }}
              />
            </div>
          </div>

          {/* Hospital List Section */}
          <div className="space-y-3 max-h-96 overflow-y-auto">
            <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-600">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wide">📍 Hospitals Near You</p>
              <p className="text-sm text-gray-600 mt-1">{hospitals.length} hospitals found within 0-20 km</p>
              {hospitals.length > 0 && (
                <p className="text-xs text-gray-500 mt-2">
                  Your Location: {addressLoading ? <span className="italic">Loading address...</span> : (recipientAddress || "Location detected")}
                </p>
              )}
            </div>

            {hospitals.map((hospital: any, index: number) => (
              <div
                key={index}
                onClick={() => setSelectedHospital(hospital)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border-2 ${
                  selectedHospital?.id === hospital.id
                    ? "bg-blue-100 border-blue-600 shadow-lg"
                    : "bg-gradient-to-r from-white to-blue-50 border-blue-200 hover:border-blue-400 hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-800 text-sm line-clamp-2">{hospital.hospitalName}</h3>
                  <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ml-1">
                    {hospital.distance} km
                  </span>
                </div>
                
                <div className="space-y-1 text-xs text-gray-600">
                  {hospital.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3 text-gray-400" />
                      <span className="truncate">{hospital.phone}</span>
                    </div>
                  )}
                  {hospital.location?.address && (
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{hospital.location.address}</span>
                    </div>
                  )}
                </div>

                {/* Distance Bar */}
                <div className="mt-3 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all"
                    style={{
                      width: `${Math.max(
                        10,
                        100 - (parseFloat(hospital.distance) / Math.max(...hospitals.map((h: any) => parseFloat(h.distance)))) * 100
                      )}%`,
                    }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <Navigation className="w-3 h-3" />
                  {hospital.distance} km away
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Selected Hospital Details */}
      {selectedHospital && (
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
          <h3 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
            <Hospital className="w-5 h-5" />
            {selectedHospital.hospitalName}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Distance from You</p>
              <p className="text-2xl font-bold text-blue-700">{selectedHospital.distance} <span className="text-lg text-gray-600">km</span></p>
            </div>
            
            {selectedHospital.phone && (
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1 flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  Contact
                </p>
                <a
                  href={`tel:${selectedHospital.phone}`}
                  className="text-lg font-bold text-blue-700 hover:underline"
                >
                  {selectedHospital.phone}
                </a>
              </div>
            )}
          </div>

          {selectedHospital.location?.address && (
            <div className="mt-4">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Address
              </p>
              <p className="text-gray-700">{selectedHospital.location.address}</p>
            </div>
          )}

          <div className="mt-4 flex gap-2">
            <button
              onClick={() => {
                if (selectedHospital.phone) {
                  window.location.href = `tel:${selectedHospital.phone}`;
                }
              }}
              className="flex-1 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Hospital
            </button>
            <button
              onClick={() => {
                if (selectedHospital.location) {
                  window.open(
                    `https://maps.google.com/?q=${selectedHospital.location.latitude},${selectedHospital.location.longitude}`,
                    "_blank"
                  );
                }
              }}
              className="flex-1 px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-200 transition flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
