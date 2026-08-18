export type ContactFormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export const emptyContactForm: ContactFormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function validateContactForm(form: ContactFormState) {
  if (!form.name.trim() || !form.email.trim() || !form.company.trim() || !form.message.trim()) {
    return "Please complete each field so we can prepare for the conversation.";
  }

  if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    return "Please enter a valid email address.";
  }

  return null;
}
