import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative pt-4 pb-8 md:pt-6 md:pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-mint-100 to-white/50 opacity-70 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xl mb-4 animate-on-scroll">            
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-jade-700 mb-3 leading-tight text-center">
              Seu protocolo já está pronto!
            </h1>
          </div>

          <div className="w-full max-w-md mb-4">
            <div style={{position: 'relative', paddingTop: '177.77777777777777%'}}>
              <iframe 
                id="panda-3cccc2a2-419f-40a7-a19e-976b4b3b04a2" 
                src="https://player-vz-ff1d2603-87c.tv.pandavideo.com.br/embed/?v=3cccc2a2-419f-40a7-a19e-976b4b3b04a2" 
                style={{border: 'none', position: 'absolute', top: 0, left: 0}} 
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
                allowFullScreen={true}
                width="100%" 
                height="100%" 
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;