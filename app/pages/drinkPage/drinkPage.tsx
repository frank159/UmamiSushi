"use client";
import drinksUm from "../../../public/images/drinksUm.png";
import drinkDois from "../../../public/images/drinkDois.png";
import logotipoCompl from "../../../public/images/logos/logotipoCompl.png";
import * as S from "./drinkPageStyled";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function DrinkPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <S.MainContainer>
      <S.ContentContainer ref={ref}>
        <S.TextContainer>
          <S.Title
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            COQUETELARIA AUTORAL:
            <br />
            EQUILÍBRIO DOS 
            <S.DescktopBr />
             SENTIDOS
          </S.Title>
          <S.LogoContainer
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <S.Logo src={logotipoCompl} alt="logotipoCompl" />
            <S.Text>
              Nossa carta apresenta desde o frescor do Sake Sour até a
              complexidade de drinks preparados com frutas sazonais e insumos
              orientais. O acompanhamento ideal para limpar o paladar e revelar
              novas camadas de sabor em cada peça de sushi.{" "}
            </S.Text>
          </S.LogoContainer>
          <S.Img2Container
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <S.Img2 src={drinksUm} alt="drinksUm" />
          </S.Img2Container>
        </S.TextContainer>
        <S.ImgContainer
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <S.Img src={drinkDois} alt="drinkDois" />
        </S.ImgContainer>
      </S.ContentContainer>
    </S.MainContainer>
  );
}
