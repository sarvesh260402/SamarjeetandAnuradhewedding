"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendContact } from "@/lib/emailjs";
import { SectionHeading } from "@/components/ui/Decorations";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMsg("");
    try {
      await sendContact(data);
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Contact Us" subtitle="We'd love to hear from you" />

        <div className="grid md:grid-cols-2 gap-10">
          <div className="gsap-reveal space-y-6">
            <div>
              <h3 className="font-playfair text-lg text-maroon-dark mb-2">Get in Touch</h3>
              <p className="font-poppins text-sm text-maroon/70 leading-relaxed">
                For any questions about the wedding events, travel, or accommodations, please reach out to us.
              </p>
            </div>
            <div className="space-y-3">
              <p className="font-poppins text-sm text-maroon/70">
                <span className="text-gold-dark font-medium">Email:</span> samarjeet.anuradha@wedding.com
              </p>
              <p className="font-poppins text-sm text-maroon/70">
                <span className="text-gold-dark font-medium">Phone:</span> +91 98765 43210
              </p>
              <p className="font-poppins text-sm text-maroon/70">
                <span className="text-gold-dark font-medium">Location:</span> Jaipur, Rajasthan
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="gsap-reveal space-y-4 bg-gradient-to-br from-cream to-blush/20 border border-gold/20 rounded-2xl p-6 shadow-md"
          >
            <div>
              <label htmlFor="contact-name" className="font-poppins text-sm text-maroon/70 block mb-1">
                Name *
              </label>
              <input
                id="contact-name"
                {...register("name")}
                className="w-full px-4 py-2.5 rounded-xl border border-gold/20 bg-cream/80 font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
              {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="contact-email" className="font-poppins text-sm text-maroon/70 block mb-1">
                Email *
              </label>
              <input
                id="contact-email"
                type="email"
                {...register("email")}
                className="w-full px-4 py-2.5 rounded-xl border border-gold/20 bg-cream/80 font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="contact-subject" className="font-poppins text-sm text-maroon/70 block mb-1">
                Subject *
              </label>
              <input
                id="contact-subject"
                {...register("subject")}
                className="w-full px-4 py-2.5 rounded-xl border border-gold/20 bg-cream/80 font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
              {errors.subject && <p className="text-red-600 text-xs mt-1">{errors.subject.message}</p>}
            </div>
            <div>
              <label htmlFor="contact-message" className="font-poppins text-sm text-maroon/70 block mb-1">
                Message *
              </label>
              <textarea
                id="contact-message"
                rows={4}
                {...register("message")}
                className="w-full px-4 py-2.5 rounded-xl border border-gold/20 bg-cream/80 font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 resize-none"
              />
              {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 bg-gradient-to-r from-gold to-gold-dark text-cream font-poppins text-sm uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-center font-poppins text-green-700 text-sm">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-center font-poppins text-red-600 text-sm">{errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
