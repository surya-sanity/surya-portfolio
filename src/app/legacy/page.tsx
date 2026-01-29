"use client";

import { useRef } from "react";
import ProfileContent from "@/components/ProfileContent";
import Works from "@/components/Works";

export default function Home() {
    const scrollRef = useRef<null | HTMLDivElement>(null);

    const triggerScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Surya Sanity",
        "alternateName": "Surya Thangavel",
        "url": "https://suryasanity.com",
        "jobTitle": "Frontend Developer & UI/UX Designer",
        "description": "Exploration of the creative lab of Surya Sanity (Surya Thangavel), focusing on Frontend Architecture and UI/UX Design.",
        "sameAs": [
            "https://github.com/surya-sanity",
            "https://www.linkedin.com/in/surya-t/",
            "https://www.instagram.com/sanitycodes/"
        ]
    };

    return (
        <main className="min-h-screen bg-dark1 font-outfit">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ProfileContent triggerScroll={triggerScroll} />
            <Works scrollRef={scrollRef} />
        </main>
    );
}
