import React, { useState } from "react";

export default function AstronomyEvents() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // 🌠 EVENTS FOR ALL 12 MONTHS
  const events = {
    January: [
      { date: "3–4", title: "Quadrantids Meteor Shower Peak", icon: "🌠" },
      { date: "15", title: "Moon–Saturn Conjunction", icon: "🪐" },
      { date: "25", title: "Full Wolf Moon", icon: "🌕" },
    ],
    February: [
      { date: "9", title: "New Moon", icon: "🌑" },
      { date: "20", title: "Venus at Greatest Brightness", icon: "✨" },
      { date: "27", title: "Snow Moon", icon: "🌕" },
    ],
    March: [
      { date: "10", title: "Total Solar Eclipse", icon: "🌞" },
      { date: "22", title: "Mercury at Greatest Elongation", icon: "☿" },
      { date: "25", title: "Penumbral Lunar Eclipse", icon: "🌕" },
    ],
    April: [
      { date: "8", title: "Total Solar Eclipse", icon: "🌞" },
      { date: "22–23", title: "Lyrids Meteor Shower", icon: "🌠" },
      { date: "26", title: "Pink Moon", icon: "🌕" },
    ],
    May: [
      { date: "6–7", title: "Eta Aquarids Meteor Shower", icon: "🌠" },
      { date: "23", title: "Flower Moon", icon: "🌕" },
      { date: "28", title: "Mars–Moon Conjunction", icon: "🪐" },
    ],
    June: [
      { date: "3", title: "Saturn–Moon Conjunction", icon: "🪐" },
      { date: "20", title: "Summer Solstice", icon: "🌞" },
      { date: "22", title: "Strawberry Moon", icon: "🌕" },
    ],
    July: [
      { date: "5", title: "Earth at Aphelion", icon: "🌍" },
      { date: "17", title: "Buck Moon", icon: "🌕" },
      { date: "28–29", title: "Delta Aquarids Meteor Shower", icon: "🌠" },
    ],
    August: [
      { date: "12–13", title: "Perseids Meteor Shower Peak", icon: "🌠" },
      { date: "19", title: "Sturgeon Moon", icon: "🌕" },
      { date: "29", title: "Moon–Jupiter Conjunction", icon: "🪐" },
    ],
    September: [
      { date: "8", title: "Saturn at Opposition", icon: "🪐" },
      { date: "17", title: "Harvest Moon", icon: "🌕" },
      { date: "23", title: "Equinox", icon: "☀" },
    ],
    October: [
      { date: "2", title: "Annular Solar Eclipse", icon: "🌞" },
      { date: "8–9", title: "Draconids Meteor Shower", icon: "🌠" },
      { date: "17", title: "Hunter’s Moon", icon: "🌕" },
    ],
    November: [
      { date: "4–5", title: "South Taurids Meteor Shower", icon: "🌠" },
      { date: "17–18", title: "Leonids Meteor Shower", icon: "🌠" },
      { date: "24", title: "Beaver Moon", icon: "🌕" },
    ],
    December: [
      { date: "4", title: "Moon–Venus Conjunction", icon: "🪐" },
      { date: "13–14", title: "Geminids Meteor Shower Peak", icon: "🌠" },
      { date: "27", title: "Cold Moon", icon: "🌕" },
    ],
  };

  // Calendar Logic
  const getDaysInMonth = (monthIndex) => {
    const year = new Date().getFullYear();
    return new Date(year, monthIndex + 1, 0).getDate();
  };

  const daysCount = getDaysInMonth(selectedMonth);
  const daysArray = Array.from({ length: daysCount }, (_, i) => i + 1);
  const currentMonthName = months[selectedMonth];

  return (
    <div className="w-full mt-20 min-h-screen p-6 text-white bg-cover bg-center bg-fixed bg-no-repeat">

      {/* Title */}
      <h1 className="science-gothic text-4xl  font-bold mb-6 text-cyan-300 drop-shadow-lg">
         Astronomy Events & Monthly Calendar 🌌
      </h1>

      <div className="grid md:grid-cols-2 gap-6 ">

        {/* EVENTS LIST */}
        <div className="bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-cyan-800 shadow-lg h-[80vh]">
          {/* Month Selector */}
          <div className="mb-4">
            <label className="font-semibold text-lg">Select Month:</label>
            <select
              className="ml-3 px-4 py-2 bg-gray-800 border border-cyan-300 rounded-lg"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(Number(e.target.value))}
            >
              {months.map((m, idx) => (
                <option key={idx} value={idx}>{m}</option>
              ))}
            </select>
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-purple-300">
            ✨ Events in {currentMonthName}
          </h2>

          <div className="space-y-4">
            {events[currentMonthName]?.map((event, i) => (
              <div
                key={i}
                className="p-4 bg-gray-900/70 rounded-xl shadow border border-purple-700 hover:scale-105 transition"
              >
                <h3 className="text-xl font-bold flex items-center gap-2 text-purple-300">
                  {event.icon} {event.title}
                </h3>
                <p className="mt-1 text-cyan-300">📅 Date: {event.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CALENDAR */}
        <div className="bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-cyan-800 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-cyan-300">
            📆 {currentMonthName} Calendar
          </h2>

          <div className="grid grid-cols-7 gap-3 text-2xl text-center h-[70vh]">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-cyan-200 font-semibold">{day}</div>
            ))}

            {Array(new Date(new Date().getFullYear(), selectedMonth, 1).getDay())
              .fill(null)
              .map((_, index) => (
                <div key={`empty-${index}`} />
              ))}

            {daysArray.map((day, index) => {
              const eventForDay = events[currentMonthName]?.find((ev) =>
                ev.date.includes(day.toString())
              );

              return (
                <div
                  key={index}
                  className={`p-3 rounded-xl border ${
                    eventForDay
                      ? "bg-purple-800/70 border-purple-400 text-white font-bold shadow-lg"
                      : "bg-gray-900/60 border-gray-700"
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}