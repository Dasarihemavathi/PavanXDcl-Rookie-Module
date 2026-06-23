// ============================================
// App.jsx
// The MAIN component. This is where the "brain" of
// the app lives — it decides what to show using useState.
// ============================================

import { useState } from "react";
import { modules, introVideo } from "./data/moduleData";

import NavigationBar from "./components/NavigationBar";
import HomeHeroSection from "./components/HomeHeroSection";
import ProgressStatsBar from "./components/ProgressStatsBar";
import ModuleCardGrid from "./components/ModuleCardGrid";
import ModuleDetailPage from "./components/ModuleDetailPage";

import "./App.css";

function App() {
  // useState keeps track of WHICH module is currently open.
  // null  => we are on the home page (showing all module cards)
  // 0,1,2.. => we are inside that module's detail page
  const [openModuleId, setOpenModuleId] = useState(null);

  // Find the full module object that matches the open id.
  const openModule = modules.find((m) => m.id === openModuleId);

  return (
    <div className="app">
      <NavigationBar />

      {/* Conditional rendering: home page OR module detail page */}
      {openModule ? (
        <ModuleDetailPage
          module={openModule}
          onBack={() => setOpenModuleId(null)}
        />
      ) : (
        <>
          <HomeHeroSection introVideoUrl={introVideo} />
          <ProgressStatsBar />
          <ModuleCardGrid
            modules={modules}
            onOpenModule={(id) => setOpenModuleId(id)}
          />
        </>
      )}
    </div>
  );
}

export default App;
