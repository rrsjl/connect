import React from 'react';
import { Link, useParams } from 'react-router-dom';
import articles from '../../article-content';
import NotFoundPage from '../NotFoundPage';

function ArticlePage() {
  const { name } = useParams();

  // Find the article from local data
  const article = articles.find((a) => a.name === name);

  if (!article) return <NotFoundPage />;

  const contentArray = Array.isArray(article.content) ? article.content : [article.content];

  // Estimate reading time
  const words = contentArray.join(' ').split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(2, Math.ceil(words / 70));

  return (
    <div className="page article-page">
      <div className="page-header">
        <p className="eyebrow">Article</p>
        <h1>{article.title}</h1>
        <div className="article-meta">
          <span className="pill">React</span>
          <span className="muted">{minutes} min read</span>
        </div>
        <p className="lead">{contentArray[0]}</p> {/* First paragraph as lead */}
      </div>

      <div className="article-body">
        {contentArray.slice(1).map((paragraph, idx) => (
          <p key={`${article.name}-${idx}`}>{paragraph}</p>
        ))}

        <div className="card callout">
          <h3>Want another angle?</h3>
          <p>
            Check out more articles to discover exciting events and community activities near you.
          </p>
          <Link to="/articles" className="button-link primary">
            Browse more articles
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;