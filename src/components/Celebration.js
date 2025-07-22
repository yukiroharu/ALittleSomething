import React from 'react';

const Celebration = () => (
  <div style={{
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
    position: 'relative',
    overflow: 'hidden'
  }}>
    {/* Sophisticated background pattern */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 30% 70%, rgba(123, 31, 162, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
      pointerEvents: 'none'
    }} />
    
    {/* Decorative elements */}
    <div style={{
      position: 'absolute',
      top: '20%',
      left: '15%',
      width: 80,
      height: 80,
      border: '3px solid rgba(123, 31, 162, 0.15)',
      borderRadius: '50%',
      transform: 'rotate(45deg)',
      opacity: 0.6,
      animation: 'float 6s ease-in-out infinite'
    }} />
    <div style={{
      position: 'absolute',
      bottom: '25%',
      right: '20%',
      width: 60,
      height: 60,
      border: '3px solid rgba(59, 130, 246, 0.15)',
      borderRadius: '50%',
      transform: 'rotate(-30deg)',
      opacity: 0.6,
      animation: 'float 6s ease-in-out infinite 2s'
    }} />
    
    <div style={{
      textAlign: 'center',
      maxWidth: 700,
      padding: '0 32px',
      position: 'relative',
      zIndex: 2
    }}>
      <h1 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(3rem, 8vw, 4.5rem)',
        color: '#7b1fa2',
        textAlign: 'center',
        margin: '0 0 24px 0',
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: '-0.03em',
        textShadow: '0 4px 12px rgba(123, 31, 162, 0.3)',
        animation: 'celebrate 2s ease-out'
      }}>
        YIPPEEEEEEEEE!
      </h1>
      
      <h2 style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
        color: '#1e293b',
        textAlign: 'center',
        margin: '0 0 32px 0',
        fontWeight: 500,
        lineHeight: 1.4,
        letterSpacing: '0.01em'
      }}>
        Now you're officially my girlfriend!
      </h2>
      
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
        color: '#64748b',
        textAlign: 'center',
        margin: '0 0 48px 0',
        lineHeight: 1.6,
        maxWidth: 500,
        fontWeight: 400
      }}>
        Te amo, My Love. More than words can say.
      </p>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
        <span style={{
          fontSize: '3rem',
          animation: 'bounce 2s ease-in-out infinite'
        }}>💖</span>
        <span style={{
          fontSize: '3rem',
          animation: 'bounce 2s ease-in-out infinite 0.3s'
        }}>✨</span>
        <span style={{
          fontSize: '3rem',
          animation: 'bounce 2s ease-in-out infinite 0.6s'
        }}>💕</span>
        <span style={{
          fontSize: '3rem',
          animation: 'bounce 2s ease-in-out infinite 0.9s'
        }}>🎉</span>
      </div>
    </div>
    
    <style>{`
      @keyframes celebrate {
        0% { transform: scale(0.5) translateY(50px); opacity: 0; }
        50% { transform: scale(1.1) translateY(-10px); opacity: 1; }
        100% { transform: scale(1) translateY(0); opacity: 1; }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(45deg); }
        50% { transform: translateY(-20px) rotate(45deg); }
      }
      
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        60% { transform: translateY(-5px); }
      }
    `}</style>
  </div>
);

export default Celebration; 