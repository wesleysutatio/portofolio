"use client";

import Image from "next/image";
import { HiChevronUp } from "react-icons/hi";
import Container from "../Container";
import { heroData } from "@/data/hero";
import { smoothScrollTo } from "@/lib/smoothScroll";

type HeroProps = {
    onLearnMore: () => void;
    showAbout: boolean;
};

export default function Hero({ onLearnMore, showAbout }: HeroProps) {
    return (
        <section id="about" className="flex min-h-screen items-center">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                    <div>
                        <div className="mb-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/60 px-4 py-2 text-sm text-zinc-200 backdrop-blur-md">
                            {heroData.badge}
                        </div>

                        <h1 className="max-w-4xl  whitespace-nowrap text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            {heroData.title}
                        </h1>

                        <h1 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            {heroData.title2}
                        </h1>

                        <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400">
                            {heroData.description}
                        </p>

                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <div className="relative">

                                <a
                                    href="#about-section"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onLearnMore();
                                    }}
                                    className="inline-block rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
                                >
                                    Learn More
                                </a>

                                {!showAbout && (
                                    <div className="absolute left-1/2 top-full mt-5 flex -translate-x-1/2 flex-col items-center gap-1 text-base text-zinc-500">
                                        <HiChevronUp size={16} className="animate-bounce" />
                                        <span className="whitespace-nowrap text-center leading-snug">
                                            Click Me !
                                        </span>
                                    </div>
                                )}
                            </div>

                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    smoothScrollTo("contact");
                                }}
                                className="inline-block rounded-full border border-zinc-700 px-6 py-3 font-medium text-white transition hover:border-zinc-500"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    <div className="order-first flex justify-center lg:order-last lg:justify-end">
                        <div className="overflow-hidden rounded-full border border-zinc-700 shadow-2xl">
                            <Image
                                src={heroData.image}
                                alt="Wesley Sutatio"
                                width={380}
                                height={380}
                                priority
                                className="h-[320px] w-[320px] object-cover object-center sm:h-[360px] sm:w-[360px] lg:h-[380px] lg:w-[380px]"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}