import React from 'react';

function AboutPage() {
  return (
    <div className="page">
      <div className="page-header">
        <p className="eyebrow">About</p>
        <h1>Welcome!</h1>
        <p className="lead">
          This website helps you find events that matter, connect with people, and engage with your community.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <div className="feature-icon">🔍</div>
          <h3>Discover Events</h3>
          <p>
            Find events that match your interests and values.
          </p>
        </div>
        <div className="about-card">
          <div className="feature-icon">🤝</div>
          <h3>Connect Locally</h3>
          <p>
            Meet people and engage with your local community.
          </p>
        </div>
        <div className="about-card">
          <div className="feature-icon">📅</div>
          <h3>Stay involved</h3>
          <p>
            Never miss events that matter to you.
          </p>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-row">
          <strong>2023</strong>
          <p>
            Website concept was designed to connect communities through events.
          </p>
        </div>
        <div className="timeline-row">
          <strong>2024</strong>
          <p>
            Beta version launched with local events discovery.
          </p>
        </div>
        <div className="timeline-row">
          <strong>Today</strong>
          <p>
            Fully live platform helping users discover and attend events they love.
          </p>
        </div>
      </div>

      <div className="cta-banner">
        <h3>Join the community!</h3>
        <p>
          Sign up now to never miss events that matter to you.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
