"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from "next/link";

const services = [
    {
        num: '01',
        title: 'Web Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium architecto dolore dolorum eveniet explicabo fugit hic, illum, maiores, maxime omnis possimus quisquam repellendus rerum sint tempora tempore tenetur veritatis.',
        href: ""
    },
    {
        num: '02',
        title: 'Web Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium architecto dolore dolorum eveniet explicabo fugit hic, illum, maiores, maxime omnis possimus quisquam repellendus rerum sint tempora tempore tenetur veritatis.',
        href: ""
    },
    {
        num: '03',
        title: 'Web Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium architecto dolore dolorum eveniet explicabo fugit hic, illum, maiores, maxime omnis possimus quisquam repellendus rerum sint tempora tempore tenetur veritatis.',
        href: ""
    },
    {
        num: '04',
        title: 'Web Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium architecto dolore dolorum eveniet explicabo fugit hic, illum, maiores, maxime omnis possimus quisquam repellendus rerum sint tempora tempore tenetur veritatis.',
        href: ""
    }
]

import { motion } from "framer-motion";

export default function Services() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
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
                       return <div key={index} className="flex flex-1 flex-col justify-center gap-6 group cardBlock">
                           <div className="flex w-full justify-between items-center">
                               <div className="text-6xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                   {service.num}
                               </div>
                               <Link href={service.href} className="arrow w-[70px] h-[70px] rounded-full bg-[#414140] group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                   <BsArrowDownRight className="text-primary text-3xl" />
                               </Link>
                           </div>
                           <Link href={service.href}>
                                <h2 className="text-[42px] link font-bold loading-none text-[#414140] group-hover:text-accent transition-all duration-500">{service.title}</h2>
                           </Link>
                           <p className="text-[#414140]/60">{service.description}</p>
                           <div className="border-b border-white/20 w-full"></div>
                       </div>
                   })}
               </motion.div>
           </div>
        </section>
    );
}
