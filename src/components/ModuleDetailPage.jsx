// ============================================
// ModuleDetailPage.jsx
// Shows the full sessions table for ONE module.
// Receives "module" object + "onBack" function as PROPS.
// ============================================

import SessionTableRow from "./SessionTableRow";

function ModuleDetailPage({ module, onBack }) {
  return (
    <div className="module-page">
      <div className="mod-header">
        <button className="back-btn" onClick={onBack}>
          ← Back to all modules
        </button>
        <div className="mod-header-top">
          <div className="mod-header-badge">{module.badge}</div>
        </div>
        <h2>{module.title}</h2>
        {module.note && <p className="mod-note">{module.note}</p>}
      </div>

      {module.fullNotesLink && (
        <div className="notes-banner">
          <a href={module.fullNotesLink} target="_blank" rel="noreferrer">
            Full Pattern Notes →
          </a>
        </div>
      )}

      <div className="sessions-wrap">
        <table className="sessions-table">
          <thead>
            <tr>
              <th>Session</th>
              <th>Content</th>
              <th>Resources</th>
              <th>Practice</th>
              <th>Importance</th>
            </tr>
          </thead>
          <tbody>
            {module.sessions.map((session) => (
              <SessionTableRow session={session} key={session.id} />
            ))}
          </tbody>
        </table>

        {module.myNotesLink && (
          <div className="extra-links">
            <a href={module.myNotesLink} target="_blank" rel="noreferrer">
              My Notes for this module →
            </a>
            <a href={module.practiceFirstLink} target="_blank" rel="noreferrer">
              Practice before moving forward →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModuleDetailPage;
