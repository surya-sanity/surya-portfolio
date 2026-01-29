export interface TechStyle {
    bg: string;
    text: string;
}

export const getTechStyle = (tech: string): TechStyle => {
    const styles: Record<string, TechStyle> = {
        "Flutter": { bg: "#02569B", text: "#FFFFFF" },
        "React JS": { bg: "#00BCF1", text: "#000000" }, // Bright cyan needs black text
        "Redux JS": { bg: "#764ABC", text: "#FFFFFF" },
        "Tailwind CSS": { bg: "#06B6D4", text: "#000000" }, // Bright teal needs black text
        "Firebase": { bg: "#FFCA28", text: "#000000" }, // Yellow needs black text
        "React Native": { bg: "#61DAFB", text: "#000000" },
        "Typescript": { bg: "#3178C6", text: "#FFFFFF" },
        "Javascript": { bg: "#F7DF1E", text: "#000000" }, // Yellow needs black text
        "Node JS": { bg: "#339933", text: "#FFFFFF" },
        "NextJS": { bg: "#FFFFFF", text: "#000000" },
        "Figma": { bg: "#F24E1E", text: "#FFFFFF" },
        "SEO": { bg: "#7A8288", text: "#FFFFFF" },
    };

    return styles[tech] || { bg: "#333333", text: "#FFFFFF" };
};
