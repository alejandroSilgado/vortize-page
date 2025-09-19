import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const OrbExporter: React.FC = () => {
  const primaryRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const smallRef = useRef<HTMLDivElement>(null);

  const exportOrb = async (ref: React.RefObject<HTMLDivElement | null>, name: string) => {
    if (ref.current) {
      const canvas = await html2canvas(ref.current, {
        backgroundColor: null,
        scale: 2,
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight
      });
      
      const link = document.createElement('a');
      link.download = `vortize-orb-${name}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  const exportAll = async () => {
    await exportOrb(primaryRef, 'primary');
    await new Promise(resolve => setTimeout(resolve, 500));
    await exportOrb(secondaryRef, 'secondary');
    await new Promise(resolve => setTimeout(resolve, 500));
    await exportOrb(accentRef, 'accent');
    await new Promise(resolve => setTimeout(resolve, 500));
    await exportOrb(smallRef, 'small');
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Exportador de Orbes Vortize
        </h1>
        
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Primary Orb */}
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <h3 className="text-white text-lg font-semibold mb-4">Primary Orb</h3>
            <div className="flex justify-center items-center h-80">
              <div 
                ref={primaryRef}
                className="vortize-orb vortize-orb-primary"
                style={{ position: 'relative', animation: 'none', filter: 'blur(1.5px)' }}
              />
            </div>
            <button 
              onClick={() => exportOrb(primaryRef, 'primary')}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Exportar Primary
            </button>
          </div>

          {/* Secondary Orb */}
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <h3 className="text-white text-lg font-semibold mb-4">Secondary Orb</h3>
            <div className="flex justify-center items-center h-80">
              <div 
                ref={secondaryRef}
                className="vortize-orb vortize-orb-secondary"
                style={{ position: 'relative', animation: 'none', filter: 'blur(1px)' }}
              />
            </div>
            <button 
              onClick={() => exportOrb(secondaryRef, 'secondary')}
              className="mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
            >
              Exportar Secondary
            </button>
          </div>

          {/* Accent Orb */}
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <h3 className="text-white text-lg font-semibold mb-4">Accent Orb</h3>
            <div className="flex justify-center items-center h-80">
              <div 
                ref={accentRef}
                className="vortize-orb vortize-orb-accent"
                style={{ position: 'relative', animation: 'none', filter: 'blur(0.8px)' }}
              />
            </div>
            <button 
              onClick={() => exportOrb(accentRef, 'accent')}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Exportar Accent
            </button>
          </div>

          {/* Small Orb */}
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <h3 className="text-white text-lg font-semibold mb-4">Small Orb</h3>
            <div className="flex justify-center items-center h-80">
              <div 
                ref={smallRef}
                className="vortize-orb vortize-orb-small"
                style={{ position: 'relative', animation: 'none', filter: 'blur(0.3px)' }}
              />
            </div>
            <button 
              onClick={() => exportOrb(smallRef, 'small')}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-teal-600 text-white rounded hover:opacity-90"
            >
              Exportar Small
            </button>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={exportAll}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-teal-600 text-white text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Exportar Todos los Orbes
          </button>
          <p className="text-gray-400 mt-4">
            Los archivos se descargarán automáticamente como PNG de alta calidad
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrbExporter;