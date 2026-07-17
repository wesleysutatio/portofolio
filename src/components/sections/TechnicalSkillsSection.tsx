import Container from "../Container";
import { skills } from "@/data/skills";

import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaJava,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiTypescript,
    SiDotnet,
    SiMysql,
    SiPython,
    SiCplusplus,
} from "react-icons/si";

const skillColors: Record<string, string> = {
    "C++": "#00599C",
    "HTML": "#E34F26",
    "CSS": "#1572B6",
    "JavaScript": "#F7DF1E",
    "Python": "#3776AB",
    "MySQL": "#4479A1",
    "ASP.NET": "#512BD4",
    "ASPX": "#512BD4",
    "Java": "#F89820",
    "React.js": "#61DAFB",
    "Next.js": "#FAFAFA",
    "TypeScript": "#3178C6",
};

function getSkillIcon(name: string) {
    switch (name) {
        case "C++":
            return <SiCplusplus size={42} />;

        case "HTML":
            return <FaHtml5 size={42} />;

        case "CSS":
            return <FaCss3Alt size={42} />;

        case "JavaScript":
            return <FaJs size={42} />;

        case "Python":
            return <SiPython size={42} />;

        case "MySQL":
            return <SiMysql size={42} />;

        case "ASP.NET":
            return <SiDotnet size={42} />;

        case "ASPX":
            return <SiDotnet size={42} />;

        case "Java":
            return <FaJava size={42} />;

        case "React.js":
            return <FaReact size={42} />;

        case "Next.js":
            return <SiNextdotjs size={42} />;

        case "TypeScript":
            return <SiTypescript size={42} />;

        default:
            return null;
    }
}

export default function TechnicalSkillsSection() {
    return (
        <section
            id="skills"
            className="py-16"
        >
            <Container>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Technical Skills
                </h2>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="rounded-3xl border border-zinc-700 bg-zinc-900/70 p-8 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:bg-zinc-800/80 hover:shadow-xl hover:shadow-accent/20"
                        >
                            <div style={{ color: skillColors[skill.name] ?? "#e4e4e7" }}>
                                {getSkillIcon(skill.name)}
                            </div>

                            <h3 className="mt-6 text-xl font-semibold">
                                {skill.name}
                            </h3>

                            <p className="mt-2 text-zinc-400">
                                {skill.percentage}%
                            </p>

                            <div className="mt-6 h-2 overflow-hidden rounded-full bg-zinc-800">
                                <div
                                    className="h-full rounded-full bg-accent"
                                    style={{
                                        width: `${skill.percentage}%`,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}