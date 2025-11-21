import React, { useState } from "react";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";

export default function LightPollutionAnalysis() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState(null);

  // Dummy data (replace with API)
  const sampleData = {
    bortle: 4,
    skyQuality: "21.2 mag/arcsec²",
    brightness: "1.05 mcd/m²",
    className: "Rural/Suburban Transition",
  };

  // Heatmap sample data (lat, lng, intensity)
  const heatPoints = [
    [21.2514, 81.6296, 0.9], // Raipur
    [21.1904, 81.2849, 0.7], // Naya Raipur
    [22.0797, 82.1566, 0.4], // Bilaspur
    [21.1800, 81.3000, 0.6],
    [21.0500, 81.0000, 0.3],
  ];

  const handleSearch = () => {
    setTimeout(() => {
      setData(sampleData);
    }, 500);
  };

  return (
    <div className="min-h-screen p-8 bg-linear-to-b from-black via-gray-900 to-black text-white">

      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-cyan-300 mb-6">
        🌃 Light Pollution Analysis
      </h1>

      {/* Search Input Section */}
      <div className="bg-gray-800/50 p-6 rounded-xl border border-cyan-800 backdrop-blur-md mb-8 max-w-xl">
        <label className="block text-lg font-semibold mb-2">
          Enter Location (City / Coordinates)
        </label>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="e.g., Raipur, Chhattisgarh"
            className="w-full px-4 py-2 rounded-lg bg-black/40 border border-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="px-5 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* Interactive Heatmap */}
        <div className="bg-black/40 p-6 rounded-xl border border-purple-700 shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            🔥 Light Pollution Heatmap
          </h2>

          <div className="w-full h-80 rounded-lg overflow-hidden border border-gray-700 shadow-inner">
            <MapContainer
              center={[21.2514, 81.6296]}
              zoom={7}
              className="h-full w-full"
            >
              {/* Dark Base Map Tiles */}
              <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=EhDOfjPI1QyObTfa2Q7r"
                    />

              {/* Heatmap-like circles */}
              {heatPoints.map((pt, i) => (
                <CircleMarker
                  key={i}
                  center={[pt[0], pt[1]]}
                  radius={20 * pt[2]}
                  pathOptions={{
                    color: "rgba(255,0,0,0.6)",
                    fillColor: "rgba(255,80,0,0.5)",
                    fillOpacity: 0.5,
                  }}
                />
              ))}
            </MapContainer>
          </div>

          <p className="mt-4 text-gray-300 text-sm">
            *Interactive heatmap showing artificial sky brightness based on sample data.
          </p>
        </div>

        {/* Data & Bortle Info */}
        <div className="bg-black/40 p-6 rounded-xl border border-cyan-700 shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
            📊 Pollution Data
          </h2>

          {!data ? (
            <p className="text-gray-400">Enter a location to view light pollution data.</p>
          ) : (
            <div className="space-y-4">

              <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-700">
                <p className="text-lg">
                  🌌 <span className="font-bold text-cyan-300">Bortle Class:</span> {data.bortle}
                </p>
                <p>
                  🜁 <span className="font-semibold text-purple-300">Sky Quality:</span>{" "}
                  {data.skyQuality}
                </p>
                <p>
                  💡 <span className="font-semibold text-yellow-300">Brightness:</span>{" "}
                  {data.brightness}
                </p>
                <p className="text-gray-300 text-sm italic">
                  ({data.className})
                </p>
              </div>

              <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">
                  🌙 Bortle Scale Meaning
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  <li>Bortle 1–2: Excellent dark sky</li>
                  <li>Bortle 3–4: Rural sky</li>
                  <li>Bortle 5–6: Suburban sky</li>
                  <li>Bortle 7–9: Bright urban sky</li>
                </ul>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}