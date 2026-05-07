"use client";
import telaDois from "../../../public/images/telaDois.jpg";
import * as S from "./presentationPageStyled";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function PresentationPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <S.MainContainer>
      <S.ContentContainer ref={ref}>
        <S.ImgContainer
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <S.Img src={telaDois} alt="telaDois" />
        </S.ImgContainer>
        <S.TextContainer
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <S.Title>
            A paciência por trás
            <br />
            do corte perfeito
          </S.Title>
          <S.Text>
            No Umami Sushi, a tradição não é negociável. Nossa curadoria
            seleciona apenas os melhores insumos do dia, unindo ingredientes
            sazonais à técnica milenar japonesa. O resultado é um paladar
            equilibrado, feito para transformar o seu jantar em um momento de
            absoluta presença.
          </S.Text>
        </S.TextContainer>
      </S.ContentContainer>
    </S.MainContainer>
  );
}
