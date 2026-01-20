"use client";

import { useEffect, useState } from "react";
import { CheckCircle, XCircle, Clock, Phone, User2 } from "lucide-react";

export default function HospitalSchedulesPage() {
  const [schedules, setSchedules] = useState([]);
  const [hospitalName, setHospitalName] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setHospitalName(JSON.parse(user).fullName);
    }
  }, []);

  const fetchSchedules = async () => {
    if (!hospitalName) return;

    const res = await fetch(
      `http://localhost:5000/hospital/schedules?hospital=${hospitalName}`
    );
    const data = await res.json();

    setSchedules(data.schedules || []);
  };

  useEffect(() => {
    if (hospitalName) fetchSchedules();
  }, [hospitalName]);

  const updateStatus = async (id: string, action: string) => {
    const res = await fetch("http://localhost:5000/schedule/update-status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scheduleId: id, action }),
    });

    const data = await res.json();
    if (data.success) {
      alert(`Schedule ${action.toUpperCase()}`);
      fetchSchedules();
    }
  };

  return (
    <main className="min-h-screen p-10 bg-red-50">
      <h1 className="text-3xl font-bold text-red-700 mb-6">
        Scheduled Donations – {hospitalName}
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {schedules.map((s: any) => (
          <div key={s._id} className="bg-white p-6 rounded-lg shadow border">
            <h2 className="text-xl font-bold flex items-center gap-2 text-red-700">
              <User2 /> {s.donorName}
            </h2>

            <p className="flex items-center gap-2 mt-2"><Clock /> {s.date} {s.time}</p>
            <p className="flex items-center gap-2"><Phone /> {s.contact}</p>

            <p className="mt-3 font-semibold">Status: {s.status.toUpperCase()}</p>

            {s.status === "pending" && (
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => updateStatus(s._id, "accepted")}
                  className="bg-green-600 px-4 py-2 text-white rounded flex items-center gap-2"
                >
                  <CheckCircle /> Accept
                </button>

                <button
                  onClick={() => updateStatus(s._id, "rejected")}
                  className="bg-red-600 px-4 py-2 text-white rounded flex items-center gap-2"
                >
                  <XCircle /> Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}


