import Container from "../Container";
import { aboutData } from "@/data/about";
import { HiChevronUp } from "react-icons/hi";

type AboutSectionProps = {
    onShowLess: () => void;
};

export default function AboutSection({ onShowLess }: AboutSectionProps) {
    return (
        <section
            id="about-section"
            className="py-16"
        >
            <Container>
                <div className="w-full">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        {aboutData.title}
                    </h2>

                    <div className="mt-12 space-y-6">
                        {aboutData.sections.map((section) => (
                            <div
                                key={section.heading}
                                className="rounded-3xl border border-zinc-700 bg-zinc-900/70 p-8 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:bg-zinc-800/80 hover:shadow-xl hover:shadow-accent/20"
                            >
                                <h3 className="text-2xl font-semibold">
                                    {section.heading}
                                </h3>

                                <p className="mt-4 whitespace-pre-line leading-8 text-zinc-400">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 flex justify-center">
                        <a
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault();
                                onShowLess();
                            }}
                            className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm text-zinc-400 transition-all duration-300 hover:border-zinc-500 hover:text-white"
                        >
                            <span>Show Less</span>
                            <HiChevronUp
                                size={16}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5"
                            />
                        </a>
                    </div>
                </div>
            </Container>
        </section >
    );
}