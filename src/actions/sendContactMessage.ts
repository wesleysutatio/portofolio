"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormState {
    success: boolean;
    message: string;
}

export async function sendContactMessage(
    _prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const subject = formData.get("subject")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !subject || !message) {
        return { success: false, message: "Please input all fields!" };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return { success: false, message: "Email format is invalid!" };
    }

    try {
        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL as string,
            replyTo: email,
            subject: `[Portfolio] ${subject}`,
            text: `Name: ${name}\n\nEmail: ${email}\n\nSubject: ${subject}\n\nMessage:\n\n${message}`,
        });

        return {
            success: true,
            message: "Message has been sent! Thank you for reaching out, I'll try to respond as fast as possible.",
        };
    } catch (error) {
        console.error("Failed to send contact email:", error);

        return {
            success: false,
            message: "Failed to send email, please try again.",
        };
    }
}