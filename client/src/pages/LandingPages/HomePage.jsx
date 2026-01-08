import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../../article-content';

function HomePage() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Discovery Website</p>
          <h1>Events that matters.</h1>
          <p className="lead">
           This website helps you connect with events and connect with the community.
          </p>
          <div className="hero-actions">
            <Link to="/articles" className="button-link primary">
              Browse articles
            </Link>
            <Link to="/about" className="button-link secondary">
              About the team
            </Link>
          </div>
          <div className="stats">
            <div className="stat">
              <strong>{articles.length}+</strong>
              <span>Events Featured</span>
            </div>
            <div className="stat">
              <strong>Community</strong>
              <span>Driven</span>
            </div>
            <div className="stat">
              <strong>Local</strong>
              <span>Connections</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-panel">
            <img
              src="/images/community.png"
              alt="Community people together illustration"
            />
            <p className="muted">
              Explore local events, meet new people, and be part of something meaningful.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="section-heading">
          <div>
            <p className="eyebrow">Highlights</p>
            <h2>What you get inside.</h2>
          </div>
          <span className="muted">Clean patterns, real-world snippets.</span>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Discover Events</h3>
            <p>
              Find events that match your interests and values.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Connect Locally</h3>
            <p>
              Meet people and engage with your local community.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Stay involved</h3>
            <p>
              Never miss events that matter to you.
            </p>
          </div>
        </div>
      </section>

      <section className="articles-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Articles</p>
            <h2>Latest reads.</h2>
          </div>
          <Link to="/articles" className="button-link secondary">
            View all
          </Link>
        </div>
        <div className="article-preview-grid">
          {featuredArticles.map((article) => (
            <div key={article.name} className="article-preview">
              <div className="article-meta">
                <span className="pill">Events</span>
                <span className="muted">{article.content[0].substring(0, 30)}...</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.content[0].substring(0, 150)}...</p>
              <Link to={`/articles/${article.name}`} className="button-link secondary">
                Read article
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
