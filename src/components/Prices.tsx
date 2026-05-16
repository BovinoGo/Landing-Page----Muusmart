import { useTranslation } from "react-i18next";
import { Check, Star, Crown, Zap, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export function Prices() {
  const { t } = useTranslation()
  const plans = t('prices.plans', { returnObjects: true }) as Array<Plan>
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-b from-[#eef3e6] to-white" id="prices">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55 }} className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-forest-green">
            {t('prices.title')}
          </h2>
          <p className="text-lg md:text-xl text-forest-green/70 font-mulish max-w-2xl mx-auto">
            {t('prices.subtitle')}
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <PriceCard 
                plan={plan} 
                index={index}
                isHovered={hoveredPlan === index}
                onHover={() => setHoveredPlan(index)}
                onLeave={() => setHoveredPlan(null)}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }} className="text-center mt-16 p-8 bg-forest-green/5 rounded-3xl border border-forest-green/10">
          <h3 className="text-2xl font-semibold text-forest-green mb-4 font-display">
            {t('prices.customTitle')}
          </h3>
          <p className="text-forest-green/70 mb-6 font-mulish">
            {t('prices.customDesc')}
          </p>
          <button onClick={() => { window.location.href = 'https://muusmart.netlify.app/login'; }} className="bg-forest-green text-white px-8 py-3 rounded-full font-semibold hover:bg-lime-neon hover:text-forest-green transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
            {t('prices.cta.enterprise')}
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

function PriceCard({ 
  plan, 
  index, 
  isHovered, 
  onHover, 
  onLeave 
}: { 
  plan: Plan; 
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const { t } = useTranslation();
  const isPopular = index === 1; // Plan del medio como popular
  const isEnterprise = index === 2;
  
  return (
    <motion.div 
      className={`relative p-8 rounded-3xl border transition-all duration-300 ${
        isPopular 
          ? 'bg-forest-green text-white border-forest-green shadow-2xl' 
          : 'bg-gradient-to-br from-white to-white/80 text-forest-green border-forest-green/20 hover:border-lime-neon shadow-lg hover:shadow-xl'
      } ${isHovered ? 'shadow-2xl' : ''}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      role="article"
      aria-label={`${plan.name} pricing plan: ${plan.price}`}
    >
      
      {/* Popular Badge */}
      {isPopular && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-lime-neon text-forest-green px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg"
          >
            <Star size={14} />
            {t('prices.popular')}
          </motion.div>
        </motion.div>
      )}

      {/* Plan Icon */}
      <motion.div 
        animate={{ scale: isHovered ? 1.1 : 1 }}
        className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
          isPopular ? 'bg-lime-neon' : 'bg-lime-neon/20'
        }`}
      >
        {index === 0 && <Zap className={isPopular ? 'text-forest-green' : 'text-lime-neon'} size={24} />}
        {index === 1 && <Star className="text-forest-green" size={24} />}
        {index === 2 && <Crown className={isPopular ? 'text-forest-green' : 'text-lime-neon'} size={24} />}
      </motion.div>

      {/* Plan Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2 font-display">{plan.name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">{plan.price}</span>
          {plan.price !== "Gratis" && plan.price !== "免费" && plan.price !== "Free" && (
            <span className={`text-sm ml-1 ${isPopular ? 'text-white/70' : 'text-forest-green/60'}`}>
              {t('prices.perMonth')}
            </span>
          )}
        </div>
        <p className={`text-sm ${isPopular ? 'text-white/80' : 'text-forest-green/70'}`}>
          {plan.description}
        </p>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <motion.li 
            key={i} 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
            >
              <Check 
                size={16} 
                className={`mt-0.5 flex-shrink-0 ${
                  isPopular ? 'text-lime-neon' : 'text-lime-neon'
                }`} 
              />
            </motion.div>
            <span className={`text-sm ${isPopular ? 'text-white/90' : 'text-forest-green/80'}`}>
              {feature}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
          isPopular
            ? 'bg-lime-neon text-forest-green hover:bg-white'
            : 'bg-forest-green text-white hover:bg-lime-neon hover:text-forest-green'
        }`}
        onClick={() => {
          if (index === 2) {
            // Enterprise -> login (contact sales)
            window.location.href = 'https://muusmart.netlify.app/login';
          } else {
            // Starter/Premium -> register
            window.location.href = 'https://muusmart.netlify.app/register';
          }
        }}
        aria-label={`Choose ${plan.name} plan`}
      >
  {index === 0 ? t('prices.cta.free') : 
   index === 1 ? t('prices.cta.premium') : 
   t('prices.cta.enterprise')}
      </motion.button>

      {/* Enterprise Features */}
      {isEnterprise && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-3 bg-forest-green/5 rounded-lg border border-forest-green/10"
        >
          <p className="text-xs text-forest-green/60 text-center">
            {t('prices.enterpriseNote', { defaultValue: 'Incluye integración personalizada y soporte dedicado' })}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

type Plan = {
  name: string;
  price: string;
  features: string[];
  description: string;
};