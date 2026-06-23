// ============================================
// ProgressStatsBar.jsx
// Shows "8 Modules · 50+ Sessions" type stats.
// Static for now — could be made dynamic later.
// ============================================

function ProgressStatsBar() {
  const stats = [
    { number: "8", label: "Modules" },
    { number: "50+", label: "Sessions" },
    { number: "40+", label: "LeetCode Problems" },
    { number: "3", label: "Languages supported" },
  ];

  return (
    <div className="stats-bar">
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <div className="stat-num">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default ProgressStatsBar;
