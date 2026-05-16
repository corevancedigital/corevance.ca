"use client";

import { useActionState } from "react";
import { submitQuote } from "../actions/submit-quote";
import { INITIAL_QUOTE_STATE } from "../actions/submit-quote-types";

const FIELDS = [
  { id: "name", label: "Name *", type: "text", autoComplete: "name" },
  { id: "phone", label: "Phone *", type: "tel", autoComplete: "tel" },
  { id: "email", label: "Email *", type: "email", autoComplete: "email" },
] as const;

export default function QuoteForm() {
  const [state, action, pending] = useActionState(submitQuote, INITIAL_QUOTE_STATE);

  return (
    <div
      id="contact"
      className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 w-full scroll-mt-24"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-[#1e3a5f] mb-1 text-center">
        Tell Us About Your Project
      </h2>
      <p className="text-gray-500 text-sm mb-5 text-center">
        Get expert consultation and a detailed quote within 24 hours
      </p>

      {state.ok ? (
        <div
          role="status"
          aria-live="polite"
          className="flex flex-col items-center text-center py-6"
        >
          <div className="w-14 h-14 rounded-full bg-[#ff6b35]/10 flex items-center justify-center mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-[#1e3a5f] mb-1">Thanks — we got your request.</h3>
          <p className="text-sm text-gray-600 max-w-sm">
            A Corevance specialist will reach out within 24 hours. Need it sooner? Call{" "}
            <a href="tel:4378493781" className="text-[#ff6b35] font-semibold hover:underline">
              437-849-3781
            </a>
            .
          </p>
        </div>
      ) : (
        <form action={action} className="flex flex-col gap-4" noValidate={false}>
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
            defaultValue=""
          />

          {FIELDS.map(({ id, label, type, autoComplete }) => (
            <div key={id}>
              <label htmlFor={id} className="block mb-1.5 font-semibold text-[#1e3a5f] text-sm">
                {label}
              </label>
              <input
                id={id}
                name={id}
                type={type}
                required
                autoComplete={autoComplete}
                defaultValue={state.values?.[id] ?? ""}
                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#ff6b35] transition-colors text-[#1e3a5f]"
              />
            </div>
          ))}

          <div>
            <label htmlFor="project" className="block mb-1.5 font-semibold text-[#1e3a5f] text-sm">
              Tell us about your project *
            </label>
            <textarea
              id="project"
              name="project"
              required
              rows={4}
              defaultValue={state.values?.project ?? ""}
              placeholder="Describe your project scope, timeline, square footage, and any specific requirements..."
              className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#ff6b35] transition-colors resize-y text-[#1e3a5f]"
            />
          </div>

          {state.ok === false && state.error ? (
            <p role="alert" className="text-sm text-red-600 -mt-1">
              {state.error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-[#ff6b35] text-white font-bold py-3.5 rounded-full text-base hover:bg-[#e55a28] hover:-translate-y-0.5 transition-all shadow-md disabled:opacity-70 disabled:cursor-wait disabled:hover:translate-y-0"
          >
            {pending ? "Sending..." : "Request Free Consultation"}
          </button>
        </form>
      )}
    </div>
  );
}
