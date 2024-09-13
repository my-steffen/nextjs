import { Button } from "@/app/components/ui/button"
import { FiDownload } from "react-icons/fi"

//components
import Social from "./components/Social";
import Photo from "@/app/components/Photo";
import Stats from "@/app/components/Stats";

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Web Developer</span>
                        <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent">Steffen</span></h1>
                        <p className="max-w-[500px] mb-9 text-white/80">Lorem Ispum lala</p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button size="lg" className="uppercase flex items-center gap-2 bg-accent text-primary rounded-full border-2 border-accent transition-all duration-500 hover:text-white hover:border-accent-hover hover:border-1 ">
                                <span>Download CV</span>
                                <FiDownload className="text-xl" />
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    );
}
