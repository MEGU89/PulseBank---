"use client";

import { useEffect, useState } from "react";
import { MapPin, Phone, AlertCircle, CheckCircle, Droplet, Heart } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), { ssr: false });

export default function HospitalRequestsMap({
  hospitalRequests,
  donorLocation,
}: {
  hospitalRequests: any[];
  donorLocation?: { lat: number; lng: number } | null;
}) {
  const [filteredRequests, setFilteredRequests] = useState<any[]>([]);
  const [selectedHospital, setSelectedHospital] = useState<string | null>(null);
  const [hospitalGroups, setHospitalGroups] = useState<{ [key: string]: any[] }>({});
  const [loading, setLoading] = useState(false);

  // Haversine formula to calculate distance
  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number => {
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
    return Math.round(R * c * 10) / 10;
  };

  // Filter hospital requests by distance when donor location is available
  useEffect(() => {
    if (donorLocation && hospitalRequests && hospitalRequests.length > 0) {
      console.log("[HospitalRequestsMap] Received requests:", hospitalRequests);
      const requestsWithDistance = hospitalRequests
        .map((request) => {
          if (
            request.location &&
            request.location.latitude &&
            request.location.longitude
          ) {
            const distance = calculateDistance(
              donorLocation.lat,
              donorLocation.lng,
              request.location.latitude,
              request.location.longitude
            );
            return { ...request, distance: Math.round(distance * 10) / 10 };
          }
          return { ...request, distance: null };
        })
        .filter(
          (r): r is any =>
            r !== null && (r.distance === null || r.distance <= 20)
        )
        .sort((a, b) => {
          if (a.distance === null) return 1;
          if (b.distance === null) return -1;
          return a.distance - b.distance;
        });

      setFilteredRequests(requestsWithDistance);

      // Group requests by hospital name
      const grouped = requestsWithDistance.reduce((acc: any, request: any) => {
        const hospitalName = request.hospital || "Hospital";
        if (!acc[hospitalName]) {
          acc[hospitalName] = [];
        }
        acc[hospitalName].push(request);
        return acc;
      }, {});

      setHospitalGroups(grouped);
      console.log("[HospitalRequestsMap] Grouped by hospital:", Object.keys(grouped));
    }
  }, [donorLocation, hospitalRequests]);

  const mapRequests =
    filteredRequests.length > 0
      ? filteredRequests
          .filter((r) => r.location && r.location.latitude && r.location.longitude)
          .map((r) => ({
            location: r.location,
            name: r.hospital || "Hospital",
            notes: `${r.unitsNeeded || "?"} units — ${r.bloodType || "?"}${r.recipientName ? ` (${r.recipientName})` : ""}`,
          }))
      : [];

  // Get unique hospitals sorted by distance
  const sortedHospitals = Object.keys(hospitalGroups)
    .map((name) => {
      const requests = hospitalGroups[name];
      const firstRequest = requests[0];
      return {
        name,
        distance: firstRequest.distance,
        requestCount: requests.length,
        phone: firstRequest.phone,
        address: firstRequest.location?.address,
      };
    })
    .sort((a, b) => {
      if (a.distance === null) return 1;
      if (b.distance === null) return -1;
      return (a.distance || 0) - (b.distance || 0);
    });

  return (
    <div className="space-y-6 bg-white rounded-2xl shadow-xl p-8 border-2 border-red-200">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Droplet className="w-8 h-8 text-red-600 fill-red-600" />
        <h2 className="text-3xl font-bold text-red-700">Nearby Blood Requests</h2>
      </div>

      {/* Map Section */}
      {mapRequests.length > 0 && (
        <div className="rounded-2xl overflow-hidden shadow-lg h-96 border-2 border-red-100 mb-8">
          <LeafletMap
            hospitals={mapRequests}
            activeDonors={[]}
            currentLocation={donorLocation}
          />
        </div>
      )}

      {/* Hospitals List */}
      {sortedHospitals.length > 0 ? (
        <div className="space-y-4">
          <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-600">
            <p className="text-xs font-bold text-red-700 uppercase tracking-wide">🏥 Select Hospital to View All Requests</p>
            <p className="text-sm text-gray-600 mt-2">{sortedHospitals.length} hospitals found within 0-20 km</p>
          </div>

          {/* Hospital List - Click to expand */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedHospitals.map((hospital, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedHospital(selectedHospital === hospital.name ? null : hospital.name)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border-2 ${
                  selectedHospital === hospital.name
                    ? "bg-red-100 border-red-600 shadow-lg"
                    : "bg-gradient-to-r from-white to-red-50 border-red-200 hover:border-red-400 hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-800 text-sm line-clamp-2 flex-1">{hospital.name}</h3>
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ml-2">
                    {hospital.distance?.toFixed(1) || "0"} km
                  </span>
                </div>
                
                <div className="space-y-1 text-xs text-gray-600 mb-2">
                  {hospital.phone && (
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-red-500" />
                      <span className="font-semibold">{hospital.phone}</span>
                    </div>
                  )}
                  {hospital.address && (
                    <div className="flex items-start gap-1">
                      <MapPin className="w-3 h-3 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{hospital.address}</span>
                    </div>
                  )}
                </div>

                <div className="inline-block bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {hospital.requestCount} request{hospital.requestCount > 1 ? 's' : ''}
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : donorLocation ? (
        <div className="bg-blue-50 rounded-2xl p-12 text-center border-2 border-blue-200">
          <Heart className="w-16 h-16 text-blue-300 mx-auto mb-4" />
          <p className="text-gray-600 font-medium">No hospital requests found</p>
          <p className="text-sm text-gray-500 mt-2">Check back later for new blood requests</p>
        </div>
      ) : (
        <div className="bg-blue-50 rounded-2xl p-12 text-center border-2 border-blue-200">
          <MapPin className="w-16 h-16 text-blue-300 mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Share your location to see nearby requests</p>
        </div>
      )}

      {/* Selected Hospital - All Requests */}
      {selectedHospital && hospitalGroups[selectedHospital] && (
        <div className="mt-8 pt-8 border-t-4 border-red-300">
          <h3 className="text-2xl font-bold text-red-700 mb-2 flex items-center gap-2">
            <span className="text-3xl">📍</span>
            {selectedHospital}
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Showing {hospitalGroups[selectedHospital].length} total request(s) - Hospital ({hospitalGroups[selectedHospital].filter((r: any) => !r.isRecipientRequest).length}) & Recipient ({hospitalGroups[selectedHospital].filter((r: any) => r.isRecipientRequest).length}) requests
          </p>

          <div className="space-y-4">
            {hospitalGroups[selectedHospital].map((request: any, idx: number) => (
              <div
                key={idx}
                className={`border-2 rounded-xl p-6 hover:shadow-lg transition-all ${
                  request.isRecipientRequest
                    ? "bg-gradient-to-r from-white to-purple-50 border-purple-200"
                    : "bg-gradient-to-r from-white to-blue-50 border-blue-200"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {/* Request Info */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      {request.isRecipientRequest ? (
                        <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          RE-{request._id?.substring(0, 6).toUpperCase()}
                        </span>
                      ) : (
                        <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          HRE-{request._id?.substring(0, 6).toUpperCase()}
                        </span>
                      )}
                      <span className="text-sm font-semibold text-gray-700">
                        {request.bloodType} • {request.unitsNeeded} units
                      </span>
                    </div>

                    {request.recipientName && (
                      <div className="bg-purple-50 rounded-lg p-2 border-l-2 border-purple-600 mb-3">
                        <p className="text-xs text-gray-600 font-bold">PATIENT NAME</p>
                        <p className="text-sm font-semibold text-purple-700">{request.recipientName}</p>
                      </div>
                    )}

                    <div className="text-sm space-y-1 text-gray-700">
                      {request.phone && (
                        <p><strong>Phone:</strong> {request.phone}</p>
                      )}
                      {request.urgency && (
                        <p><strong>Urgency:</strong> <span className="text-orange-600 font-bold">{request.urgency}</span></p>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3 justify-center">
                    <Link
                      href={`/donor/schedule-donation?requestId=${request._id}&hospital=${encodeURIComponent(
                        request.hospital || ""
                      )}&units=${request.unitsNeeded}&bloodType=${encodeURIComponent(request.bloodType || "")}`}
                      className="block"
                    >
                      <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Confirm & Schedule
                      </button>
                    </Link>
                    <button
                      onClick={async () => {
                        try {
                          const res = await fetch(`http://localhost:5000/request/${request._id}/confirm`, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              action: "Rejected",
                              confirmedBy: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "{}").id : null,
                              notes: "Request rejected by donor"
                            })
                          });
                          const data = await res.json();
                          if (data.success) {
                            alert("❌ Request rejected successfully");
                            setFilteredRequests((prev) => prev.filter((r: any) => r._id !== request._id));
                          } else {
                            alert("Error: " + (data.message || "Unknown error"));
                          }
                        } catch (err) {
                          alert("Error: " + (err instanceof Error ? err.message : "Unknown error"));
                        }
                      }}
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4" />
                      Reject
                    </button>
                  </div>
                </div>

                {request.location?.address && (
                  <div className="text-sm text-gray-600 flex items-start gap-2 pt-3 border-t border-red-200">
                    <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{request.location.address}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
