"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  packSize: string;
  quantity: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: "",
  packSize: "",
  quantity: "",
  message: ""
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setError("Please complete your name, email, and message.");
      return;
    }

    if (!isValidEmail(values.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setValues(initialValues);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="quote-form full" noValidate>
      <input
        required
        type="text"
        name="name"
        placeholder="Name"
        value={values.name}
        onChange={(event) => updateField("name", event.target.value)}
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={values.company}
        onChange={(event) => updateField("company", event.target.value)}
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={(event) => updateField("email", event.target.value)}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone / WhatsApp"
        value={values.phone}
        onChange={(event) => updateField("phone", event.target.value)}
      />
      <input
        type="text"
        name="product"
        placeholder="Product / viscosity grade"
        value={values.product}
        onChange={(event) => updateField("product", event.target.value)}
      />
      <select
        name="packSize"
        value={values.packSize}
        onChange={(event) => updateField("packSize", event.target.value)}
      >
        <option value="">Select packaging</option>
        <option value="IBC Tote">IBC Tote</option>
        <option value="210L Drum">210L Drum</option>
        <option value="20L / 25L Pail">20L / 25L Pail</option>
        <option value="Barrel">Barrel</option>
        <option value="Bulk supply">Bulk supply</option>
        <option value="Custom commercial volume">Custom commercial volume</option>
      </select>
      <input
        type="text"
        name="quantity"
        placeholder="Estimated quantity"
        value={values.quantity}
        onChange={(event) => updateField("quantity", event.target.value)}
      />
      <textarea
        required
        name="message"
        placeholder="Delivery location, application, timeline, and any technical notes"
        value={values.message}
        onChange={(event) => updateField("message", event.target.value)}
      />
      {error ? <p className="form-status form-status-error">{error}</p> : null}
      {status === "success" ? <p className="form-status form-status-success">Message sent successfully!</p> : null}
      {status === "error" ? <p className="form-status form-status-error">Something went wrong. Please try again.</p> : null}
      <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? <span className="spinner" aria-hidden="true" /> : null}
        {status === "loading" ? "Sending..." : "Submit RFQ"}
      </button>
    </form>
  );
}
