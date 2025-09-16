import React, { useEffect, useState } from "react";

// haversine formula for distance in km
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
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
}

// estimate travel time in minutes based on avg speed
function estimateTravelTime(distanceKm, mode = "driving") {
  const speeds = { walking: 5, cycling: 15, driving: 60 }; // km/h
  const speed = speeds[mode] || speeds.driving;
  return (distanceKm / speed) * 60; // minutes
}

export default function ClosestUniversitiesPage({ universities }) {
  const [userLocation, setUserLocation] = useState(null);
  const [closest, setClosest] = useState([]);

  useEffect(() => {
    if (!universities || universities.length === 0) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserLocation({ lat: latitude, lng: longitude });

        const sorted = universities
          .map((uni) => {
            const distance = getDistance(latitude, longitude, uni.lat, uni.lng);
            return {
              ...uni,
              distance,
              walkingTime: estimateTravelTime(distance, "walking"),
              drivingTime: estimateTravelTime(distance, "driving"),
            };
          })
          .sort((a, b) => a.distance - b.distance)
          .slice(0, 3);

        setClosest(sorted);
      },
      (err) => {
        console.error("Error fetching location:", err);
      }
    );
  }, [universities]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-200 p-6 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">
        Closest Universities to You
      </h1>

      {!userLocation && (
        <p className="text-center text-gray-600">
          Please allow location access to see the closest universities.
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {closest.map((uni, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition p-6"
          >
            <h2 className="text-xl font-semibold mb-2">{uni.name}</h2>
            <p className="text-sm text-gray-600 mb-1">📍 {uni.location}</p>
            <p className="text-gray-700 mb-2">{uni.info}</p>

            <div className="mt-4 space-y-1 text-sm text-gray-700">
              <p>
                📏 Distance:{" "}
                <span className="font-medium">{uni.distance.toFixed(1)} km</span>
              </p>
              <p>
                🚶 Walking:{" "}
                <span className="font-medium">
                  ~{uni.walkingTime.toFixed(0)} min
                </span>
              </p>
              <p>
                🚗 Driving:{" "}
                <span className="font-medium">
                  ~{uni.drivingTime.toFixed(0)} min
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
