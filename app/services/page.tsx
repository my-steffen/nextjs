"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from "next/link";

const services = [
    {
        num: '01',
        title: 'Web-Developer',
        description: 'Individuelle Webentwicklungslösungen, perfekt abgestimmt auf Ihre Anforderungen und Technologien wie REDAXO, Vue.js und Next.js.',
        href: "#"
    },
    {
        num: '02',
        title: 'UI/UX Design',
        description: 'Entwicklung von benutzerfreundlichen und visuell ansprechenden Interfaces, die Funktionalität und Design perfekt verbinden.',
        href: "#"
    },
    {
        num: '03',
        title: 'E-Commerce Lösungen',
        description: 'Optimierte E-Commerce-Erlebnisse mit Shopware 6 – maßgeschneiderte Online-Shops, die Kunden begeistern und Umsatz steigern.',
        href: "#"
    },
    {
        num: '04',
        title: 'CMS',
        description: 'Effiziente Content-Management-Systeme für jedes Projekt: von Redaxo über October CMS und Typo3 bis hin zu WordPress – flexibel und auf Ihre Anforderungen zugeschnitten.',
        href: "#"
    }
];


import { motion } from "framer-motion";

export default function Services() {
    return (
        <section className="min-h-[100vh] flex flex-col justify-center py-12 xl:py-0">
           <div className="container mx-auto">
               <motion.div initial={{opacity: 0}}
                           animate={{
                             opacity: 1,
                             transition: {
                                 delay: 2.4,
                                 duration: 0.4,
                                 ease: "easeIn"
                             },
                           }}
                           className="grid grid-cols-1cd  md:grid-cols-2 gap-[60px]"
               >

                   {services.map((service, index)=> {
                       return <div key={index} className="flex flex-1 flex-col justify-center gap-6 group cardBlock p-5 rounded-lg">
                           <div className="flex w-full justify-between items-center">
                               <div className="text-6xl font-extrabold text-outline text-primary group-hover:text-outline-hover transition-all duration-500">
                                   {service.num}
                               </div>
                               <Link href={service.href} className="arrow w-[70px] h-[70px] rounded-full bg-[#14141f] group-hover:bg-primary/90 transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                   <BsArrowDownRight className="text-white text-3xl" />
                               </Link>
                           </div>
                           <Link href={service.href}>
                                <h2 className="text-[42px] link font-bold loading-none text-primary group-hover:text-primary/90 transition-all duration-500">{service.title}</h2>
                           </Link>
                           <p className="text-primary/80">{service.description}</p>
                           {/*<div className="border-b border-white/20 w-full"></div>*/}
                       </div>
                   })}
               </motion.div>
           </div>
        </section>
    );
}
