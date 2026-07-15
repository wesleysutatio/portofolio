"use client";

import { useActionState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Container from "../Container";
import { contactLinks } from "@/data/contact";
import { sendContactMessage, type ContactFormState } from "@/actions/sendContactMessage";

const iconMap = {
    linkedin: FaLinkedin,
    github: FaGithub,
    instagram: FaInstagram,
    whatsapp: FaWhatsapp,
    email: FaEnvelope,
};

const initialState: ContactFormState = { success: false, message: "" };

export default function ContactSection() {
    const [state, formAction, isPending] = useActionState(
        sendContactMessage,
        initialState
    );

    return (
        <section id="contact" className="py-16">
            <Container>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Contact
                </h2>

                <p className="mt-4 max-w-2xl text-zinc-400">
                    Let&apos;s build something together, feel free to reach
                    out for collaborations, job opportunities, or just to say
                    hi!
                </p>

                <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <form
                        action={formAction}
                        className="rounded-3xl border border-zinc-700 bg-zinc-900/70 p-6 shadow-lg shadow-black/20 sm:p-8"
                    >
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="text-sm text-zinc-400">
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition focus:border-zinc-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-sm text-zinc-400">
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition focus:border-zinc-500"
                                />
                            </div>
                        </div>

                        <div className="mt-5">
                            <label htmlFor="subject" className="text-sm text-zinc-400">
                                Subject
                            </label>

                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                required
                                className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition focus:border-zinc-500"
                            />
                        </div>

                        <div className="mt-5">
                            <label htmlFor="message" className="text-sm text-zinc-400">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="mt-2 w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition focus:border-zinc-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isPending}
                            style={{ cursor: isPending ? "not-allowed" : "pointer" }}
                            className="mt-6 w-full rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02] disabled:opacity-60"
                        >
                            {isPending ? "Sending..." : "Send Message"}
                        </button>

                        {state.message && (
                            <p
                                className={`mt-4 text-sm ${state.success ? "text-emerald-400" : "text-red-400"
                                    }`}
                            >
                                {state.message}
                            </p>
                        )}
                    </form>

                    <div className="flex flex-col gap-6">

                        <div className="grid gap-4 sm:grid-cols-2">
                            {contactLinks.map((link) => {
                                const Icon = iconMap[link.icon];

                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 rounded-2xl border border-zinc-700 bg-zinc-900/70 p-5 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-500 hover:bg-zinc-800/80"
                                    >
                                        <Icon size={22} className="text-zinc-200" />

                                        <span className="font-medium text-zinc-200">
                                            {link.label}
                                        </span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
