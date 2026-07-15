"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "../Container";
import { projects } from "@/data/project";

const statusConfig = {
    completed: { label: "Completed", dot: "bg-emerald-400" },
    "in-progress": { label: "In Progress", dot: "bg-blue-400" },
    planned: { label: "Planned", dot: "bg-zinc-400" },
};

function ProjectGallery({ images, title }: { images: string[]; title: string }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        const container = scrollRef.current;

        if (!container) return;

        const index = Math.round(container.scrollLeft / container.clientWidth);

        setActiveIndex(index);
    };

    return (
        <div>
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
            >
                {images.map((image, index) => (
                    <div
                        key={image}
                        className="relative h-64 w-full flex-shrink-0 snap-center overflow-hidden bg-zinc-900/70 shadow-lg shadow-black/20 sm:h-96"
                    >
                        <Image
                            src={image}
                            alt={`${title} screenshot ${index + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>

            {images.length > 1 && (
                <div className="flex justify-center gap-1.5 py-3">
                    {images.map((image, index) => (
                        <span
                            key={image}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex
                                ? "w-5 bg-white"
                                : "w-1.5 bg-zinc-600"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="py-16"
        >
            <Container>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Projects
                </h2>

                <div className="mt-12 space-y-8">
                    {projects.map((project) => {
                        const status = statusConfig[project.status];

                        return (
                            <div
                                key={project.title}
                                className="rounded-3xl border border-zinc-700 bg-zinc-900/70 shadow-lg shadow-black/20 transition-all duration-300 hover:border-zinc-500"
                            >
                                <ProjectGallery
                                    images={project.images}
                                    title={project.title}
                                />

                                <div className="p-6">
                                    <div className="flex items-center gap-2">
                                        <span className={`h-2 w-2 rounded-full ${status.dot}`} />
                                        <span className="text-sm text-zinc-400">
                                            {status.label}
                                        </span>
                                        <span className="ml-auto text-sm text-zinc-500">
                                            {project.timeline}
                                        </span>
                                    </div>

                                    <h3 className="mt-4 text-xl font-semibold">
                                        {project.title}
                                    </h3>

                                    <p className="mt-1 text-zinc-400">
                                        {project.subtitle}
                                    </p>

                                    <p className="mt-3 leading-7 text-zinc-400">
                                        {project.description}
                                    </p>

                                    <div className="mt-6 grid grid-cols-2 gap-4 border-t border-zinc-800 pt-6 sm:grid-cols-3">
                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                                                Role
                                            </p>
                                            <p className="mt-1 text-sm font-medium text-zinc-200">
                                                {project.role}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                                                Project
                                            </p>
                                            <p className="mt-1 text-sm font-medium text-zinc-200">
                                                {project.project}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                                                Team
                                            </p>
                                            <p className="mt-1 text-sm font-medium text-zinc-200">
                                                {project.team}
                                            </p>
                                        </div>
                                    </div>

                                    {project.link && (

                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 inline-block text-sm font-medium text-white underline underline-offset-4 transition hover:text-zinc-300"
                                        >
                                            View Live Project
                                        </a>
                                    )}

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1 text-xs text-zinc-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section >
    );
}