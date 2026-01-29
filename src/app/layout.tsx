import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://suryasanity.com"),
    title: {
        default: "Surya Thangavel (Surya Sanity) | Frontend Developer & UI/UX Designer",
        template: "%s | Surya Sanity"
    },
    description: "I build high-end digital stuff. Frontend Developer and UI/UX Designer obsessed with cinematic interfaces and clean code. Known in the lab as Surya Sanity (Surya Thangavel).",
    keywords: [
        "Surya Sanity", "Surya Thangavel", "Sanity Codes",
        "Frontend Developer", "UI/UX Designer", "React Engineer",
        "Next.js Architect", "Flutter Developer", "Creative Developer"
    ],
    authors: [{ name: "Surya Sanity" }, { name: "Surya Thangavel" }],
    creator: "Surya Sanity",
    publisher: "Surya Sanity",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Surya Sanity | Frontend Developer & UI/UX Designer",
        description: "I build high-end digital stuff. Cinematic interfaces, clean code, and premium performance.",
        url: "https://suryasanity.com",
        siteName: "Surya Sanity",
        images: [
            {
                url: "/surya.jpeg",
                width: 1200,
                height: 630,
                alt: "Surya Sanity Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Surya Sanity | Frontend Architect",
        description: "Building premium digital experiences. Pushing the boundaries of the modern web.",
        images: ["/surya.jpeg"],
        creator: "@suryasanity",
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${montserrat.variable} antialiased bg-dark1 text-white font-montserrat relative`}>
                <div className="blueGlow" />
                {children}
            </body>
        </html>
    );
}
