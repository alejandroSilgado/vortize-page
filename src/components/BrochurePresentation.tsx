import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {
  Building,
  Users,
  MapPin,
  ChefHat,
  Palette,
  MessageCircle,
  Sun,
  Moon,
  FileText,
  Presentation,
  Printer,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const BrochurePresentation: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const presentationRef = useRef<HTMLDivElement>(null);
  const totalSlides = 8;

  // Slides configuration
  const slideStyle: React.CSSProperties = {
    width: '100vw',
    height: '100vh',
    padding: isFullscreen ? '60px 80px' : window.innerWidth < 768 ? '15px 10px' : '40px 60px',
    margin: '0',
    background: isDarkMode ? '#0f0f0f' : 'white',
    boxShadow: isFullscreen ? 'none' : (isDarkMode ? '0 8px 32px rgba(0,0,0,0.6)' : '0 8px 32px rgba(0,0,0,0.15)'),
    display: 'none',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'auto',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    color: isDarkMode ? '#ffffff' : '#1a1a1a',
    borderRadius: isFullscreen ? '0' : '12px',
    boxSizing: 'border-box'
  };

  const activeSlideStyle: React.CSSProperties = {
    ...slideStyle,
    display: 'flex'
  };

  const headerStyle: React.CSSProperties = {
    position: 'absolute',
    top: '20px',
    right: '30px',
    fontSize: '16px',
    color: isDarkMode ? '#888' : '#666',
    fontWeight: 600,
    zIndex: 10
  };

  const footerStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '20px',
    right: '30px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    zIndex: 10
  };

  const logoStyle: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: 900,
    color: '#ac41f2'
  };

  const heroTitleStyle: React.CSSProperties = {
    fontSize: window.innerWidth < 768 ? 'clamp(32px, 8vw, 48px)' : 'clamp(48px, 6vw, 96px)',
    fontWeight: 900,
    lineHeight: window.innerWidth < 768 ? '1.1' : '0.9',
    marginBottom: window.innerWidth < 768 ? '20px' : '30px',
    color: isDarkMode ? '#ffffff' : '#1a1a1a',
    textAlign: window.innerWidth < 768 ? 'center' : 'left'
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: window.innerWidth < 768 ? 'clamp(24px, 6vw, 36px)' : 'clamp(36px, 5vw, 72px)',
    fontWeight: 900,
    color: '#ac41f2',
    marginBottom: window.innerWidth < 768 ? '20px' : '30px',
    lineHeight: '1.1',
    textAlign: window.innerWidth < 768 ? 'center' : 'left'
  };

  const serviceTitleStyle: React.CSSProperties = {
    fontSize: window.innerWidth < 768 ? 'clamp(18px, 4.5vw, 24px)' : 'clamp(28px, 4vw, 56px)',
    fontWeight: 900,
    color: isDarkMode ? '#ffffff' : '#1a1a1a',
    marginBottom: window.innerWidth < 768 ? '12px' : '20px',
    lineHeight: '1.2',
    textAlign: window.innerWidth < 768 ? 'center' : 'left',
    maxWidth: '100%',
    wordWrap: 'break-word'
  };

  const serviceSubtitleStyle: React.CSSProperties = {
    fontSize: window.innerWidth < 768 ? 'clamp(14px, 3vw, 18px)' : 'clamp(18px, 2.5vw, 28px)',
    color: '#79f2e6',
    fontWeight: 600,
    marginBottom: window.innerWidth < 768 ? '15px' : '25px',
    textAlign: window.innerWidth < 768 ? 'center' : 'left'
  };

  const serviceDescriptionStyle: React.CSSProperties = {
    fontSize: window.innerWidth < 768 ? 'clamp(12px, 2.2vw, 16px)' : 'clamp(16px, 1.8vw, 24px)',
    color: isDarkMode ? '#cccccc' : '#333',
    lineHeight: window.innerWidth < 768 ? '1.4' : '1.6',
    marginBottom: window.innerWidth < 768 ? '12px' : '25px',
    textAlign: window.innerWidth < 768 ? 'center' : 'left',
    maxWidth: '100%',
    wordWrap: 'break-word'
  };

  const serviceIconStyle: React.CSSProperties = {
    width: window.innerWidth < 768 ? 'clamp(60px, 12vw, 80px)' : 'clamp(80px, 8vw, 120px)',
    height: window.innerWidth < 768 ? 'clamp(60px, 12vw, 80px)' : 'clamp(80px, 8vw, 120px)',
    background: 'linear-gradient(135deg, #ac41f2, #79f2e6)',
    borderRadius: window.innerWidth < 768 ? '16px' : '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginBottom: window.innerWidth < 768 ? '15px' : '20px',
    margin: window.innerWidth < 768 ? '0 auto 15px auto' : '0 0 20px 0'
  };

  const gradientTextStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #ac41f2, #79f2e6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const orbPrimaryStyle: React.CSSProperties = {
    position: 'absolute',
    borderRadius: '50%',
    background: 'radial-gradient(circle at 30% 30%, rgba(172, 65, 242, 0.6) 0%, rgba(172, 65, 242, 0.3) 40%, rgba(172, 65, 242, 0.1) 70%, transparent 85%)',
    width: '300px',
    height: '300px',
    filter: 'blur(1px)',
    boxShadow: '0 0 60px rgba(172, 65, 242, 0.3)',
    opacity: isDarkMode ? 0.8 : 0.6
  };

  const orbSecondaryStyle: React.CSSProperties = {
    position: 'absolute',
    borderRadius: '50%',
    background: 'radial-gradient(circle at 70% 40%, rgba(121, 242, 230, 0.5) 0%, rgba(121, 242, 230, 0.25) 50%, rgba(121, 242, 230, 0.1) 75%, transparent 90%)',
    width: '250px',
    height: '250px',
    filter: 'blur(0.8px)',
    boxShadow: '0 0 50px rgba(121, 242, 230, 0.25)',
    opacity: isDarkMode ? 0.8 : 0.6
  };

  const imageFrameStyle: React.CSSProperties = {
    width: window.innerWidth < 768 ? 'clamp(150px, 40vw, 200px)' : 'clamp(250px, 25vw, 350px)',
    height: window.innerWidth < 768 ? 'clamp(150px, 40vw, 200px)' : 'clamp(250px, 25vw, 350px)',
    borderRadius: '50%',
    overflow: 'hidden',
    border: window.innerWidth < 768 ? '4px solid #ac41f2' : '6px solid #ac41f2',
    boxShadow: window.innerWidth < 768 ? '0 8px 25px rgba(172, 65, 242, 0.4)' : '0 12px 40px rgba(172, 65, 242, 0.4)',
    marginBottom: window.innerWidth < 768 ? '15px' : '20px',
    margin: window.innerWidth < 768 ? '0 auto 15px auto' : '0 0 20px 0'
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const controlsStyle: React.CSSProperties = {
    position: 'fixed',
    top: '20px',
    left: '20px',
    display: showControls ? 'flex' : 'none',
    gap: '12px',
    zIndex: 1000,
    transition: 'opacity 0.3s ease'
  };

  const navigationStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: window.innerWidth < 768 ? '15px' : '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: showControls ? 'flex' : 'none',
    alignItems: 'center',
    gap: window.innerWidth < 768 ? '8px' : '12px',
    zIndex: 1000,
    background: 'rgba(0,0,0,0.7)',
    padding: window.innerWidth < 768 ? '6px 12px' : '8px 16px',
    borderRadius: '25px',
    backdropFilter: 'blur(10px)'
  };

  const slideCounterStyle: React.CSSProperties = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    display: showControls ? 'block' : 'none',
    background: 'rgba(0,0,0,0.7)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 600,
    zIndex: 1000,
    backdropFilter: 'blur(10px)'
  };

  const buttonStyle: React.CSSProperties = {
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    background: '#ac41f2',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px'
  };

  const navButtonStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.2)',
    border: 'none',
    borderRadius: '50%',
    width: window.innerWidth < 768 ? '32px' : '40px',
    height: window.innerWidth < 768 ? '32px' : '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'white',
    transition: 'all 0.3s ease'
  };

  const exportToPDF = async () => {
    const presentation = presentationRef.current;
    if (!presentation) return;

    const slides = presentation.children;
    const pdf = new jsPDF('l', 'mm', 'a4');

    // Ocultar controles durante el proceso
    const controls = document.querySelector('[style*="position: fixed"]') as HTMLElement;
    if (controls) {
      controls.style.display = 'none';
    }

    // Precargar todas las imágenes antes de generar PDF
    const images = presentation.querySelectorAll('img');
    const imagePromises = Array.from(images).map((img: HTMLImageElement) => {
      return new Promise((resolve) => {
        if (img.complete && img.naturalWidth > 0) {
          resolve(true);
        } else {
          img.onload = () => resolve(true);
          img.onerror = () => resolve(true);
          // Recargar si no está cargada
          if (!img.complete) {
            const src = img.src;
            img.src = '';
            img.src = src;
          }
        }
      });
    });

    await Promise.all(imagePromises);

    // Aplicar estilos para PDF (optimizar para impresión)
    const tempStyle = document.createElement('style');
    tempStyle.textContent = `
      .pdf-export {
        background-color: white !important;
      }
      .pdf-export > div {
        background: white !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        margin: 0 !important;
        page-break-after: always;
        width: 1920px !important;
        height: 1080px !important;
        min-height: 1080px !important;
        max-width: none !important;
        padding: 40px 60px !important;
      }
      .pdf-export > div:last-child {
        page-break-after: avoid;
      }
      .pdf-export * {
        color: #1a1a1a !important;
      }
      .pdf-export h1, .pdf-export h2, .pdf-export h3 {
        color: #1a1a1a !important;
      }
      .pdf-export .gradient-text,
      .pdf-export span[style*="gradient"] {
        background: linear-gradient(135deg, #ac41f2, #79f2e6) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
        color: #ac41f2 !important;
      }
      .pdf-export span[style*="linear-gradient"] {
        background: linear-gradient(135deg, #ac41f2, #79f2e6) !important;
        color: white !important;
      }
      .pdf-export div[style*="position: absolute"][style*="borderRadius: 50%"] {
        display: none !important;
      }
      .pdf-export img {
        opacity: 1 !important;
        visibility: visible !important;
        display: inline-block !important;
        max-width: none !important;
        max-height: none !important;
      }
      .pdf-export div[style*="linear-gradient"][style*="color: white"] {
        background: linear-gradient(135deg, #ac41f2, #79f2e6) !important;
        color: white !important;
      }
      .pdf-export div[style*="color: #ac41f2"] {
        color: #ac41f2 !important;
      }
      .pdf-export div[style*="color: #79f2e6"] {
        color: #79f2e6 !important;
      }
    `;
    document.head.appendChild(tempStyle);
    presentation.classList.add('pdf-export');

    try {
      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i] as HTMLElement;

        // Esperar más tiempo para que se apliquen los estilos y carguen las imágenes
        await new Promise(resolve => setTimeout(resolve, 800));

        const canvas = await html2canvas(slide, {
          width: 1920,
          height: 1080,
          scale: 1,
          backgroundColor: '#ffffff',
          useCORS: true,
          allowTaint: true,
          logging: false,
          imageTimeout: 30000,
          removeContainer: true,
          scrollX: 0,
          scrollY: 0,
          foreignObjectRendering: true
        });

        const imgData = canvas.toDataURL('image/png', 1.0);

        if (i > 0) {
          pdf.addPage();
        }

        // Ajustar imagen para que no se corte
        const pageWidth = 297;
        const pageHeight = 210;
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
        const scaledWidth = imgWidth * ratio;
        const scaledHeight = imgHeight * ratio;
        const x = (pageWidth - scaledWidth) / 2;
        const y = (pageHeight - scaledHeight) / 2;

        pdf.addImage(imgData, 'PNG', x, y, scaledWidth, scaledHeight);
      }

      pdf.save('Vortize-Presentation.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      // Restaurar estilos
      document.head.removeChild(tempStyle);
      presentation.classList.remove('pdf-export');
      if (controls) {
        controls.style.display = 'flex';
      }
    }
  };

  const exportToPowerPoint = async () => {
    // Como alternativa, vamos a generar un PDF en modo presentación
    const presentation = presentationRef.current;
    if (!presentation) return;

    const slides = presentation.children;
    const pdf = new jsPDF('l', 'mm', [254, 190.5]); // Formato 16:9

    // Ocultar controles durante el proceso
    const controls = document.querySelector('[style*="position: fixed"]') as HTMLElement;
    if (controls) {
      controls.style.display = 'none';
    }

    // Aplicar estilos para presentación (modo oscuro)
    const tempStyle = document.createElement('style');
    tempStyle.textContent = `
      .ppt-export {
        background-color: #0f0f0f !important;
      }
      .ppt-export > div {
        background: #0f0f0f !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        margin: 0 !important;
        width: 1920px !important;
        height: 1080px !important;
        min-height: 1080px !important;
        max-width: none !important;
        padding: 40px 60px !important;
      }
      .ppt-export * {
        color: #ffffff !important;
      }
      .ppt-export h1, .ppt-export h2, .ppt-export h3 {
        color: #ffffff !important;
      }
      .ppt-export div[style*="color: #ac41f2"] {
        color: #ac41f2 !important;
      }
      .ppt-export div[style*="color: #79f2e6"] {
        color: #79f2e6 !important;
      }
      .ppt-export span[style*="gradient"] {
        background: linear-gradient(135deg, #ac41f2, #79f2e6) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
      }
      .ppt-export img {
        opacity: 1 !important;
        visibility: visible !important;
      }
    `;
    document.head.appendChild(tempStyle);
    presentation.classList.add('ppt-export');

    try {
      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i] as HTMLElement;

        // Esperar más tiempo para que las imágenes carguen
        await new Promise(resolve => setTimeout(resolve, 500));

        const canvas = await html2canvas(slide, {
          width: 1920,
          height: 1080,
          scale: 0.8,
          backgroundColor: '#0f0f0f',
          useCORS: true,
          allowTaint: true,
          logging: false,
          imageTimeout: 30000,
          removeContainer: true,
          scrollX: 0,
          scrollY: 0
        });

        const imgData = canvas.toDataURL('image/png', 1.0);

        if (i > 0) {
          pdf.addPage([254, 190.5]);
        }

        pdf.addImage(imgData, 'PNG', 0, 0, 254, 190.5);
      }

      pdf.save('Vortize-Presentation-Slides.pdf');
    } catch (error) {
      console.error('Error generating presentation:', error);
    } finally {
      document.head.removeChild(tempStyle);
      presentation.classList.remove('ppt-export');
      if (controls) {
        controls.style.display = 'flex';
      }
    }
  };

  const printPresentation = () => {
    const printStyles = document.createElement('style');
    printStyles.textContent = `
      @media print {
        body { margin: 0; padding: 0; background: white; }
        .brochure-presentation > div {
          page-break-after: always;
          width: 1920px !important;
          height: 1080px !important;
          transform: scale(0.4);
          transform-origin: top left;
          margin: 0 0 200px 0;
          background: white !important;
          box-shadow: none !important;
          border-radius: 0 !important;
        }
        .brochure-presentation > div:last-child {
          page-break-after: avoid;
        }
        .brochure-presentation div[style*="position: fixed"] {
          display: none !important;
        }
        .brochure-presentation div[style*="position: absolute"][style*="borderRadius: 50%"] {
          display: none !important;
        }
        @page {
          size: landscape;
          margin: 0;
        }
      }
    `;
    document.head.appendChild(printStyles);

    const controls = document.querySelector('[style*="position: fixed"]') as HTMLElement;
    if (controls) {
      controls.style.display = 'none';
    }

    window.print();

    setTimeout(() => {
      document.head.removeChild(printStyles);
      if (controls) {
        controls.style.display = 'flex';
      }
    }, 1000);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          setShowControls(!showControls);
          setIsFullscreen(!showControls);
          break;
        case 'ArrowRight':
        case ' ': // Spacebar
          e.preventDefault();
          if (currentSlide < totalSlides - 1) {
            setCurrentSlide(currentSlide + 1);
          }
          break;
        case 'ArrowLeft':
          e.preventDefault();
          if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
          }
          break;
        case 'Home':
          e.preventDefault();
          setCurrentSlide(0);
          break;
        case 'End':
          e.preventDefault();
          setCurrentSlide(totalSlides - 1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, showControls, totalSlides]);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Mapeo de servicios con sus respectivas imágenes
  const serviceImages = {
    'eventos': '/assets/photos/1. Diseño de eventos corporativos.png',
    'conferencias': '/assets/photos/2. Conferencias, seminarios y eventos corporativos.png',
    'teambuilding': '/assets/photos/3. Actividades de bienestar y team building.png',
    'btl': '/assets/photos/5. Activaciones deportivas.png',
    'catering': '/assets/photos/cathering.png',
    'diseño': '/assets/photos/diseños_3d_2d.png'
  };

  const slides = [
    // Slide 1: Portada
    () => (
      <div style={currentSlide === 0 ? activeSlideStyle : slideStyle}>
        <div style={headerStyle}>www.vortize.com</div>

        <div style={{...orbPrimaryStyle, top: '15%', right: '20%'}}></div>
        <div style={{...orbSecondaryStyle, bottom: '25%', left: '15%'}}></div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 10 }}>
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <img
              src={isDarkMode ? "/assets/logosblanconegro/image.png" : "/assets/logosblanconegro/Artboard 1 (1).png"}
              alt="Vortize Logo"
              style={{
                height: '180px',
                filter: 'drop-shadow(0 8px 30px rgba(172, 65, 242, 0.3))',
                marginBottom: '40px'
              }}
            />
          </div>

          <h1 style={heroTitleStyle}>
            CREAMOS<br/>
            EXPERIENCIAS<br/>
            <span className="gradient-text" style={gradientTextStyle}>MEMORABLES</span>
          </h1>

          <p style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', color: isDarkMode ? '#aaa' : '#666', marginBottom: '40px', fontWeight: 300, lineHeight: '1.4', maxWidth: '1200px' }}>
            Transformamos ideas en experiencias que conectan, inspiran y trascienden.
            Nuestro portafolio de servicios está diseñado para responder a diferentes
            momentos y necesidades estratégicas de tu marca.
          </p>
        </div>

        <div style={footerStyle}>
          <div style={logoStyle}>VORTIZE</div>
        </div>
      </div>
    ),

    // Slide 2: Quiénes Somos
    () => (
      <div style={currentSlide === 1 ? activeSlideStyle : slideStyle}>
        <div style={headerStyle}>Quiénes Somos</div>

        <div style={{...orbSecondaryStyle, top: '25%', right: '8%'}}></div>

        <h2 style={sectionTitleStyle}>Somos Vortize</h2>

        <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flex: 1 }}>
          <div style={{ flex: 1 }}>
            <p style={serviceDescriptionStyle}>
              <strong>Vortize</strong> es una agencia especializada en marketing experiencial y organización de eventos que transforma ideas en experiencias memorables.
            </p>

            <p style={serviceDescriptionStyle}>
              Nos enfocamos en crear conexiones auténticas entre las marcas y las personas a través de experiencias únicas que perduran en el tiempo y generan impacto real.
            </p>

            <div style={{ marginTop: '40px' }}>
              <h3 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', color: '#ac41f2' }}>
                Nuestra Propuesta de Valor
              </h3>
              <ul style={{ fontSize: '22px', lineHeight: '1.8', color: isDarkMode ? '#cccccc' : '#333', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '16px' }}>✨ <strong>Creatividad sin límites:</strong> Diseñamos experiencias únicas</li>
                <li style={{ marginBottom: '16px' }}>🎯 <strong>Enfoque estratégico:</strong> Cada evento tiene un propósito claro</li>
                <li style={{ marginBottom: '16px' }}>⚡ <strong>Ejecución impecable:</strong> Cuidamos cada detalle</li>
                <li style={{ marginBottom: '16px' }}>🌟 <strong>Resultados medibles:</strong> Impacto real y duradero</li>
              </ul>
            </div>
          </div>

          <div style={{ flex: 0.4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '60px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', fontWeight: 900, color: '#79f2e6', marginBottom: '12px' }}>100%</div>
                <div style={{ fontSize: '18px', color: isDarkMode ? '#888' : '#666', fontWeight: 500 }}>Compromiso</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', fontWeight: 900, color: '#79f2e6', marginBottom: '12px' }}>5★</div>
                <div style={{ fontSize: '18px', color: isDarkMode ? '#888' : '#666', fontWeight: 500 }}>Calificación</div>
              </div>
              <div style={{ textAlign: 'center', gridColumn: 'span 2' }}>
                <div style={{ fontSize: '48px', fontWeight: 900, color: '#79f2e6', marginBottom: '12px' }}>24h</div>
                <div style={{ fontSize: '18px', color: isDarkMode ? '#888' : '#666', fontWeight: 500 }}>Tiempo de respuesta</div>
              </div>
            </div>
          </div>
        </div>

        <div style={footerStyle}>
          <div style={logoStyle}>VORTIZE</div>
        </div>
      </div>
    )
  ];

  // Add remaining slides (3-8)...
  const serviceSlides = [
    // Slide 3: Eventos Corporativos
    {
      icon: <Building size={60} />,
      title: "Eventos Corporativos",
      subtitle: "Conferencias & Seminarios",
      description: "Gestionamos toda la logística y producción técnica de tus eventos empresariales, asegurando que tu mensaje se transmita con claridad e impacto. Desde conferencias hasta lanzamientos de producto, creamos experiencias que fortalecen tu marca.",
      features: ['Conferencias', 'Seminarios', 'Lanzamientos', 'Team Building'],
      benefit: "Fortalecer relaciones con clientes, posicionar la marca en entornos estratégicos y generar experiencias memorables alineadas con objetivos comerciales.",
      image: serviceImages.conferencias,
      imagePosition: 'right'
    },
    // Add other service slides...
  ];

  return (
    <div style={{
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      background: isDarkMode ? '#000000' : '#f5f5f5',
      color: isDarkMode ? '#ffffff' : '#1a1a1a',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative'
    }}>
      
      {/* Controls */}
      <div style={controlsStyle}>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={buttonStyle}
        >
          {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
        
        <button
          onClick={exportToPDF}
          style={{
            ...buttonStyle,
            background: '#79f2e6'
          }}
        >
          <FileText size={16} />
          Generar PDF
        </button>

        <button
          onClick={exportToPowerPoint}
          style={{
            ...buttonStyle,
            background: '#ac41f2'
          }}
        >
          <Presentation size={16} />
          Slides PDF
        </button>

        <button
          onClick={printPresentation}
          style={{
            ...buttonStyle,
            background: '#6366f1'
          }}
        >
          <Printer size={16} />
          Imprimir
        </button>
      </div>

      {/* Slide Counter */}
      <div style={slideCounterStyle}>
        {currentSlide + 1} / {totalSlides}
      </div>

      {/* Navigation */}
      <div style={navigationStyle}>
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          style={{
            ...navButtonStyle,
            opacity: currentSlide === 0 ? 0.5 : 1,
            cursor: currentSlide === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          <ChevronLeft size={24} />
        </button>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {Array.from({ length: totalSlides }, (_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: index === currentSlide ? '#ac41f2' : 'rgba(255,255,255,0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          style={{
            ...navButtonStyle,
            opacity: currentSlide === totalSlides - 1 ? 0.5 : 1,
            cursor: currentSlide === totalSlides - 1 ? 'not-allowed' : 'pointer'
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div ref={presentationRef} className="brochure-presentation">
        
        {/* Slide 1: Portada */}
        <div style={slideStyle}>
          <div style={headerStyle}>www.vortize.com</div>
          
          <div style={{...orbPrimaryStyle, top: '15%', right: '20%'}}></div>
          <div style={{...orbSecondaryStyle, bottom: '25%', left: '15%'}}></div>
          
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 10 }}>
            {/* Logo */}
            <div style={{ marginBottom: '60px', textAlign: 'center' }}>
              <img 
                src={isDarkMode ? "/assets/logosblanconegro/image.png" : "/assets/logosblanconegro/Artboard 1 (1).png"} 
                alt="Vortize Logo" 
                style={{
                  height: '180px',
                  filter: 'drop-shadow(0 8px 30px rgba(172, 65, 242, 0.3))',
                  marginBottom: '40px'
                }}
              />
            </div>
            
            <h1 style={heroTitleStyle}>
              CREAMOS<br/>
              EXPERIENCIAS<br/>
              <span className="gradient-text" style={gradientTextStyle}>MEMORABLES</span>
            </h1>
            
            <p style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', color: isDarkMode ? '#aaa' : '#666', marginBottom: '40px', fontWeight: 300, lineHeight: '1.4', maxWidth: '1200px' }}>
              Transformamos ideas en experiencias que conectan, inspiran y trascienden. 
              Nuestro portafolio de servicios está diseñado para responder a diferentes 
              momentos y necesidades estratégicas de tu marca.
            </p>
          </div>
          
          <div style={footerStyle}>
            <div style={logoStyle}>VORTIZE</div>
          </div>
        </div>

        {/* Slide 2: Quiénes Somos */}
        <div style={slideStyle}>
          <div style={headerStyle}>Quiénes Somos</div>
          
          <div style={{...orbSecondaryStyle, top: '25%', right: '8%'}}></div>
          
          <h2 style={sectionTitleStyle}>Somos Vortize</h2>
          
          <div style={{ 
            display: 'flex', 
            gap: window.innerWidth < 768 ? '30px' : '60px', 
            alignItems: 'center', 
            flex: 1,
            flexDirection: window.innerWidth < 768 ? 'column' : 'row'
          }}>
            <div style={{ flex: 1 }}>
              <p style={serviceDescriptionStyle}>
                <strong>Vortize</strong> es una agencia especializada en marketing experiencial y organización de eventos que transforma ideas en experiencias memorables.
              </p>
              
              <p style={serviceDescriptionStyle}>
                Nos enfocamos en crear conexiones auténticas entre las marcas y las personas a través de experiencias únicas que perduran en el tiempo y generan impacto real.
              </p>
              
              <div style={{ marginTop: window.innerWidth < 768 ? '20px' : '40px' }}>
                <h3 style={{ 
                  fontSize: window.innerWidth < 768 ? '20px' : '32px', 
                  fontWeight: 'bold', 
                  marginBottom: window.innerWidth < 768 ? '20px' : '30px', 
                  color: '#ac41f2',
                  textAlign: window.innerWidth < 768 ? 'center' : 'left'
                }}>
                  Nuestra Propuesta de Valor
                </h3>
                <ul style={{ 
                  fontSize: window.innerWidth < 768 ? '16px' : '22px', 
                  lineHeight: '1.8', 
                  color: isDarkMode ? '#cccccc' : '#333', 
                  listStyle: 'none', 
                  padding: 0,
                  textAlign: window.innerWidth < 768 ? 'center' : 'left'
                }}>
                  <li style={{ marginBottom: '16px' }}>✨ <strong>Creatividad sin límites:</strong> Diseñamos experiencias únicas</li>
                  <li style={{ marginBottom: '16px' }}>🎯 <strong>Enfoque estratégico:</strong> Cada evento tiene un propósito claro</li>
                  <li style={{ marginBottom: '16px' }}>⚡ <strong>Ejecución impecable:</strong> Cuidamos cada detalle</li>
                  <li style={{ marginBottom: '16px' }}>🌟 <strong>Resultados medibles:</strong> Impacto real y duradero</li>
                </ul>
              </div>
            </div>
            
            <div style={{ 
              flex: window.innerWidth < 768 ? 'none' : '0.4', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              width: window.innerWidth < 768 ? '100%' : 'auto'
            }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: window.innerWidth < 768 ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)', 
                gap: window.innerWidth < 768 ? '20px' : '40px', 
                marginTop: window.innerWidth < 768 ? '20px' : '60px',
                width: window.innerWidth < 768 ? '100%' : 'auto'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: window.innerWidth < 768 ? '32px' : '48px', 
                    fontWeight: 900, 
                    color: '#79f2e6', 
                    marginBottom: '12px' 
                  }}>100%</div>
                  <div style={{ 
                    fontSize: window.innerWidth < 768 ? '14px' : '18px', 
                    color: isDarkMode ? '#888' : '#666', 
                    fontWeight: 500 
                  }}>Compromiso</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: window.innerWidth < 768 ? '32px' : '48px', 
                    fontWeight: 900, 
                    color: '#79f2e6', 
                    marginBottom: '12px' 
                  }}>5★</div>
                  <div style={{ 
                    fontSize: window.innerWidth < 768 ? '14px' : '18px', 
                    color: isDarkMode ? '#888' : '#666', 
                    fontWeight: 500 
                  }}>Calificación</div>
                </div>
                <div style={{ textAlign: 'center', gridColumn: 'span 2' }}>
                  <div style={{ 
                    fontSize: window.innerWidth < 768 ? '32px' : '48px', 
                    fontWeight: 900, 
                    color: '#79f2e6', 
                    marginBottom: '12px' 
                  }}>24h</div>
                  <div style={{ 
                    fontSize: window.innerWidth < 768 ? '14px' : '18px', 
                    color: isDarkMode ? '#888' : '#666', 
                    fontWeight: 500 
                  }}>Tiempo de respuesta</div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={footerStyle}>
            <div style={logoStyle}>VORTIZE</div>
          </div>
        </div>

        {/* Slide 3: Eventos Corporativos */}
        <div style={slideStyle}>
          <div style={headerStyle}>Servicios</div>
          
          <div style={{...orbPrimaryStyle, top: '20%', right: '15%'}}></div>
          
          <div style={{ 
            display: 'flex', 
            gap: window.innerWidth < 768 ? '20px' : '80px', 
            alignItems: 'center', 
            flex: 1,
            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
            minHeight: window.innerWidth < 768 ? 'auto' : '100%',
            padding: window.innerWidth < 768 ? '10px 0' : '0'
          }}>
            <div style={{ flex: 1, order: window.innerWidth < 768 ? 2 : 1 }}>
              <div style={serviceIconStyle}>
                <Building size={window.innerWidth < 768 ? 40 : 60} />
              </div>
              
              <h2 style={serviceTitleStyle}>Eventos Corporativos</h2>
              <p style={serviceSubtitleStyle}>Conferencias & Seminarios</p>
              
              <p style={serviceDescriptionStyle}>
                Gestionamos toda la logística y producción técnica de tus eventos empresariales, 
                asegurando que tu mensaje se transmita con claridad e impacto. Desde conferencias 
                hasta lanzamientos de producto, creamos experiencias que fortalecen tu marca.
              </p>
              
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: window.innerWidth < 768 ? '8px' : '16px', 
                marginBottom: window.innerWidth < 768 ? '20px' : '40px',
                justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start'
              }}>
                {['Conferencias', 'Seminarios', 'Lanzamientos', 'Team Building'].map((feature, idx) => (
                  <span key={idx} style={{
                    background: 'linear-gradient(135deg, #ac41f2, #79f2e6)',
                    color: 'white',
                    padding: window.innerWidth < 768 ? '8px 16px' : '12px 24px',
                    borderRadius: '25px',
                    fontSize: window.innerWidth < 768 ? '14px' : '18px',
                    fontWeight: 600
                  }}>
                    {feature}
                  </span>
                ))}
              </div>
              
              <div style={{ 
                padding: window.innerWidth < 768 ? '20px' : '30px', 
                background: isDarkMode ? '#1a1a1a' : '#f8fafc', 
                borderRadius: '16px' 
              }}>
                <p style={{ 
                  fontSize: window.innerWidth < 768 ? '16px' : '20px', 
                  color: isDarkMode ? '#aaa' : '#666', 
                  margin: 0,
                  textAlign: window.innerWidth < 768 ? 'center' : 'left'
                }}>
                  <strong>Ideal para:</strong> Fortalecer relaciones con clientes, posicionar la marca 
                  en entornos estratégicos y generar experiencias memorables alineadas con objetivos comerciales.
                </p>
              </div>
            </div>
            
            <div style={{ 
              flex: window.innerWidth < 768 ? 'none' : '0.4', 
              display: 'flex', 
              justifyContent: 'center',
              order: window.innerWidth < 768 ? 1 : 2,
              width: window.innerWidth < 768 ? '100%' : 'auto'
            }}>
              <div style={imageFrameStyle}>
                <img 
                  src={serviceImages.conferencias} 
                  alt="Eventos Corporativos"
                  style={imageStyle}
                />
              </div>
            </div>
          </div>
          
          <div style={footerStyle}>
            <div style={logoStyle}>VORTIZE</div>
          </div>
        </div>

        {/* Slide 4: Team Building */}
        <div style={slideStyle}>
          <div style={headerStyle}>Servicios</div>
          
          <div style={{...orbSecondaryStyle, bottom: '20%', left: '8%'}}></div>
          
          <div style={{ 
            display: 'flex', 
            gap: window.innerWidth < 768 ? '20px' : '80px', 
            alignItems: 'center', 
            flex: 1,
            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
            minHeight: window.innerWidth < 768 ? 'auto' : '100%',
            padding: window.innerWidth < 768 ? '10px 0' : '0'
          }}>
            <div style={{ 
              flex: window.innerWidth < 768 ? 'none' : '0.4', 
              display: 'flex', 
              justifyContent: 'center',
              order: window.innerWidth < 768 ? 1 : 1,
              width: window.innerWidth < 768 ? '100%' : 'auto'
            }}>
              <div style={imageFrameStyle}>
                <img 
                  src={serviceImages.teambuilding} 
                  alt="Team Building"
                  style={imageStyle}
                />
              </div>
            </div>
            
            <div style={{ flex: 1, order: window.innerWidth < 768 ? 2 : 2 }}>
              <div style={serviceIconStyle}>
                <Users size={window.innerWidth < 768 ? 40 : 60} />
              </div>
              
              <h2 style={serviceTitleStyle}>Team Building</h2>
              <p style={serviceSubtitleStyle}>Bienestar & Colaboración</p>
              
              <p style={serviceDescriptionStyle}>
                Diseñamos experiencias que fomentan la colaboración, la motivación y el bienestar 
                de tus equipos. Nuestras actividades van más allá del entretenimiento: construyen 
                vínculos sólidos y mejoran la dinámica de trabajo.
              </p>
              
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: window.innerWidth < 768 ? '8px' : '16px', 
                marginBottom: window.innerWidth < 768 ? '20px' : '40px',
                justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start'
              }}>
                {['Dinámicas', 'Retiros', 'Workshops', 'Integración'].map((feature, idx) => (
                  <span key={idx} style={{
                    background: 'linear-gradient(135deg, #ac41f2, #79f2e6)',
                    color: 'white',
                    padding: window.innerWidth < 768 ? '8px 16px' : '12px 24px',
                    borderRadius: '25px',
                    fontSize: window.innerWidth < 768 ? '14px' : '18px',
                    fontWeight: 600
                  }}>
                    {feature}
                  </span>
                ))}
              </div>
              
              <div style={{ 
                padding: window.innerWidth < 768 ? '20px' : '30px', 
                background: isDarkMode ? '#1a1a1a' : '#f8fafc', 
                borderRadius: '16px' 
              }}>
                <p style={{ 
                  fontSize: window.innerWidth < 768 ? '16px' : '20px', 
                  color: isDarkMode ? '#aaa' : '#666', 
                  margin: 0,
                  textAlign: window.innerWidth < 768 ? 'center' : 'left'
                }}>
                  <strong>Beneficios:</strong> Mejora la comunicación interna, fortalece el sentido de 
                  pertenencia y aumenta la productividad del equipo a través de experiencias compartidas.
                </p>
              </div>
            </div>
          </div>
          
          <div style={footerStyle}>
            <div style={logoStyle}>VORTIZE</div>
          </div>
        </div>

        {/* Slide 5: Activaciones BTL */}
        <div style={slideStyle}>
          <div style={headerStyle}>Servicios</div>
          
          <div style={{...orbPrimaryStyle, top: '25%', left: '20%'}}></div>
          
          <div style={{ 
            display: 'flex', 
            gap: window.innerWidth < 768 ? '20px' : '80px', 
            alignItems: 'center', 
            flex: 1,
            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
            minHeight: window.innerWidth < 768 ? 'auto' : '100%',
            padding: window.innerWidth < 768 ? '10px 0' : '0'
          }}>
            <div style={{ flex: 1, order: window.innerWidth < 768 ? 2 : 1 }}>
              <div style={serviceIconStyle}>
                <MapPin size={window.innerWidth < 768 ? 40 : 60} />
              </div>
              
              <h2 style={serviceTitleStyle}>Activaciones BTL</h2>
              <p style={serviceSubtitleStyle}>PDV & Guerrilla Marketing</p>
              
              <p style={serviceDescriptionStyle}>
                Llevamos tu marca directamente a tu público con experiencias interactivas y acciones 
                llamativas. Nuestras activaciones BTL generan buzz, aumentan la recordación y crean 
                conexiones directas con los consumidores en el punto de venta.
              </p>
              
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: window.innerWidth < 768 ? '8px' : '16px', 
                marginBottom: window.innerWidth < 768 ? '20px' : '40px',
                justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start'
              }}>
                {['PDV', 'Guerrilla', 'Sampling', 'Experiencias'].map((feature, idx) => (
                  <span key={idx} style={{
                    background: 'linear-gradient(135deg, #ac41f2, #79f2e6)',
                    color: 'white',
                    padding: window.innerWidth < 768 ? '8px 16px' : '12px 24px',
                    borderRadius: '25px',
                    fontSize: window.innerWidth < 768 ? '14px' : '18px',
                    fontWeight: 600
                  }}>
                    {feature}
                  </span>
                ))}
              </div>
              
              <div style={{ 
                padding: window.innerWidth < 768 ? '20px' : '30px', 
                background: isDarkMode ? '#1a1a1a' : '#f8fafc', 
                borderRadius: '16px' 
              }}>
                <p style={{ 
                  fontSize: window.innerWidth < 768 ? '16px' : '20px', 
                  color: isDarkMode ? '#aaa' : '#666', 
                  margin: 0,
                  textAlign: window.innerWidth < 768 ? 'center' : 'left'
                }}>
                  <strong>Resultados:</strong> Mayor visibilidad de marca, interacción directa con 
                  consumidores y generación de contenido orgánico para redes sociales.
                </p>
              </div>
            </div>
            
            <div style={{ 
              flex: window.innerWidth < 768 ? 'none' : '0.4', 
              display: 'flex', 
              justifyContent: 'center',
              order: window.innerWidth < 768 ? 1 : 2,
              width: window.innerWidth < 768 ? '100%' : 'auto'
            }}>
              <div style={imageFrameStyle}>
                <img 
                  src={serviceImages.btl} 
                  alt="Activaciones BTL"
                  style={imageStyle}
                />
              </div>
            </div>
          </div>
          
          <div style={footerStyle}>
            <div style={logoStyle}>VORTIZE</div>
          </div>
        </div>

        {/* Slide 6: Catering */}
        <div style={slideStyle}>
          <div style={headerStyle}>Servicios</div>
          
          <div style={{...orbSecondaryStyle, top: '20%', left: '25%'}}></div>
          
          <div style={{ 
            display: 'flex', 
            gap: window.innerWidth < 768 ? '20px' : '80px', 
            alignItems: 'center', 
            flex: 1,
            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
            minHeight: window.innerWidth < 768 ? 'auto' : '100%',
            padding: window.innerWidth < 768 ? '10px 0' : '0'
          }}>
            <div style={{ 
              flex: window.innerWidth < 768 ? 'none' : '0.4', 
              display: 'flex', 
              justifyContent: 'center',
              order: window.innerWidth < 768 ? 1 : 1,
              width: window.innerWidth < 768 ? '100%' : 'auto'
            }}>
              <div style={imageFrameStyle}>
                <img 
                  src={serviceImages.catering} 
                  alt="Catering"
                  style={imageStyle}
                />
              </div>
            </div>
            
            <div style={{ flex: 1, order: window.innerWidth < 768 ? 2 : 2 }}>
              <div style={serviceIconStyle}>
                <ChefHat size={window.innerWidth < 768 ? 40 : 60} />
              </div>
              
              <h2 style={serviceTitleStyle}>Catering</h2>
              <p style={serviceSubtitleStyle}>Experiencias Gastronómicas</p>
              
              <p style={serviceDescriptionStyle}>
                Servicios gastronómicos especializados que complementan perfectamente tus eventos, 
                desde coffee breaks hasta banquetes completos. Creamos experiencias culinarias 
                memorables que deleitan y sorprenden a tus invitados.
              </p>
              
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: window.innerWidth < 768 ? '8px' : '16px', 
                marginBottom: window.innerWidth < 768 ? '20px' : '40px',
                justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start'
              }}>
                {['Coffee Breaks', 'Banquetes', 'Cocktails', 'Menús Temáticos'].map((feature, idx) => (
                  <span key={idx} style={{
                    background: 'linear-gradient(135deg, #ac41f2, #79f2e6)',
                    color: 'white',
                    padding: window.innerWidth < 768 ? '8px 16px' : '12px 24px',
                    borderRadius: '25px',
                    fontSize: window.innerWidth < 768 ? '14px' : '18px',
                    fontWeight: 600
                  }}>
                    {feature}
                  </span>
                ))}
              </div>
              
              <div style={{ 
                padding: window.innerWidth < 768 ? '20px' : '30px', 
                background: isDarkMode ? '#1a1a1a' : '#f8fafc', 
                borderRadius: '16px' 
              }}>
                <p style={{ 
                  fontSize: window.innerWidth < 768 ? '16px' : '20px', 
                  color: isDarkMode ? '#aaa' : '#666', 
                  margin: 0,
                  textAlign: window.innerWidth < 768 ? 'center' : 'left'
                }}>
                  <strong>Ventaja:</strong> Crea una experiencia más completa y agradable, permitiendo 
                  que tu público disfrute y permanezca más tiempo en contacto con tu marca.
                </p>
              </div>
            </div>
          </div>
          
          <div style={footerStyle}>
            <div style={logoStyle}>VORTIZE</div>
          </div>
        </div>

        {/* Slide 7: Diseños 2D y 3D */}
        <div style={slideStyle}>
          <div style={headerStyle}>Servicios</div>
          
          <div style={{...orbPrimaryStyle, top: '30%', right: '20%'}}></div>
          
          <div style={{ 
            display: 'flex', 
            gap: window.innerWidth < 768 ? '20px' : '80px', 
            alignItems: 'center', 
            flex: 1,
            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
            minHeight: window.innerWidth < 768 ? 'auto' : '100%',
            padding: window.innerWidth < 768 ? '10px 0' : '0'
          }}>
            <div style={{ flex: 1, order: window.innerWidth < 768 ? 2 : 1 }}>
              <div style={serviceIconStyle}>
                <Palette size={window.innerWidth < 768 ? 40 : 60} />
              </div>
              
              <h2 style={serviceTitleStyle}>Diseños de Piezas 2D y 3D</h2>
              <p style={serviceSubtitleStyle}>Creatividad Visual</p>
              
              <p style={serviceDescriptionStyle}>
                Desarrollamos piezas gráficas y elementos tridimensionales únicos que dan vida a tu 
                marca y generan impacto visual en cada evento. Desde conceptos creativos hasta la 
                producción final, materializamos ideas innovadoras.
              </p>
              
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: window.innerWidth < 768 ? '8px' : '16px', 
                marginBottom: window.innerWidth < 768 ? '20px' : '40px',
                justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start'
              }}>
                {['Diseño Gráfico', 'Modelado 3D', 'Branding', 'Elementos Visuales'].map((feature, idx) => (
                  <span key={idx} style={{
                    background: 'linear-gradient(135deg, #ac41f2, #79f2e6)',
                    color: 'white',
                    padding: window.innerWidth < 768 ? '8px 16px' : '12px 24px',
                    borderRadius: '25px',
                    fontSize: window.innerWidth < 768 ? '14px' : '18px',
                    fontWeight: 600
                  }}>
                    {feature}
                  </span>
                ))}
              </div>
              
              <div style={{ 
                padding: window.innerWidth < 768 ? '20px' : '30px', 
                background: isDarkMode ? '#1a1a1a' : '#f8fafc', 
                borderRadius: '16px' 
              }}>
                <p style={{ 
                  fontSize: window.innerWidth < 768 ? '16px' : '20px', 
                  color: isDarkMode ? '#aaa' : '#666', 
                  margin: 0,
                  textAlign: window.innerWidth < 768 ? 'center' : 'left'
                }}>
                  <strong>Aplicaciones:</strong> Stands, decoración temática, señalización, 
                  elementos interactivos, piezas promocionales y ambientación de espacios.
                </p>
              </div>
            </div>
            
            <div style={{ 
              flex: window.innerWidth < 768 ? 'none' : '0.4', 
              display: 'flex', 
              justifyContent: 'center',
              order: window.innerWidth < 768 ? 1 : 2,
              width: window.innerWidth < 768 ? '100%' : 'auto'
            }}>
              <div style={imageFrameStyle}>
                <img 
                  src={serviceImages.diseño} 
                  alt="Diseños 2D y 3D"
                  style={imageStyle}
                />
              </div>
            </div>
          </div>
          
          <div style={footerStyle}>
            <div style={logoStyle}>VORTIZE</div>
          </div>
        </div>

        {/* Slide 8: Contacto */}
        <div style={slideStyle}>
          <div style={headerStyle}>Contacto</div>
          
          <div style={{...orbPrimaryStyle, top: '15%', right: '15%'}}></div>
          <div style={{...orbSecondaryStyle, bottom: '20%', left: '20%'}}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, textAlign: 'center' }}>
            
            {/* Logo */}
            <div style={{ marginBottom: '80px' }}>
              <img 
                src={isDarkMode ? "/assets/logosblanconegro/image.png" : "/assets/logosblanconegro/Artboard 1 (1).png"} 
                alt="Vortize Logo" 
                style={{
                  height: '120px',
                  filter: 'drop-shadow(0 8px 30px rgba(172, 65, 242, 0.3))'
                }}
              />
            </div>
            
            <h2 style={{ 
              fontSize: window.innerWidth < 768 ? 'clamp(32px, 8vw, 48px)' : '64px', 
              fontWeight: 900, 
              color: '#ac41f2', 
              marginBottom: window.innerWidth < 768 ? '30px' : '40px' 
            }}>
              Contáctanos
            </h2>
            
            {/* Información de contacto principal */}
            <div style={{ 
              marginBottom: window.innerWidth < 768 ? '40px' : '60px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: window.innerWidth < 768 ? '25px' : '35px'
            }}>
              
              {/* Teléfono/WhatsApp */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: window.innerWidth < 768 ? '12px' : '20px',
                flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                background: 'rgba(121, 242, 230, 0.1)',
                padding: window.innerWidth < 768 ? '20px 30px' : '25px 40px',
                borderRadius: '20px',
                border: '2px solid rgba(121, 242, 230, 0.3)'
              }}>
                <MessageCircle size={window.innerWidth < 768 ? 28 : 40} color="#79f2e6" />
                <div style={{
                  fontSize: window.innerWidth < 768 ? 'clamp(22px, 5.5vw, 28px)' : '42px',
                  fontWeight: 'bold',
                  color: isDarkMode ? '#ffffff' : '#1a1a1a',
                  textAlign: 'center'
                }}>
                  +57 300 100 5357
                </div>
              </div>

              {/* Email */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: window.innerWidth < 768 ? '12px' : '18px',
                flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                background: 'rgba(172, 65, 242, 0.1)',
                padding: window.innerWidth < 768 ? '18px 25px' : '22px 35px',
                borderRadius: '18px',
                border: '2px solid rgba(172, 65, 242, 0.3)'
              }}>
                <svg width={window.innerWidth < 768 ? 24 : 32} height={window.innerWidth < 768 ? 24 : 32} fill="#ac41f2" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div style={{
                  fontSize: window.innerWidth < 768 ? 'clamp(18px, 4.5vw, 22px)' : '32px',
                  fontWeight: 'bold',
                  color: '#ac41f2',
                  textAlign: 'center'
                }}>
                  vortizemarketingss@gmail.com
                </div>
              </div>

              {/* Dirección */}
              <div style={{
                fontSize: window.innerWidth < 768 ? 'clamp(14px, 3.5vw, 18px)' : '22px',
                color: isDarkMode ? '#ccc' : '#666',
                textAlign: 'center',
                lineHeight: '1.5',
                maxWidth: window.innerWidth < 768 ? '90%' : '500px',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: window.innerWidth < 768 ? '15px 20px' : '20px 30px',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                📍 Oficina 705, edificio Sigma<br/>
                avenida carrera 19 # 95-20 oficina 708
              </div>
            </div>
            
            {/* Call to action simple */}
            <div style={{
              background: 'linear-gradient(135deg, #ac41f2, #79f2e6)',
              color: 'white',
              padding: window.innerWidth < 768 ? '20px 30px' : '40px 60px',
              borderRadius: '24px',
              fontSize: window.innerWidth < 768 ? 'clamp(18px, 4vw, 24px)' : '28px',
              fontWeight: 600,
              marginBottom: window.innerWidth < 768 ? '20px' : '40px',
              textAlign: 'center',
              maxWidth: window.innerWidth < 768 ? '90%' : 'none'
            }}>
              Transformemos ideas en experiencias únicas
            </div>
            
          </div>
          
          <div style={{...footerStyle, color: '#ac41f2' }}>
            <div style={{ fontSize: '16px', marginRight: '30px' }}>© 2025 Vortize. Creando experiencias que trascienden.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochurePresentation;