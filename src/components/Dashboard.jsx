import { useState } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import Map from "./Map";
import SideBar from "./SideBar";

const trendData = [
  { day: "Mon", visibility: 75 },
  { day: "Tue", visibility: 82 },
  { day: "Wed", visibility: 78 },
  { day: "Thu", visibility: 88 },
  { day: "Fri", visibility: 85 },
  { day: "Sat", visibility: 92 },
  { day: "Sun", visibility: 87 },
];

const locations = [
  {
    id: 1,
    name: "Ambikapur Field",
    starVis: 92,
    cloudCover: 18,
    lightPollution: 12,
    score: 87,
  },
  {
    id: 2,
    name: "Raipur",
    starVis: 92,
    cloudCover: 12,
    lightPollution: 18,
    elevation: "24.3m - 255m",
    score: 68,
  },
  {
    id: 3,
    name: "Bilaspur",
    starVis: 92,
    cloudCover: 12,
    lightPollution: 18,
    elevation: "18.235m - 912.5m",
    score: 72,
  },
];

const recommendations = [
  { rank: 1, name: "Ambikapur", condition: "Clear sky", score: 87, note: "Clear sky" },
  { rank: 2, name: "Bilaspur", condition: "Low light pollution", score: 72, note: "Low clouds" },
  { rank: 3, name: "Raipur", condition: "Low Clouds", score: 68, note: "Low clouds" },
];

export default function NightSkyMonitoring() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <div className=" mt-20 min-h-screen pt-10 p-4 relative overflow-hidden ">

      {/* ⭐ STAR FIELD BACKGROUND */}
      <div className="star-field absolute inset-0 pointer-events-none"></div>

      <header className="text-center mb-6 relative z-10 science-gothic my-5">
        <h1 className="text-5xl font-bold drop-shadow-lg text-chart-2">NIGHT-SKY MONITORING — CHHATTISGARH</h1>
        <p className="opacity-80 text-xl ">
          Real-time star visibility · cloud cover · light pollution
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 relative z-10">
        
        {/* MAP */}
        <div className="lg:col-span-2 relative rounded-xl bg-white/5 backdrop-blur border border-gray-600">
          <Map />
        </div>

        {/* DETAILS */}
        <div className="rounded-xl p-4 bg-[#4343432c] backdrop-blur-2xl  border border-gray-600 shadow-lg">
          <h3 className="font-semibold mb-3 text-xl">DETAILS</h3>

          <div className="flex flex-col items-center mb-4">
            <div className="w-24 h-24 rounded-full border-4 border-teal-400 flex items-center justify-center">
              <div className="text-center">
                <span className="font-bold text-3xl">{selectedLocation.score}</span>
                <p className="text-sm opacity-80">Excellent</p>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-lg">
            <div className="flex justify-between">
              <span>Star Visibility</span>
              <span>{selectedLocation.starVis}%</span>
            </div>
            <div className="flex justify-between">
              <span>Cloud Cover</span>
              <span>{selectedLocation.cloudCover}%</span>
            </div>
            <div className="flex justify-between">
              <span>Light Pollution</span>
              <span>{selectedLocation.lightPollution}%</span>
            </div>
          </div>

          <h4 className="font-semibold mt-4 mb-2">VISIBILITY TREND</h4>

          <div className="h-20">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <Area type="monotone" dataKey="visibility" stroke="#5eadb0" fill="#5eadb045" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* LOCATION CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 relative z-10">
        {locations.slice(1).map((loc) => (
          <div
            key={loc.id}
            className="rounded-xl p-4 bg-white/5 backdrop-blur border border-gray-600 shadow-lg"
          >
            <h3 className="font-semibold text-xl">{loc.name}</h3>
            <p className="text-xs opacity-60 mb-3">Elevation: {loc.elevation}</p>

            <div className="flex justify-between text-center mb-3">
              <div>
                <span>⭐</span>
                <p className="text-xs opacity-60">Star Visibility</p>
                <p className="font-bold">{loc.starVis}</p>
              </div>
              <div>
                <span>☁</span>
                <p className="text-xs opacity-60">Cloud Cover</p>
                <p className="font-bold">{loc.cloudCover}</p>
              </div>
              <div>
                <span>🌃</span>
                <p className="text-xs opacity-60">Light Pollution</p>
                <p className="font-bold">{loc.lightPollution}</p>
              </div>
            </div>

            <button className="w-full py-2 rounded-lg bg-teal-500/20 hover:bg-teal-500/40 transition">
              VIEW
            </button>
          </div>
        ))}
         {/* Visibility Trend Card */}
        <div className="rounded-xl p-4 bg-white/5 backdrop-blur border border-gray-600 shadow-lg">
          <h3 className="font-semibold mb-3 text-2xl">VISIBILITY TREND</h3>
          <div className="h-24">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <Line
                  type="monotone"
                  dataKey="visibility"
                  stroke="#5eadb0"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-2 mt-3">
            <button
              className={`flex-1 py-2 rounded-lg `}
            >
              COMPARE
            </button>
            <button
              className={`flex-1 py-2 rounded-lg `}
            >
              SHARE
            </button>
          </div>
        </div>
      </div>
     



      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 relative z-10">

        {/* RECOMMENDATIONS */}
        <div className="rounded-xl p-4 bg-white/5 backdrop-blur border border-gray-600 shadow-lg">
          <h3 className="font-semibold mb-3 text-xl">DAILY RECOMMENDATIONS</h3>

          <div className="space-y-3">
            {recommendations.map((rec) => (
              <div key={rec.rank} className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  #{rec.rank}
                </span>
                <div className="flex-1">
                  <p className="font-semibold">{rec.name}</p>
                  <p className="text-xs opacity-60">{rec.condition}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">Score: {rec.score}</p>
                  <p className="text-xs opacity-60">{rec.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK COMPARISON */}
        <div className="rounded-xl p-4 bg-white/5 backdrop-blur border border-gray-600 shadow-lg">
          <h3 className="font-semibold mb-3 text-xl">QUICK COMPARISON</h3>

          <div className="flex gap-3">
            <button className="flex-1 py-2 rounded-lg bg-teal-600/20 border border-teal-400">
              COMPARE
            </button>
            <button className="flex-1 py-2 rounded-lg bg-white/10 flex items-center justify-center gap-2">
              ↗ SHARE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}