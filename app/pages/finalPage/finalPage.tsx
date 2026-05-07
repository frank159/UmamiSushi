"use client";
import Image from "next/image";
import * as S from "./finalPageStyled"; // Verifique o caminho do seu import
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Imagens (Assumindo que finalPage é o background e finalPage2 é o sushi em destaque)
import finalPage from "../../../public/images/finalPage.png";
import finalPage2 from "../../../public/images/finalPage2.png";

export default function FinalPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <S.MainContainer>
      <S.ContentContainer
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <S.LeftPanel>
          <S.BackgroundImageWrapper>
            <Image src={finalPage2} alt="Background" fill />
          </S.BackgroundImageWrapper>

          <S.Title>
            DESCUBRA NOVOS
            <br />
            SABORES
          </S.Title>

          <S.Description>
            Uma imersão completa na cultura oriental através de insumos sazonais
            e técnicas milenares.
            <br />
            Escolha sua modalidade favorita e visite nosso espaço.
          </S.Description>

          <S.ButtonGroup>
            <S.ButtonContent>Acessar Cardápio</S.ButtonContent>
            <S.ButtonContent>Fazer reserva</S.ButtonContent>
          </S.ButtonGroup>

          {/* Este endereço some no mobile */}
          <S.AddressInfo>
            ENDEREÇO: RUA DAS PALMEIRAS, 112 • BATEL • CURITIBA - PR
          </S.AddressInfo>
        </S.LeftPanel>

        <S.MobileVideoSection>
          <S.VideoBackground autoPlay muted loop playsInline>
            <source src="https://n8mld2313ljofqtt.public.blob.vercel-storage.com/telaInicial.mp4" type="video/mp4" />
          </S.VideoBackground>

          <S.AddressOverlay>
            ENDEREÇO: RUA DAS PALMEIRAS, 112 • BATEL • CURITIBA - PR
          </S.AddressOverlay>
        </S.MobileVideoSection>

        <S.RightPanel>
          <Image
            src={finalPage}
            alt="Sushi"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </S.RightPanel>
      </S.ContentContainer>
    </S.MainContainer>
  );
}
