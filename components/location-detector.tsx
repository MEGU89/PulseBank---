"use client";

import { useState, useEffect } from "react";
import { MapPin, Loader, AlertCircle, CheckCircle } from "lucide-react";
import { useLocationDetection } from "@/hooks/useLocationDetection";

interface LocationDetectorProps {
  onLocationDetected: (lat: number, lng: number) => void;
  label?: string;
  showMap?: boolean;
}

export const LocationDetector = ({
  onLocationDetected,
  label = "Your Location",
  showMap = false,
}: LocationDetectorProps) => {
  const { location, isLoading, error, detectedAddress, requestLocation, clearError } = useLocationDetection();
  const [showFullMap, setShowFullMap] = useState(false);

  // Auto-confirm location when detected (if showMap is false)
  useEffect(() => {
    if (location && !showMap) {
      console.log("[LocationDetector] Auto-confirming location:", location);
      onLocationDetected(location.latitude, location.longitude);
    }
  }, [location, showMap]);

  const handleLocationConfirm = () => {
    if (location) {
      onLocationDetected(location.latitude, location.longitude);
      setShowFullMap(false);
    }
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-bold text-gray-700 mb-2">
        {label} <span className="text-red-500">*</span>
      </label>

      {/* Location Input Display */}
      <div className="relative">
        <div className="flex items-center gap-2 w-full p-3 border border-gray-300 rounded-lg bg-white">
          <MapPin className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Click 'Detect Location' to enable location services"
            value={detectedAddress || ""}
            readOnly
            className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
          />
          <button
            onClick={requestLocation}
            disabled={isLoading}
            className="px-4 py-1 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 disabled:bg-gray-400 flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Detecting...
              </>
            ) : (
              <>
                <MapPin className="w-4 h-4" />
                Detect Location
              </>
            )}
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-red-800 font-semibold text-sm">Error</p>
            <p className="text-red-700 text-sm">{error}</p>
          </div>
          <button
            onClick={clearError}
            className="ml-2 text-red-600 hover:text-red-700 font-semibold text-sm"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Map Display (Optional) */}
      {showFullMap && location && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="mb-3">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Confirm Location:
            </p>
            <p className="text-sm text-gray-600">
              {detectedAddress || `${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}`}
            </p>
          </div>
          
          {/* Map Embed */}
          <div className="w-full h-64 rounded-lg overflow-hidden mb-3">
            <iframe
              title="Location Map"
              width="100%"
              height="100%"
              frameBorder="0"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${location.longitude - 0.01},${location.latitude - 0.01},${location.longitude + 0.01},${location.latitude + 0.01}&layer=mapnik&marker=${location.latitude},${location.longitude}`}
            />
          </div>

          <button
            onClick={handleLocationConfirm}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700"
          >
            Use This Location
          </button>
        </div>
      )}

      {/* Location Coordinates (for reference) */}
      {location && !showFullMap && (
        <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-green-800 font-semibold text-sm">Location Captured</p>
            <p className="text-green-700 text-xs mt-1">
              Latitude: {location.latitude.toFixed(6)}<br />
              Longitude: {location.longitude.toFixed(6)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
