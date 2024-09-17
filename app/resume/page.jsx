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
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description: 'Lorem Ipsum'
}


export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
        </div>
    );
}

