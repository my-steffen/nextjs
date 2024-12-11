"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "./components/Social";
import Photo from "@/app/components/Photo";
import Stats from "@/app/components/Stats";

const words = ["Web Developer", "Frontend Enthusiast", "UI/UX Designer"];
export default function Home() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        let typingTimeout: NodeJS.Timeout;

        if (isDeleting) {
            // Löscht den Text
            typingTimeout = setTimeout(() => {
                setDisplayedText(currentWord.substring(0, displayedText.length - 1));
                setSpeed(50);
            }, speed);
        } else {
            // Tippt den Text
            typingTimeout = setTimeout(() => {
                setDisplayedText(currentWord.substring(0, displayedText.length + 1));
                setSpeed(150);
            }, speed);
        }

        if (!isDeleting && displayedText === currentWord) {
            setTimeout(() => setIsDeleting(true), 1000); // Wartezeit, bevor gelöscht wird
        } else if (isDeleting && displayedText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length); // Nächstes Wort
        }

        return () => clearTimeout(typingTimeout);
    }, [displayedText, isDeleting]);

    return (
        <section className="min-h-[100vh]">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <motion.span
                            className="text-xl text-white"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                        >
                            {displayedText}
                            <span className="blinking-cursor">|</span>
                        </motion.span>
                        <h1 className="h1 mb-6">Hallo ich bin <br/> <span className="text-accent">Steffen</span></h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            Ich bin ein Frontend-Entwickler, der durch Animationen und interaktive Erlebnisse
                            beeindruckende Websites gestaltet. Ich setze Ihre Ideen kreativ um und mache Ihre
                            Online-Präsenz einzigartig.
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button size="lg"
                                    className="uppercase flex items-center gap-2 bg-accent text-primary rounded-full border-2 border-accent transition-all duration-500 hover:text-[#414140] hover:border-accent-hover hover:border-2 hover:text-white">
                                <span>Download CV</span>
                                <FiDownload className="text-xl"/>
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Social containerStyles="flex gap-6"
                                        iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo/>
                    </div>
                </div>
            </div>
            <Stats/>
        </section>
    );
}
