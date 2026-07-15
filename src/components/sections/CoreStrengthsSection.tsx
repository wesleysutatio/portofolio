import Container from "../Container";
import { generalskills } from "@/data/generalskills";

export default function CoreStrengthsSection() {
    return (
        <section
            id="experience-skills"
            className="py-16"
        >
            <Container>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Core Strengths
                </h2>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {generalskills.map((skill) => (
                        <div
                            key={skill.name}
                            className="rounded-3xl border border-zinc-700 bg-zinc-900/70 p-8 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-zinc-500 hover:bg-zinc-800/80"
                        >
                            <h3 className="text-2xl font-semibold">
                                {skill.name}
                            </h3>

                            <div className="mt-4 flex text-xl">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <span
                                        key={index}
                                        className={
                                            index < skill.rating
                                                ? "text-white"
                                                : "text-zinc-700"
                                        }
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}