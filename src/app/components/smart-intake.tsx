"use client";

import type React from "react";
import { useState } from "react";
import { trackEvent } from "./analytics";

type NeedId = "build" | "ai" | "talent" | "rpo" | "us-staffing" | "product";

type IntakeField =
  | { kind: "select"; key: string; label: string; options: string[] }
  | {
      kind: "text";
      key: string;
      label: string;
      placeholder?: string;
      maxLength?: number;
    };

const needs: {
  id: NeedId;
  label: string;
  blurb: string;
  enquiryType: string;
}[] = [
  {
    id: "build",
    label: "Build software",
    blurb: "A product, platform, or application",
    enquiryType: "Technology development",
  },
  {
    id: "ai",
    label: "AI & Automation",
    blurb: "Automate a manual workflow",
    enquiryType: "Technology development",
  },
  {
    id: "talent",
    label: "Hire Talent",
    blurb: "Engineers, designers, specialists",
    enquiryType: "Recruitment solutions",
  },
  {
    id: "rpo",
    label: "RPO & GCC",
    blurb: "Hiring at scale or GCC teams",
    enquiryType: "Recruitment solutions",
  },
  {
    id: "us-staffing",
    label: "US Staffing",
    blurb: "Contract and direct-hire staffing in the US",
    enquiryType: "US staffing",
  },
  {
    id: "product",
    label: "Product enquiry",
    blurb: "PoojaPath, 2DO AI, CareerSignal, partnerships",
    enquiryType: "Early product access",
  },
];

const needFields: Record<NeedId, IntakeField[]> = {
  build: [
    {
      kind: "select",
      key: "work",
      label: "What best describes the work?",
      options: [
        "New product / MVP",
        "Existing product to extend",
        "Internal platform or tool",
        "Not sure yet",
      ],
    },
    {
      kind: "select",
      key: "stage",
      label: "What stage are you at?",
      options: ["Idea", "Design ready", "In development", "Live and scaling"],
    },
  ],
  ai: [
    {
      kind: "text",
      key: "process",
      label: "What process do you want to improve?",
      placeholder: "e.g. screening incoming resumes",
      maxLength: 300,
    },
    {
      kind: "select",
      key: "manual",
      label: "How manual is it today?",
      options: ["Fully manual", "Partly manual", "Mostly automated"],
    },
  ],
  talent: [
    {
      kind: "text",
      key: "roles",
      label: "What kind of roles?",
      placeholder: "e.g. senior React engineers",
      maxLength: 300,
    },
    {
      kind: "select",
      key: "volume",
      label: "How many hires?",
      options: ["1–3", "4–10", "10+"],
    },
    {
      kind: "select",
      key: "location",
      label: "Where should they be based?",
      options: ["India", "US", "Both", "Flexible"],
    },
  ],
  rpo: [
    {
      kind: "select",
      key: "volume",
      label: "What is the hiring volume?",
      options: ["1–10 hires", "11–50 hires", "50+ hires"],
    },
    {
      kind: "select",
      key: "timeline",
      label: "When do you need to start?",
      options: ["Immediately", "In 1–2 months", "Exploring options"],
    },
  ],
  "us-staffing": [
    {
      kind: "select",
      key: "engagement",
      label: "What engagement type?",
      options: ["Contract", "Contract-to-hire", "Direct hire"],
    },
    {
      kind: "text",
      key: "roles",
      label: "What roles do you need?",
      placeholder: "e.g. QA engineers in Texas",
      maxLength: 300,
    },
  ],
  product: [
    {
      kind: "select",
      key: "product",
      label: "Which product?",
      options: ["PoojaPath", "2DO AI", "CareerSignal Global", "Partnership"],
    },
    {
      kind: "text",
      key: "interest",
      label: "What would you like to explore?",
      placeholder: "e.g. early access for our team",
      maxLength: 300,
    },
  ],
};

const stepLabels = ["Your need", "Details", "Contact"];

const prefillNeedForEnquiryType: Record<string, NeedId> = {
  "Technology development": "ai",
  "Recruitment solutions": "talent",
  "US staffing": "us-staffing",
  "Early product access": "product",
  "Product partnership": "product",
  "Payroll and workforce": "rpo",
};

type SubmitState = "idle" | "sending" | "success" | "error";

function getNeed(id: NeedId) {
  return needs.find((need) => need.id === id) ?? needs[0];
}

function getPrefill(): { needId: NeedId | ""; message: string; step: number } {
  // Prefill from ?enquiryType= and ?message= (used by the AI opportunity
  // assessment): select the matching need, prefill the message, and start at
  // the details step.
  if (typeof window === "undefined") {
    return { needId: "", message: "", step: 0 };
  }

  const params = new URLSearchParams(window.location.search);
  const prefillType = params.get("enquiryType") ?? "";
  const prefillMessage = params.get("message") ?? "";
  if (!prefillMessage) {
    return { needId: "", message: "", step: 0 };
  }

  return {
    needId: prefillNeedForEnquiryType[prefillType] ?? "ai",
    message: prefillMessage.slice(0, 2000),
    step: 1,
  };
}

export function SmartIntake() {
  const [prefill] = useState(getPrefill);
  const [step, setStep] = useState(prefill.step);
  const [needId, setNeedId] = useState<NeedId | "">(prefill.needId);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState(prefill.message);
  const [website, setWebsite] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [stepError, setStepError] = useState("");

  const need = needId ? getNeed(needId) : null;
  const fields = needId ? needFields[needId] : [];
  const isSending = submitState === "sending";

  function updateAnswer(key: string, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
    setStepError("");
  }

  function goNext() {
    if (step === 0 && !needId) {
      setStepError("Please choose what you need help with.");
      return;
    }

    if (step === 1) {
      const missing = fields.find(
        (field) => !(answers[field.key] ?? "").trim(),
      );
      if (missing) {
        setStepError(`Please answer: ${missing.label}`);
        return;
      }
    }

    setStepError("");
    setStep((current) => Math.min(current + 1, 2));
  }

  function goBack() {
    setStepError("");
    setStep((current) => Math.max(current - 1, 0));
  }

  function buildMessage() {
    const lines: string[] = [`Need: ${need?.label ?? ""}`];
    for (const field of fields) {
      lines.push(`- ${field.label}: ${(answers[field.key] ?? "").trim()}`);
    }
    const userMessage = message.trim();
    if (userMessage) {
      lines.push("", userMessage);
    }
    return lines.join("\n");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!need) {
      return;
    }

    setSubmitState("sending");
    setStatusMessage("");
    trackEvent("intake_submit", { need: need.id });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enquiryType: need.enquiryType,
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          message: buildMessage(),
          website,
          source: { page: "/contact", service: need.label },
        }),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as {
          error?: unknown;
        } | null;
        const apiMessage =
          typeof result?.error === "string"
            ? result.error
            : "Something went wrong. Please try again.";
        throw new Error(apiMessage);
      }

      setSubmitState("success");
      setStatusMessage(
        "Thank you. Your enquiry has been received — we'll get back to you soon.",
      );
      trackEvent("intake_success", { need: need.id });
    } catch (error) {
      setSubmitState("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
      trackEvent("intake_error", { need: need.id });
    }
  }

  if (submitState === "success") {
    return (
      <div className="intake-success">
        <h2>Enquiry sent</h2>
        <p role="status">{statusMessage}</p>
        <button
          type="button"
          className="button button-secondary"
          onClick={() => {
            setStep(0);
            setNeedId("");
            setAnswers({});
            setName("");
            setEmail("");
            setCompany("");
            setMessage("");
            setWebsite("");
            setSubmitState("idle");
            setStatusMessage("");
          }}
        >
          Start another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="smart-intake">
      <ol className="intake-steps" aria-label="Enquiry progress">
        {stepLabels.map((label, index) => (
          <li
            key={label}
            className={
              index === step
                ? "intake-step is-current"
                : index < step
                  ? "intake-step is-done"
                  : "intake-step"
            }
            aria-current={index === step ? "step" : undefined}
          >
            <span className="intake-step-number">{index + 1}</span>
            <span className="intake-step-label">{label}</span>
          </li>
        ))}
      </ol>

      {step === 0 && (
        <fieldset className="intake-fieldset">
          <legend className="intake-legend">What do you need?</legend>
          <div className="intake-options">
            {needs.map((option) => (
              <label
                key={option.id}
                className={
                  needId === option.id
                    ? "intake-option is-selected"
                    : "intake-option"
                }
              >
                <input
                  type="radio"
                  name="need"
                  value={option.id}
                  checked={needId === option.id}
                  onChange={() => {
                    setNeedId(option.id);
                    setAnswers({});
                    setStepError("");
                    trackEvent("intake_start", { need: option.id });
                  }}
                  className="intake-radio"
                />
                <span className="intake-option-label">{option.label}</span>
                <span className="intake-option-blurb">{option.blurb}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {step === 1 && need && (
        <div className="intake-details">
          <p className="intake-legend">
            Tell us a little more about: {need.label}
          </p>
          {fields.map((field) =>
            field.kind === "select" ? (
              <div className="contact-field" key={field.key}>
                <label htmlFor={`intake-${field.key}`}>{field.label}</label>
                <select
                  id={`intake-${field.key}`}
                  value={answers[field.key] ?? ""}
                  onChange={(event) =>
                    updateAnswer(field.key, event.target.value)
                  }
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="contact-field" key={field.key}>
                <label htmlFor={`intake-${field.key}`}>{field.label}</label>
                <input
                  id={`intake-${field.key}`}
                  type="text"
                  maxLength={field.maxLength ?? 300}
                  placeholder={field.placeholder}
                  value={answers[field.key] ?? ""}
                  onChange={(event) =>
                    updateAnswer(field.key, event.target.value)
                  }
                />
              </div>
            ),
          )}
        </div>
      )}

      {step === 2 && need && (
        <form className="intake-contact-form" onSubmit={handleSubmit}>
          <div className="intake-recap" aria-label="Enquiry summary">
            <p>
              <strong>{need.label}</strong>
            </p>
            <ul>
              {fields.map((field) => (
                <li key={field.key}>
                  {field.label}: {(answers[field.key] ?? "").trim()}
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-fields">
            <div className="contact-field">
              <label htmlFor="intake-name">Name</label>
              <input
                id="intake-name"
                name="name"
                type="text"
                autoComplete="name"
                maxLength={100}
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="contact-field">
              <label htmlFor="intake-email">Email</label>
              <input
                id="intake-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="intake-company">Company</label>
            <input
              id="intake-company"
              name="company"
              type="text"
              autoComplete="organization"
              maxLength={120}
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="intake-message">
              Anything else you want to add?{" "}
              <span className="field-hint">(optional)</span>
            </label>
            <textarea
              id="intake-message"
              name="message"
              maxLength={2000}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>

          <div className="contact-honeypot" aria-hidden="true">
            <label htmlFor="intake-website">Website</label>
            <input
              id="intake-website"
              name="website"
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

          <div className="intake-nav">
            <button
              type="button"
              className="button button-secondary"
              onClick={goBack}
              disabled={isSending}
            >
              Back
            </button>
            <button
              type="submit"
              className="button button-primary"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send enquiry"}
            </button>
          </div>
        </form>
      )}

      {stepError && (
        <p className="intake-error" role="alert">
          {stepError}
        </p>
      )}

      {step < 2 && (
        <div className="intake-nav">
          {step > 0 && (
            <button
              type="button"
              className="button button-secondary"
              onClick={goBack}
            >
              Back
            </button>
          )}
          <button
            type="button"
            className="button button-primary"
            onClick={goNext}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}
