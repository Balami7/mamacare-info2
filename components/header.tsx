"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { PlayStoreIcon, AppleIcon } from "./icons";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

const BRAND_GREEN = "#1A7A4A";

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDownloadOpen, setIsDownloadOpen] = useState(false);
    const downloadRef = useRef<HTMLDivElement>(null);

    // Close download dropdown on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (downloadRef.current && !downloadRef.current.contains(event.target as Node)) {
                setIsDownloadOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex shrink-0 items-center gap-2">
                    <Image
                        src="/assets/images/logo.png"
                        alt="MamaCare"
                        width={140}
                        height={40}
                        priority
                        className="h-9 w-auto object-contain sm:h-10"
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative pb-1 text-[15px] font-medium transition-colors ${isActive
                                    ? "text-gray-900"
                                    : "text-gray-700 hover:text-gray-900"
                                    }`}
                            >
                                {link.label}
                                {isActive && (
                                    <span
                                        className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full"
                                        style={{ backgroundColor: BRAND_GREEN }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Desktop CTA with Dropdown */}
                <div className="relative hidden md:block" ref={downloadRef}>
                    <button
                        type="button"
                        onClick={() => setIsDownloadOpen((prev) => !prev)}
                        className="flex items-center gap-2 shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer shadow-sm"
                        style={{ backgroundColor: BRAND_GREEN }}
                    >
                        <span>Download App</span>
                        <ChevronDown size={16} className={`transition-transform duration-200 ${isDownloadOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isDownloadOpen && (
                        <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-black/10 z-50 animate-in fade-in zoom-in-95 duration-150">
                            <a
                                href="https://apps.apple.com/us/app/mamacare/id6787990356"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsDownloadOpen(false)}
                                className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-gray-800 hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white shrink-0">
                                    <AppleIcon className="h-4 w-4" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] text-gray-500 font-medium">Download for</div>
                                    <div className="text-sm font-bold text-gray-900">iOS (App Store)</div>
                                </div>
                            </a>

                            <a
                                href="https://play.google.com/store/apps/details?id=com.mamacareng.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsDownloadOpen(false)}
                                className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-gray-800 hover:bg-emerald-50 hover:text-emerald-900 transition-colors mt-1"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white shrink-0">
                                    <PlayStoreIcon className="h-4 w-4" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] text-gray-500 font-medium">Download for</div>
                                    <div className="text-sm font-bold text-gray-900">Android (Google Play)</div>
                                </div>
                            </a>
                        </div>
                    )}
                </div>

                {/* Mobile menu toggle */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile nav panel */}
            {isMenuOpen && (
                <nav className="border-t border-black/5 bg-white md:hidden">
                    <div className="flex flex-col gap-1 px-4 py-3">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`rounded-md px-3 py-2.5 text-[15px] font-medium ${isActive
                                        ? "bg-gray-50 text-gray-900"
                                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                        }`}
                                    style={isActive ? { borderLeft: `3px solid ${BRAND_GREEN}` } : undefined}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        
                        {/* Mobile Download Options */}
                        <div className="mt-2 pt-2 border-t border-gray-100 flex flex-col gap-2">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-1">Download App</span>
                            <a
                                href="https://apps.apple.com/us/app/mamacare/id6787990356"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-3 rounded-xl bg-black px-4 py-2.5 text-white"
                            >
                                <AppleIcon className="h-5 w-5" />
                                <div>
                                    <div className="text-[10px] text-white/70 leading-none">Download on the</div>
                                    <div className="text-sm font-semibold leading-tight">App Store (iOS)</div>
                                </div>
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.mamacareng.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-3 rounded-xl bg-black px-4 py-2.5 text-white"
                            >
                                <PlayStoreIcon className="h-5 w-5" />
                                <div>
                                    <div className="text-[10px] text-white/70 leading-none">GET IT ON</div>
                                    <div className="text-sm font-semibold leading-tight">Google Play (Android)</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
}