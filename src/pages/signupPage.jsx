import { useState, useEffect } from "react";
import {
  Sparkles,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ChevronRight,
  Star,
  Telescope,
  Moon,
  Globe,
  Bell,
  Settings,
  Search,
  Plus,
  TrendingUp,
} from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

const StarField = ({ count = 100 }) => {
  const [stars] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }))
  );

  return stars.map((star) => (
    <div
      key={star.id}
      className="absolute rounded-full bg-white star-particle"
      style={{
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: star.size,
        height: star.size,
        animationDelay: `${star.delay}s`,
        boxShadow: `0 0 ${star.size * 2}px ${
          star.size / 2
        }px rgba(255,255,255,0.5)`,
      }}
    />
  ));
};

const Nebula = ({ className }) => (
  <div
    className={`absolute rounded-full blur-3xl opacity-20 nebula ${className}`}
  />
);

const SignUpPage = ({ onTransition }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative">
      <Nebula className="w-96 h-96 bg-purple-600 -top-20 -left-20" />
      <Nebula className="w-80 h-80 bg-blue-600 top-1/3 right-0" />
      <Nebula className="w-72 h-72 bg-pink-600 bottom-20 left-1/4" />

      <div className="signup-card w-full max-w-md relative z-10">
        <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-purple-600/10 via-transparent to-blue-600/10" />

          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">Celestia</span>
            </div>

            <h2 className="text-3xl font-bold text-white text-center mb-2">
              Join the Cosmos
            </h2>
            <p className="text-slate-400 text-center mb-8">
              Begin your journey through the stars
            </p>

            <div className="space-y-4">
              <div className="form-field relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-purple-400 transition" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                />
              </div>

              <div className="form-field relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-purple-400 transition" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                />
              </div>

              <div className="form-field relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-purple-400 transition" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full pl-12 pr-12 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              <button
                onClick={onTransition}
                className="submit-btn w-full py-4 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 mt-6"
                style={{ boxShadow: "0 0 30px rgba(168,85,247,0.4)" }}
              >
                Launch Into Space <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-slate-500 text-sm">or continue with</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="social-btns mt-6 flex gap-4">
              <button className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>
              <button className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </button>
            </div>

            <p className="text-center text-slate-500 text-sm mt-8">
              Already exploring?{" "}
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 transition"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => (
  <div className="min-h-screen p-6 dashboard-content">
    <Nebula className="w-96 h-96 bg-purple-600 -top-20 -right-20" />
    <Nebula className="w-80 h-80 bg-blue-600 bottom-0 left-0" />

    <header className="flex items-center justify-between mb-8 relative z-10">
      <div className="flex items-center gap-3">
        <Sparkles className="w-8 h-8 text-purple-400" />
        <span className="text-xl font-bold text-white">Celestia</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search galaxies..."
            className="pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-purple-500 w-64"
          />
        </div>
        <button className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition">
          <Settings className="w-5 h-5" />
        </button>
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold">
          A
        </div>
      </div>
    </header>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
      <div className="lg:col-span-2 space-y-6">
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">
              Welcome back, Astronaut!
            </h2>
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">
              Pro Explorer
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                icon: Star,
                label: "Stars Tracked",
                value: "2,847",
                trend: "+12%",
              },
              {
                icon: Telescope,
                label: "Observations",
                value: "156",
                trend: "+8%",
              },
              { icon: Moon, label: "Moon Phases", value: "23", trend: "+3%" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <stat.icon className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <div className="flex items-center justify-between">
                  <p className="text-slate-500 text-sm">{stat.label}</p>
                  <span className="text-green-400 text-xs flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> {stat.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">
              Upcoming Celestial Events
            </h3>
            <button className="text-purple-400 text-sm hover:text-purple-300 transition">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {[
              {
                event: "Perseid Meteor Shower",
                date: "Aug 12-13",
                status: "upcoming",
              },
              {
                event: "Full Moon - Sturgeon Moon",
                date: "Aug 19",
                status: "soon",
              },
              {
                event: "Saturn Opposition",
                date: "Aug 27",
                status: "upcoming",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-600/30 to-blue-600/30 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{item.event}</p>
                    <p className="text-slate-500 text-sm">{item.date}</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    item.status === "soon"
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Telescope, label: "New Observation" },
              { icon: Star, label: "Add Star" },
              { icon: Moon, label: "Moon Calendar" },
              { icon: Globe, label: "Sky Map" },
            ].map((action, i) => (
              <button
                key={i}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition flex flex-col items-center gap-2 group"
              >
                <action.icon className="w-6 h-6 text-slate-400 group-hover:text-purple-400 transition" />
                <span className="text-slate-400 text-sm group-hover:text-white transition">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-linear-to-br from-purple-600/20 to-blue-600/20 backdrop-blur border border-purple-500/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-purple-500/30 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Go Premium</h3>
              <p className="text-slate-400 text-sm">Unlock all features</p>
            </div>
          </div>
          <ul className="space-y-2 mb-4">
            {["Unlimited observations", "HD Sky maps", "AI predictions"].map(
              (f, i) => (
                <li
                  key={i}
                  className="text-slate-300 text-sm flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  {f}
                </li>
              )
            )}
          </ul>
          <button className="w-full py-3 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function SignupPage() {
  const [phase, setPhase] = useState("signup"); // signup, transition, dashboard
  const [transitionStep, setTransitionStep] = useState(0);
  const Navigate = useNavigate()

  const startTransition = () => {
    setPhase("transition");
    setTransitionStep(1);
    setTimeout(() => setTransitionStep(2), 800);
    setTimeout(() => setTransitionStep(3), 1600);
    setTimeout(() => setTransitionStep(4), 2400);
    setTimeout(() => {
      Navigate("/login")
      setPhase("dashboard");
      setTransitionStep(5);
    }, 3200);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-indigo-950 to-slate-950 overflow-hidden relative">
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .star-particle { animation: twinkle 2s ease-in-out infinite; }
        .nebula { animation: pulse 8s ease-in-out infinite; }
        @keyframes pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.1); }
        }

        /* Black Hole Transition */
        .blackhole-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          pointer-events: none;
        }
        
        .blackhole-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }

        /* Step 1: Swirl appears */
        .step-1 .blackhole-center {
          width: 0;
          height: 0;
          background: radial-gradient(circle, #000 0%, transparent 70%);
          box-shadow: 0 0 0 0 rgba(139,92,246,0.8);
          animation: swirlAppear 0.8s ease-out forwards;
        }
        @keyframes swirlAppear {
          0% { width: 0; height: 0; box-shadow: 0 0 0 0 rgba(139,92,246,0.8); }
          100% { width: 200px; height: 200px; box-shadow: 0 0 100px 50px rgba(139,92,246,0.6), 0 0 200px 100px rgba(59,130,246,0.4); }
        }

        .accretion-disk {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          opacity: 0;
        }
        .step-1 .accretion-disk {
          animation: diskAppear 0.8s ease-out forwards;
        }
        @keyframes diskAppear {
          0% { width: 0; height: 0; opacity: 0; }
          100% { width: 300px; height: 300px; opacity: 1; }
        }
        .accretion-disk::before {
          content: '';
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, transparent, rgba(168,85,247,0.6), rgba(59,130,246,0.4), transparent, rgba(236,72,153,0.3), transparent);
          animation: spin 2s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Step 2: Elements get sucked in */
        .step-2 .signup-card {
          animation: suckIn 0.8s ease-in forwards;
        }
        .step-2 .star-particle {
          animation: starsSuckIn 0.8s ease-in forwards !important;
        }
        .step-2 .nebula {
          animation: nebulaSuckIn 0.8s ease-in forwards !important;
        }
        @keyframes suckIn {
          0% { transform: scale(1) rotate(0deg); opacity: 1; }
          100% { transform: scale(0) rotate(720deg); opacity: 0; }
        }
        @keyframes starsSuckIn {
          0% { opacity: 1; }
          100% { 
            transform: translate(calc(50vw - 50%), calc(50vh - 50%)) scale(0);
            opacity: 0;
          }
        }
        @keyframes nebulaSuckIn {
          0% { opacity: 0.2; }
          100% { 
            transform: translate(calc(50vw - 50%), calc(50vh - 50%)) scale(0);
            opacity: 0;
          }
        }

        .step-2 .blackhole-center {
          width: 200px;
          height: 200px;
          animation: blackholeGrow 0.8s ease-in forwards;
          box-shadow: 0 0 100px 50px rgba(139,92,246,0.6), 0 0 200px 100px rgba(59,130,246,0.4);
        }
        @keyframes blackholeGrow {
          0% { width: 200px; height: 200px; }
          100% { width: 400px; height: 400px; box-shadow: 0 0 150px 75px rgba(139,92,246,0.8), 0 0 300px 150px rgba(59,130,246,0.6); }
        }

        /* Step 3: Screen collapses to black */
        .step-3 .blackhole-center {
          width: 400px;
          height: 400px;
          animation: collapse 0.8s ease-in forwards;
        }
        @keyframes collapse {
          0% { width: 400px; height: 400px; background: radial-gradient(circle, #000 0%, transparent 70%); }
          100% { width: 300vw; height: 300vh; background: radial-gradient(circle, #000 30%, #000 100%); }
        }
        .step-3 .accretion-disk {
          animation: diskFade 0.8s ease-in forwards;
        }
        @keyframes diskFade {
          to { opacity: 0; transform: translate(-50%, -50%) scale(3); }
        }

        /* Step 4: Dashboard emerges */
        .step-4 .blackhole-center {
          width: 300vw;
          height: 300vh;
          background: #000;
          animation: emerge 0.8s ease-out forwards;
        }
        @keyframes emerge {
          0% { background: #000; }
          100% { background: transparent; width: 0; height: 0; }
        }

        .dashboard-content {
          opacity: 0;
          transform: scale(0.8);
        }
        .step-5 .dashboard-content {
          animation: dashboardEmerge 1s ease-out forwards;
        }
        @keyframes dashboardEmerge {
          0% { opacity: 0; transform: scale(0.5) rotate(-10deg); }
          50% { transform: scale(1.05) rotate(2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        /* Warp speed lines during emergence */
        .warp-lines {
          position: absolute;
          inset: 0;
          overflow: hidden;
          opacity: 0;
        }
        .step-4 .warp-lines, .step-5 .warp-lines {
          animation: warpFade 1.5s ease-out forwards;
        }
        @keyframes warpFade {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        .warp-line {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 2px;
          height: 0;
          background: linear-gradient(to bottom, transparent, rgba(168,85,247,0.8), rgba(59,130,246,0.6), transparent);
        }
        .step-4 .warp-line {
          animation: warpStretch 0.8s ease-out forwards;
        }
        @keyframes warpStretch {
          0% { height: 0; }
          100% { height: 200vh; }
        }
      `}</style>

      <StarField count={120} />

      {phase === "signup" && <SignUpPage onTransition={startTransition} />}
      {phase === "dashboard" && <Dashboard />}

      {/* Black Hole Transition Overlay */}
      <div className={`blackhole-overlay step-${transitionStep}`}>
        <div className="blackhole-center">
          <div className="absolute inset-0 rounded-full bg-black" />
        </div>
        <div className="accretion-disk" />

        {/* Warp Speed Lines */}
        <div className="warp-lines">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="warp-line"
              style={{
                transform: `rotate(${i * 12}deg)`,
                animationDelay:` ${i * 0.02}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
