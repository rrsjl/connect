import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleList from '../../components/ArticleList';
import articles from '../../article-content'; // use local articles

function ArticleListPage() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    // Filter active articles if needed, here we assume all are active
    setArticleList(articles);
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <p className="eyebrow">Library</p>
        <h1>Articles crafted for people who wants to connect and join events.</h1>
        <p className="lead">
          Dive into local events and community workshops to stay updated and involved.
        </p>
      </div>

      {articleList.length > 0 ? (
        <ArticleList articles={articleList} />
      ) : (
        <p className="muted">No articles available right now.</p>
      )}

      <div className="cta-banner">
        <h3>Looking for more?</h3>
        <p>
          Explore more events and learn how to get involved in your local community.
        </p>
        <Link to="/about" className="button-link primary">
          Meet the crew
        </Link>
      </div>
    </div>
  );
}

export default ArticleListPage;
