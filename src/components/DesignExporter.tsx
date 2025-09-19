import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { 
  Building, 
  Users, 
  ChefHat,
  Palette,
  Sparkles,
  Star,
  Target,
  Award
} from 'lucide-react';

const DesignExporter: React.FC = () => {
  const exportElement = async (ref: React.RefObject<HTMLDivElement | null>, name: string) => {
    if (ref.current) {
      const canvas = await html2canvas(ref.current, {
        backgroundColor: null,
        scale: 3, // Alta resolución para impresión
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight
      });
      
      const link = document.createElement('a');
      link.download = `vortize-design-${name}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  // Crear refs para cada elemento
  const refs = {
    orb1: useRef<HTMLDivElement>(null), orb2: useRef<HTMLDivElement>(null), orb3: useRef<HTMLDivElement>(null), orb4: useRef<HTMLDivElement>(null),
    card1: useRef<HTMLDivElement>(null), card2: useRef<HTMLDivElement>(null), card3: useRef<HTMLDivElement>(null),
    badge1: useRef<HTMLDivElement>(null), badge2: useRef<HTMLDivElement>(null), badge3: useRef<HTMLDivElement>(null),
    icon1: useRef<HTMLDivElement>(null), icon2: useRef<HTMLDivElement>(null), icon3: useRef<HTMLDivElement>(null), icon4: useRef<HTMLDivElement>(null),
    button1: useRef<HTMLDivElement>(null), button2: useRef<HTMLDivElement>(null), button3: useRef<HTMLDivElement>(null),
    divider1: useRef<HTMLDivElement>(null), divider2: useRef<HTMLDivElement>(null),
    frame1: useRef<HTMLDivElement>(null), frame2: useRef<HTMLDivElement>(null), frame3: useRef<HTMLDivElement>(null),
    pattern1: useRef<HTMLDivElement>(null), pattern2: useRef<HTMLDivElement>(null),
    logo1: useRef<HTMLDivElement>(null), logo2: useRef<HTMLDivElement>(null)
  };

  const exportAll = async () => {
    const items = Object.keys(refs);
    for (let i = 0; i < items.length; i++) {
      const key = items[i] as keyof typeof refs;
      await exportElement(refs[key], key);
      await new Promise(resolve => setTimeout(resolve, 300));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            🎨 Generador de Elementos de Diseño Vortize
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Exporta todos los componentes visuales para tu brochure
          </p>
          <button 
            onClick={exportAll}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-teal-600 text-white text-lg font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg"
          >
            📥 Exportar Todos los Elementos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* ORBES Y CÍRCULOS */}
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6">
            <h3 className="text-white text-xl font-bold mb-4 text-center">🔮 Orbes</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center space-y-2">
                <div className="h-32 w-32 flex items-center justify-center">
                  <div ref={refs.orb1} className="vortize-orb vortize-orb-primary" style={{ position: 'relative', animation: 'none', width: '120px', height: '120px', filter: 'blur(1.5px)' }} />
                </div>
                <button onClick={() => exportElement(refs.orb1, 'orb-primary')} className="text-xs bg-purple-600 text-white px-3 py-1 rounded">Primary</button>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="h-32 w-32 flex items-center justify-center">
                  <div ref={refs.orb2} className="vortize-orb vortize-orb-secondary" style={{ position: 'relative', animation: 'none', width: '100px', height: '100px', filter: 'blur(1px)' }} />
                </div>
                <button onClick={() => exportElement(refs.orb2, 'orb-secondary')} className="text-xs bg-teal-600 text-white px-3 py-1 rounded">Secondary</button>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="h-32 w-32 flex items-center justify-center">
                  <div ref={refs.orb3} className="vortize-orb vortize-orb-accent" style={{ position: 'relative', animation: 'none', width: '80px', height: '80px', filter: 'blur(0.8px)' }} />
                </div>
                <button onClick={() => exportElement(refs.orb3, 'orb-accent')} className="text-xs bg-indigo-600 text-white px-3 py-1 rounded">Accent</button>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="h-32 w-32 flex items-center justify-center">
                  <div ref={refs.orb4} className="vortize-orb vortize-orb-small" style={{ position: 'relative', animation: 'none', width: '60px', height: '60px', filter: 'blur(0.3px)' }} />
                </div>
                <button onClick={() => exportElement(refs.orb4, 'orb-small')} className="text-xs bg-gradient-to-r from-purple-600 to-teal-600 text-white px-3 py-1 rounded">Small</button>
              </div>
            </div>
          </div>

          {/* TARJETAS */}
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6">
            <h3 className="text-white text-xl font-bold mb-4 text-center">📱 Tarjetas</h3>
            
            <div className="space-y-4">
              <div ref={refs.card1} className="vortize-card p-6 border border-vortize-purple-500/20">
                <div className="w-12 h-12 bg-gradient-to-br from-vortize-purple-500 to-vortize-purple-700 rounded-xl flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white text-lg font-bold mb-2">Título de Servicio</h4>
                <p className="text-gray-400 text-sm">Descripción del servicio que se ofrece.</p>
              </div>
              <button onClick={() => exportElement(refs.card1, 'card-service')} className="w-full text-xs bg-purple-600 text-white py-2 rounded">Exportar</button>

              <div ref={refs.card2} className="bg-gradient-to-br from-vortize-turquoise-400/10 to-vortize-purple-500/10 backdrop-blur border border-vortize-turquoise-400/20 rounded-xl p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-vortize-turquoise-400 to-vortize-turquoise-600 rounded-full mb-4 mx-auto">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white text-center text-lg font-bold">CTA Card</h4>
              </div>
              <button onClick={() => exportElement(refs.card2, 'card-cta')} className="w-full text-xs bg-teal-600 text-white py-2 rounded">Exportar</button>
            </div>
          </div>

          {/* BADGES E INSIGNIAS */}
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6">
            <h3 className="text-white text-xl font-bold mb-4 text-center">🏷️ Badges</h3>
            
            <div className="space-y-4">
              <div className="flex justify-center">
                <div ref={refs.badge1} className="bg-vortize-turquoise-400 text-dark-50 text-xs font-bold px-4 py-2 rounded-full">
                  Recomendado
                </div>
              </div>
              <button onClick={() => exportElement(refs.badge1, 'badge-recommended')} className="w-full text-xs bg-teal-600 text-white py-1 rounded">Exportar</button>

              <div className="flex justify-center">
                <div ref={refs.badge2} className="bg-gradient-to-r from-vortize-purple-500 to-vortize-turquoise-400 text-white text-sm font-bold px-6 py-2 rounded-full flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Premium
                </div>
              </div>
              <button onClick={() => exportElement(refs.badge2, 'badge-premium')} className="w-full text-xs bg-purple-600 text-white py-1 rounded">Exportar</button>

              <div className="flex justify-center">
                <div ref={refs.badge3} className="border-2 border-vortize-turquoise-400 text-vortize-turquoise-400 text-sm font-semibold px-6 py-2 rounded-full">
                  Nuevo Servicio
                </div>
              </div>
              <button onClick={() => exportElement(refs.badge3, 'badge-new')} className="w-full text-xs bg-teal-600 text-white py-1 rounded">Exportar</button>
            </div>
          </div>

          {/* ICONOS CON FONDOS */}
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6">
            <h3 className="text-white text-xl font-bold mb-4 text-center">🎯 Iconos</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center space-y-2">
                <div ref={refs.icon1} className="w-16 h-16 bg-gradient-to-br from-vortize-purple-500 to-vortize-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <button onClick={() => exportElement(refs.icon1, 'icon-corporate')} className="text-xs bg-purple-600 text-white px-2 py-1 rounded">Corporativo</button>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div ref={refs.icon2} className="w-16 h-16 bg-gradient-to-br from-vortize-turquoise-400 to-vortize-turquoise-600 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <button onClick={() => exportElement(refs.icon2, 'icon-team')} className="text-xs bg-teal-600 text-white px-2 py-1 rounded">Team</button>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div ref={refs.icon3} className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <ChefHat className="w-8 h-8 text-white" />
                </div>
                <button onClick={() => exportElement(refs.icon3, 'icon-catering')} className="text-xs bg-orange-600 text-white px-2 py-1 rounded">Catering</button>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div ref={refs.icon4} className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <button onClick={() => exportElement(refs.icon4, 'icon-design')} className="text-xs bg-cyan-600 text-white px-2 py-1 rounded">Diseño</button>
              </div>
            </div>
          </div>

          {/* BOTONES */}
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6">
            <h3 className="text-white text-xl font-bold mb-4 text-center">🔘 Botones</h3>
            
            <div className="space-y-4">
              <div ref={refs.button1} className="btn-primary text-white font-semibold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 text-lg">
                <Sparkles className="w-5 h-5" />
                Botón Principal
              </div>
              <button onClick={() => exportElement(refs.button1, 'button-primary')} className="w-full text-xs bg-purple-600 text-white py-1 rounded">Exportar</button>

              <div ref={refs.button2} className="btn-secondary font-semibold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 text-lg">
                <Target className="w-5 h-5" />
                Botón Secundario
              </div>
              <button onClick={() => exportElement(refs.button2, 'button-secondary')} className="w-full text-xs bg-gray-600 text-white py-1 rounded">Exportar</button>

              <div ref={refs.button3} className="border-2 border-vortize-turquoise-400 text-vortize-turquoise-400 font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2">
                <Award className="w-5 h-5" />
                Botón Outline
              </div>
              <button onClick={() => exportElement(refs.button3, 'button-outline')} className="w-full text-xs bg-teal-600 text-white py-1 rounded">Exportar</button>
            </div>
          </div>

          {/* DIVISORES */}
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6">
            <h3 className="text-white text-xl font-bold mb-4 text-center">➖ Divisores</h3>
            
            <div className="space-y-6">
              <div>
                <div ref={refs.divider1} className="w-full h-1 bg-gradient-to-r from-transparent via-vortize-turquoise-400 to-transparent rounded-full"></div>
                <button onClick={() => exportElement(refs.divider1, 'divider-gradient')} className="w-full mt-2 text-xs bg-teal-600 text-white py-1 rounded">Divisor Gradiente</button>
              </div>

              <div>
                <div ref={refs.divider2} className="flex items-center justify-center">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-vortize-purple-500"></div>
                  <div className="mx-4 w-3 h-3 bg-vortize-turquoise-400 rounded-full"></div>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-vortize-purple-500"></div>
                </div>
                <button onClick={() => exportElement(refs.divider2, 'divider-dot')} className="w-full mt-2 text-xs bg-purple-600 text-white py-1 rounded">Divisor con Punto</button>
              </div>
            </div>
          </div>

          {/* MARCOS Y FRAMES */}
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6">
            <h3 className="text-white text-xl font-bold mb-4 text-center">🖼️ Marcos</h3>
            
            <div className="space-y-4">
              <div ref={refs.frame1} className="border-2 border-transparent bg-gradient-to-r from-vortize-purple-500 via-vortize-turquoise-400 to-vortize-purple-500 bg-clip-border p-px rounded-xl">
                <div className="bg-gray-800 rounded-xl p-4">
                  <div className="text-center text-white text-sm">Marco Gradiente</div>
                </div>
              </div>
              <button onClick={() => exportElement(refs.frame1, 'frame-gradient')} className="w-full text-xs bg-purple-600 text-white py-1 rounded">Exportar</button>

              <div ref={refs.frame2} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-vortize-turquoise-400 to-vortize-purple-500 rounded-xl blur-sm opacity-60"></div>
                <div className="relative bg-gray-800 rounded-xl p-4 border border-white/10">
                  <div className="text-center text-white text-sm">Marco con Glow</div>
                </div>
              </div>
              <button onClick={() => exportElement(refs.frame2, 'frame-glow')} className="w-full text-xs bg-teal-600 text-white py-1 rounded">Exportar</button>
            </div>
          </div>

          {/* PATRONES */}
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6">
            <h3 className="text-white text-xl font-bold mb-4 text-center">🌀 Patrones</h3>
            
            <div className="space-y-4">
              <div ref={refs.pattern1} className="w-full h-20 vortize-pattern-organic opacity-30 rounded-lg"></div>
              <button onClick={() => exportElement(refs.pattern1, 'pattern-organic')} className="w-full text-xs bg-purple-600 text-white py-1 rounded">Patrón Orgánico</button>

              <div ref={refs.pattern2} className="w-full h-20 relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-vortize-purple-500/20 via-vortize-turquoise-400/20 to-vortize-purple-500/20"></div>
                <div className="absolute inset-0" style={{
                  background: `radial-gradient(circle at 25% 25%, rgba(172, 65, 242, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(121, 242, 230, 0.1) 0%, transparent 50%)`
                }}></div>
              </div>
              <button onClick={() => exportElement(refs.pattern2, 'pattern-dots')} className="w-full text-xs bg-teal-600 text-white py-1 rounded">Patrón de Puntos</button>
            </div>
          </div>

          {/* LOGOS ESTILIZADOS */}
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6">
            <h3 className="text-white text-xl font-bold mb-4 text-center">🏢 Logos</h3>
            
            <div className="space-y-4">
              <div ref={refs.logo1} className="flex items-center justify-center p-6 bg-gradient-to-br from-vortize-purple-500/10 to-vortize-turquoise-400/10 rounded-xl border border-vortize-turquoise-400/20">
                <div className="text-3xl font-black text-white">VORTIZE</div>
              </div>
              <button onClick={() => exportElement(refs.logo1, 'logo-text')} className="w-full text-xs bg-purple-600 text-white py-1 rounded">Logo Texto</button>

              <div ref={refs.logo2} className="flex items-center justify-center p-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-vortize-purple-500 to-vortize-turquoise-400 rounded-full flex items-center justify-center">
                    <div className="text-white font-bold text-xl">V</div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-vortize-turquoise-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <button onClick={() => exportElement(refs.logo2, 'logo-icon')} className="w-full text-xs bg-teal-600 text-white py-1 rounded">Logo Icono</button>
            </div>
          </div>

        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6">
            <h3 className="text-white text-xl font-bold mb-4">📦 Exportación Completa</h3>
            <p className="text-gray-300 mb-6">
              Todos los elementos se exportarán en alta resolución (3x) con fondo transparente, 
              perfectos para usar en diseños impresos como brochures, flyers y presentaciones.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-vortize-purple-500/20 rounded-lg p-4">
                <div className="text-2xl mb-2">🎨</div>
                <div className="text-white font-semibold">25+ Elementos</div>
                <div className="text-gray-400 text-sm">Orbes, tarjetas, iconos, botones</div>
              </div>
              <div className="bg-vortize-turquoise-400/20 rounded-lg p-4">
                <div className="text-2xl mb-2">📐</div>
                <div className="text-white font-semibold">Alta Resolución</div>
                <div className="text-gray-400 text-sm">3x scale para impresión</div>
              </div>
              <div className="bg-vortize-purple-500/20 rounded-lg p-4">
                <div className="text-2xl mb-2">🔄</div>
                <div className="text-white font-semibold">PNG Transparente</div>
                <div className="text-gray-400 text-sm">Listo para cualquier fondo</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DesignExporter;