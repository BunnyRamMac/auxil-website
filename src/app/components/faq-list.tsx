"use client";

import { useMemo, useState } from "react";

export type FaqItem = {
  category: string;
  question: string;
  answer: string;
};

export function FaqList({ items }: { items: FaqItem[] }) {
  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesQuery =
        !normalizedQuery ||
        `${item.question} ${item.answer} ${item.category}`
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, items, query]);

  return (
    <div className="faq-tool">
      <label className="sr-only" htmlFor="faq-search">
        Search frequently asked questions
      </label>
      <input
        id="faq-search"
        className="faq-search"
        type="search"
        placeholder="Search questions"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <div className="filter-row" aria-label="FAQ categories">
        {categories.map((item) => (
          <button
            className="filter-pill"
            data-active={item === category}
            key={item}
            type="button"
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="accordion-list">
        {filteredItems.map((item) => (
          <details className="accordion-item" key={item.question}>
            <summary>
              <span>{item.question}</span>
              <span aria-hidden="true">+</span>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
