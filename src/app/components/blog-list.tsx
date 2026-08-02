"use client";

import { useMemo, useState } from "react";

export type BlogArticle = {
  title: string;
  category: string;
  readingTime: string;
  summary: string;
};

export function BlogList({ articles }: { articles: BlogArticle[] }) {
  const categories = ["All", ...Array.from(new Set(articles.map((article) => article.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = useMemo(
    () =>
      activeCategory === "All"
        ? articles
        : articles.filter((article) => article.category === activeCategory),
    [activeCategory, articles],
  );

  return (
    <>
      <div className="filter-row" aria-label="Blog categories">
        {categories.map((category) => (
          <button
            className="filter-pill"
            data-active={category === activeCategory}
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="content-grid two">
        {filteredArticles.map((article) => (
          <article className="content-card article-card" key={article.title}>
            <div className="article-meta">
              <span>{article.category}</span>
              <span>{article.readingTime}</span>
            </div>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <a className="text-link" href="/contact">
              Discuss this topic
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
