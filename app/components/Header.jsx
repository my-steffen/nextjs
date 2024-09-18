import Link from "next/link"
import { Button } from "./ui/button";
// components
import  Nav from "./Nav"
import MobileNav from "./MobileNav";
const Header = () => {
    return (
        <header className={'py-8 xl:py-12 text-[#414140]'}>
            <div className="container mx-auto flex justify-between items-center">
                {/*Logo*/}
                <Link href={'/'}>
                    <h1 className="text-4xl font-semibold">
                        test<span className="text-accent">.</span>
                    </h1>
                </Link>

                {/*Desktop nav*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href="/contact">
                        <Button className={'bg-accent text-primary rounded-full border-2 border-accent transition-all duration-500 hover:text-white hover:border-accent-hover hover:border-1'}>hire me</Button>
                    </Link>
                </div>

                {/*mobile nav*/}
                <div className="xl:hidden">
                   <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default Header;