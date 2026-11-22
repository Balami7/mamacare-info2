"use client";

import { useState } from "react";
import Image from "next/image";
import StoreBadges from "./store-badges";
import StaggerText from "./stagger-text";

const SCREENS = [
    {
        id: "home",
        label: "Home",
        src: "/assets/images/app-screen-home.png",
        alt: "MamaCare App Home Screen",
    },
    {
        id: "dark",
        label: "Dark Mode",
        src: "/assets/images/app-screen-dark.png",
        alt: "MamaCare App Dark Mode",
    },
    {
        id: "profile",
        label: "Profile",
        src: "/assets/images/app-screen-profile.png",
        alt: "MamaCare App Profile Screen",
    },
];

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-0">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                {/* Left column */}
                <div>
                    <StaggerText
                        as="h1"
                        text="Your Pregnancy Journey, Our Care"
                        className="mt-2 text-4xl font-bold leading-tight text-gray-900 sm:mt-6 sm:text-5xl"
                    />

                    <p className="mt-3 max-w-md text-base text-gray-600 sm:mt-5">
                        MamaCare is your smart companion through every step of pregnancy.
                        Track your health, stay informed and feel supported every day.
                    </p>

                    <div className="mt-4 w-full sm:mt-8">
                        <div className="mx-auto w-fit lg:mx-0">
                            <StoreBadges size="md" />
                        </div>
                    </div>
                </div>

                {/* Right column - phone mockup with screenshot switcher */}
                <div className="flex flex-col items-center justify-center">
                    <div className="relative rounded-[46px] sm:rounded-[52px] bg-[#111827] p-2.5 sm:p-3 shadow-2xl ring-1 ring-black/10">
                        <div className="relative overflow-hidden rounded-[36px] sm:rounded-[42px] bg-white">
                            <Image
                                key={SCREENS[activeIndex].id}
                                src={SCREENS[activeIndex].src}
                                alt={SCREENS[activeIndex].alt}
                                width={360}
                                height={780}
                                className="h-auto w-[220px] sm:w-[280px] lg:w-[310px] object-cover transition-opacity duration-300"
                                priority
                            />
                        </div>
                    </div>

                    {/* Screenshot switcher pills centered under the mockup */}
                    <div className="mt-4 flex items-center justify-center gap-1.5 rounded-full bg-white/90 p-1 shadow-sm backdrop-blur-sm border border-emerald-100">
                        {SCREENS.map((screen, idx) => (
                            <button
                                key={screen.id}
                                type="button"
                                onClick={() => setActiveIndex(idx)}
                                className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
                                    activeIndex === idx
                                        ? "bg-[#1A7A4A] text-white shadow-xs"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                                {screen.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}