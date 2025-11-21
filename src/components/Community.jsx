import React from "react";

export default function Community() {
  const clubs = [
    {
      name: "AstroClub Durg",
      members: 60,
      location: "BIT Durg, Chhattisgarh",
      desc: "Saturn observation nights & meteor shower events.",
    },
    {
      name: "Raipur Astronomy Club",
      members: 120,
      location: "Raipur, Chhattisgarh",
      desc: "Weekend stargazing, astrophotography workshops & sky tours.",
    },
    {
      name: "Bilaspur Night Watchers",
      members: 85,
      location: "Bilaspur, Chhattisgarh",
      desc: "Deep-sky observation, telescope training, and night sky camps.",
    },
    {
      name: "Durg Stargazers Society",
      members: 60,
      location: "Durg, Chhattisgarh",
      desc: "Moon observation nights & meteor shower events.",
    },
    
  ];

  const events = [
    {
      title: "Aayam 2025",
      date: "21 Nov and 22 Nov 2025",
      place: "Bhilai Institute of Technology Durg, Chhattisgarh",
      tag: "Meteor Shower",
    },
    {
      title: "Leonid Meteor Shower Night",
      date: "25 Nov 2025",
      place: "Atal Nagar Observatory",
      tag: "Meteor Shower",
    },
    {
      title: "Astrophotography Workshop",
      date: "10 Dec 2025",
      place: "Raipur Science Center",
      tag: "Workshop",
    },
    {
      title: "Telescope Setup Bootcamp",
      date: "5 Jan 2026",
      place: "Bilaspur Stadium Ground",
      tag: "Training",
    },
  ];

  return (
    <div className="  min-h-screen mt-10 w-full px-6 py-10 bg-cover bg-center  text-white">
      {/* Overlay */}   
      <div className="backdrop-blur-md bg-black/60 p-6 rounded-2xl">

        {/* Heading */}
        <h1 className="science-gothic text-4xl font-bold mb-6 text-cyan-300 text-">
           Community Hub 🌠
        </h1>
        <p className="mb-10 text-xl text-gray-300">
          Connect with astronomy clubs, join events, and explore the night sky together.
        </p>

        {/* Layout: Clubs + Events */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Clubs Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">✨ Astronomy Clubs</h2>

            <div className="space-y-4">
              {clubs.map((c, i) => (
                <div
                  key={i}
                  className="border border-purple-700 bg-black/40 p-5 rounded-xl shadow-lg hover:scale-[1.02] transition"
                >
                  <h3 className="text-2xl font-bold text-cyan-300">{c.name}</h3>
                  <p className="text-xl text-gray-400">{c.location}</p>
                  <p className="mt-2 text-xl">{c.desc}</p>
                  <p className="mt-2 text-xl text-gray-300">👥 {c.members} Members</p>

                  <button className="mt-3 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
                    Join Club
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">📅 Upcoming Events</h2>

            <div className="space-y-4">
              {events.map((e, i) => (
                <div
                  key={i}
                  className="border border-cyan-700 bg-black/40 p-5 rounded-xl shadow-xl hover:scale-[1.02] transition"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-purple-300">{e.title}</h3>
                    <span className="px-3 py-1 bg-purple-700/40 rounded-full text-sm text-purple-200">
                      {e.tag}
                    </span>
                  </div>

                  <p className="mt-2 text-gray-300 text-xl">📅 {e.date}</p>
                  <p className="text-gray-300 text-xl">📍 {e.place}</p>

                  <button className="mt-3 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}