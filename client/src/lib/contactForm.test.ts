import { describe, expect, it } from "vitest";
import { emptyContactForm, validateContactForm } from "./contactForm";

describe("contact form validation", () => {
  it("requires every inquiry field", () => {
    expect(validateContactForm(emptyContactForm)).toBe("Please complete each field so we can prepare for the conversation.");
  });

  it("requires a valid email address once all fields are provided", () => {
    expect(validateContactForm({ ...emptyContactForm, name: "Avery", company: "Agents DX", message: "I want to talk.", email: "invalid" })).toBe("Please enter a valid email address.");
  });

  it("accepts a complete valid inquiry", () => {
    expect(validateContactForm({ name: "Avery", company: "Agents DX", message: "I want to talk.", email: "avery@example.com" })).toBeNull();
  });
});
