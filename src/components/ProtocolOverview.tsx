import React from 'react';
import { Shield, Layers, Waves, Sprout } from 'lucide-react';

interface PhaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const PhaseCard: React.FC<PhaseCardProps> = ({ 
  icon, 
  title, 
  description, 
  color,
  delay 
}) => {
  return (
    <div 
      className="glass-card p-6 transition-all duration-500 hover:shadow-xl animate-on-scroll"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const ProtocolOverview: React.FC = () => {
  const phases = [
    {
      icon: <Shield className="h-7 w-7 text-white" />,
      title: "Fase 1 – FRENAR",
      description: "Cortamos o alimento dos parasitas, reduzindo sua força.",
      color: "bg-jade-600",
      delay: 100
    },
    {
      icon: <Layers className="h-7 w-7 text-white" />,
      title: "Fase 2 – FORTALECER",
      description: "Refazemos a barreira intestinal para impedir novas infestações.",
      color: "bg-mint-500",
      delay: 200
    },
    {
      icon: <Waves className="h-7 w-7 text-white" />,
      title: "Fase 3 – FLUIR",
      description: "Expulsamos toxinas e parasitas naturalmente.",
      color: "bg-blue-500",
      delay: 300
    },
    {
      icon: <Sprout className="h-7 w-7 text-white" />,
      title: "Fase 4 – FLORESCER",
      description: "Reconstruímos a microbiota saudável e reativamos o metabolismo.",
      color: "bg-coral-400",
      delay: 400
    }
  ];

  return (
    <section className="section-spacing bg-white/50" id="overview">
      <div className="container-custom">
        <h2 className="section-title animate-on-scroll">Como funciona o método 4F?</h2>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-jade-600 via-blue-500 to-coral-400 transform -translate-y-1/2 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {phases.map((phase, index) => (
              <PhaseCard key={index} {...phase} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtocolOverview;