import { FormValuesType } from "@type";

export const sendForm = async (data: FormValuesType) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};
