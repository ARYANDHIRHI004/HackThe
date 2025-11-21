import React, { useEffect, useState } from "react";

export default function SatelliteTracker() {
  const [issData, setIssData] = useState(null);

  // Fetch ISS Live Location (Dummy API call)
  const fetchISSData = async () => {
    try {
      const res = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
      const data = await res.json();
      setIssData(data);
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  useEffect(() => {
    fetchISSData();
    const interval = setInterval(fetchISSData, 5000); // refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" mt-10 min-h-screen w-full p-8  bg-cover bg-center bg-no-repeat text-white">
      
      {/* Overlay */}
      <div className="bg-black/60 p-8 rounded-2xl backdrop-blur-xl">
        
        <h1 className="text-4xl font-bold text-cyan-300 mb-6">
          🛰 Real-Time Satellite & ISS Tracker
        </h1>

        <p className="text-gray-300 mb-8">
          Track the live location, speed & altitude of the International Space Station and other satellites.
        </p>

        {/* Layout Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* ISS Live Data Card */}
          <div className="bg-black/40 border border-cyan-900 rounded-xl p-6 shadow-xl hover:scale-[1.02] transition">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">
              🌍 ISS Live Location
            </h2>

            {!issData ? (
              <p className="text-gray-400">Fetching live ISS data...</p>
            ) : (
              <>
                <p>📡 <span className="text-cyan-300 font-bold">Latitude:</span> {issData.latitude}</p>
                <p>📡 <span className="text-cyan-300 font-bold">Longitude:</span> {issData.longitude}</p>
                <p>🛰 <span className="text-cyan-300 font-bold">Altitude:</span> {Math.round(issData.altitude)} km</p>
                <p>⚡ <span className="text-cyan-300 font-bold">Velocity:</span> {Math.round(issData.velocity)} km/h</p>

                <button
                  className="mt-6 px-5 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition"
                  onClick={fetchISSData}
                >
                  Refresh Data 🔄
                </button>
              </>
            )}
          </div>

          {/* Satellite Stats Section */}
          <div className="bg-black/40 border border-purple-900 rounded-xl p-6 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">
              ✨ Popular Satellites
            </h2>

            <div className="space-y-4">
              {[
                { name: "Hubble Space Telescope", type: "Telescope", alt: "540 km", speed: "7.5 km/s" },
                { name: "NOAA-20", type: "Weather", alt: "824 km", speed: "7.2 km/s" },
                { name: "Starlink-5532", type: "Internet", alt: "550 km", speed: "7.6 km/s" }
              ].map((sat, i) => (
                <div
                  key={i}
                  className="border border-purple-700 bg-black/30 rounded-lg p-4 hover:scale-[1.02] transition"
                >
                  <h3 className="text-lg font-bold text-purple-300">{sat.name}</h3>
                  <p className="text-gray-300">📎 Type: {sat.type}</p>
                  <p className="text-gray-300">🛰 Altitude: {sat.alt}</p>
                  <p className="text-gray-300">⚡ Speed: {sat.speed}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}