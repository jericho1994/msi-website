"use client";

import { FormEvent } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/site";

// No backend yet: submitting opens the visitor's email app with the message pre-filled.
export function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Service request: ${data.get("service")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Service: ${data.get("service")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const input =
    "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-ice-500 focus:ring-2 focus:ring-ice-200 focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-1.5 text-sm font-medium text-slate-700">
        Name
        <input name="name" required className={input} placeholder="Your name" />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-slate-700">
        Phone
        <input name="phone" type="tel" required className={input} placeholder="Best number to reach you" />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-slate-700">
        Email
        <input name="email" type="email" className={input} placeholder="you@example.com" />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-slate-700">
        Service needed
        <select name="service" className={input} defaultValue="Heating repair">
          <option>Heating repair</option>
          <option>A/C repair</option>
          <option>New installation</option>
          <option>Maintenance / tune-up</option>
          <option>Ventilation / air quality</option>
          <option>Other</option>
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-slate-700 sm:col-span-2">
        How can we help?
        <textarea
          name="message"
          rows={4}
          className={input}
          placeholder="Tell us about your system and what's going on"
        />
      </label>
      <button
        type="submit"
        className="bg-heat-cool inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-lg shadow-ice-500/20 transition hover:opacity-90 sm:col-span-2 sm:justify-self-start"
      >
        <Send className="size-4" />
        Send request
      </button>
    </form>
  );
}
