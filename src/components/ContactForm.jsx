"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaperPlaneIcon, ReloadIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import * as z from "zod";
import { useState } from "react";

// Zod schema for validation
const formSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Enter a valid email."),
  message: z.string().min(1, "Message is required."),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const processForm = async (data) => {
    setStatusMessage("");
    setIsError(false);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok) {
        setStatusMessage("Your message has been sent successfully!");
        reset();
      } else {
        setIsError(true);
        setStatusMessage(resData.message || "Something went wrong.");
      }
    } catch (error) {
      setIsError(true);
      setStatusMessage("Network error. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(processForm)} className="space-y-5">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {/* Name */}
        <div className="h-16">
          <Input
            id="name"
            type="text"
            placeholder="Name"
            autoComplete="given-name"
            {...register("name")}
          />
          {errors.name?.message && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="h-16">
          <Input
            id="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="h-32 sm:col-span-2">
          <Textarea
            rows={4}
            placeholder="Leave feedback about the site, career opportunities or just to say hello etc. (BTW, I can't reply if the email provided is not real!)"
            autoComplete="Message"
            className="resize-none"
            {...register("message")}
          />
          {errors.message?.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit */}
      <div className="mt-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full disabled:opacity-50"
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <span>Sending...</span>
              <ReloadIcon className="ml-2 animate-spin" />
            </div>
          ) : (
            <div className="flex items-center">
              <span>Send Message</span>
              <PaperPlaneIcon className="ml-2" />
            </div>
          )}
        </Button>

        {/* Status Message */}
        {statusMessage && (
          <p
            className={`mt-4 rounded-md px-4 py-2 text-center text-sm font-medium ${
              isError
                ? "border border-red-300 bg-red-100 text-red-700"
                : "border border-green-300 bg-green-100 text-green-700"
            }`}
          >
            {statusMessage}
          </p>
        )}

        {/* Privacy Note */}
        <p className="mt-4 text-xs text-muted-foreground">
          By submitting this form, I agree to the{" "}
          <Link href="/privacy" className="link font-semibold">
            privacy&nbsp;policy.
          </Link>
        </p>
      </div>
    </form>
  );
}
