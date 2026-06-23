// ============================================
// ModuleCard.jsx
// One clickable card for one module.
// Receives "module" object + "onOpen" function as PROPS.
// ============================================

const colorClasses = [
  "mc-0", "mc-1", "mc-2", "mc-3", "mc-4", "mc-5", "mc-6", "mc-7",
];

function ModuleCard({ module, onOpen }) {
  const colorClass = colorClasses[module.id % colorClasses.length];
  const sessionCount = module.sessions.length;

  return (
    <div
      className={`module-card ${colorClass} ${!module.isActive ? "module-card-locked" : ""}`}
      onClick={() => module.isActive && onOpen(module.id)}
    >
      <div className="mod-num">{module.badge}</div>
      <div className="mod-title">{module.title}</div>
      <div className="mod-desc">{module.description}</div>
      <div className="mod-footer">
        <div className="mod-count">
          {module.isActive
            ? `${sessionCount} sessions`
            : "Locked"}
        </div>
        <div className="mod-arrow">{module.isActive ? "→" : "Locked"}</div>
      </div>
    </div>
  );
}

export default ModuleCard;
