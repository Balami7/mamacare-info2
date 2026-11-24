"use client";

import { useState } from "react";
import {
    Heart,
    Bell,
    Check,
    Volume2,
    VolumeX,
    MessageCircle,
    User,
    Sparkles,
    Calendar,
    Footprints,
    Pill,
    Send,
    Play,
    Pause,
    ChevronRight,
} from "lucide-react";

export default function PhonePreview({ isDark = false }: { isDark?: boolean }) {
    const [currentTab, setCurrentTab] = useState<"home" | "ai" | "community" | "profile">("home");
    const [isPlayingAudio, setIsPlayingAudio] = useState(false);
    const [medTaken, setMedTaken] = useState(false);
    const [walkMinutes, setWalkMinutes] = useState(6);
    const [aiInput, setAiInput] = useState("");
    const [aiMessages, setAiMessages] = useState<Array<{ sender: "user" | "ai"; text: string }>>([
        {
            sender: "ai",
            text: "Hello Mama! You are 33 weeks pregnant today. Your baby is the size of a pineapple. How can I help you today?",
        },
    ]);

    const handleSendAi = (textToSend?: string) => {
        const text = (textToSend || aiInput).trim();
        if (!text) return;
        const newMsgs = [...aiMessages, { sender: "user" as const, text }];
        setAiMessages(newMsgs);
        setAiInput("");

        setTimeout(() => {
            let reply = "In Week 33, mild swelling and backaches are normal. Ensure you stay well hydrated, rest with your legs elevated, and do your daily 10-minute walk.";
            if (text.toLowerCase().includes("food") || text.toLowerCase().includes("eat")) {
                reply = "Focus on calcium and iron-rich foods like leafy greens, milk, and lentils as your baby's bones are hardening rapidly in week 33!";
            } else if (text.toLowerCase().includes("kick") || text.toLowerCase().includes("movement")) {
                reply = "Your baby should have active movement sessions every day. You should feel at least 10 kicks or movements within 2 hours of quiet resting.";
            }
            setAiMessages((prev) => [...prev, { sender: "ai", text: reply }]);
        }, 600);
    };

    return (
        <div className={`w-full h-full flex flex-col text-left select-none text-xs transition-colors duration-200 ${isDark ? "bg-[#0B1510] text-gray-100" : "bg-[#F7FAF8] text-gray-800"}`}>
            {/* Phone Status Bar */}
            <div className={`flex items-center justify-between px-5 pt-3 pb-1 text-[10px] font-semibold tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2 rounded-2xs border border-current flex items-center justify-end pr-0.5">
                        <span className="w-1 h-1 bg-current rounded-3xs"></span>
                    </span>
                </div>
            </div>

            {/* App Content */}
            <div className="flex-1 overflow-y-auto px-4 pb-20">
                {currentTab === "home" && (
                    <div className="space-y-3.5 pt-2">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div>
                                <p className={`text-[11px] ${isDark ? "text-gray-400" : "text-gray-500"}`}>Good afternoon,</p>
                                <h2 className="text-base font-extrabold tracking-tight">Mama Blessing</h2>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className={`relative w-8 h-8 rounded-full flex items-center justify-center ${isDark ? "bg-[#162B20] text-emerald-400" : "bg-emerald-50 text-emerald-700"}`}>
                                    <Bell size={14} />
                                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-xs">
                                    MB
                                </div>
                            </div>
                        </div>

                        {/* Week 33 Main Card */}
                        <div className="relative rounded-2xl p-4 text-white shadow-sm overflow-hidden bg-gradient-to-br from-[#1A7A4A] to-[#125A36]">
                            <div className="relative z-10 flex items-start justify-between">
                                <div className="space-y-1">
                                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/20 uppercase tracking-wider">
                                        Third Trimester
                                    </span>
                                    <h3 className="text-2xl font-black tracking-tight leading-none pt-1">Week 33</h3>
                                    <p className="text-[11px] text-emerald-100 opacity-90 pt-0.5">
                                        Baby is the size of a pineapple 🍍
                                    </p>
                                </div>
                                <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center text-2xl shadow-inner">
                                    👶
                                </div>
                            </div>

                            {/* Interactive Audio Advice Pill */}
                            <button
                                type="button"
                                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                                className={`mt-3.5 w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                                    isPlayingAudio
                                        ? "bg-white text-emerald-800 shadow-md"
                                        : "bg-white/20 hover:bg-white/30 text-white"
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    {isPlayingAudio ? (
                                        <Pause size={13} className="text-emerald-700" />
                                    ) : (
                                        <Play size={13} />
                                    )}
                                    <span>
                                        {isPlayingAudio ? "Playing Week 33 Advice..." : "Listen to Week 33 Advice"}
                                    </span>
                                </div>
                                <span className="text-[10px] font-mono opacity-80">
                                    {isPlayingAudio ? "0:45 / 2:30" : "2 min"}
                                </span>
                            </button>
                        </div>

                        {/* Quick Stats Row */}
                        <div className="grid grid-cols-2 gap-2.5">
                            <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${isDark ? "bg-[#132219] border-emerald-950/60" : "bg-white border-gray-100 shadow-2xs"}`}>
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                                    <Calendar size={15} />
                                </div>
                                <div>
                                    <p className={`text-[10px] ${isDark ? "text-gray-400" : "text-gray-500"}`}>Days to Go</p>
                                    <p className="text-sm font-bold">49 Days</p>
                                </div>
                            </div>
                            <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${isDark ? "bg-[#132219] border-emerald-950/60" : "bg-white border-gray-100 shadow-2xs"}`}>
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                                    <Heart size={15} />
                                </div>
                                <div>
                                    <p className={`text-[10px] ${isDark ? "text-gray-400" : "text-gray-500"}`}>Baby Weight</p>
                                    <p className="text-sm font-bold">~1.9 kg</p>
                                </div>
                            </div>
                        </div>

                        {/* Today's Reminders */}
                        <div className="space-y-2 pt-1">
                            <div className="flex items-center justify-between">
                                <h4 className="text-xs font-bold tracking-tight">Today&apos;s Reminders</h4>
                                <span className={`text-[10px] ${isDark ? "text-emerald-400" : "text-emerald-700"} font-semibold`}>
                                    Tap to complete
                                </span>
                            </div>

                            {/* Medication Reminder */}
                            <button
                                type="button"
                                onClick={() => setMedTaken(!medTaken)}
                                className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                                    medTaken
                                        ? isDark ? "bg-[#162A1F] border-emerald-700/60 text-emerald-300" : "bg-emerald-50 border-emerald-200 text-emerald-900"
                                        : isDark ? "bg-[#132219] border-gray-800" : "bg-white border-gray-100 shadow-2xs"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${medTaken ? "bg-emerald-600 text-white" : "bg-emerald-500/10 text-emerald-600"}`}>
                                        <Pill size={15} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold">Pregnancy Multivitamins</p>
                                        <p className={`text-[10px] ${medTaken ? "text-emerald-700" : isDark ? "text-gray-400" : "text-gray-500"}`}>
                                            {medTaken ? "Completed · 8:00 AM" : "Scheduled · 8:00 AM"}
                                        </p>
                                    </div>
                                </div>
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                                    medTaken ? "bg-emerald-600 border-emerald-600 text-white" : isDark ? "border-gray-600" : "border-gray-300"
                                }`}>
                                    {medTaken && <Check size={12} strokeWidth={3} />}
                                </div>
                            </button>

                            {/* Daily Walk Reminder */}
                            <button
                                type="button"
                                onClick={() => setWalkMinutes((m) => (m >= 10 ? 0 : m + 2))}
                                className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                                    walkMinutes >= 10
                                        ? isDark ? "bg-[#162A1F] border-emerald-700/60 text-emerald-300" : "bg-emerald-50 border-emerald-200 text-emerald-900"
                                        : isDark ? "bg-[#132219] border-gray-800" : "bg-white border-gray-100 shadow-2xs"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${walkMinutes >= 10 ? "bg-emerald-600 text-white" : "bg-emerald-500/10 text-emerald-600"}`}>
                                        <Footprints size={15} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold">Daily Walk</p>
                                        <p className={`text-[10px] ${walkMinutes >= 10 ? "text-emerald-700 font-semibold" : isDark ? "text-gray-400" : "text-gray-500"}`}>
                                            {walkMinutes >= 10 ? "Goal reached · 10 / 10 min" : `${walkMinutes} / 10 min completed`}
                                        </p>
                                    </div>
                                </div>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${walkMinutes >= 10 ? "bg-emerald-200 text-emerald-800" : "bg-gray-100 text-gray-600"}`}>
                                    +2m
                                </span>
                            </button>
                        </div>
                    </div>
                )}

                {currentTab === "ai" && (
                    <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between border-b pb-2.5 border-gray-100 dark:border-gray-800">
                            <div>
                                <h3 className="text-sm font-bold flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                                    <Sparkles size={14} /> Mama AI Assistant
                                </h3>
                                <p className="text-[10px] text-gray-500">Instant answers 24/7</p>
                            </div>
                        </div>

                        {/* Chat Messages */}
                        <div className="space-y-2.5 min-h-[220px]">
                            {aiMessages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] rounded-2xl px-3 py-2 text-[11px] leading-relaxed ${
                                            msg.sender === "user"
                                                ? "bg-[#1A7A4A] text-white rounded-br-xs"
                                                : isDark
                                                    ? "bg-[#162A1F] text-gray-100 rounded-bl-xs border border-emerald-900/40"
                                                    : "bg-white text-gray-800 rounded-bl-xs border border-gray-100 shadow-2xs"
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quick Prompts */}
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar">
                            {[
                                "Is back pain normal in week 33?",
                                "What foods should I eat now?",
                                "Kick counts guide",
                            ].map((prompt) => (
                                <button
                                    key={prompt}
                                    type="button"
                                    onClick={() => handleSendAi(prompt)}
                                    className={`px-2.5 py-1 rounded-full text-[10px] whitespace-nowrap border transition-colors cursor-pointer ${
                                        isDark
                                            ? "bg-[#132219] border-emerald-900/60 text-emerald-300 hover:bg-[#1A2E22]"
                                            : "bg-white border-emerald-100 text-emerald-800 hover:bg-emerald-50"
                                    }`}
                                >
                                    {prompt}
                                </button>
                            ))}
                        </div>

                        {/* Input Box */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSendAi();
                            }}
                            className="flex items-center gap-2 pt-1"
                        >
                            <input
                                type="text"
                                placeholder="Ask Mama AI anything..."
                                value={aiInput}
                                onChange={(e) => setAiInput(e.target.value)}
                                className={`flex-1 px-3 py-2 rounded-xl text-xs outline-none border transition-colors ${
                                    isDark
                                        ? "bg-[#132219] border-gray-800 text-white placeholder-gray-500 focus:border-emerald-600"
                                        : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-emerald-600"
                                }`}
                            />
                            <button
                                type="submit"
                                className="w-8 h-8 rounded-xl bg-[#1A7A4A] text-white flex items-center justify-center hover:bg-emerald-700 transition-colors cursor-pointer"
                            >
                                <Send size={13} />
                            </button>
                        </form>
                    </div>
                )}

                {currentTab === "community" && (
                    <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between border-b pb-2 border-gray-100 dark:border-gray-800">
                            <h3 className="text-sm font-bold">Mothers Community</h3>
                            <span className="text-[10px] text-emerald-600 font-semibold">1,240 moms active</span>
                        </div>
                        {[
                            {
                                name: "Amina K.",
                                week: "Week 34",
                                topic: "#MidwifeTip",
                                text: "My doctor recommended drinking warm water with lemon for digestion and it helped so much!",
                                likes: 24,
                            },
                            {
                                name: "Dr. Adebayo (Midwife)",
                                isExpert: true,
                                topic: "#ClinicalAdvice",
                                text: "Remember to do your kick counts twice daily now in your third trimester.",
                                likes: 58,
                            },
                        ].map((post, i) => (
                            <div
                                key={i}
                                className={`p-3 rounded-xl border space-y-1.5 ${
                                    isDark ? "bg-[#132219] border-gray-800" : "bg-white border-gray-100 shadow-2xs"
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-[9px] flex items-center justify-center">
                                            {post.name.charAt(0)}
                                        </div>
                                        <span className="font-bold text-xs">{post.name}</span>
                                        {post.isExpert && (
                                            <span className="text-[9px] font-bold px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded">
                                                EXPERT
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 dark:bg-emerald-950 px-1.5 py-0.5 rounded">
                                        {post.topic}
                                    </span>
                                </div>
                                <p className="text-[11px] leading-relaxed text-gray-600 dark:text-gray-300">
                                    {post.text}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {currentTab === "profile" && (
                    <div className="space-y-3 pt-2 text-center">
                        <div className="w-14 h-14 rounded-full bg-emerald-700 text-white font-extrabold text-lg flex items-center justify-center mx-auto shadow-sm">
                            MB
                        </div>
                        <div>
                            <h3 className="text-sm font-bold">Blessing Okon</h3>
                            <p className="text-[11px] text-emerald-600 font-semibold">Week 33 · Due Oct 12</p>
                        </div>
                        <div className={`p-3 rounded-xl border text-left space-y-2 ${isDark ? "bg-[#132219] border-gray-800" : "bg-white border-gray-100 shadow-2xs"}`}>
                            <div className="flex justify-between text-xs">
                                <span className="font-semibold">Plan</span>
                                <span className="font-bold text-emerald-600">Pro Member</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="font-semibold">Consultations</span>
                                <span className="font-bold">2 sessions</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="font-semibold">Walk Streak</span>
                                <span className="font-bold">12 days 🔥</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Tab Bar */}
            <div className={`absolute bottom-0 left-0 right-0 h-14 border-t flex items-center justify-around px-2 ${isDark ? "bg-[#0B1510] border-emerald-950" : "bg-white border-gray-100 shadow-lg"}`}>
                <button
                    type="button"
                    onClick={() => setCurrentTab("home")}
                    className={`flex flex-col items-center gap-0.5 cursor-pointer transition-colors ${currentTab === "home" ? "text-[#1A7A4A] font-bold" : "text-gray-400"}`}
                >
                    <Heart size={16} />
                    <span className="text-[9px]">Home</span>
                </button>
                <button
                    type="button"
                    onClick={() => setCurrentTab("ai")}
                    className={`flex flex-col items-center gap-0.5 cursor-pointer transition-colors ${currentTab === "ai" ? "text-[#1A7A4A] font-bold" : "text-gray-400"}`}
                >
                    <Sparkles size={16} />
                    <span className="text-[9px]">Mama AI</span>
                </button>
                <button
                    type="button"
                    onClick={() => setCurrentTab("community")}
                    className={`flex flex-col items-center gap-0.5 cursor-pointer transition-colors ${currentTab === "community" ? "text-[#1A7A4A] font-bold" : "text-gray-400"}`}
                >
                    <MessageCircle size={16} />
                    <span className="text-[9px]">Community</span>
                </button>
                <button
                    type="button"
                    onClick={() => setCurrentTab("profile")}
                    className={`flex flex-col items-center gap-0.5 cursor-pointer transition-colors ${currentTab === "profile" ? "text-[#1A7A4A] font-bold" : "text-gray-400"}`}
                >
                    <User size={16} />
                    <span className="text-[9px]">Profile</span>
                </button>
            </div>
        </div>
    );
}
