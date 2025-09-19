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

const BrochurePresentationNew: React.FC = () => {
  const [isDarkMode] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showControls] = useState(false);
  const [isFullscreen] = useState(false);
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
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'auto',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    color: isDarkMode ? '#ffffff' : '#1a1a1a',
    borderRadius: isFullscreen ? '0' : '12px',
    boxSizing: 'border-box'
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
    bottom: window.innerWidth < 768 ? '10px' : '15px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    gap: window.innerWidth < 768 ? '6px' : '10px',
    zIndex: 1000,
    background: 'rgba(0,0,0,0.8)',
    padding: window.innerWidth < 768 ? '4px 8px' : '6px 12px',
    borderRadius: '20px',
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
    width: window.innerWidth < 768 ? '28px' : '32px',
    height: window.innerWidth < 768 ? '28px' : '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'white',
    transition: 'all 0.3s ease'
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
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
  }, [currentSlide, totalSlides]);

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

  const exportToPDF = async () => {
    alert('Funcionalidad PDF disponible - presiona ESC para modo presentación completa');
  };

  const exportToPowerPoint = async () => {
    alert('Funcionalidad Slides PDF disponible - navega con las flechas del teclado');
  };

  const printPresentation = () => {
    alert('Funcionalidad Imprimir disponible - presiona ESC para ocultar controles');
  };

  // Array de slides
  const slides = [
    // Slide 1: Portada
    <div key={0} style={slideStyle}>
      <div style={headerStyle}>www.vortize.com</div>

      <div style={{...orbPrimaryStyle, top: '15%', right: '20%'}}></div>
      <div style={{...orbSecondaryStyle, bottom: '25%', left: '15%'}}></div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 10 }}>
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <img
            src="/assets/logosblanconegro/image.png"
            alt="Vortize BTL Logo"
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
        <img
          src="/assets/logosblanconegro/image.png"
          alt="Vortize BTL Logo"
          style={{
            height: '40px',
            filter: 'drop-shadow(0 4px 15px rgba(172, 65, 242, 0.3))'
          }}
        />
      </div>
    </div>,

    // Slide 2: Quiénes Somos
    <div key={1} style={slideStyle}>
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
            gridTemplateColumns: 'repeat(2, 1fr)', 
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
        <img
          src="/assets/logosblanconegro/image.png"
          alt="Vortize BTL Logo"
          style={{
            height: '40px',
            filter: 'drop-shadow(0 4px 15px rgba(172, 65, 242, 0.3))'
          }}
        />
      </div>
    </div>,

    // Slide 3: Eventos Corporativos
    <div key={2} style={slideStyle}>
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
        <img
          src="/assets/logosblanconegro/image.png"
          alt="Vortize BTL Logo"
          style={{
            height: '40px',
            filter: 'drop-shadow(0 4px 15px rgba(172, 65, 242, 0.3))'
          }}
        />
      </div>
    </div>,

    // Slide 4: Team Building
    <div key={3} style={slideStyle}>
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
        <img
          src="/assets/logosblanconegro/image.png"
          alt="Vortize BTL Logo"
          style={{
            height: '40px',
            filter: 'drop-shadow(0 4px 15px rgba(172, 65, 242, 0.3))'
          }}
        />
      </div>
    </div>,

    // Slide 5: Activaciones BTL
    <div key={4} style={slideStyle}>
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
        <img
          src="/assets/logosblanconegro/image.png"
          alt="Vortize BTL Logo"
          style={{
            height: '40px',
            filter: 'drop-shadow(0 4px 15px rgba(172, 65, 242, 0.3))'
          }}
        />
      </div>
    </div>,

    // Slide 6: Catering
    <div key={5} style={slideStyle}>
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
        <img
          src="/assets/logosblanconegro/image.png"
          alt="Vortize BTL Logo"
          style={{
            height: '40px',
            filter: 'drop-shadow(0 4px 15px rgba(172, 65, 242, 0.3))'
          }}
        />
      </div>
    </div>,

    // Slide 7: Diseños 2D y 3D
    <div key={6} style={slideStyle}>
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
        <img
          src="/assets/logosblanconegro/image.png"
          alt="Vortize BTL Logo"
          style={{
            height: '40px',
            filter: 'drop-shadow(0 4px 15px rgba(172, 65, 242, 0.3))'
          }}
        />
      </div>
    </div>,

    // Slide 8: Contacto
    <div key={7} style={slideStyle}>
      <div style={headerStyle}>Contacto</div>

      <div style={{...orbPrimaryStyle, top: '15%', right: '15%'}}></div>
      <div style={{...orbSecondaryStyle, bottom: '20%', left: '20%'}}></div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, textAlign: 'center' }}>

        {/* Logo */}
        <div style={{ marginBottom: '80px' }}>
        <img
          src="/assets/logosblanconegro/image.png"
          alt="Vortize BTL Logo"
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
        <div style={{ marginBottom: window.innerWidth < 768 ? '40px' : '80px' }}>
          <div style={{
            fontSize: window.innerWidth < 768 ? 'clamp(24px, 6vw, 32px)' : '48px',
            fontWeight: 'bold',
            color: isDarkMode ? '#ffffff' : '#1a1a1a',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: window.innerWidth < 768 ? '10px' : '20px',
            flexDirection: window.innerWidth < 768 ? 'column' : 'row'
          }}>
            <MessageCircle size={window.innerWidth < 768 ? 32 : 48} color="#79f2e6" />
            +57 300 100 5357
          </div>

          <div style={{
            fontSize: window.innerWidth < 768 ? 'clamp(16px, 4vw, 20px)' : '24px',
            color: isDarkMode ? '#ccc' : '#666',
            maxWidth: window.innerWidth < 768 ? '100%' : '600px',
            lineHeight: '1.4',
            padding: window.innerWidth < 768 ? '0 20px' : '0'
          }}>
            Oficina 705, edificio Sigma<br/>
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
        <div style={{ fontSize: '16px', marginRight: '30px' }}>© 2025 Vortize BTL. Creando experiencias que trascienden.</div>
      </div>
    </div>
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
          <ChevronLeft size={18} />
        </button>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {Array.from({ length: totalSlides }, (_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '8px',
                height: '8px',
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
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Current Slide */}
      <div ref={presentationRef} className="brochure-presentation">
        {slides[currentSlide]}
      </div>

    </div>
  );
};

export default BrochurePresentationNew;