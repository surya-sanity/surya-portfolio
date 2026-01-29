"use client";

import ProfileContent from "@/components/ProfileContent";

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Surya Thangavel",
        "alternateName": "Surya Sanity",
        "url": "https://suryasanity.com",
        "image": "https://suryasanity.com/surya.jpeg",
        "sameAs": [
            "https://github.com/surya-sanity",
            "https://www.linkedin.com/in/surya-t/",
            "https://www.instagram.com/sanitycodes/"
        ],
        "jobTitle": "Frontend Developer & UI/UX Designer",
        "knowsAbout": ["React", "Next.js", "Flutter", "TypeScript", "UI/UX Design", "Framer Motion", "Tailwind CSS"],
        "description": "I build high-end digital stuff. Frontend Architect and UI/UX Designer obsessed with cinematic interfaces and high performance. Known professionally as Surya Sanity.",
        "worksFor": {
            "@type": "Organization",
            "name": "Surya Sanity"
        }
    };

    return (
        <main className="h-screen overflow-hidden bg-dark1">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ProfileContent triggerScroll={() => { }} hideCTA={true} />
        </main>
    );
}
