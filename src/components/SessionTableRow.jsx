// ============================================
// SessionTableRow.jsx
// One row of the sessions table (e.g. "Pattern-1").
// Receives a single "session" object as a PROP.
// ============================================

// Plain text labels for each link type — shown before the link text.
// No icons/emoji used here, to keep things simple and avoid
// copy-paste encoding issues.
const linkTypeLabels = {
  video: "Watch:",
  notes: "Notes:",
  leet: "LeetCode:",
  hack: "HackerRank:",
  geek: "GeeksforGeeks:",
};

const importanceLabels = {
  extreme: "Extreme",
  critical: "Critical",
  core: "Core Concept",
  high: "High",
  medium: "Medium",
  low: "Low",
  important: "Important",
};

function LinkPill({ link }) {
  const prefix = linkTypeLabels[link.type] || "";
  return (
    <a href={link.url} target="_blank" rel="noreferrer" className="resource-link">
      <span className="resource-link-prefix">{prefix}</span> {link.label}
    </a>
  );
}

function SessionTableRow({ session }) {
  return (
    <tr>
      <td>
        <span className="session-id">{session.id}</span>
      </td>
      <td>
        <div className="session-content">{session.content}</div>
      </td>
      <td>
        <div className="resource-links">
          {session.resources.map((link) => (
            <LinkPill link={link} key={link.label} />
          ))}
        </div>
      </td>
      <td>
        <div className="resource-links">
          {session.practice.length > 0 ? (
            session.practice.map((link) => (
              <LinkPill link={link} key={link.label} />
            ))
          ) : (
            <span className="no-practice">—</span>
          )}
        </div>
      </td>
      <td>
        <span className={`imp imp-${session.importance}`}>
          {importanceLabels[session.importance] || session.importance}
        </span>
        {session.importanceNote && (
          <span className="imp-sub">{session.importanceNote}</span>
        )}
      </td>
    </tr>
  );
}

export default SessionTableRow;
