import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative pt-4 pb-8 md:pt-6 md:pb-12 overflow-hidden bg-gradient-to-b from-mint-100 to-white/50">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xl mb-4 animate-on-scroll">            
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-jade-700 mb-3 leading-tight text-center">
              Seu protocolo já está pronto!
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;