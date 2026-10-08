"use client";

import type React from "react";
import { useState } from "react";
import { trackEvent } from "./analytics";

type SubmitState = "idle" | "sending" | "success" | "error";

export function ProductWaitlist({
  productName,
  productId,
}: {
  productName: string;
  productId: string;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [useCase, setUseCase] = useState("");
  const [website, setWebsite] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const isSending = submitState === "sending";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setStatusMessage("");
    trackEvent("waitlist_submit", { product: productName });

    const message = [
      `Early access request — ${productName}`,
      `- Role: ${role.trim()}`,
      `- Country: ${country.trim()}`,
      `- Use case: ${useCase.trim()}`,
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enquiryType: "Early product access",
          name: name.trim(),
          email: email.trim(),
          company: "",
          message,
          website,
          source: { page: "/products", service: productName },
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setSubmitState("success");
      setStatusMessage(
        "You're on the list. We'll reach out when early access opens.",
      );
      trackEvent("waitlist_success", { product: productName });
    } catch (error) {
      setSubmitState("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
      trackEvent("waitlist_error", { product: productName });
    }
  }

  if (submitState === "success") {
    return (
      <p className="waitlist-success" role="status">
        {statusMessage}
      </p>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        className="button button-primary waitlist-toggle"
        onClick={() => setOpen(true)}
      >
        Request early access
      </button>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <div className="contact-fields">
        <div className="contact-field">
          <label htmlFor={`waitlist-name-${productId}`}>Name</label>
          <input
            id={`waitlist-name-${productId}`}
            type="text"
            autoComplete="name"
            maxLength={100}
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="contact-field">
          <label htmlFor={`waitlist-email-${productId}`}>Email</label>
          <input
            id={`waitlist-email-${productId}`}
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>

      <div className="contact-fields">
        <div className="contact-field">
          <label htmlFor={`waitlist-role-${productId}`}>Role</label>
          <input
            id={`waitlist-role-${productId}`}
            type="text"
            maxLength={120}
            placeholder="e.g. product manager"
            required
            value={role}
            onChange={(event) => setRole(event.target.value)}
          />
        </div>
        <div className="contact-field">
          <label htmlFor={`waitlist-country-${productId}`}>Country</label>
          <input
            id={`waitlist-country-${productId}`}
            type="text"
            autoComplete="country-name"
            maxLength={80}
            required
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          />
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor={`waitlist-usecase-${productId}`}>
          How would you use {productName}?
        </label>
        <textarea
          id={`waitlist-usecase-${productId}`}
          maxLength={1000}
          required
          value={useCase}
          onChange={(event) => setUseCase(event.target.value)}
        />
      </div>

      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor={`waitlist-website-${productId}`}>Website</label>
        <input
          id={`waitlist-website-${productId}`}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      {statusMessage && (
        <p className="contact-status" role="status">
          {statusMessage}
        </p>
      )}

      <div className="waitlist-actions">
        <button
          type="button"
          className="button button-secondary"
          onClick={() => setOpen(false)}
          disabled={isSending}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="button button-primary"
          disabled={isSending}
        >
          {isSending ? "Joining..." : "Join the waitlist"}
        </button>
      </div>
    </form>
  );
}
