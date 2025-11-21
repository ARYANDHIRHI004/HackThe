import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function SkyForecast() {
  const [tab, setTab] = useState("hourly");

  // --- Dummy data (Replace with API data later) ---
  const hourlyData = [
    { time: "6 PM", cloud: 18, visibility: 92 },
    { time: "7 PM", cloud: 22, visibility: 88 },
    { time: "8 PM", cloud: 10, visibility: 95 },
    { time: "9 PM", cloud: 5, visibility: 98 },
    { time: "10 PM", cloud: 3, visibility: 99 },
  ];

  const weeklyData = [
    { time: "Mon", cloud: 40, visibility: 75 },
    { time: "Tue", cloud: 22, visibility: 88 },
    { time: "Wed", cloud: 10, visibility: 95 },
    { time: "Thu", cloud: 18, visibility: 92 },
    { time: "Fri", cloud: 35, visibility: 80 },
    { time: "Sat", cloud: 8, visibility: 97 },
    { time: "Sun", cloud: 15, visibility: 90 },
  ];

  const chartData = tab === "hourly" ? hourlyData : weeklyData;

  return (
    <div className="w-full p-6 mt-20 min-h-screen text-white">
      {/* Page Title */}
      <h1 className=" science-gothic text-4xl font-bold mb-6 text-cyan-300"> Sky Forecast 🌌</h1>

      {/* Tab Switch */}
      <div className="flex space-x-4 mb-6 text-[14px]">
        <button
          className={`px-4 py-2 rounded-lg transition ${
            tab === "hourly" ? "bg-cyan-600" : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setTab("hourly")}
        >
          Hourly Forecast
        </button>

        <button
          className={`px-4 py-2 rounded-lg transition ${
            tab === "weekly" ? "bg-cyan-600" : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setTab("weekly")}
        >
          Weekly Forecast
        </button>
      </div>

      {/* Forecast Chart */}

      {/* Hourly Forecast Section */}
      {tab === "hourly" && (
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            {hourlyData.map((h, i) => (
              <div
                key={i}
                className="bg-gray-800 p-4 rounded-xl shadow-lg border border-cyan-800 hover:scale-101 mt-2 transition"
              >
                <h3 className="text-xl font-semibold text-cyan-300">
                  {h.time}
                </h3>
                <p className="mt-2">☁ Cloud Cover: {h.cloud}%</p>
                <p>✨ Visibility Score: {h.visibility}%</p>
                <p>🌙 Moon Illumination: {h.moon}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-800/60 backdrop-blur-xl border border-cyan-900 rounded-xl p-4 mb-10 col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">
              📈 {tab === "hourly" ? "Hourly" : "Weekly"} Forecast Chart
            </h2>

            <div className="w-full h-160">
              <ResponsiveContainer>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="time" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      background: "#0f172a",
                      border: "1px solid #475569",
                      borderRadius: "10px",
                    }}
                    labelStyle={{ color: "#22d3ee" }}
                  />
                  <Legend />

                  {/* Cloud Line */}
                  <Line
                    type="monotone"
                    dataKey="cloud"
                    stroke="#a855f7"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    name="Cloud Cover (%)"
                  />

                  {/* Visibility Line */}
                  <Line
                    type="monotone"
                    dataKey="visibility"
                    stroke="#22d3ee"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    name="Visibility (%)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* Weekly Forecast Section */}
      {tab === "weekly" && (
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            {weeklyData.map((d, i) => (
            <div
              key={i}
              className="bg-gray-800 p-4 rounded-xl mt-2 shadow-lg border border-purple-800 hover:scale-101 transition"
            >
              <h3 className="text-xl font-semibold text-purple-300">
                {d.time}
              </h3>
              <p className="mt-2">☁ Avg Cloud: {d.cloud}%</p>
              <p>✨ Visibility: {d.visibility}%</p>
            </div>
          ))}
          </div>
          <div className="bg-gray-800/60 backdrop-blur-xl border border-cyan-900 rounded-xl p-4 mb-10 col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">
              📈 {tab === "hourly" ? "Hourly" : "Weekly"} Forecast Chart
            </h2>

            <div className="w-full h-160">
              <ResponsiveContainer>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="time" stroke="#94a3b8" />
                  <YAxis  />
                  <Tooltip
                    contentStyle={{
                      background: "#0f172a",
                      border: "1px solid #475569",
                      borderRadius: "10px",
                    }}
                    labelStyle={{ color: "#22d3ee" }}
                  />
                  <Legend />

                  {/* Cloud Line */}
                  <Line
                    type="monotone"
                    dataKey="cloud"
                    stroke="#a855f7"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    name="Cloud Cover (%)"
                  />

                  {/* Visibility Line */}
                  <Line
                    type="monotone"
                    dataKey="visibility"
                    stroke="#22d3ee"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    name="Visibility (%)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
