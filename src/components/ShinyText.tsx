import { motion, useReducedMotion } from "motion/react";

type ShinyTextProps = {
    text: string;
    className?: string;
    color?: string;
    shineColor?: string;
    speed?: number;
    delay?: number;
};

export function ShinyText({
    text,
    className = "",
    color = "#cfd6c9",
    shineColor = "#ffffff",
    speed = 5,
    delay = 0,
}: ShinyTextProps) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{
                opacity: 1,
                y: 0,
                backgroundPosition: prefersReducedMotion ? "50% 50%" : ["0% 50%", "200% 50%"],
            }}
            transition={{
                opacity: { duration: 0.45, delay },
                y: { duration: 0.45, delay },
                backgroundPosition: prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: speed, repeat: Infinity, ease: "linear", delay },
            }}
            className={`inline-block bg-clip-text text-transparent ${className}`}
            style={{
                backgroundImage: `linear-gradient(120deg, ${color} 24%, ${shineColor} 48%, ${color} 72%)`,
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}
        >
            {text}
        </motion.span>
    );
}