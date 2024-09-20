"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs
    } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about
const about = {
    title: "About me",
    description: "Lorem Upsum",
    info: [
        {
            fieldName: "Name",
            fieldValue: ""
        },
        {
            fieldName: "Phone",
            fieldValue: "1234"
        },
        {
            fieldName: "Experience",
            fieldValue: "12+ Year"
        },
        {
            fieldName: "Insta",
            fieldValue: "steff"
        },
        {
            fieldName: "Nationality",
            fieldValue: "German"
        },
        {
            fieldName: "Email",
            fieldValue: "steffen@test.de"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Deutsch"
        },
    ]
}

const experience = {
    title: 'My Experience',
    description: 'Lorem Ipsum',
    items: [
        {
            icon: <FaHtml5 />,
            name: 'test',
        },
        {
            icon: <FaCss3 />,
            name: 'test',
        },
        {
            icon: <FaJs />,
            name: 'test',
        },
        {
            icon: <FaReact />,
            name: 'test',
        },
        {
            icon: <FaNodeJs />,
            name: 'test',
        },
    ]
}

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Experience',
    description: 'Lorem Ipsum',
    items: [
        {
            company: "test",
            position: "Full Stack",
            duration: "2022"
        },
        {
            company: "test",
            position: "Full Stack",
            duration: "2022"
        },
        {
            company: "bla",
            position: "Full Stack",
            duration: "2022"
        }
    ]
}

const skills = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description: 'Lorem Ipsum',
    items: [
        {
            company: "test",
            position: "Full Stack",
            duration: "2022"
        },
        {
            company: "test",
            position: "Full Stack",
            duration: "2022"
        },
        {
            company: "bla",
            position: "Full Stack",
            duration: "2022"
        }
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Tooltip } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area"

export default function Resume() {
    return (
        <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
        }}
                    className="min-h-[100vh] flex items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="tablist flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about-me">About me</TabsTrigger>
                    </TabsList>

                    {/* Content */}
                    <div className="min-h-[70vh]">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea class="h-[400px]">
                                    <ul>
                                        {experience.items.map((item, index)=> {
                                            return <li key="index">
                                                <span>{item.icon}</span>
                                            </li>
                                            })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education">
                            <div>Education content</div>
                        </TabsContent>
                        <TabsContent value="skills">
                            <div>Skills content</div>
                        </TabsContent>
                        <TabsContent value="about-me">
                            <div>About me content</div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}

