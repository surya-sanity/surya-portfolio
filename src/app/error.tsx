"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="h-screen flex flex-col items-center justify-center bg-dark1 text-white font-montserrat p-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                <h1 className="text-8xl font-black text-red-500">500</h1>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">System Anomaly</h2>
                    <p className="text-white/60 max-w-md mx-auto">
                        A critical error occurred in the lab. My systems are currently under maintenance.
                    </p>
                </div>
                <button
                    onClick={() => reset()}
                    className="px-8 py-3 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-all"
                >
                    Reboot Module
                </button>
            </motion.div>
        </main>
    );
}
