import React, { useState, useRef } from 'react';

const messages = [
  {
    text: `This small book, though perhaps unconventional in its form, is a testament to a deep connection. It is an acknowledgment of the journey that has led me to this moment, a journey I now feel compelled to share. This narrative is not for the masses, but for one individual who has, in ways I am still discovering, illuminated parts of my world that were previously in shadow.\n\nTo **Kate**, this is for you.`,
  },
  {
    text: `We often encounter people and form perceptions based on what we see or what they choose to present. For a long time, I was content with that. I lived, I existed, and if others saw something good in me, I was grateful for their kindness. But deep down, there were layers I never spoke of, parts of my story that remained unwritten, even to myself.\n\n"Honestly, this is not really my branding." Those were the first thoughts that came to mind as I began to put these words together. This is different, something I haven't done before. But it's different because **you are different**. You are special to me, more than you know. And now, I want to introduce you to the person behind the surface, to the parts of me that have shaped who I am today. This isn't about my name, or my age, or where I live. It's about "knowing someone" in a much deeper sense.`,
  },
  {
    text: `Kate, I heard your compliments. You saw me as a good person, and for that, I am thankful. But those words, while appreciated, often felt foreign to me. It wasn't that I disagreed, but rather, I hadn't truly considered myself in that light. I was just... living. There felt like nothing special about me. I know you might "hate me saying that," but please, just hear me out this time. I don't see myself the way you see me, and when I hear your words of appreciation, I'm often at a loss for how to feel.\n\nAll my life, my existence felt more like a state of being rather than a purposeful journey. I never actively sought a purpose. I never truly imagined what my life would become. More often than not, I felt lost. This feeling, this sense of being adrift, it began many years ago, influenced by events and circumstances that shaped my early understanding of the world. And I want to share this with you because I believe I can trust you with these truths. If, for any reason, you feel this might be too much, please know that it's okay not to read on. I understand if this might be draining.`,
  },
  {
    text: `My story, in this deeper sense, truly began when I was around 14 years old. It was a time when I grappled with a significant absence in my life: the feeling of unconditional love from my mother. While I was, and still am, close with my mother and even my half-siblings, there was a void. I struggled to understand her role in my life, to feel her presence in a way I longed for. It was particularly hard because I yearned for a father, a figure who had never truly "stood up" or "showed up" for me. This longing started to manifest in my observations of others. I began to watch, to compare, to notice what I lacked.\n\nI remember vividly, one recognition day at school. I was an honor roll student, a small achievement in the grand scheme of things, but significant to me. Yet, I didn't tell my mom about the recognition. I didn't inform her that I could attend. Why? Because I felt, in my young mind, that she had never truly acknowledged my achievements before. I poured myself into school, doing "everything, anything I can," especially during my eighth-grade year. This drive for academic success was, perhaps, a subconscious attempt to fill that emotional void, to earn a recognition I felt missing elsewhere.`,
  },
  {
    text: `It was around that time, during Grade 8, when I started down a different path. I had these childhood friends, and they really were the **best best friends** to me. They were always there, making me laugh, and they treated me like a **brother**. We'd exchange clothes, borrow money from each other and they never made me feel like I was left out. But then, things shifted. There came a time when we'd always **drink**, getting **drunk**. It felt like happiness then, or maybe that's just what I told myself. I was influenced by them, that's for sure.\n\nStill, even with all of that, I never neglected my studies. I was doing well, I really did my very best. But there was one night when we drank, and I was truly **drunk**. When I got home, my mom scolded me, punched me, and slapped me. I couldn't control my emotions then. I remember it so clearly. I just let it all out. I told her I needed **attention*8, I needed **love**. And she actually listened, she acknowledged it. We talked. She said she was busy. Busy with my half-siblings, yes, I understood that. I know it. But it still didn't feel right. I don't know why, but it just didn't. There were times I even thought about myself not existing. It was really hard.\n\nPlease know, this is the first time I'm sharing this, and it's just for you. It's hard for me to open up about this, because even now, I'm still scared. I'm scared of not being able to receive love. I can't fully trust my mom, even though we're okay now. It just seems like she doesn't want to hear me, and to be honest, she really doesn't.`,
  },
  {
    text: `I'm writing all of this so you can understand more about me. I realize now that I'm quite needy. I never really felt love in a way that truly stayed, and I was hopeless about ever receiving it. I'm not sure if I should even say this here, but I want you to know who I really am.\n\nBack when I was being influenced by my friends, I also had a lot of **chatmates**. Yes, from time to time, there were so many of them. Every single day, I'd talk to one or more people online. I don't know why, but at that time, I found some enjoyment in it. I was just responding, often with nonsense. Those chatmates never really went anywhere. It felt so casual to me. Like I said, I was looking for the **attention and love** I hadn't received. But honestly, I wasn't satisfied. I wasn't truly happy, gets mo ba? (Do you know what I'm saying?) Yes, I enjoyed the talking, but not because I was truly happy inside.`,
  },
  {
    text: `Here, please, if you're not ready to read this, it's okay. I'm not forcing you. This part is about my lovelife when I was in Grade 9. This person, she actually made me change. I don't want you to feel any hurt because I'm talking about her here. I just want you to understand why I am the way I am now.\n\nShe wasn't just a classmate. I felt something about her. For the first few months, I didn't really notice her. We clicked. But then, she suddenly **disappeared**. At that time, I didn't know what to feel. She didn't explain anything to me. And after that, we didn't have any communication for a long time.`,
  },
  {
    text: `It wasn't until my first year of college that she reappeared. She explained why she left, and I accepted her. I forgave her. We clicked again, just like before. And now, thinking back, I feel a bit lost about it all. I was her first, and she was my first.\n\nIn that relationship, I felt like I was the **only one who initiated** things. I was so cowardly, I lost my words, my dignity. I gave her everything she wanted, everything I thought I wanted to give her, because I loved her. But it didn't end well. She **cheated twice**. I forgave her once. It was truly my fault for trusting, for giving everything, for expecting so much. Because I **begged**. Honestly, I begged. I don't know why I wasn't thinking straight at that time. All I could think about was love. But truly, I didn't receive any love from her. It was just me throughout the entire relationship.\n\nIt hurt me the most when she made me believe that she was "not one of the others." And I was so stupid for believing that. But eventually, I realized I shouldn't expect things from anyone. I **cut her off** from my life. I don't want any communication with her. That relationship drained me completely. She abused me. I remember the blood stains on my uniform and maybe my mom saw them when she was doing my laundry while I was busy with schoolwork. But that's all in the past now, I know.`,
  },
  {
    text: `After that whole experience, Kate, I truly **never hoped for love again**. I just wanted to distract myself. That's when I moved to where I'm staying now. My mom doesn't even know any of this, she doesn't know I've had an ex. I never introduced her to my whole family, and looking back, that was actually a good thing. I realized she was nothing but a painful lesson, but I'm also grateful because she made me **recognize myself more**. That's because I was expecting things from someone I wasn't even sure about. Yes, I saw it then. I wasn't sure about her the moment she cheated. It was a good thing I didn't introduce her to my family. She really played me.\n\nBut all of those experiences, the good and the bad, made me who I am today. I was **traumatized by love**. I didn't know how to show my love, and I honestly couldn't see myself falling in love again. Not until **you came**.`,
  },
  {
    text: `You know, I genuinely **never felt this special before**, Kate. I don't know how to explain it, but I truly **do love you**. You understand me exactly the way I wanted to be understood. You didn't make it hard for me to love you. You didn't make it hard for me to say all of this. You know, I don't usually write, I don't read much, I wasn't like this before. But when you came into my life, it was like you **spoke me out of myself**. I never felt this appreciated before. I truly feel love from you, and that's why I really want to make this work, Kate.\n\nI don't even know how to properly express all my feelings for you. We haven't met in person. But I feel so special with you, Kate. You make me calm. You make me better. You make everything easy for me to breathe, to sort out the thoughts in my mind that sometimes I can't control. You make me believe in love again. You are so special to me, Kate. I don't know how to prove it, but this is the only way I know how, and that's why I made this website for you.`,
  },
  {
    text: `It started so simply. From the moment I first saw your name on that group page, I couldn't help but notice how your posts always made me laugh or think. There was just something about your random thoughts that caught my attention. I never expected that a simple reaction to your post would lead to you adding me. Honestly, I was pleasantly surprised when you even mentioned me in that "who I find attractive" post. That was the exact moment I knew I had to say hi.\n\nThen, when you messaged me first about the music bio, I realized this wasn't just another online connection. It was the start of something really fun and special. And now, after all our chats, I'm genuinely glad we crossed paths like that. I don't know exactly when it hit me, but I started checking my phone more, waiting for your name to pop up, rereading our chats, smiling at your replies, and missing you more when you were offline. That's when I knew... **I was falling for you**.`,
  },
  {
    text: `It wasn't always easy, I know that. We opened up about our lives and you even called me out for not sleeping enough or skipping meals. You **cared**. Even when we had those little sulking moments because I couldn't handle my emotions well, you still stayed. And for that, I'm beyond thankful.\n\nI miss you more than I can put into words. Not just once in a while, but every single day. Every second. And even with everything, the highs and lows, I wouldn't trade this connection for anything. Because every memory with you, even the imperfect ones, are still my favorite pages. And I'd reread them all, just to feel close to you again.`,
  },
  {
    text: `There's a **comfort** n your presence that I've never felt before. With you, I can be my true self. I'm not the type who's good with words. I'm not naturally expressive. I've never been someone who knew how to open up easily... but somehow, with you, it just happens. You made it feel **safe to be honest**. You made it okay to be vulnerable. And I can say this with my whole heart that I've never felt this kind of comfort with anyone before.\n\nWith you, I don't have to overthink what I say or hold back my emotions out of fear that I'll be misunderstood. You **see me** in ways others never even tried to. And you understand me not just in the easy moments, but especially in the messy ones. I love you for that.`,
  },
  {
    text: `I love the way you understand me, the way you listen, the way you just get me even when I'm not making much sense. And I love you even more when you allow yourself to be vulnerable with me too. Those are the moments that truly stay with me, when you open up, when you let me in, when you let your guard down. Because it tells me you trust me. And through those moments, I get to know you more deeply, piece by piece. Even though I already know so much about you, I want to keep learning because **every part of you is worth knowing**.\n\nYou're incredibly selfless, even when you don't realize it. I know you sometimes feel like you're a burden, like you're "too much" or "too heavy to carry." I know you don't want to be the reason someone feels resentment, or disappointment, or unmet expectations. But please believe this: **you are never a burden**. **Never**.`,
  },
  {
    text: `You're funny and full of life in a way that lights up even my darkest days. You make me laugh with the smallest things, and honestly, I love everything about you, your humor, your weakness, your strength, your softness. I love you more than you know. I love you more than you love me, and that's saying something. You truly are the **best thing that's ever happened in my life**.\n\nEven when you think you're not doing enough, when you tell me you don't know what to say, or you feel like you're not comforting me the right way, please know that **just being you is more than enough**. Your presence alone makes everything feel lighter. Your messages, your voice, your simple "how are yous" they ground me, they remind me that I'm not alone. Because you're with me. And knowing that? That's what makes everything feel okay.\n\nSo, thank you for being my **safe place**, my **best friend**, and my **love**. You're everything to me. I never expected that a simple interaction online would turn into something this real, this deep, and this meaningful to me. But here I am, grateful that I saw your name, grateful that you added me, and even more grateful that we've shared all these moments since.\n\nYou've become someone I think about constantly. Someone whose messages I wait for, whose presence I look for, even in the little things. You make me feel seen, understood, and safe to be myself and that's something I've never really had before. I love the way you share your thoughts so freely, and the way you always try to comfort me even when you're unsure how. I admire how selfless you are, even when you shouldn't have to be.\n\nYou've let me into your world, and I've come to love every part of it, even the vulnerable, messy, emotional part. And though I know things won't always be easy or perfect, I want to be someone who **chooses you through all of it**.`,
  },
];

// Helper to convert **bold** markdown to <strong> tags
function formatBold(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

const MessageBook = ({ onNext }) => {
  const [page, setPage] = useState(0);
  const [hasStartedReading, setHasStartedReading] = useState(false);
  const containerRef = useRef(null);
  const [isTurning, setIsTurning] = useState(false);

  const handleNext = () => {
    if (!hasStartedReading) {
      setHasStartedReading(true);
      setPage(0);
      return;
    }
    
    if (page < messages.length - 1) {
      setIsTurning(true);
      setTimeout(() => {
        setPage(page + 1);
        setIsTurning(false);
      }, 300);
    } else {
      onNext();
    }
  };

  const handlePrevious = () => {
    if (page > 0) {
      setIsTurning(true);
      setTimeout(() => {
        setPage(page - 1);
        setIsTurning(false);
      }, 300);
    }
  };

  // Add responsive styles for mobile
  const mobileBookStyles = {
    width: '98vw',
    height: '90vh',
    minWidth: '0',
    minHeight: '0',
    maxWidth: '100vw',
    maxHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const mobilePagePadding = {
    padding: '24px 8vw',
  };

  // Add a helper to detect mobile
  const isMobile = window.innerWidth <= 600;

  // Show cover page if not started reading
  if (!hasStartedReading) {
    return (
      <div
        ref={containerRef}
        style={{
          minHeight: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
          overflow: 'hidden',
          position: 'relative',
          paddingTop: isMobile ? '8vh' : 0,
          boxSizing: 'border-box',
        }}
      >
        {/* Book cover ONLY (no right page) */}
        <div style={{
          width: isMobile ? '90vw' : '340px',
          height: isMobile ? '520px' : '520px',
          maxWidth: '340px',
          maxHeight: '90vh',
          boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
          borderRadius: '18px',
          overflow: 'hidden',
          background: 'linear-gradient(145deg, #2c3e50 0%, #34495e 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
          border: '2px solid #1a252f',
        }}>
          <div style={{
            textAlign: 'center',
            color: '#ecf0f1',
            padding: '0 18px',
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.1rem, 4vw, 1.8rem)',
              fontWeight: 600,
              margin: '0 0 16px 0',
              letterSpacing: '0.05em',
            }}>
              My Heart's
            </h2>
            <h1 style={{
              fontFamily: 'Dancing Script, cursive',
              fontSize: 'clamp(1.3rem, 6vw, 2.2rem)',
              fontWeight: 600,
              margin: '0 0 24px 0',
              color: '#e74c3c',
            }}>
              Story
            </h1>
            <div style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #e74c3c, #c0392b)',
              margin: '0 auto 24px auto',
              borderRadius: '2px',
            }} />
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
              lineHeight: 1.6,
              opacity: 0.8,
              margin: 0,
            }}>
              A collection of moments, and feelings shared with the one who makes my heart complete.
            </p>
          </div>
          <button
            onClick={handleNext}
            style={{
              marginTop: 36,
              marginBottom: 36,
              padding: '16px 32px',
              fontSize: '1.1rem',
              borderRadius: '30px',
              background: 'linear-gradient(135deg,rgb(77, 31, 162) 0%,rgb(69, 39, 176) 100%)',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 24px rgba(123, 31, 162, 0.3)',
              width: '100%',
              maxWidth: '220px',
            }}
          >
            Open Book →
          </button>
        </div>
      </div>
    );
  }

  // Show content pages after starting to read
  return (
    <div
      ref={containerRef}
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
        overflow: 'hidden',
        position: 'relative',
        paddingTop: isMobile ? '8vh' : 0,
        boxSizing: 'border-box',
      }}
    >
      {/* Book container */}
      <div style={{
        ...mobileBookStyles,
        position: 'relative',
      }}>
        {/* Book pages container - full width */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          background: '#fff',
          borderRadius: '8px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden',
          zIndex: 5,
          minWidth: '140px',
        }}>
          {/* Page content */}
          <div style={{
            height: '100%',
            ...mobilePagePadding,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
          }}>
            {/* Page header */}
            <div style={{
              textAlign: 'center',
              marginBottom: '20px',
              paddingBottom: '20px',
              borderBottom: '2px solid #e2e8f0',
            }}>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.4rem',
                color: '#2c3e50',
                margin: '0 0 8px 0',
                fontWeight: 600,
              }}>
                 {page + 1}
              </h3>
              <div style={{
                width: '40px',
                height: '2px',
                background: 'linear-gradient(90deg, #7b1fa2, #9c27b0)',
                margin: '0 auto',
                borderRadius: '1px',
              }} />
            </div>

            {/* Page content */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px 0',
              marginBottom: '20px',
            }}>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  color: '#2c3e50',
                  lineHeight: 1.8,
                  textAlign: 'justify',
                  margin: 0,
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  whiteSpace: 'pre-line',
                  textJustify: 'inter-word',
                  hyphens: 'auto',
                  wordBreak: 'normal',
                }}
                dangerouslySetInnerHTML={{ __html: formatBold(messages[page].text) }}
              />
            </div>

            {/* Page footer intentionally left empty to avoid duplicate navigation buttons */}
          </div>

          {/* Page curl effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '20px',
            height: '100%',
            background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 100%)',
            borderRadius: '0 8px 8px 0',
          }} />
        </div>

        {/* Page turn animation overlay */}
        {isTurning && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.1)',
            zIndex: 20,
            pointerEvents: 'none',
          }} />
        )}
      </div>

      {/* Navigation buttons outside the book */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        zIndex: 30,
        margin: '40px auto 0 auto',
        width: '90vw',
        maxWidth: '500px',
        justifyContent: 'center',
      }}>
        <button
          onClick={handlePrevious}
          disabled={page === 0}
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            borderRadius: '30px',
            background: page === 0 ? '#e2e8f0' : 'linear-gradient(135deg,rgb(66, 31, 162) 0%,rgb(53, 39, 176) 100%)',
            color: page === 0 ? '#94a3b8' : '#fff',
            border: 'none',
            cursor: page === 0 ? 'not-allowed' : 'pointer',
            fontWeight: 600,
            opacity: page === 0 ? 0.5 : 1,
            transition: 'all 0.3s ease',
            boxShadow: page === 0 ? 'none' : '0 4px 16px rgba(123, 31, 162, 0.3)',
            minWidth: '120px',
          }}
        >
          ← Previous Page
        </button>
        <button
          onClick={handleNext}
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            borderRadius: '30px',
            background: 'linear-gradient(135deg,rgb(55, 31, 162) 0%,rgb(64, 39, 176) 100%)',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 16px rgba(123, 31, 162, 0.3)',
            minWidth: '120px',
          }}
        >
          {page < messages.length - 1 ? 'Next Page →' : 'Continue →'}
        </button>
      </div>

      {/* Reading progress indicator */}
      <div style={{
        margin: '32px auto 0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '12px 24px',
        borderRadius: '30px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        zIndex: 25,
        maxWidth: '90vw',
        justifyContent: 'center',
      }}>
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.9rem',
          color: '#64748b',
          fontWeight: 500,
        }}>
          Reading Progress
        </span>
        <div style={{
          width: '120px',
          height: '6px',
          background: 'rgba(123, 31, 162, 0.2)',
          borderRadius: '3px',
          overflow: 'hidden',
        }}>
          <div style={{
            width: `${((page + 1) / messages.length) * 100}%`,
            height: '100%',
            background: 'linear-gradient(90deg,rgb(70, 31, 162),rgb(64, 39, 176))',
            borderRadius: '3px',
            transition: 'width 0.5s ease',
          }} />
        </div>
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.9rem',
          color: '#7b1fa2',
          fontWeight: 600,
        }}>
          {Math.round(((page + 1) / messages.length) * 100)}%
        </span>
      </div>
    </div>
  );
};

export default MessageBook; 