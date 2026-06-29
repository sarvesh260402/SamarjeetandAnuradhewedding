import emailjs from "@emailjs/browser";

export interface RSVPData {
  name: string;
  email: string;
  phone: string;
  guestCount: number;
  attending: "yes" | "no";
  events: string[];
  message: string;
}

export async function sendRSVP(data: RSVPData): Promise<void> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS is not configured. Please set environment variables.");
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      couple: "Samarjeet & Anuradha",
      guest_name: data.name,
      guest_email: data.email,
      guest_phone: data.phone,
      guest_count: String(data.guestCount),
      attending: data.attending === "yes" ? "Yes, attending" : "Unable to attend",
      events: data.events.join(", ") || "None selected",
      message: data.message || "No message",
    },
    publicKey
  );
}

export async function sendContact(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<void> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS is not configured. Please set environment variables.");
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      couple: "Samarjeet & Anuradha",
      guest_name: data.name,
      guest_email: data.email,
      subject: data.subject,
      message: data.message,
      form_type: "Contact",
    },
    publicKey
  );
}
