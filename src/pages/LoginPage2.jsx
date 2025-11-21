import useAuthStore from '../stores/useAuthStore';
import { useState, useEffect } from 'react';

export default function CosmicLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phase, setPhase] = useState('idle'); // idle, meteors, warp, flash, dashboard
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const {loginUser} = useAuthStore()

  useEffect(() => {
    const newStars = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      twinkleDelay: Math.random() * 3,
      angle: 0,
      distance: 0
    }));
    newStars.forEach(star => {
      const dx = star.x - 50;
      const dy = star.y - 50;
      star.angle = Math.atan2(dy, dx);
      star.distance = Math.sqrt(dx * dx + dy * dy);
    });
    setStars(newStars);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Phase 2: Warp speed
    setTimeout(() => setPhase('warp'), 1000);
    
    // Phase 3: Flash
    setTimeout(() => setPhase('flash'), 4000);
    
    // Phase 4: Dashboard
    setTimeout(() => {
        setPhase('dashboard')
        loginUser()
    }, 4500);
  };

  const reset = () => {
    setPhase('idle');
    setMeteors([]);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Deep space gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: phase === 'flash' 
            ? 'white' 
            : 'radial-gradient(ellipse at center, #0a0a20 0%, #000008 50%, #000000 100%)',
          transition: phase === 'flash' ? 'background 0.2s ease-in' : 'background 0.3s ease-out'
        }}
      />

      {/* Stars */}
      {phase !== 'dashboard' && stars.map(star => {
        const isWarping = phase === 'warp';
        const warpLength = isWarping ? star.distance * 8 : 0;
        
        return (
          <div
            key={star.id}
            className="absolute bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: isWarping ? `${warpLength}px` : `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: isWarping ? '0 50% 50% 0' : '50%',
              opacity: phase === 'flash' ? 0 : star.opacity,
              background: isWarping 
                ? `linear-gradient(90deg, white, rgba(150,200,255,0.8), transparent)`
                : 'white',
              transform: isWarping 
                ? `rotate(${star.angle}rad) translateX(${star.distance * 5}px)`
                : 'none',
              transformOrigin: 'left center',
              transition: isWarping 
                ? 'all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                : 'opacity 0.3s',
              animation: phase === 'idle' ? `twinkle 2s ease-in-out infinite ${star.twinkleDelay}s` : 'none',
              boxShadow: isWarping ? '0 0 10px rgba(150,200,255,0.8)' : 'none'
            }}
          />
        );
      })}

      {/* Nebula effects */}
      {phase !== 'dashboard' && phase !== 'flash' && (
        <>
          <div 
            className="absolute w-96 h-96 rounded-full opacity-30 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(138,43,226,0.5) 0%, transparent 70%)',
              filter: 'blur(60px)',
              top: '5%',
              right: '5%'
            }}
          />
          <div 
            className="absolute w-80 h-80 rounded-full opacity-25 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0,150,255,0.4) 0%, transparent 70%)',
              filter: 'blur(50px)',
              bottom: '10%',
              left: '0%'
            }}
          />
        </>
      )}

      {/* Meteors */}
      {(phase === 'meteors' || phase === 'warp') && meteors.map(meteor => (
        <div
          key={meteor.id}
          className="absolute"
          style={{
            left: `${meteor.startX}%`,
            top: '-10%',
            animation: `meteorFall ${2 / meteor.speed}s linear forwards`,
            animationDelay: `${meteor.delay}s`
          }}
        >
          {/* Meteor head */}
          <div 
            className="relative"
            style={{
              width: `${meteor.size * 4}px`,
              height: `${meteor.size * 4}px`,
              background: 'radial-gradient(circle, #fff 0%, #ffa500 40%, #ff4500 70%, transparent 100%)',
              borderRadius: '50%',
              boxShadow: '0 0 20px #ff6600, 0 0 40px #ff4500, 0 0 60px #ff2200'
            }}
          />
          {/* Meteor tail */}
          <div
            style={{
              position: 'absolute',
              top: `-${meteor.size * 25}px`,
              left: '50%',
              transform: 'translateX(-50%)',
              width: `${meteor.size * 2}px`,
              height: `${meteor.size * 30}px`,
              background: 'linear-gradient(to bottom, transparent, rgba(255,150,50,0.3), rgba(255,100,0,0.6), #ff6600)',
              borderRadius: '50% 50% 0 0',
              filter: 'blur(2px)'
            }}
          />
          {/* Sparks */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: '3px',
                height: '3px',
                background: '#ffaa00',
                top: `-${10 + i * 8}px`,
                left: `${50 + (Math.random() - 0.5) * 30}%`,
                opacity: Math.random(),
                animation: `sparkle 0.3s ease-out infinite ${i * 0.1}s`
              }}
            />
          ))}
        </div>
      ))}

      {/* Warp tunnel effect */}
      {phase === 'warp' && (
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ animation: 'tunnelPulse 0.5s ease-in-out infinite' }}
        >
          <div 
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(100,150,255,0.3) 0%, rgba(138,43,226,0.2) 30%, transparent 70%)',
              boxShadow: '0 0 100px rgba(100,150,255,0.5), inset 0 0 100px rgba(138,43,226,0.3)',
              animation: 'warpHole 2s ease-in forwards'
            }}
          />
        </div>
      )}

      {/* Speed lines during warp */}
      {phase === 'warp' && [...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            width: '300px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), white, rgba(255,255,255,0.6), transparent)',
            transform: `rotate(${i * 12}deg)`,
            transformOrigin: 'center',
            animation: `speedLine 1s ease-in infinite ${i * 0.05}s`
          }}
        />
      ))}

      {/* Login Card */}
      {phase !== 'dashboard' && (
        <div 
          className={`relative z-10 p-8 rounded-2xl backdrop-blur-xl transition-all duration-700`}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 0 80px rgba(100,100,255,0.05)',
            transform: phase === 'warp' ? 'scale(0) rotate(180deg)' : phase === 'meteors' ? 'scale(0.98)' : 'scale(1)',
            opacity: phase === 'warp' || phase === 'flash' ? 0 : 1,
            transition: 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
          }}
        >
          {/* Orbiting moon */}
          <div 
            className="absolute -top-4 -right-4 w-10 h-10 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #e0e0e0 0%, #a0a0a0 50%, #606060 100%)',
              boxShadow: '0 0 15px rgba(255,255,255,0.2), inset -3px -3px 10px rgba(0,0,0,0.4)',
              animation: 'float 4s ease-in-out infinite'
            }}
          >
            <div className="absolute w-2 h-2 rounded-full bg-gray-500 opacity-50" style={{ top: '20%', left: '30%' }} />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-gray-600 opacity-40" style={{ top: '50%', left: '60%' }} />
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div 
              className="text-5xl mb-3"
              style={{ animation: 'float 3s ease-in-out infinite' }}
            >
              🚀
            </div>
            <h1 
              className="text-2xl font-bold text-white mb-1"
              style={{ textShadow: '0 0 30px rgba(100,150,255,0.6)' }}
            >
              Space Station
            </h1>
            <p className="text-gray-400 text-sm tracking-wider">MISSION CONTROL ACCESS</p>
          </div>

          {/* Form */}
          <div className="space-y-5 w-72">
            <div className="relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Pilot ID"
                className="w-full px-4 py-3 pl-10 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">👨‍🚀</span>
            </div>
            
            <div className="relative group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Access Code"
                className="w-full px-4 py-3 pl-10 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">🔑</span>
            </div>

            <button
              onClick={handleLogin}
              disabled={phase !== 'idle'}
              className="w-full py-3.5 rounded-xl font-bold text-white relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50"
              style={{
                background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #2563eb 100%)',
                boxShadow: '0 4px 20px rgba(79,70,229,0.5), 0 0 40px rgba(124,58,237,0.2)'
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                INITIATE LAUNCH
                <span className="text-lg group-hover:animate-bounce">🌟</span>
              </span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs tracking-wider">
              NEW RECRUIT? <span className="text-blue-400 cursor-pointer hover:text-blue-300">REQUEST ACCESS</span>
            </p>
          </div>
        </div>
      )}

      {/* Dashboard */}
      {phase === 'dashboard' && (
        <div 
          className="relative z-10 w-full max-w-4xl p-8"
          style={{ animation: 'fadeInScale 0.8s ease-out forwards' }}
        >
          <div 
            className="rounded-3xl p-8 backdrop-blur-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.9) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 25px 80px rgba(0,0,0,0.5)'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">Welcome, Commander 👨‍🚀</h1>
                <p className="text-gray-400">Stardate 2847.5 • All systems operational</p>
              </div>
              <button 
                onClick={reset}
                className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                Logout
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Distance Traveled', value: '4.2M ly', icon: '🌌', color: 'from-purple-500 to-blue-500' },
                { label: 'Missions Complete', value: '247', icon: '🎯', color: 'from-green-500 to-emerald-500' },
                { label: 'Crew Members', value: '12', icon: '👥', color: 'from-orange-500 to-yellow-500' },
                { label: 'Fuel Status', value: '87%', icon: '⚡', color: 'from-cyan-500 to-blue-500' }
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="p-4 rounded-xl bg-white/5 border border-white/10"
                  style={{ animation: `slideUp 0.5s ease-out forwards ${i * 0.1}s`, opacity: 0 }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className={`text-2xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-4">
              {['🗺️ Star Map', '📡 Communications', '🛠️ Ship Systems'].map((action, i) => (
                <button
                  key={i}
                  className="p-4 rounded-xl bg-linear-to-r from-indigo-600/20 to-purple-600/20 border border-white/10 text-white hover:from-indigo-600/30 hover:to-purple-600/30 transition-all hover:scale-105"
                  style={{ animation: `slideUp 0.5s ease-out forwards ${0.4 + i * 0.1}s`, opacity: 0 }}
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes meteorFall {
          0% { transform: translateY(0) rotate(15deg); opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(120vh) rotate(15deg); opacity: 0; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes warpHole {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.5); opacity: 1; }
          100% { transform: scale(20); opacity: 0; }
        }
        @keyframes speedLine {
          0% { opacity: 0; transform: rotate(inherit) scaleX(0.3); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: rotate(inherit) scaleX(2); }
        }
        @keyframes tunnelPulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}