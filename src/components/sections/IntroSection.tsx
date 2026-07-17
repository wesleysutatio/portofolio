"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import { smoothScrollTo } from "@/lib/smoothScroll";

const SCROLL_DURATION = 800;
const ACCORDION_DURATION = 0.7;

export default function IntroSection() {
    const [mounted, setMounted] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (!mounted) return;

        window.dispatchEvent(new CustomEvent("scroll-lock", { detail: true }));

        const raf = requestAnimationFrame(() => {
            smoothScrollTo("about-section", SCROLL_DURATION);

            setTimeout(() => {
                setExpanded(true);
            }, SCROLL_DURATION);
        });

        const totalDuration = SCROLL_DURATION + ACCORDION_DURATION * 1000;

        const unlockTimer = setTimeout(() => {
            window.dispatchEvent(new CustomEvent("scroll-lock", { detail: false }));
        }, totalDuration);

        return () => {
            cancelAnimationFrame(raf);
            clearTimeout(unlockTimer);
        };
    }, [mounted]);

    const handleLearnMore = () => {
        setMounted(true);
    };

    const handleShowLess = () => {
        window.dispatchEvent(new CustomEvent("scroll-lock", { detail: true }));

        smoothScrollTo("about", SCROLL_DURATION);

        setTimeout(() => {
            setExpanded(false);
        }, SCROLL_DURATION);

        const totalDuration = SCROLL_DURATION + ACCORDION_DURATION * 1000;

        setTimeout(() => {
            setMounted(false);
        }, totalDuration);

        setTimeout(() => {
            window.dispatchEvent(new CustomEvent("scroll-lock", { detail: false }));
        }, totalDuration);
    };

    return (
        <>
            <Hero onLearnMore={handleLearnMore} showAbout={mounted} />

            {mounted && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: expanded ? "auto" : 0,
                        opacity: expanded ? 1 : 0,
                    }}
                    transition={{
                        duration: ACCORDION_DURATION,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                    style={{ overflow: "hidden" }}
                >
                    <AboutSection onShowLess={handleShowLess} />
                </motion.div>
            )}
        </>
    );
}