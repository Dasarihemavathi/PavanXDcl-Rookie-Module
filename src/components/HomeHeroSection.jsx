// ============================================
// HomeHeroSection.jsx
// Top section of the home page: title + must-watch video link.
// Receives the intro video URL as a PROP from App.jsx.
// ============================================

function HomeHeroSection({ introVideoUrl }) {
  return (
    <div className="hero">
      <div className="hero-eyebrow">PavanX Pro DSA · Warm Up Series</div>
      <h1>
        Beginner + <span>Rookie</span> DSA Module
      </h1>
      <p>
        If you are an absolute beginner in Programming and DSA, start here.
        Complete each module in order for the best results.
      </p>
      <a
        href={introVideoUrl}
        className="must-watch"
        target="_blank"
        rel="noreferrer"
      >
        <div className="play-icon">Watch</div>
        <div>
          <div className="must-watch-label">Must watch before starting</div>
          <div>Watch intro video — PavanX Pro DSA Sheet</div>
        </div>
      </a>
    </div>
  );
}

export default HomeHeroSection;
