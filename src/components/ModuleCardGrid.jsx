// ============================================
// ModuleCardGrid.jsx
// Takes the full "modules" array as a PROP
// and uses .map() to render one ModuleCard per module.
// ============================================

import ModuleCard from "./ModuleCard";

function ModuleCardGrid({ modules, onOpenModule }) {
  return (
    <div className="modules-section">
      <div className="section-label">All modules — click to open</div>
      <div className="modules-grid">
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
            onOpen={onOpenModule}
          />
        ))}
      </div>
    </div>
  );
}

export default ModuleCardGrid;
