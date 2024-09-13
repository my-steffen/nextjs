"use client";

import {Sheet, SheetContent, SheetTrigger, SheetClose} from './ui/sheet';
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { CiMenuFries } from 'react-icons/ci';

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
]


const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>

            <SheetContent className="flex flex-col">
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <SheetClose asChild key={index}>
                            <Link href={link.path} className="text-xl capitalize hover:text-accent transition-all">
                                {link.name}
                            </Link>
                        </SheetClose>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;