import { useState, useEffect } from "react";
import {
  Star,
  Telescope,
  Moon,
  Compass,
  ChevronRight,
  Sparkles,
  Globe,
} from "lucide-react";

const Star3D = ({ style, size, delay }) => (
  <div
    className="absolute rounded-full bg-white"
    style={{
      ...style,
      width: size,
      height: size,
      animation: `twinkle ${1.5 + Math.random() * 2}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      boxShadow: `0 0 ${size * 2}px ${size / 2}px rgba(255,255,255,0.5)`,
    }}
  />
);

const ShootingStar = ({ delay }) => (
  <div
    className="absolute w-1 h-1 bg-white rounded-full"
    style={{
      top: `${Math.random() * 40}%`,
      left: `${Math.random() * 100}%`,
      animation: `shooting 3s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      boxShadow: "0 0 6px 2px rgba(255,255,255,0.6)",
    }}
  />
);

const Nebula = ({ className }) => (
  <div
    className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
    style={{ animation: "pulse 8s ease-in-out infinite" }}
  />
);

export default function WelcomePage() {
  const [stars, setStars] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const generated = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
    }));
    setStars(generated);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <div
      className="min-h-screen bg-linear-to-b from-slate-950 via-indigo-950 to-slate-950 overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes shooting {
          0% { transform: translateX(0) translateY(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateX(300px) translateY(300px); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
      `}</style>

      {/* Stars */}
      {stars.map((star) => (
        <Star3D
          key={star.id}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            transform: `translate(${mousePos.x * -20}px, ${
              mousePos.y * -20
            }px)`,
          }}
          size={star.size}
          delay={star.delay}
        />
      ))}

      {/* Shooting Stars */}
      <ShootingStar delay={0} />
      <ShootingStar delay={4} />
      <ShootingStar delay={8} />

      {/* Nebulae */}
      <Nebula className="w-96 h-96 bg-purple-600 -top-20 -left-20" />
      <Nebula className="w-80 h-80 bg-blue-600 top-1/3 right-0" />
      <Nebula className="w-72 h-72 bg-pink-600 bottom-20 left-1/4" />

      {/* Hero Section */}
      <section className=" mt-20 relative z-10 flex flex-col items-center justify-center px-8 py-20 text-center">
        {/* Animated Planet */}
        <div
          className="relative mb-8"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          <div className="w-32 h-32 rounded-full bg-linear-to-br from-indigo-400 via-purple-500 to-pink-500 shadow-2xl shadow-purple-500/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute w-full h-3 bg-purple-300/30 top-1/2 -translate-y-1/2 rotate-12" />
          </div>
          {/* Orbiting Moon */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ animation: "orbit 10s linear infinite" }}
          >
            <div className="w-6 h-6 rounded-full bg-linear-to-br from-slate-300 to-slate-400 shadow-lg" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Discover the
          <span className="block bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Universe
          </span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mb-10">
          Embark on a journey through the cosmos. Track celestial events,
          explore distant galaxies, and connect with stargazers around the
          world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 rounded-full bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition flex items-center gap-2 shadow-lg shadow-purple-500/30">
            Start Exploring <ChevronRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 rounded-full bg-white/5 backdrop-blur border border-white/20 text-white hover:bg-white/10 transition">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Telescope,
              title: "Live Sky Map",
              desc: "Real-time constellation tracking with AR integration",
            },
            {
              icon: Moon,
              title: "Lunar Phases",
              desc: "Track moon cycles and plan your observations",
            },
            {
              icon: Globe,
              title: "Global Events",
              desc: "Never miss an eclipse, meteor shower, or alignment",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-purple-500/50 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-8 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10M+", label: "Stars Catalogued" },
            { value: "500K", label: "Active Users" },
            { value: "1,200", label: "Observatories" },
            { value: "99.9%", label: "Accuracy" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl md:text-4xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-8 py-20">
        <div className="max-w-3xl mx-auto text-center p-10 rounded-3xl bg-linear-to-br from-purple-900/50 to-blue-900/50 backdrop-blur border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to explore the cosmos?
          </h2>
          <p className="text-slate-400 mb-8">
            Join thousands of astronomers and space enthusiasts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 w-full sm:w-72"
            />
            <button className="px-8 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-white font-semibold">Celestia</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2025 Celestia. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
