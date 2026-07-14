"use client";

import logotipo from "../../../public/images/logos/logotipoVersaoS.png";
import fallbackImage from "../../../public/images/fallback-image.png";
import * as S from "./mainPageStyled";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

export default function MainPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 }); 
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const motionX = isMobile ? -20 : -40;

  return (
    <S.MainContainer>
      <S.VideoContainer>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={fallbackImage.src}
        >
          <source
            src="https://n8mld2313ljofqtt.public.blob.vercel-storage.com/telaInicialMob720HD.mp4"
            type="video/mp4"
            media="(max-width: 768px)"
          />
          <source 
            src="https://n8mld2313ljofqtt.public.blob.vercel-storage.com/telaInicial720HD.mp4" 
            type="video/mp4" 
          />
          Seu navegador não suporta vídeos.
        </video>
        <S.Overlay />
      </S.VideoContainer>
      
      <S.Content ref={ref}>
        <S.LogoContent
          initial={{ opacity: 0, x: motionX }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <S.StyledLogo src={logotipo} alt="Logo" priority />
        </S.LogoContent>
        
        <S.TitleContent
          initial={{ opacity: 0, x: motionX }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          O CORTE PERFEITO,
          <br />
          O FRESCOR DO MAR, <br />A SUA MELHOR NOITE.
        </S.TitleContent>
        
        <S.TextContent
          initial={{ opacity: 0, x: motionX }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Pratos assinados por nossos Itamaes e preparados sob medida para o seu
          paladar. Frescor absoluto em cada peça.
        </S.TextContent>
        
        <S.ButtonContentDiv
          initial={{ opacity: 0, x: motionX }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
        >
          <S.ButtonContent style={{ marginRight: "2rem" }}>
            Acessar Cardápio
          </S.ButtonContent>
          <S.ButtonContent>Fazer reserva</S.ButtonContent>
        </S.ButtonContentDiv>
      </S.Content>
    </S.MainContainer>
  );
}