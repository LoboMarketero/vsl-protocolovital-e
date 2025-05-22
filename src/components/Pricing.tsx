import React from 'react';
import CTAButton from './CTAButton';
import { CheckCircle, Tablet, FileText, Video, ClipboardList } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  text: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="text-jade-600 flex-shrink-0">
        {icon}
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

const Pricing: React.FC = () => {
  const features = [
    {
      icon: <FileText className="h-5 w-5" />,
      text: "4 fases com instruções detalhadas"
    },
    {
      icon: <ClipboardList className="h-5 w-5" />,
      text: "Ingredientes acessíveis (menos de R$150)"
    },
    {
      icon: <Video className="h-5 w-5" />,
      text: "Vídeos rápidos de apoio para cada etapa"
    },
    {
      icon: <Tablet className="h-5 w-5" />,
      text: "Guia de sintomas + planner visual"
    }
  ];

  return (
    <section className="section-spacing bg-white/30" id="pricing">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title animate-on-scroll">Tudo isso por apenas R$19,90</h2>
          
          <div className="text-center mb-8 animate-on-scroll">
            <p className="text-lg text-gray-700">
              Preço único para acesso completo ao protocolo, passo a passo diário e guia visual
            </p>
          </div>
          
          <div className="glass-card p-6 md:p-8 mb-8 animate-on-scroll">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/5">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-jade-400/20 to-coral-400/20 rounded-2xl blur-md"></div>
                  <img 
                    src="https://images.pexels.com/photos/5417682/pexels-photo-5417682.jpeg" 
                    alt="Protocolo 4F" 
                    className="w-full h-auto rounded-xl relative z-10"
                  />
                </div>
              </div>
              
              <div className="md:w-3/5">
                <h3 className="text-2xl font-bold text-jade-600 mb-4">O que você vai receber:</h3>
                
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <Feature key={index} {...feature} />
                  ))}
                </div>
                
                <div className="mt-8">
                  <CTAButton 
                    text="QUERO MEU PROTOCOLO AGORA" 
                    className="w-full text-center"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-jade-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  <span className="font-bold">Acesso imediato</span>: Você recebe o protocolo completo no seu email em até 5 minutos após a confirmação do pagamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;