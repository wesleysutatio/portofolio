import Container from "../Container";
import { experiences } from "@/data/experiences";

export default function ExperienceSection() {
    return (
        <section
            id="experience"
            className="py-16"
        >
            <Container>
                <div className="w-full">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Experiences
                    </h2>

                    <div className="relative mt-16">
                        <div className="absolute left-4 top-0 h-full w-px bg-zinc-700" />

                        <div className="space-y-6">
                            {experiences.map((experience) => (
                                <div
                                    key={experience.organization}
                                    className="relative pl-16"
                                >
                                    <div className="absolute left-[7px] top-8 h-4 w-4 rounded-full border-4 border-zinc-950 bg-white" />

                                    <div className="rounded-3xl border border-zinc-700 bg-zinc-900/70 p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-zinc-500 hover:bg-zinc-800/80">
                                        <h3 className="text-xl font-semibold">
                                            {experience.organization}
                                        </h3>

                                        <div className="mt-4 space-y-4">
                                            {experience.roles.map((role, index) => (
                                                <div key={`${role.title}-${index}`}>
                                                    {index > 0 && (
                                                        <div className="mb-4 border-t border-zinc-800" />
                                                    )}

                                                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                                        <h4 className="text-lg font-medium text-zinc-200">
                                                            {role.title}
                                                        </h4>

                                                        <div className="text-left lg:text-right">
                                                            <p className="text-sm text-zinc-300">
                                                                {role.period}
                                                            </p>

                                                            <p className="mt-1 text-sm text-zinc-500">
                                                                {role.duration}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <p className="mt-3 leading-7 text-zinc-400">
                                                        {role.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}