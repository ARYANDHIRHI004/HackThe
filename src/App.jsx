import { Navigate, Route, Routes } from "react-router-dom";
import { ModeToggle } from "./components/ThemeToggler";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./Theme-provider";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import WelcomePage from "./pages/WelcomePage";
import SkyForecast from "./components/SkayForcast";
import AstronomyEvents from "./components/AstronomyEvents";
import AstrophotographyPlanner from "./components/AstrophotographyPlanner";
import Community from "./components/Community";
import SatelliteTracker from "./components/SatelliteTracker";
import LightPollutionAnalysis from "./components/LightPollutionAnalysis";
import useAuthStore from "./stores/useAuthStore";

function App() {

  const {authUser} = useAuthStore()

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="overflow-y-scroll no-scrollbar ">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={!authUser ? <WelcomePage /> : <Dashboard />} />
            <Route path="/sky-forcast" element={authUser ? <SkyForecast /> : <Navigate to={"/"}/>} />
            <Route path="/astronomy-events" element={authUser ? <AstronomyEvents /> : <Navigate to={"/"}/>} />
            <Route path="/astrophotography-planner" element={authUser ? <AstrophotographyPlanner /> : <Navigate to={"/"}/>} />
            <Route path="/community" element={authUser ? <Community /> : <Navigate to={"/"}/>} />
            <Route path="/satellite-tracker" element={authUser ? <SatelliteTracker /> : <Navigate to={"/"}/>} />
            <Route path="/light-pollution" element={authUser ? <LightPollutionAnalysis /> : <Navigate to={"/"}/>} />
          </Route>

        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
