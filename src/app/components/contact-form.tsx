"use client";

import type React from "react";
import { useRef, useState } from "react";

const initialFormState = {
  enquiryType: "",
  name: "",
  email: "",
  company: "",
  message: "",
  website: "",
};

type FormState = typeof initialFormState;
type SubmitState = "idle" | "sending" | "success" | "error";

const enquiryTypes = [
  "Product partnership",
  "Technology development",
  "US staffing",
  "Recruitment solutions",
  "Payroll and workforce",
  "Early product access",
  "Other",
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const statusRef = useRef<HTMLParagraphElement>(null);

  const updateField =
    (field: keyof FormState) =>
    (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLSelectElement>
        | React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as {
          error?: unknown;
        } | null;
        const message =
          typeof result?.error === "string"
            ? result.error
            : "Something went wrong. Please try again.";
        throw new Error(message);
      }

      setForm(initialFormState);
      setSubmitState("success");
      setStatusMessage("Thank you. We'll get back to you soon.");
      statusRef.current?.focus();
    } catch (error) {
      setSubmitState("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
      statusRef.current?.focus();
    }
  }

  const isSending = submitState === "sending";

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-selector">
        <label htmlFor="enquiry-type">Enquiry type</label>
        <select
          id="enquiry-type"
          name="enquiryType"
          required
          value={form.enquiryType}
          onChange={updateField("enquiryType")}
        >
          <option value="" disabled>
            Select enquiry type
          </option>
          {enquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-fields">
        <div className="contact-field">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            required
            value={form.name}
            onChange={updateField("name")}
          />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={updateField("email")}
          />
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          maxLength={120}
          value={form.company}
          onChange={updateField("company")}
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          maxLength={3000}
          required
          value={form.message}
          onChange={updateField("message")}
        />
      </div>

      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={updateField("website")}
        />
      </div>

      <div className="hero-actions contact-actions">
        <button className="button button-primary" type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Start a Conversation"}
        </button>
      </div>

      <p
        ref={statusRef}
        className="contact-status"
        aria-live="polite"
        tabIndex={-1}
      >
        {statusMessage}
      </p>
    </form>
  );
}
