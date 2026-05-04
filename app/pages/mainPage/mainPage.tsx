"use client";
import Image from "next/image";
import logotipo from "../../../public/images/logos/logotipoVersaoS.png";
import * as S from "./mainPageStyled";

export default function MainPage() {
  return (
    <S.MainContainer>
      <S.VideoContainer>
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/videos/telaInicial.mp4" 
        />
        <S.Overlay />
      </S.VideoContainer>

      <S.Content>
        <S.LogoContent>
          <Image
            src={logotipo}
            alt="Logo"
            priority
            style={{
              height: "3rem", 
              width: "auto",
            }}
          />
        </S.LogoContent>
        <h1>
          O CORTE PERFEITO,
          <br />
          O FRESCOR DO MAR, <br />A SUA MELHOR NOITE.
        </h1>
        <S.TextContent>
          Pratos assinados por nossos Itamaes e preparados sob medida para o seu
          paladar. Frescor absoluto em cada
          <br />
          peça.
        </S.TextContent>
        <S.ButtonContentDiv>
          <S.ButtonContent>Acessar Cardápio</S.ButtonContent>
          <S.ButtonContent>Fazer reserva</S.ButtonContent>
        </S.ButtonContentDiv>
      </S.Content>
    </S.MainContainer>
  );
}
