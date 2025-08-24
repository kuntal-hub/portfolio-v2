import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { MorphingText } from "./magicui/morphing-text";

const texts = [
    "Scalable Web Applications",
    "Modern Mobile Apps",
    "Full-Stack Solutions",
    "Custom Business Tools",
    "Real-Time Applications",
    "E-commerce Applications",
    "Custom Software Solutions",
    "Engaging User Experiences",
    "High-Performance APIs",
    "Custom Dashboards",
    "Digital Products That Drive Results",
    "Project-Based Learning for Students",
]

const Hero = () => {
    return (
        <div className="pb-16 pt-28">
            {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}

            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="blue"
            />

            {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
            <div
                className="h-screen w-full bg-black-100 bg-grid-white/[0.03]
       absolute top-0 left-0 flex items-center justify-center"
            >
                {/* Radial gradient for the container to give a faded look */}
                <div
                    // chnage the bg to bg-black-100, so it matches the bg color and will blend in
                    className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center mb-2 text-blue-100 max-w-80">
                        Ideas into Seamless Digital Reality
                    </p>

                    {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
                    <TextGenerateEffect
                        // words="Transforming Ideas into Scalable, High-Performance Web & Mobile Applications That Drive Results"
                        words="Transforming Ideas into Scalable, High-Performance Web & Mobile Applications"
                        className="text-center text-[30px] min-[420px]:text-[35px] sm:text-[40px] md:text-5xl xl:text-6xl"
                    />

                    <p className="text-center md:tracking-wider my-4 text-[#E74292] font-bold text-sm md:text-lg xl:text-xl">
                        I craft and deliver
                    </p>

                    <MorphingText texts={texts} className="text-center h-auto md:tracking-wider mb-24 md:mb-2 text-lg md:text-2xl lg:text-4xl" />

                    <a href="#our-services">
                        <MagicButton
                            title="Explore My Services"
                            mt="md:mt-1"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;