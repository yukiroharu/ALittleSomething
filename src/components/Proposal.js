import React, { useState, useRef, useEffect } from 'react';
// import bouquet from '../assets/bouquet.png';
const bouquet = require('../assets/bouquet.png'); // fallback for demonstration

const noButtonTexts = [
  "No",
  "Think twice!",
  "My heart says no!",
  "Are you sure you want to break my heart?",
  "Please reconsider!",
  "There's only one right answer!",
  "Don't click me!",
  "NOOOO, PLEASE :((",
];

const prompts = [
  "Please, baby",
  "Just imagine our happy future!",
  "No, baby, please",
  "Don't be shy!",
  "......",
];

const gifUrls = [
  'https://media.tenor.com/OA8KFcZxPjsAAAAi/sad-emoji.gif',
  'https://media.tenor.com/bfgjTc0DxiIAAAAC/sad-emoji.gif',
  'https://media.tenor.com/J3fd-EFUmxkAAAAC/sad.gif',
  'https://media.tenor.com/images/da8f573341d4373c32faf80f9fbdf806/tenor.gif',
  'https://media1.tenor.com/images/d6258d57c34703d062ba730a7d3235d1/tenor.gif?itemid=15618014',
];

const yesGifUrls = [
  'https://media.tenor.com/HBX-zQA8xS8AAAAM/reaction-love.gif',
  'https://media.tenor.com/04_-QoUryk8AAAAC/emoji-in-love-cute.gif',
];

const heartfeltLetter = `To my Kate, Shiori, & Cloi,\n\nThank you for letting me into your heart.\nThank you for allowing me to see the sides of you that not everyone gets to see — **the softest parts, the deepest thoughts, the little things you're scared to say out loud**. I know how **rare** and **sacred** that is, and I don't take it for granted. **Not for a second**.\n\nYou didn't just give me a space in your life… you gave me **comfort**, you gave me **peace**, and you gave me **love** even in the simplest ways, even when you thought you weren't doing anything special. But **you were**. **You are**.\n\nYou've made me feel safe in ways I didn't think I'd ever experience. I never thought I could be this **open**, this **honest**, this **emotionally free** with someone. I've always struggled to express myself, to put feelings into words, to show emotions that felt **too much**—but with you, it all came **naturally**. You gave me a place where I didn't have to hide anything. Where I could just be… **me**.\n\nI love you for everything you are for being **bubbly and hilarious**, for being **gentle and thoughtful**, for being someone who always puts others first even when **you're the one who needs care**. I love you for the way you care about me — **reminding me to eat, worrying about my sleep, being there when I spiral or when I shut down**. **You stayed**. You didn't run, even when I wasn't easy to deal with. That means more to me than I can say.\n\nI love you even more when you're **vulnerable** with me. When you tell me the things you're **scared of**. When you share your **doubts**. When you **trust me with your truth**. Because that's when I see the **realest, most beautiful version of you**. And I want to keep seeing that **every day**. I want to keep **learning** about you, **growing** with you, **laughing** with you, even **crying** with you when life gets heavy.\n\nI promise to **cherish** you.\nTo hold you close, even when we're far apart.\nTo make you smile, especially on the days when the world feels **too loud** or **too heavy**.\nTo fill our days with **love** and **laughter**, and with **quiet comfort** when words fall short.\nI promise to always love **every part of you**.\n\nBut if there's one thing I can't promise… it's that everything will always be okay. I know there may be days when we'll both feel off. When we'll **misunderstand** each other. That's the part I can't control—life will throw things at us we're not ready for. But even in those moments, I promise I won't stop **choosing** you. I won't stop **showing up** for you. I won't **give up** on us.\n\n**You are the best thing that's ever happened to me**. And I love you more than I could ever explain, **more than you probably realize**.\n\nThank you for being mine.\nAnd I hope, with everything in me, that I can be **yours too**.\n\nWith all my love,\nYuki`;

function Confetti() {
  // Enhanced confetti animation with better styling
  const confettiArray = Array.from({ length: 40 });
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 1000,
    }}>
      {confettiArray.map((_, i) => {
        const left = Math.random() * 100;
        const duration = 3 + Math.random() * 2;
        const delay = Math.random() * 2;
        const size = 20 + Math.random() * 20;
        const emoji = ["💖", "✨", "💐", "🎊", "💝", "🌹", "💕", "🎉"][i % 8];
        return (
          <span
            key={i}
            style={{
              position: 'absolute',
              left: `${left}vw`,
              top: '-40px',
              fontSize: size,
              animation: `fall${i} ${duration}s ${delay}s ease-in forwards`,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
            }}
          >
            {emoji}
            <style>{`
              @keyframes fall${i} {
                0% {
                  top: -40px;
                  transform: rotate(0deg) scale(0.8);
                  opacity: 0;
                }
                10% {
                  opacity: 1;
                  transform: rotate(0deg) scale(1);
                }
                90% {
                  opacity: 1;
                  transform: rotate(${Math.random() * 360}deg) scale(1);
                }
                100% {
                  top: 110vh;
                  transform: rotate(${Math.random() * 720}deg) scale(0.6);
                  opacity: 0;
                }
              }
            `}</style>
          </span>
        );
      })}
    </div>
  );
}

// Helper to convert **bold** markdown to <strong> tags
function formatBold(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

const Proposal = ({ onAccept }) => {
  const [noIndex, setNoIndex] = useState(0);
  const [noPos, setNoPos] = useState({ top: '0', left: '60%' });
  const [attempts, setAttempts] = useState(0);
  const [tricky, setTricky] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [showLetterSection, setShowLetterSection] = useState(false);
  const [letterSlide, setLetterSlide] = useState(false);
  const [showFlower, setShowFlower] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [drawingDone, setDrawingDone] = useState(false);
  const [envelopeAnimating, setEnvelopeAnimating] = useState(false);
  const [showLoveWords, setShowLoveWords] = useState(false);
  const [showWhyFlower, setShowWhyFlower] = useState(false);
  const [typedText, setTypedText] = useState("");
  const whyFlowerText = "Because it reminded me of your favorite color—blue. Truth is, I don't know your favorite flower yet. But I hope this feels close enough… for now :))";
  const [activeGifs, setActiveGifs] = useState([]);
  const containerRef = useRef(null);
  const [transitioningToFlower, setTransitioningToFlower] = useState(false);
  const transitionGifUrls = [
    'https://www.icegif.com/wp-content/uploads/2024/04/i-love-you-icegif-10.gif',
    'https://media1.tenor.com/m/LC8DerXHnzEAAAAC/i-love-you.gif',
  ];

  // Preload GIFs for instant display
  useEffect(() => {
    const allGifUrls = [...gifUrls, ...yesGifUrls, ...transitionGifUrls];
    allGifUrls.forEach(url => {
      const img = new window.Image();
      img.src = url;
    });
  }, []);

  // Helper: get random position (top, bottom, left, right, not center)
  function getRandomGifPosition() {
    const positions = [
      { top: 20, left: '10%' }, // top left
      { top: 20, right: '10%' }, // top right
      { bottom: 20, left: '10%' }, // bottom left
      { bottom: 20, right: '10%' }, // bottom right
      { top: 20, left: '50%' }, // top center
      { bottom: 20, left: '50%' }, // bottom center
      { top: '50%', left: 20 }, // left center
      { top: '50%', right: 20 }, // right center
    ];
    return positions[Math.floor(Math.random() * positions.length)];
  }

  // Show a random GIF at a random position
  function showRandomGif() {
    const url = gifUrls[Math.floor(Math.random() * gifUrls.length)];
    const pos = getRandomGifPosition();
    const key = Date.now() + Math.random();
    setActiveGifs((gifs) => [...gifs, { url, pos, key }]);
    // Remove after 1.5s
    setTimeout(() => {
      setActiveGifs((gifs) => gifs.filter((g) => g.key !== key));
    }, 1500);
  }

  // Show Yes GIFs at fixed fun positions (top center and bottom center)
  function showYesGifs() {
    const yesPositions = [
      { top: 40, left: '50%' },
      { bottom: 40, left: '50%' },
    ];
    yesGifUrls.forEach((url, i) => {
      const pos = yesPositions[i % yesPositions.length];
      const key = 'yes-' + Date.now() + '-' + i + '-' + Math.random();
      setActiveGifs((gifs) => [...gifs, { url, pos, key }]);
      setTimeout(() => {
        setActiveGifs((gifs) => gifs.filter((g) => g.key !== key));
      }, 5000); // Show for 5 seconds
    });
  }

  // Align buttons side by side at first, then make NO button tricky after first hover/touch
  const moveNoButton = (e) => {
    if (!tricky) {
      setTricky(true);
      return;
    }
    const container = containerRef.current;
    if (!container) return;
    const width = container.offsetWidth - 120; // button width
    const height = container.offsetHeight - 60; // button height
    const left = Math.random() * width;
    const top = Math.random() * height;
    setNoPos({ top: `${top}px`, left: `${left}px` });
    setNoIndex((i) => (i + 1) % noButtonTexts.length);
    setAttempts((a) => a + 1);
    if (e) e.preventDefault();
    showRandomGif(); // Show GIF on move
  };

  const handleTouch = (e) => {
    e.preventDefault();
    moveNoButton(e);
  };
  const handleMouse = (e) => {
    e.preventDefault();
    moveNoButton(e);
  };

  // YES button click: show confetti, then envelope, then letter
  const handleYes = () => {
    showYesGifs();
    setTimeout(() => {
      setShowEnvelope(true);
    }, 5000);
  };

  const handleEnvelopeClick = () => {
    setEnvelopeAnimating(true);
    setTimeout(() => {
      setEnvelopeAnimating(false);
      setEnvelopeOpened(true);
      setTimeout(() => setShowLetterSection(true), 1200);
    }, 5000); // 5 seconds of animation before opening
  };

  const handleContinue = () => {
    setShowLetterSection(false); // Hide the letter section
    setTransitioningToFlower(true); // Start transition
    setTimeout(() => {
      setTransitioningToFlower(false);
      setShowFlower(true); // Go directly to flower section
    }, 5000); // Wait 5s for the cat GIF, then show flower
  };

  // Typewriter effect for 'Why this flower'
  useEffect(() => {
    let timeout;
    const indexRef = { current: 0 };
    function typeNext() {
      setTypedText(whyFlowerText.slice(0, indexRef.current + 1));
      indexRef.current++;
      if (indexRef.current < whyFlowerText.length) {
        timeout = setTimeout(typeNext, 80);
      }
    }
    if (showWhyFlower) {
      setTypedText("");
      indexRef.current = 0;
      timeout = setTimeout(typeNext, 80);
    } else {
      setTypedText("");
    }
    return () => clearTimeout(timeout);
  }, [showWhyFlower, whyFlowerText]);

  // After showFlower is true, trigger heart and done in sequence
  useEffect(() => {
    if (showFlower) {
      const heartTimeout = setTimeout(() => setShowHeart(true), 1600); // flower draws first
      const doneTimeout = setTimeout(() => setDrawingDone(true), 3200); // after all drawing
      return () => {
        clearTimeout(heartTimeout);
        clearTimeout(doneTimeout);
      };
    }
  }, [showFlower]);

  return (
    <div
      className="proposal-container"
      ref={containerRef}
      style={{
        minHeight: '100vh',
        width: '100vw',
        maxWidth: '100vw',
        background: showEnvelope || showLetterSection || showFlower ? 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)' : 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #cbd5e1 100%)',
        overflowX: 'hidden',
        overflowY: 'auto',
        transition: 'background 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        padding: '0',
        position: 'relative'
      }}
    >
      {/* Sophisticated background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 25% 75%, rgba(123, 31, 162, 0.03) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />
      
      {showConfetti && <Confetti />}
      {showLoveWords && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 1001,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            color: '#7b1fa2',
            textAlign: 'center',
            animation: 'fadeInOut 5s ease-in-out',
            fontWeight: 600,
            textShadow: '0 4px 12px rgba(123, 31, 162, 0.3)',
          }}>
            I
          </div>
          <div style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            color: '#9c27b0',
            textAlign: 'center',
            animation: 'fadeInOut 5s ease-in-out 0.5s',
            fontWeight: 600,
            textShadow: '0 4px 12px rgba(156, 39, 176, 0.3)',
          }}>
            Love
          </div>
          <div style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            color: '#7b1fa2',
            textAlign: 'center',
            animation: 'fadeInOut 5s ease-in-out 1s',
            fontWeight: 600,
            textShadow: '0 4px 12px rgba(123, 31, 162, 0.3)',
          }}>
            You
          </div>
          <style>{`
            @keyframes fadeInOut {
              0% { opacity: 0; transform: scale(0.5) translateY(20px); }
              20% { opacity: 1; transform: scale(1.1) translateY(0); }
              80% { opacity: 1; transform: scale(1) translateY(0); }
              100% { opacity: 0; transform: scale(0.8) translateY(-20px); }
            }
          `}</style>
        </div>
      )}
      {!showEnvelope && !showLetterSection && !showFlower && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 600,
          padding: '0 32px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            color: '#1e293b',
            textAlign: 'center',
            marginBottom: 24,
            fontWeight: 600,
            lineHeight: 1.3,
            letterSpacing: '-0.02em'
          }}>
            Will you allow me to
            <br />
            <span style={{
              color: '#391fa2',
              fontFamily: 'Dancing Script, cursive',
              fontSize: '1.1em',
              fontWeight: 600
            }}>
              court you?
            </span>
          </h2>
          <div style={{ 
            minHeight: 32, 
            marginBottom: 32, 
            color: '#64748b', 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '1.1rem', 
            textAlign: 'center',
            fontWeight: 400,
            lineHeight: 1.5
          }}>
            {attempts > 0 && prompts[(attempts - 1) % prompts.length]}
          </div>
          <div className="proposal-buttons" style={{
            position: 'relative',
            width: '100%',
            height: 120,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 32,
          }}>
            <button
              className="yes-btn"
              style={{
                padding: '16px 40px',
                fontSize: '1.1rem',
                borderRadius: '50px',
                background: 'linear-gradient(135deg,rgb(66, 31, 162) 0%,rgb(87, 39, 176) 100%)',
                color: '#fff',
                border: 'none',
                zIndex: 2,
                position: 'relative',
                minWidth: 140,
                boxShadow: '0 8px 24px rgba(81, 31, 162, 0.3)',
                fontWeight: 600,
                letterSpacing: '0.025em',
                overflow: 'hidden'
              }}
              onClick={handleYes}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>YES!</span>
            </button>
            <button
              className="no-btn"
              style={{
                position: tricky ? 'absolute' : 'relative',
                top: tricky ? noPos.top : undefined,
                left: tricky ? noPos.left : undefined,
                padding: '16px 32px',
                fontSize: '1rem',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)',
                color: '#fff',
                border: 'none',
                zIndex: 3,
                transition: 'top 0.3s cubic-bezier(0.4, 0, 0.2, 1), left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                minWidth: 100,
                fontWeight: 500,
                letterSpacing: '0.025em',
                boxShadow: '0 4px 16px rgba(100, 116, 139, 0.3)',
              }}
              onMouseEnter={() => { moveNoButton(); showRandomGif(); }}
              onClick={() => { moveNoButton(); showRandomGif(); }}
              onTouchStart={(e) => { moveNoButton(e); showRandomGif(); }}
            >
              {noButtonTexts[noIndex]}
            </button>
          </div>
          {/* GIF Overlay */}
          <div style={{ pointerEvents: 'none', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 100 }}>
            {activeGifs.map((gif) => (
              <img
                key={gif.key}
                src={gif.url}
                alt="reaction gif"
                style={{
                  position: 'absolute',
                  ...gif.pos,
                  width: 120,
                  height: 120,
                  objectFit: 'contain',
                  pointerEvents: 'none',
                  zIndex: 100,
                  transform: 'translate(-50%, -50%)',
                  borderRadius: 16,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                  background: '#fff',
                  opacity: 0.92,
                  animation: 'popIn 0.2s cubic-bezier(0.4,2,0.6,1)',
                }}
              />
            ))}
            <style>{`
              @keyframes popIn {
                0% { opacity: 0; transform: scale(0.7) translate(-50%, -50%); }
                80% { opacity: 1; transform: scale(1.1) translate(-50%, -50%); }
                100% { opacity: 0.92; transform: scale(1) translate(-50%, -50%); }
              }
            `}</style>
          </div>
        </div>
      )}
      {showEnvelope && !showLetterSection && !showFlower && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw',
          maxWidth: '100vw',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
          zIndex: 10,
          overflowY: 'auto',
          boxSizing: 'border-box',
          padding: '16px 0',
          position: 'relative'
        }}>
          <div
            onClick={handleEnvelopeClick}
            style={{
              width: 'min(450px, 95vw)',
              height: 'min(320px, 55vh)',
              position: 'relative',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              overflow: 'visible',
              zIndex: 2,
              background: 'none',
              marginBottom: 48,
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: envelopeAnimating ? '0 0 40px 12px rgba(0, 102, 255, 0.4), 0 0 80px 20px rgba(77, 31, 162, 0.3)' : undefined,
              animation: envelopeAnimating ? 'shake 1.5s infinite' : undefined,
            }}
            onMouseEnter={(e) => {
              if (!envelopeOpened && !envelopeAnimating) {
                e.currentTarget.style.transform = 'scale(1.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (!envelopeOpened && !envelopeAnimating) {
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          >
            <style>{`
              @keyframes shake {
                0%, 100% { transform: translateX(0) rotate(0deg); }
                10% { transform: translateX(-2px) rotate(-1deg); }
                20% { transform: translateX(2px) rotate(1deg); }
                30% { transform: translateX(-2px) rotate(-1deg); }
                40% { transform: translateX(2px) rotate(1deg); }
                50% { transform: translateX(-2px) rotate(-1deg); }
                60% { transform: translateX(2px) rotate(1deg); }
                70% { transform: translateX(-2px) rotate(-1deg); }
                80% { transform: translateX(2px) rotate(1deg); }
                90% { transform: translateX(-2px) rotate(-1deg); }
              }
            `}</style>
            
            {/* Enhanced envelope body with sophisticated design */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: 200,
              background: 'linear-gradient(145deg, #fff 0%, #e3f0fc 100%)',
              border: '3px solid #7b1fa2',
              borderRadius: '0 0 24px 24px',
              boxShadow: '0 20px 60px rgba(123, 31, 162, 0.10), 0 8px 24px rgba(123, 31, 162, 0.08)',
              zIndex: 1,
              filter: 'drop-shadow(0 8px 24px rgba(123, 31, 162, 0.10))',
            }} />
            
            {/* Enhanced envelope flap */}
            <div style={{
              position: 'absolute',
              top: -100,
              left: 0,
              width: '100%',
              height: 140,
              background: 'linear-gradient(145deg, #fff 0%, #e3f0fc 100%)',
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              border: '3px solid #7b1fa2',
              borderBottom: 'none',
              zIndex: 3,
              boxShadow: '0 12px 40px rgba(123, 31, 162, 0.10)',
              transform: envelopeOpened ? 'rotateX(75deg)' : 'rotateX(0deg)',
              transformOrigin: 'bottom',
              transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
            }} />
            
            {/* Enhanced envelope shadow */}
            <div style={{
              position: 'absolute',
              bottom: -20,
              left: 40,
              width: '80%',
              height: 32,
              background: 'radial-gradient(ellipse at center, rgba(123, 31, 162, 0.1) 0%, transparent 80%)',
              zIndex: 0,
              filter: 'blur(4px)',
            }} />
            
            {/* Enhanced letter sliding out */}
            <div style={{
              position: 'absolute',
              top: envelopeOpened ? 80 : 220,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 320,
              height: 180,
              background: '#fff',
              border: '2px solidrgb(51, 31, 162)',
              borderRadius: 16,
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
              opacity: envelopeOpened ? 1 : 0,
              transition: 'top 1s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Dancing Script, cursive',
              fontSize: '2rem',
              color: '#7b1fa2',
              textAlign: 'center',
              zIndex: 4,
              pointerEvents: 'none',
            }}>
              {envelopeOpened && !showLetterSection && '💌'}
            </div>
          </div>
          
          <div style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            color: '#1e293b',
            textAlign: 'center',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 20,
            padding: '20px 40px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            maxWidth: 500,
            marginTop: 24,
            backdropFilter: 'blur(10px)',
          }}>
            There's a letter for you
          </div>
        </div>
      )}
      {showLetterSection && !showFlower && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          width: '100vw',
          maxWidth: '100vw',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
          zIndex: 20,
          padding: '32px 0',
          boxSizing: 'border-box',
          position: 'relative'
        }}>
          <div style={{
            background: '#fff',
            borderRadius: 20,
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.06)',
            padding: '48px 40px',
            maxWidth: 500,
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
            color: '#1e293b',
            textAlign: 'left',
            lineHeight: 1.8,
            marginBottom: 40,
            maxHeight: '60vh',
            overflowY: 'auto',
            border: '1px solid rgba(123, 31, 162, 0.1)',
          }}>
            <span dangerouslySetInnerHTML={{ __html: formatBold(heartfeltLetter) }} />
          </div>
          <button
            style={{
              padding: '16px 40px',
              fontSize: '1.1rem',
              borderRadius: '50px',
              background: 'linear-gradient(135deg,rgb(55, 31, 162) 0%,rgb(80, 39, 176) 100%)',
              color: '#fff',
              border: 'none',
              minWidth: 140,
              boxShadow: '0 8px 24px rgba(123, 31, 162, 0.3)',
              fontWeight: 600,
              letterSpacing: '0.025em',
            }}
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      )}
      {showFlower && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          width: '100vw',
          maxWidth: '100vw',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
          zIndex: 30,
          padding: '32px 0',
          boxSizing: 'border-box',
          position: 'relative'
        }}>
          <img
            src={bouquet}
            alt="Bouquet"
            style={{
              width: 'min(400px, 90vw)',
              maxHeight: '50vh',
              margin: '0 auto',
              display: 'block',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              objectFit: 'contain',
              border: '1px solid rgba(123, 31, 162, 0.1)',
            }}
            onLoad={() => setTimeout(() => setShowWhyFlower(true), 1000)}
          />
          <div style={{
            marginTop: 32,
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            color: '#1e293b',
            textAlign: 'center',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 16,
            padding: '20px 32px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            maxWidth: 500,
            backdropFilter: 'blur(10px)',
          }}>
            Here's a flower for you. I hope you will like it.
          </div>
          {showWhyFlower && (
            <div style={{
              marginTop: 40,
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.2rem)',
              color: '#391fa2',
              textAlign: 'center',
              fontWeight: 500,
              background: 'rgba(255,255,255,0.95)',
              borderRadius: 12,
              padding: '24px 24px',
              boxShadow: '0 4px 16px rgba(123, 31, 162, 0.08)',
              maxWidth: 480,
              minHeight: 80,
              border: '1px solid rgba(123, 31, 162, 0.08)',
              letterSpacing: '0.01em',
              lineHeight: 1.7,
              marginBottom: 24,
              position: 'relative',
            }}>
              <div style={{fontWeight:700, marginBottom:12, fontSize:'1.2em', color:'#391fa2'}}>Why this flower</div>
              <span>{typedText}<span className="typewriter-cursor">|</span></span>
              <style>{`
                .typewriter-cursor {
                  opacity: 1;
                  animation: blink-cursor 1s steps(1) infinite;
                }
                @keyframes blink-cursor {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0; }
                }
              `}</style>
            </div>
          )}
        </div>
      )}
      {transitioningToFlower && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          width: '100vw',
          maxWidth: '100vw',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
          zIndex: 28,
          transition: 'opacity 1s',
          opacity: 1,
          position: 'fixed',
          top: 0,
          left: 0,
        }}>
          {transitionGifUrls.map((url, idx) => (
            <img
              key={url}
              src={url}
              alt={`transition gif ${idx + 1}`}
              style={{
                width: 180,
                height: 180,
                objectFit: 'contain',
                borderRadius: 24,
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                background: '#fff',
                opacity: 0.97,
                animation: 'popIn 0.5s cubic-bezier(0.4,2,0.6,1)',
                position: 'absolute',
                left: `calc(50% + ${(idx - (transitionGifUrls.length-1)/2) * 200}px)`,
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
          <style>{`
            @keyframes popIn {
              0% { opacity: 0; transform: scale(0.7) translate(-50%, -50%); }
              80% { opacity: 1; transform: scale(1.1) translate(-50%, -50%); }
              100% { opacity: 0.97; transform: scale(1) translate(-50%, -50%); }
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

function FlowerDrawing({ animate, animateHeart, drawingDone }) {
  // Animate each part with strokeDasharray and strokeDashoffset
  // Petal order: top, top-right, bottom-right, bottom-left, top-left
  return (
    <svg width="260" height="260" viewBox="0 0 260 260" style={{ display: 'block' }}>
      {/* Stem */}
      <path
        d="M130 180 Q135 220 130 250 Q125 220 130 180"
        stroke="#4caf50"
        strokeWidth="6"
        fill="none"
        style={{
          strokeDasharray: 120,
          strokeDashoffset: animate ? 0 : 120,
          transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4,2,0.6,1)',
        }}
      />
      {/* Petals */}
      {/* Top */}
      <ellipse
        cx="130" cy="100" rx="32" ry="18"
        fill="none"
        stroke="#f06292"
        strokeWidth="6"
        style={{
          strokeDasharray: 100,
          strokeDashoffset: animate ? 0 : 100,
          transition: 'stroke-dashoffset 0.7s 1.0s cubic-bezier(0.4,2,0.6,1)',
        }}
      />
      {/* Top-right */}
      <ellipse
        cx="170" cy="120" rx="18" ry="32"
        fill="none"
        stroke="#f06292"
        strokeWidth="6"
        transform="rotate(25 170 120)"
        style={{
          strokeDasharray: 100,
          strokeDashoffset: animate ? 0 : 100,
          transition: 'stroke-dashoffset 0.7s 1.2s cubic-bezier(0.4,2,0.6,1)',
        }}
      />
      {/* Bottom-right */}
      <ellipse
        cx="155" cy="165" rx="18" ry="32"
        fill="none"
        stroke="#f06292"
        strokeWidth="6"
        transform="rotate(65 155 165)"
        style={{
          strokeDasharray: 100,
          strokeDashoffset: animate ? 0 : 100,
          transition: 'stroke-dashoffset 0.7s 1.4s cubic-bezier(0.4,2,0.6,1)',
        }}
      />
      {/* Bottom-left */}
      <ellipse
        cx="105" cy="165" rx="18" ry="32"
        fill="none"
        stroke="#f06292"
        strokeWidth="6"
        transform="rotate(-65 105 165)"
        style={{
          strokeDasharray: 100,
          strokeDashoffset: animate ? 0 : 100,
          transition: 'stroke-dashoffset 0.7s 1.6s cubic-bezier(0.4,2,0.6,1)',
        }}
      />
      {/* Top-left */}
      <ellipse
        cx="90" cy="120" rx="18" ry="32"
        fill="none"
        stroke="#f06292"
        strokeWidth="6"
        transform="rotate(-25 90 120)"
        style={{
          strokeDasharray: 100,
          strokeDashoffset: animate ? 0 : 100,
          transition: 'stroke-dashoffset 0.7s 1.8s cubic-bezier(0.4,2,0.6,1)',
        }}
      />
      {/* Center */}
      <circle
        cx="130"
        cy="140"
        r="22"
        fill="#ffd54f"
        stroke="#fbc02d"
        strokeWidth="4"
        style={{
          opacity: animate ? 1 : 0,
          transition: 'opacity 0.5s 2.2s',
        }}
      />
      {/* Heart */}
      <path
        d="M200 80 Q210 70 220 80 Q230 90 220 100 Q210 110 200 100 Q190 90 200 80 Z"
        stroke="#d72660"
        strokeWidth="4"
        fill="none"
        style={{
          strokeDasharray: 120,
          strokeDashoffset: animateHeart ? 0 : 120,
          transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4,2,0.6,1)',
        }}
      />
      <text
        x="130"
        y="250"
        textAnchor="middle"
        fontFamily="Dancing Script, cursive"
        fontSize="1.5rem"
        fill="#d72660"
        style={{ opacity: drawingDone ? 1 : 0, transition: 'opacity 0.5s 0.5s' }}
      >
        ❤️
      </text>
    </svg>
  );
}

export default Proposal; 