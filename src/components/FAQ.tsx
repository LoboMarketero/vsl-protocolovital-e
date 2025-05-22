import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`faq-item border-b border-gray-200 py-4 ${isOpen ? 'open' : ''}`}>
      <button 
        className="flex items-center justify-between w-full text-left font-montserrat font-semibold text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <Plus className="h-5 w-5 text-jade-600 faq-icon" />
      </button>
      
      <div className="faq-content mt-2 text-gray-700">
        <p className="py-2">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "Preciso seguir dieta junto com o protocolo?",
      answer: "Não. O protocolo funciona com qualquer tipo de alimentação. Ele age sobre os parasitas e a saúde intestinal independentemente da sua dieta atual, embora melhores hábitos alimentares possam potencializar os resultados."
    },
    {
      question: "Posso fazer mesmo tomando medicamentos?",
      answer: "Sim, é 100% compatível. O protocolo utiliza apenas ingredientes naturais que não interferem com medicamentos. De qualquer forma, sempre recomendamos informar seu médico sobre qualquer suplementação que você esteja fazendo."
    },
    {
      question: "E se eu esquecer um dia?",
      answer: "Você pode retomar sem comprometer os resultados. O ideal é seguir o protocolo diariamente, mas pular um dia ocasionalmente não prejudicará seus resultados finais. Basta continuar de onde parou."
    },
    {
      question: "É seguro para todas as idades?",
      answer: "Sim, foi testado em mulheres de 25 a 70 anos. Os ingredientes são naturais e seguros para adultos de todas as idades. Gestantes e lactantes devem consultar um médico antes de iniciar."
    },
    {
      question: "Como vou saber o que fazer em cada fase?",
      answer: "Você receberá um guia visual claro e vídeos rápidos com instruções. Cada fase do protocolo está detalhada passo a passo, com explicações simples e práticas sobre o que fazer a cada dia."
    }
  ];

  return (
    <section className="section-spacing bg-white/50" id="faq">
      <div className="container-custom">
        <h2 className="section-title animate-on-scroll">Perguntas Frequentes</h2>
        
        <div className="max-w-3xl mx-auto glass-card p-6 md:p-8 animate-on-scroll">
          <div className="space-y-2">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;