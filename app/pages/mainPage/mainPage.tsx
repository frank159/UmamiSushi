"use client";
import Image from "next/image";
import logotipo from "../../../public/images/logos/logotipoVersaoS.png";
import * as S from "./mainPageStyled";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function MainPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <S.MainContainer>
      <S.VideoContainer>
        <video autoPlay muted loop playsInline>
          <source
            src="/videos/telaInicialMob.mp4"
            type="video/mp4"
            media="(max-width: 768px)"
          />
          <source src="/videos/telaInicial.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        <S.Overlay />
      </S.VideoContainer>
      <S.Content ref={ref}>
        <S.LogoContent
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <S.StyledLogo src={logotipo} alt="Logo" priority />
        </S.LogoContent>
        <S.TitleContent
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          O CORTE PERFEITO,
          <br />
          O FRESCOR DO MAR, <br />A SUA MELHOR NOITE.
        </S.TitleContent>
        <S.TextContent
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Pratos assinados por nossos Itamaes e preparados sob medida para o seu
          paladar. Frescor absoluto em cada peça.
        </S.TextContent>
        <S.ButtonContentDiv
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
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
