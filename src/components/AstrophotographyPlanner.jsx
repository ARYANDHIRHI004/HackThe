import React, { useState } from "react";

export default function AstrophotographyPlanner() {
  const [location, setLocation] = useState("Raipur");

  const data = {
    Raipur: { visibility: 85, clouds: 18, pollution: "Moderate", bestTime: "9:00 PM – 1:00 AM", moon: "22% Waxing" },
    Bilaspur: { visibility: 91, clouds: 12, pollution: "Low", bestTime: "8:30 PM – 12:30 AM", moon: "22% Waxing" },
    Durg: { visibility: 76, clouds: 25, pollution: "High", bestTime: "10:00 PM – 2:00 AM", moon: "22% Waxing" },
    Jagdalpur: { visibility: 93, clouds: 9, pollution: "Very Low", bestTime: "7:45 PM – 11:30 PM", moon: "22% Waxing" },
  };

  const info = data[location];

  return (
    <div className="w-full min-h-screen bg-linear-to-b from-black via-gray-900 to-black text-white p-6">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-300 drop-shadow-lg">
        📸 Astrophotography Planner
      </h1>

      {/* Location Selector */}
      <div className="mb-6">
        <label className="mr-3 text-lg font-medium">Select Location:</label>

        <select
          className="px-4 py-2 bg-gray-800 border border-cyan-400 rounded-xl text-white shadow-md focus:outline-none"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          {Object.keys(data).map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Main Summary Card */}
        <div className="bg-gray-900/60 border border-cyan-700 rounded-2xl p-6 shadow-xl backdrop-blur-lg">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
            🌌 Sky Summary – {location}
          </h2>

          <p className="text-gray-300 text-lg mb-2">
            🌠 <span className="font-semibold">Visibility Score:</span>{" "}
            <span className="text-green-300">{info.visibility}%</span>
          </p>

          <p className="text-gray-300 text-lg mb-2">
            ☁ <span className="font-semibold">Cloud Cover:</span>{" "}
            <span className="text-blue-300">{info.clouds}%</span>
          </p>

          <p className="text-gray-300 text-lg mb-2">
            💡 <span className="font-semibold">Light Pollution:</span>{" "}
            <span className="text-yellow-300">{info.pollution}</span>
          </p>

          <p className="text-gray-300 text-lg mb-2">
            🌙 <span className="font-semibold">Moon Illumination:</span>{" "}
            <span className="text-purple-300">{info.moon}</span>
          </p>

          <p className="text-gray-300 text-lg mt-4">
            🕒 <span className="font-semibold text-cyan-300">Best Time:</span>{" "}
            <span className="text-green-300">{info.bestTime}</span>
          </p>
        </div>

        {/* Recommendation Card */}
        <div className="bg-gray-900/60 border border-purple-700 rounded-2xl p-6 shadow-xl backdrop-blur-lg">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            🔭 Recommended Plan
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>
              ✔ Choose higher elevation areas for clearer shots.
            </li>
            <li>
              ✔ Avoid strong moonlight for Milky Way photos.
            </li>
            <li>
              ✔ Carry tripod + long exposure lens (18–55mm works too).
            </li>
            <li>
              ✔ Check star visibility using apps like Stellarium before shooting.
            </li>
            <li>
              ✔ Lower cloud cover & pollution = better astrophotography.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}