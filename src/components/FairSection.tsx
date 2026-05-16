import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
    BadgeCheck,
    MapPinned,
    Search,
} from "lucide-react";

export function FairSection() {
    const { t } = useTranslation();

    return (
        <section id="fair" className="relative overflow-hidden bg-[#0c1d18] py-16 text-white md:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,201,106,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.05),_transparent_30%)]" />
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.65 }}
                    className="space-y-6 md:space-y-8"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-white/72 backdrop-blur-sm">
                        {t("fair.tag")}
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
                        <div className="space-y-5">
                            <h2 className="max-w-4xl font-display text-[2.45rem] font-medium uppercase leading-[0.95] tracking-[0.05em] text-white md:text-[3.6rem] lg:text-[4.45rem]">
                            {t("fair.title")}
                            </h2>
                            <p className="max-w-2xl text-[0.96rem] leading-relaxed text-white/72 md:text-[1.08rem]">
                                {t("fair.subtitle")}
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 18 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.55, delay: 0.08 }}
                            className="space-y-4 border-l border-white/10 pl-0 lg:pl-8"
                        >
                            <div className="text-[0.62rem] uppercase tracking-[0.35em] text-white/42">{t("fair.panel.featuredLabel")}</div>
                            <div className="max-w-lg text-lg font-medium leading-tight text-white md:text-[1.7rem]">
                                {t("fair.panel.featuredTitle")}
                            </div>
                            <p className="max-w-lg text-sm leading-relaxed text-white/66 md:text-[0.95rem]">
                                {t("fair.panel.communityText")}
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid gap-6 border-y border-white/10 py-6 md:grid-cols-3 md:gap-8 md:py-8">
                        {[
                            { icon: Search, key: "search" },
                            { icon: MapPinned, key: "location" },
                            { icon: BadgeCheck, key: "verification" },
                        ].map(({ icon: Icon, key }, index) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.35 }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 text-lime-neon">
                                        <Icon size={18} />
                                    </div>
                                    <div className="text-xs uppercase tracking-[0.3em] text-white/45">0{index + 1}</div>
                                </div>
                                <h3 className="text-[0.96rem] font-semibold uppercase tracking-[0.1em] text-white md:text-[1.1rem]">{t(`fair.cards.${key}.title`)}</h3>
                                <p className="max-w-sm text-sm leading-relaxed text-white/68">{t(`fair.cards.${key}.description`)}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <a
                            href="#app"
                            className="inline-flex items-center gap-2 border-b border-lime-neon/60 px-0 py-2 text-sm font-semibold uppercase tracking-[0.26em] text-lime-neon transition-all duration-300 hover:translate-x-1"
                        >
                            {t("fair.primaryCta")}
                        </a>
                        <a
                            href="#features"
                            className="inline-flex items-center gap-2 border-b border-white/30 px-0 py-2 text-sm font-semibold uppercase tracking-[0.26em] text-white transition-all duration-300 hover:translate-x-1"
                        >
                            {t("fair.secondaryCta")}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}