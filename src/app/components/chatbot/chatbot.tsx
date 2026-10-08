"use client";

import { useEffect, useRef, useState } from "react";
import {
  chatFallback,
  chatGreeting,
  chatSuggestions,
  findAnswer,
  isGreeting,
  isThanks,
  type ChatEntry,
} from "./chatbot-data";

type Message = {
  id: number;
  role: "user" | "bot";
  text: string;
  link?: { label: string; href: string };
};

let messageId = 0;
const nextId = () => {
  messageId += 1;
  return messageId;
};

function botReplyFor(input: string): Message {
  if (isGreeting(input)) {
    return { id: nextId(), role: "bot", text: chatGreeting };
  }
  if (isThanks(input)) {
    return {
      id: nextId(),
      role: "bot",
      text: "You're welcome! Anything else I can help with?",
    };
  }
  const entry: ChatEntry | null = findAnswer(input);
  if (entry) {
    return {
      id: nextId(),
      role: "bot",
      text: entry.answer,
      link: entry.link,
    };
  }
  return { id: nextId(), role: "bot", text: chatFallback };
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: nextId(), role: "bot", text: chatGreeting },
  ]);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (list) list.scrollTop = list.scrollHeight;
  }, [messages, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open ]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text) return;
    const userMessage: Message = { id: nextId(), role: "user", text };
    const reply = botReplyFor(text);
    setMessages((prev) => [...prev, userMessage, reply]);
    setInput("");
  };

  return (
    <div className="auxil-chat" data-open={open}>
      {open && (
        <section
          className="auxil-chat-panel"
          role="dialog"
          aria-label="Auxil assistant chat"
          aria-modal="false"
        >
          <header className="auxil-chat-header">
            <div>
              <p className="auxil-chat-title">Auxil Assistant</p>
              <p className="auxil-chat-subtitle">Answers from auxilitsolutions.com</p>
            </div>
            <button
              type="button"
              className="auxil-chat-close"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </header>

          <div className="auxil-chat-messages" ref={listRef} aria-live="polite">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`auxil-chat-message auxil-chat-message-${message.role}`}
              >
                <p>{message.text}</p>
                {message.link && (
                  <a className="auxil-chat-link" href={message.link.href}>
                    {message.link.label} →
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="auxil-chat-suggestions" aria-label="Suggested questions">
            {chatSuggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                className="auxil-chat-chip"
                onClick={() => send(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>

          <form
            className="auxil-chat-form"
            onSubmit={(event) => {
              event.preventDefault();
              send(input);
            }}
          >
            <label className="sr-only" htmlFor="auxil-chat-input">
              Ask the Auxil assistant
            </label>
            <input
              id="auxil-chat-input"
              ref={inputRef}
              className="auxil-chat-input"
              type="text"
              placeholder="Type your question…"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              autoComplete="off"
            />
            <button type="submit" className="auxil-chat-send" aria-label="Send message">
              ↑
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className="auxil-chat-toggle"
        aria-label={open ? "Close Auxil assistant" : "Open Auxil assistant"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <span aria-hidden="true">×</span>
        ) : (
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
