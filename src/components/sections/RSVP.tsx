"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { WEDDING_EVENTS } from "@/data/site";
import { sendRSVP } from "@/lib/emailjs";
import { SectionHeading } from "@/components/ui/Decorations";

const rsvpSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  guestCount: z.coerce.number().min(1).max(10),
  attending: z.enum(["yes", "no"]),
  events: z.array(z.string()).optional(),
  message: z.string().optional(),
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

export function RSVP() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: { attending: "yes", guestCount: 1, events: [] },
  });

  const attending = watch("attending");

  const onSubmit = async (data: RSVPFormData) => {
    setStatus("loading");
    setErrorMsg("");
    try {
      await sendRSVP({
        ...data,
        events: data.events || [],
        message: data.message || "",
      });
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send RSVP");
    }
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-cream">
      <div className="max-w-2xl mx-auto">
        <SectionHeading title="RSVP" subtitle="We would be honored by your presence" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="gsap-reveal space-y-5 bg-gradient-to-br from-cream to-blush/20 border border-gold/20 rounded-3xl p-8 shadow-lg"
        >
          <div>
            <label htmlFor="name" className="font-poppins text-sm text-maroon/70 block mb-1">
              Full Name *
            </label>
            <input
              id="name"
              {...register("name")}
              className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-cream/80 font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
            />
            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="font-poppins text-sm text-maroon/70 block mb-1">
                Email *
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-cream/80 font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="font-poppins text-sm text-maroon/70 block mb-1">
                Phone *
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-cream/80 font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
              {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div>
            <label className="font-poppins text-sm text-maroon/70 block mb-2">Will you attend? *</label>
            <div className="flex gap-4">
              {(["yes", "no"] as const).map((val) => (
                <label key={val} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" value={val} {...register("attending")} className="accent-gold" />
                  <span className="font-poppins text-sm text-maroon/70 capitalize">
                    {val === "yes" ? "Joyfully Accept" : "Regretfully Decline"}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {attending === "yes" && (
            <>
              <div>
                <label htmlFor="guestCount" className="font-poppins text-sm text-maroon/70 block mb-1">
                  Number of Guests
                </label>
                <input
                  id="guestCount"
                  type="number"
                  min={1}
                  max={10}
                  {...register("guestCount")}
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-cream/80 font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                />
              </div>

              <fieldset>
                <legend className="font-poppins text-sm text-maroon/70 mb-2">Events Attending</legend>
                <div className="grid grid-cols-2 gap-2">
                  {WEDDING_EVENTS.map((event) => (
                    <label key={event.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        value={event.name}
                        {...register("events")}
                        className="accent-gold"
                      />
                      <span className="font-poppins text-xs text-maroon/60">{event.name}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </>
          )}

          <div>
            <label htmlFor="message" className="font-poppins text-sm text-maroon/70 block mb-1">
              Message (Optional)
            </label>
            <textarea
              id="message"
              rows={3}
              {...register("message")}
              className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-cream/80 font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 bg-gradient-to-r from-gold to-gold-dark text-cream font-poppins text-sm uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send RSVP"}
          </button>

          {status === "success" && (
            <p className="text-center font-poppins text-green-700 text-sm">
              Thank you! Your RSVP has been sent successfully. 🎉
            </p>
          )}
          {status === "error" && (
            <p className="text-center font-poppins text-red-600 text-sm">{errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
}
