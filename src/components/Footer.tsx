import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "./Container";
import { contactLinks } from "@/data/contact";

export default function Footer() {
    const githubLink = contactLinks.find((link) => link.icon === "github");
    const linkedinLink = contactLinks.find((link) => link.icon === "linkedin");

    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-800">
            <Container>
                <div className="flex flex-col items-center gap-4 py-8 text-sm text-zinc-500 sm:flex-row sm:justify-between">
                    <p>
                        Designed & Developed by{" "}
                        <span className="text-zinc-300">Wesley Sutatio</span>
                    </p>

                    <div className="flex items-center gap-6">
                        {githubLink && (
                            <a
                                href={githubLink.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition hover:text-white"
                                aria-label="GitHub"
                            >
                                <FaGithub size={18} />
                            </a>
                        )}

                        {linkedinLink && (
                            <a
                                href={linkedinLink.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition hover:text-white"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={18} />
                            </a>
                        )}
                    </div>

                    <p>&copy; {currentYear} Wesley Sutatio</p>
                </div>
            </Container>
        </footer>
    );
}