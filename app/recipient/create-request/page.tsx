"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { REQUEST } from "@/lib/api-endpoints";
import { jwtDecode } from "jwt-decode";
import { ArrowLeft, Heart, Droplet } from "lucide-react";
import Link from "next/link";
import { LocationDetector } from "@/components/location-detector";

export default function RecipientCreateRequest() {
  const router = useRouter();

  const [recipientId, setRecipientId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hospitals, setHospitals] = useState<any[]>([]);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  const [form, setForm] = useState({
    bloodType: "O+",
    unitsNeeded: 1,
    urgency: "LOW",
    locationKm: 20,
    hospital: "",
    recipientName: "",
  });

  const [selectedHospitalData, setSelectedHospitalData] = useState<any>(null);

  // STEP 1 — Get recipient ID from JWT token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        if (decoded.role === "recipient") {
          setRecipientId(decoded.userId);
        }
      } catch (err) {
        console.error("Invalid token:", err);
      }
    }
    // Fallback: if token missing or decode failed, try to read stored user object
    if (!token) {
      const stored = localStorage.getItem("user");
      if (stored) {
        try {
          const u = JSON.parse(stored);
          // backend stores user.id or user._id
          setRecipientId(u.id || u._id || null);
        } catch (e) {
          // ignore
        }
      }
    }
  }, []);

  // Handle location detection
  const handleLocationDetected = async (lat: number, lng: number) => {
    setLocation({ lat, lng });
    await fetchNearbyHospitals(lat, lng);
  };

  // Fetch nearby hospitals based on location
  const fetchNearbyHospitals = async (lat: number, lng: number) => {
    try {
      const res = await fetch("http://localhost:5000/hospital/all");
      const data = await res.json();
      const allHospitals = data.hospitals || [];

      // Filter hospitals within the specified radius
      const nearby = allHospitals.filter((h: any) => {
        if (!h.location || !h.location.latitude || !h.location.longitude) return false;
        const distance = calculateDistance(
          lat,
          lng,
          h.location.latitude,
          h.location.longitude
        );
        return distance <= form.locationKm;
      });

      setHospitals(nearby);
    } catch (err) {
      console.error("Error fetching hospitals:", err);
    }
  };

  // Calculate distance between two coordinates (Haversine formula)
  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 6371; // Radius of the Earth in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // Handle form input
  const updateForm = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "unitsNeeded" || name === "locationKm" ? Number(value) : value,
    }));

    // When hospital is selected, store the full hospital object
    if (name === "hospital" && value) {
      const selected = hospitals.find(
        (h: any) => (h.hospitalName || h.fullName || h.name) === value
      );
      setSelectedHospitalData(selected || null);
    }
  };

  // STEP 2 — Submit request to backend
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (!recipientId) {
      alert("Recipient ID not found. Please log in again.");
      setLoading(false);
      return;
    }

    const body = {
      ...form,
      requestedBy: recipientId,
      // mark this request as created by a recipient so dashboards can display it correctly
      isRecipientRequest: true,
      // Send to specific hospital selected by recipient
      destinationHospital: form.hospital,
      // Include the selected hospital's location (this is what shows on donor map)
      location: selectedHospitalData?.location || location,
      // Store hospital ID for reference
      hospitalId: selectedHospitalData?._id || selectedHospitalData?.id,
      // Store hospital data for frontend reference
      hospitalName: form.hospital,
      hospitalPhone: selectedHospitalData?.phone,
      hospitalAddress: selectedHospitalData?.location?.address,
    };

    try {
      const res = await fetch(REQUEST.addRequest, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to submit request.");
        setLoading(false);
        return;
      }

      alert("Blood request created successfully!");
      router.push("/recipient/dashboard");
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-red-50 to-white">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 shadow-lg">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <Link
            href="/recipient/dashboard"
            className="hover:bg-red-500 p-2 rounded-lg transition"
            title="Back to Dashboard"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Droplet className="w-8 h-8 fill-white" />
              <Heart className="w-6 h-6 fill-white" />
            </div>
            <h1 className="text-3xl font-bold">Create Blood Request</h1>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="max-w-2xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 space-y-6 border-l-4 border-red-600">

          {/* Recipient/Patient Name */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Recipient/Patient Name *
            </label>
            <input
              type="text"
              name="recipientName"
              value={form.recipientName}
              onChange={updateForm}
              required
              placeholder="Enter recipient or patient name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Location Sharing & Hospital Selection */}
          <LocationDetector 
            onLocationDetected={handleLocationDetected}
            label="Your Location"
            showMap={false}
          />

          {/* Hospital Name - Dropdown when location is shared */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Hospital Name {location && "*"}
            </label>
            {location && hospitals.length > 0 ? (
              <select
                name="hospital"
                value={form.hospital}
                onChange={updateForm}
                required={location !== null}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select a nearby hospital</option>
                {hospitals.map((h: any, i: number) => (
                  <option key={i} value={h.hospitalName || h.fullName || h.name || "Hospital"}>
                    {h.hospitalName || h.fullName || h.name || "Hospital"}
                  </option>
                ))}
              </select>
            ) : location && hospitals.length === 0 ? (
              <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-yellow-50">
                <p className="text-gray-600">No hospitals found nearby. Please try again or enter hospital name manually.</p>
              </div>
            ) : (
              <input
                type="text"
                name="hospital"
                value={form.hospital}
                onChange={updateForm}
                placeholder="Share location to find nearby hospitals or enter manually"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            )}
          </div>

          {/* Blood Type & Units in Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold text-gray-700 mb-2">Blood Type</label>
              <select
                name="bloodType"
                value={form.bloodType}
                onChange={updateForm}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                {["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"].map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">Units Needed</label>
              <input
                type="number"
                name="unitsNeeded"
                value={form.unitsNeeded}
                onChange={updateForm}
                min={1}
                max={10}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div>

          {/* Urgency Level Only */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Urgency Level</label>
            <select
              name="urgency"
              value={form.urgency}
              onChange={updateForm}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="LOW">Low</option>
              <option value="MODERATE">Moderate</option>
              <option value="HIGH">High</option>
              <option value="CRITICAL">Critical</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating..." : "Create Request"}
            </button>
            <Link
              href="/recipient/dashboard"
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-3 rounded-lg text-center transition"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

