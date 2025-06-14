import React from 'react';
import { Check } from 'lucide-react';

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
        <h2 className="section-title animate-on-scroll hidden-content">Seu Protocolo Completo</h2>
        
        <div className="text-center mb-4 text-coral-500 font-semibold animate-on-scroll hidden-content">
          Apenas 50 protocolos liberados hoje
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glass-card p-6 md:p-8 transition-all duration-300 hover:shadow-xl animate-on-scroll hidden-content">
            <div className="text-center mb-6">
              <p className="text-gray-600 mb-4">Tudo que você precisa para sua transformação</p>
              <div className="text-4xl font-bold text-jade-700 mb-2">R$ 29,90</div>
              <div className="text-coral-500 font-semibold">Oferta especial por tempo limitado</div>
            </div>

            <div className="space-y-3 mb-8">
              <PlanFeature text="Protocolo completo 21 dias (4 fases)" highlighted />
              <PlanFeature text="6 vídeos educacionais" highlighted />
              <PlanFeature text="Guias visuais passo a passo" highlighted />
              <PlanFeature text="Checklists detalhados" highlighted />
              <PlanFeature text="Lista de compras completa" highlighted />
              <PlanFeature text="Guia de Manutenção Pós-Protocolo" highlighted />
              <PlanFeature text="25 Receitas Extras Turbinadas" highlighted />
              <PlanFeature text="Tracker Avançado com gráficos" highlighted />
              <PlanFeature text="Protocolo Turbinado (15 dias)" highlighted />
              <PlanFeature text="Coach Virtual IA" highlighted />
              <PlanFeature text="Analytics Premium" highlighted />
              <PlanFeature text="1 mês GRÁTIS Comunidade VIP (valor R$ 37)" highlighted />
              <PlanFeature text="Notificações Premium" highlighted />
              <PlanFeature text="Suporte prioritário" highlighted />
            </div>

            <a 
              href="https://pay.risepay.com.br/Pay/bc822b1f82da46a3b7fc4b6d9483c7ef"
              className="block w-full text-center button-primary text-lg py-4"
            >
              COMEÇAR MINHA TRANSFORMAÇÃO AGORA
            </a>
            
            <div className="text-center mt-4 text-sm text-gray-600">
              <p>✅ Acesso imediato após o pagamento</p>
              <p>✅ Garantia de 7 dias ou seu dinheiro de volta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;