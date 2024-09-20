"use client";

import { useState, FormEvent } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Telefon",
        description: "0170 248 29 71"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "me@steffenluebben.de"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Adresse",
        description: "Sag ich nicht"
    },
];

export default function ContactPage() {
    const [formResponse, setFormResponse] = useState(null);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setFormResponse(data);
            console.log(data);
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
            className="py-6 min-h-[100vh]"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Formular */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form onSubmit={onSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input className="inputsItem" type="text" name="firstname" placeholder="Vorname" />
                                <Input className="inputsItem" type="text" name="lastname" placeholder="Nachname" />
                                <Input className="inputsItem" type="email" name="email" placeholder="Email" />
                                <Input className="inputsItem" type="text" name="mobil" placeholder="Mobil" />
                            </div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="web-development">Web Development</SelectItem>
                                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                                    <SelectItem value="logo-design">Logo Design</SelectItem>
                                </SelectContent>
                            </Select>
                            <Textarea name="message" placeholder="Your message" />
                            <Button size="lg" className="max-w-40">Nachricht senden</Button>
                        </form>
                        {formResponse && (
                            <div className="mt-4 text-white">
                                <p>Form submitted successfully!</p>
                                <pre>{JSON.stringify(formResponse, null, 2)}</pre>
                            </div>
                        )}
                    </div>
                    {/* Kontaktinformationen */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
