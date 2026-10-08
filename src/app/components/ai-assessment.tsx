"use client";

import type React from "react";
import { useState } from "react";
import { trackEvent } from "./analytics";

const repetitionOptions = [
  "Rarely manual",
  "Sometimes manual",
  "Often manual",
  "Constantly manual",
] as const;

const peopleOptions = ["1–5", "6–20", "21–100", "100+"] as const;

const outcomeOptions = [
  { value: "Lower cost", note: "The priority would be reducing effort and cost per transaction." },
  { value: "Faster speed", note: "The priority would be cutting cycle time end-to-end." },
  {
    value: "Better quality",
    note: "The priority would be consistency — automation with human review at the decision points.",
  },
  {
    value: "More revenue",
    note: "The priority would be throughput — removing the bottlenecks that cap revenue.",
  },
] as const;

const questions = [
  "What process are you trying to improve?",
  "How repetitive and manual is it today?",
  "What systems and data are involved?",
  "How many people use this workflow?",
  "What outcome matters most?",
] as const;

type Tier = {
  headline: string;
  detail: string;
};

function repetitionLine(value: string) {
  switch (value) {
    case "Constantly manual":
      return "It is constantly manual and repetitive — repetition is where automation pays back fastest.";
    case "Often manual":
      return "It is often manual — there is clear repetition for automation to remove.";
    case "Sometimes manual":
      return "It is only sometimes manual — the automatable parts are worth isolating first.";
    default:
      return "It is rarely manual — automation would only make sense for narrow slices of this workflow.";
  }
}

function peopleLine(value: string) {
  switch (value) {
    case "100+":
      return "Over 100 people touch this workflow — small time savings multiply across the whole team.";
    case "21–100":
      return "Dozens of people touch this workflow — consistent handling would compound quickly.";
    case "6–20":
      return "A small team runs this workflow — freeing even a few hours a week matters here.";
    default:
      return "A handful of people run this workflow — the win is reliability and speed, not headcount.";
  }
}

function systemsLine(value: string) {
  if (value.trim().length >= 8) {
    return "You have named the systems and data involved, which gives automation a concrete starting point.";
  }
  return "The systems and data are not mapped yet — mapping them is the first step before any automation.";
}

export function AiAssessment() {
  const [step, setStep] = useState(0);
  const [process, setProcess] = useState("");
  const [repetition, setRepetition] = useState("");
  const [systems, setSystems] = useState("");
  const [people, setPeople] = useState("");
  const [outcome, setOutcome] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [finished, setFinished] = useState(false);

  const totalSteps = questions.length;

  function isStepValid(currentStep: number) {
    switch (currentStep) {
      case 0:
        return process.trim().length > 0;
      case 1:
        return repetition !== "";
      case 2:
        return true;
      case 3:
        return people !== "";
      case 4:
        return outcome !== "";
      default:
        return false;
    }
  }

  function goNext() {
    if (!isStepValid(step)) {
      setError("Please answer the question to continue.");
      return;
    }
    setError("");
    if (step === 0) {
      trackEvent("assessment_start", {});
    }
    if (step === totalSteps - 1) {
      setFinished(true);
      trackEvent("assessment_complete", {});
      return;
    }
    setStep((current) => current + 1);
  }

  function goBack() {
    setError("");
    setStep((current) => Math.max(current - 1, 0));
  }

  function getTier(): Tier {
    const repScore = repetitionOptions.indexOf(
      repetition as (typeof repetitionOptions)[number],
    );
    const peopleScore = peopleOptions.indexOf(
      people as (typeof peopleOptions)[number],
    );
    const systemsScore = systems.trim().length >= 8 ? 1 : 0;
    const total = Math.max(repScore, 0) + Math.max(peopleScore, 0) + systemsScore;

    if (total >= 5) {
      return {
        headline: "Good candidate for workflow automation + human approval.",
        detail:
          "This workflow has the two strongest automation signals: it is highly repetitive and it touches enough people for the gains to compound. The pattern that usually works is automating the routine steps and keeping a human at the decision points.",
      };
    }
    if (total >= 3) {
      return {
        headline: "Good candidate for a focused automation pilot.",
        detail:
          "There is a real opportunity here, but it is worth proving on one slice of the workflow first. A small pilot — one process, one team — shows the value before anything wider is attempted.",
      };
    }
    return {
      headline: "Better served by process clarity before automation.",
      detail:
        "Automating this right now would likely just make a fuzzy process run faster. The honest first step is mapping the workflow as it actually runs today — that mapping often reveals simpler fixes, and it is what any serious automation effort needs anyway.",
    };
  }

  function getSummary() {
    const tier = getTier();
    return [
      "AI opportunity assessment (indicative)",
      `- Process: ${process.trim()}`,
      `- Repetition: ${repetition}`,
      `- Systems/data: ${systems.trim() || "Not specified"}`,
      `- People: ${people}`,
      `- Outcome priority: ${outcome}`,
      `- Assessment: ${tier.headline}`,
    ].join("\n");
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(getSummary());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  if (finished) {
    const tier = getTier();
    const contactHref = `/contact?enquiryType=${encodeURIComponent("Technology development")}&message=${encodeURIComponent(getSummary())}`;

    return (
      <div className="assessment-result">
        <p className="eyebrow">Your indicative assessment</p>
        <h2>{tier.headline}</h2>
        <p>{tier.detail}</p>
        <ul className="dash-list">
          <li>{repetitionLine(repetition)}</li>
          <li>{peopleLine(people)}</li>
          <li>{systemsLine(systems)}</li>
          <li>
            {outcomeOptions.find((option) => option.value === outcome)?.note}
          </li>
        </ul>
        <p className="assessment-disclaimer">
          Indicative assessment based on your answers — not a quote, estimate,
          or commitment. A real scoping conversation is where the details get
          honest.
        </p>
        <div className="assessment-actions">
          <a className="button button-primary" href={contactHref}>
            Discuss this with Auxil
          </a>
          <button
            type="button"
            className="button button-secondary"
            onClick={copySummary}
          >
            {copied ? "Summary copied" : "Copy summary"}
          </button>
          <button
            type="button"
            className="button button-secondary"
            onClick={() => {
              setFinished(false);
              setStep(0);
            }}
          >
            Retake
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="ai-assessment">
      <div
        className="assessment-progress"
        role="progressbar"
        aria-valuenow={step + 1}
        aria-valuemin={1}
        aria-valuemax={totalSteps}
        aria-label="Assessment progress"
      >
        <div
          className="assessment-progress-bar"
          style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
        />
      </div>
      <p className="assessment-step-count">
        Question {step + 1} of {totalSteps}
      </p>

      <h2 className="assessment-question">{questions[step]}</h2>

      {step === 0 && (
        <div className="contact-field">
          <label htmlFor="assessment-process" className="visually-hidden">
            {questions[0]}
          </label>
          <textarea
            id="assessment-process"
            maxLength={500}
            placeholder="e.g. screening the 2,000 resumes we receive every month"
            value={process}
            onChange={(event) => {
              setProcess(event.target.value);
              setError("");
            }}
          />
        </div>
      )}

      {step === 1 && (
        <div className="assessment-options" role="radiogroup" aria-label={questions[1]}>
          {repetitionOptions.map((option) => (
            <label
              key={option}
              className={
                repetition === option
                  ? "assessment-option is-selected"
                  : "assessment-option"
              }
            >
              <input
                type="radio"
                name="repetition"
                value={option}
                checked={repetition === option}
                onChange={() => {
                  setRepetition(option);
                  setError("");
                }}
                className="intake-radio"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}

      {step === 2 && (
        <div className="contact-field">
          <label htmlFor="assessment-systems" className="visually-hidden">
            {questions[2]}
          </label>
          <textarea
            id="assessment-systems"
            maxLength={500}
            placeholder="e.g. our ATS, Gmail, and a shared spreadsheet"
            value={systems}
            onChange={(event) => {
              setSystems(event.target.value);
              setError("");
            }}
          />
          <p className="field-hint">
            Optional — but naming the tools makes the assessment sharper.
          </p>
        </div>
      )}

      {step === 3 && (
        <div className="assessment-options" role="radiogroup" aria-label={questions[3]}>
          {peopleOptions.map((option) => (
            <label
              key={option}
              className={
                people === option
                  ? "assessment-option is-selected"
                  : "assessment-option"
              }
            >
              <input
                type="radio"
                name="people"
                value={option}
                checked={people === option}
                onChange={() => {
                  setPeople(option);
                  setError("");
                }}
                className="intake-radio"
              />
              <span>{option} people</span>
            </label>
          ))}
        </div>
      )}

      {step === 4 && (
        <div className="assessment-options" role="radiogroup" aria-label={questions[4]}>
          {outcomeOptions.map((option) => (
            <label
              key={option.value}
              className={
                outcome === option.value
                  ? "assessment-option is-selected"
                  : "assessment-option"
              }
            >
              <input
                type="radio"
                name="outcome"
                value={option.value}
                checked={outcome === option.value}
                onChange={() => {
                  setOutcome(option.value);
                  setError("");
                }}
                className="intake-radio"
              />
              <span>{option.value}</span>
            </label>
          ))}
        </div>
      )}

      {error && (
        <p className="intake-error" role="alert">
          {error}
        </p>
      )}

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
          {step === totalSteps - 1 ? "See my assessment" : "Continue"}
        </button>
      </div>
    </div>
  );
}
