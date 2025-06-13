import React from 'react';
import { Check, Star } from 'lucide-react';

interface PlanFeatureProps {
  text: string;
  highlighted?: boolean;
}

const PlanFeature: React.FC<PlanFeatureProps> = ({ text, highlighted }) => (
  <div className="flex items-center gap-2 mb-2">
    <Check className={`h-5 w-5 ${highlighted ? 'text-coral-400' : 'text-jade-600'}`} />
    <span className={highlighted ? 'font-semibold' : ''}>{text}</span>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section className="section-spacing bg-white/30" id="pricing">
      <div className="container-custom">
        <h2 className="section-title animate-on-scroll">Escolha seu plano</h2>
        
        <div className="text-center mb-4 text-coral-500 font-semibold animate-on-scroll">
          Apenas 50 protocolos liberados hoje
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Plano Essencial */}
          <div className="glass-card p-6 transition-all duration-300 hover:shadow-xl animate-on-scroll">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-jade-600">Plano Essencial</h3>
              <p className="text-gray-600 mb-4">Para começar sua transformação</p>
              <div className="text-3xl font-bold text-jade-700">R$ 29,90</div>
            </div>

            <div className="space-y-4 mb-6">
              <PlanFeature text="Protocolo completo 21 dias (4 fases)" />
              <PlanFeature text="6 vídeos educacionais" />
              <PlanFeature text="Guias visuais passo a passo" />
              <PlanFeature text="Checklists detalhados" />
              <PlanFeature text="Lista de compras completa" />
              <PlanFeature text="Tracker de peso básico" />
              <PlanFeature text="FAQ e suporte básico" />
            </div>

            <a 
              href="https://pay.risepay.com.br/Pay/bc822b1f82da46a3b7fc4b6d9483c7ef"
              className="block w-full text-center button-primary"
            >
              COMEÇAR AGORA
            </a>
          </div>

          {/* Plano Completo */}
          <div className="glass-card p-6 transform md:-translate-y-4 relative border-2 border-coral-400 transition-all duration-300 hover:shadow-xl animate-on-scroll">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-coral-400 text-white px-4 py-1 rounded-full text-sm font-bold">
                MAIS POPULAR
              </span>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-coral-500">Plano Completo</h3>
              <p className="text-gray-600 mb-2">Resultados garantidos + manutenção</p>
              <div className="text-3xl font-bold text-coral-500 mb-2">R$ 39,90</div>
              <div className="text-jade-600 font-semibold">Economize R$ 10,00</div>
            </div>

            <div className="space-y-4 mb-6">
              <PlanFeature text="TUDO do Plano Essencial +" highlighted />
              <PlanFeature text="Guia de Manutenção Pós-Protocolo" highlighted />
              <PlanFeature text="25 Receitas Extras Turbinadas" highlighted />
              <PlanFeature text="Tracker Avançado com gráficos" highlighted />
              <PlanFeature text="Notificações Premium" highlighted />
              <PlanFeature text="Suporte prioritário" highlighted />
            </div>

            <a 
              href="https://pay.risepay.com.br/Pay/30d9a594bd3b4c7bb9d47d79b0a50b7f"
              className="block w-full text-center button-secondary text-lg py-4"
            >
              ESCOLHER COMPLETO
            </a>
          </div>

          {/* Plano Premium */}
          <div className="glass-card p-6 transition-all duration-300 hover:shadow-xl animate-on-scroll">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-mint-500">Plano Premium</h3>
              <p className="text-gray-600 mb-4">Máximos resultados + comunidade VIP</p>
              <div className="text-3xl font-bold text-mint-600">R$ 49,90</div>
            </div>

            <div className="space-y-4 mb-6">
              <PlanFeature text="TUDO do Plano Completo +" />
              <PlanFeature text="Protocolo Turbinado (15 dias)" />
              <PlanFeature text="Coach Virtual IA" />
              <PlanFeature text="Analytics Premium" />
              <PlanFeature text="1 mês GRÁTIS Comunidade VIP (valor R$ 37)" />
            </div>

            <a 
              href="https://pay.risepay.com.br/Pay/2dd937822f42436ea350637d6f9d358b"
              className="block w-full text-center bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-600 hover:to-mint-700 text-white font-montserrat font-bold py-3 px-6 rounded-lg shadow-button transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95"
            >
              QUERO O PREMIUM
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;