"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <main className="h-screen flex flex-col items-center justify-center bg-dark1 text-white font-montserrat p-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
            >
                <h1 className="text-8xl font-black purplePinkGradient">404</h1>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Lost in the Lab?</h2>
                    <p className="text-white/60 max-w-md mx-auto">
                        The page you're looking for was either discarded or has yet to be architected.
                    </p>
                </div>
                <Link
                    href="/"
                    className="inline-block px-8 py-3 rounded-xl bg-blue font-bold hover:scale-105 transition-transform"
                >
                    Return Home
                </Link>
            </motion.div>
        </main>
    );
}
