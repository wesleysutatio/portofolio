"use client";

import { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { smoothScrollTo } from "@/lib/smoothScroll";

type NavItem = {
    label: string;
    href: string;
    sectionIds: string[];
};

const navItems: NavItem[] = [
    { label: "About Me", href: "#about", sectionIds: ["about"] },
    {
        label: "Experiences & Strengths",
        href: "#experience",
        sectionIds: ["experience", "experience-skills"],
    },
    { label: "Skills", href: "#skills", sectionIds: ["skills"] },
    { label: "Projects", href: "#projects", sectionIds: ["projects"] },
    { label: "Contact", href: "#contact", sectionIds: ["contact"] },
];

const SCROLL_DURATION = 1200;

export default function Navbar() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeSection, setActiveSection] = useState("about");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const isClickScrolling = useRef(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 200);

        const handleScroll = () => {
            if (isClickScrolling.current) return;

            const scrollPosition = window.scrollY + 200;

            for (const item of navItems) {
                for (const sectionId of item.sectionIds) {
                    const section = document.getElementById(sectionId);

                    if (
                        section &&
                        scrollPosition >= section.offsetTop &&
                        scrollPosition < section.offsetTop + section.offsetHeight
                    ) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        const handleScrollLock = (e: Event) => {
            const customEvent = e as CustomEvent<boolean>;
            isClickScrolling.current = customEvent.detail;
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll-lock", handleScrollLock);

        handleScroll();

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll-lock", handleScrollLock);
        };
    }, []);

    useEffect(() => {
        const activeIndex = navItems.findIndex((item) =>
            item.sectionIds.includes(activeSection)
        );

        const activeLink = linkRefs.current[activeIndex];

        if (activeLink) {
            setIndicatorStyle({
                left: activeLink.offsetLeft,
                width: activeLink.offsetWidth,
            });
        }
    }, [activeSection, isLoaded]);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const handleNavClick = (item: NavItem) => {
        window.dispatchEvent(new CustomEvent("scroll-lock", { detail: true }));
        setActiveSection(item.sectionIds[0]);
        smoothScrollTo(item.href.replace("#", ""), SCROLL_DURATION);

        setTimeout(() => {
            window.dispatchEvent(new CustomEvent("scroll-lock", { detail: false }));
        }, SCROLL_DURATION);
    };

    const getLinkClass = (item: NavItem) => {
        const isActive = item.sectionIds.includes(activeSection);

        return isActive
            ? "relative z-10 text-sm font-medium text-white"
            : "relative z-10 text-sm text-zinc-400 transition-colors hover:text-white";
    };

    return (
        <>
            <nav
                className={`fixed md:left-1/2 left-12 top-6 z-50 -translate-x-1/2 transition-all duration-1000 ${isLoaded
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-6 opacity-0"
                    }`}
            >
                <div className="hidden whitespace-nowrap items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-900/70 px-2 py-2 shadow-lg backdrop-blur-xl md:relative md:flex">
                    <div
                        className="absolute rounded-full bg-white/10 transition-all ease-in-out"
                        style={{
                            left: indicatorStyle.left,
                            width: indicatorStyle.width,
                            height: "calc(100% - 16px)",
                            top: "8px",
                            transitionDuration: `${SCROLL_DURATION}ms`,
                        }}
                    />

                    {navItems.map((item, index) => (
                        <a
                            key={item.label}
                            ref={(el) => {
                                linkRefs.current[index] = el;
                            }}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(item);
                            }}
                            className={`rounded-full px-4 py-2 ${getLinkClass(item)}`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open menu"
                    className="cursor-pointer flex items-center justify-center rounded-full border border-zinc-700/60 bg-zinc-900/70 p-3 shadow-lg backdrop-blur-xl md:hidden"
                >
                    <HiMenu size={22} className="text-white" />
                </button>
            </nav>

            <div
                className={`fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-zinc-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${isMobileMenuOpen
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                    }`}
            >
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="cursor-pointer absolute left-6 top-6 flex items-center justify-center rounded-full border border-zinc-700/60 bg-zinc-900/70 p-3"
                >
                    <HiX size={22} className="text-white" />
                </button>

                {navItems.map((item) => {
                    const isActive = item.sectionIds.includes(activeSection);

                    return (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(item);
                                setIsMobileMenuOpen(false);
                            }}
                            className={`text-3xl font-semibold transition-colors ${isActive ? "text-white" : "text-zinc-500"
                                }`}
                        >
                            {item.label}
                        </a>
                    );
                })}
            </div>
        </>
    );
}