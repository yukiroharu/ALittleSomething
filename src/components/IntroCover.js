import React from 'react';

const IntroCover = ({ onNext }) => (
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
    {/* Subtle background pattern */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 20% 80%, rgba(123, 31, 162, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)',
      pointerEvents: 'none'
    }} />
    
    {/* Decorative elements */}
    <div style={{
      position: 'absolute',
      top: '15%',
      left: '10%',
      width: 60,
      height: 60,
      border: '2px solid rgba(123, 31, 162, 0.1)',
      borderRadius: '50%',
      transform: 'rotate(45deg)',
      opacity: 0.6
    }} />
    <div style={{
      position: 'absolute',
      bottom: '20%',
      right: '15%',
      width: 40,
      height: 40,
      border: '2px solid rgba(59, 130, 246, 0.1)',
      borderRadius: '50%',
      transform: 'rotate(-30deg)',
      opacity: 0.6
    }} />
    
    <div style={{
      textAlign: 'center',
      maxWidth: 600,
      padding: '0 32px',
      position: 'relative',
      zIndex: 2
    }}>
      <h1 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
        color: '#1e293b',
        textAlign: 'center',
        margin: '0 0 24px 0',
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '-0.02em'
      }}>
        A Little Something
        <br />
        <span style={{
          color: '#391fa2',
          fontFamily: 'Dancing Script, cursive',
          fontSize: '0.9em',
          fontWeight: 600
        }}>
          For You, My Kate...
        </span>
      </h1>
      
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '1.1rem',
        color: '#64748b',
        textAlign: 'center',
        margin: '0 0 48px 0',
        lineHeight: 1.6,
        maxWidth: 500,
        fontWeight: 400
      }}>
         
      </p>
      
      <button 
        style={{
          padding: '16px 40px',
          fontSize: '1.1rem',
          borderRadius: '50px',
          background: 'linear-gradient(135deg,rgb(59, 31, 162) 0%,rgb(64, 39, 176) 100%)',
          color: '#fff',
          border: 'none',
          fontWeight: 600,
          letterSpacing: '0.025em',
          boxShadow: '0 4px 20px rgba(66, 31, 162, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }} 
        onClick={onNext}
      >
        <span style={{ position: 'relative', zIndex: 2 }}>Open</span>
        <div style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          transition: 'left 0.5s'
        }} />
      </button>
    </div>
  </div>
);

export default IntroCover; 