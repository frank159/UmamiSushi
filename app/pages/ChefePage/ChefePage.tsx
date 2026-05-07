"use client";
import chefe from "../../../public/images/chef.png";
import * as S from "./ChefePageStyled";
import { useInView } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

export default function ChefePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <S.MainContainer>
      <S.ContentContainer ref={ref}>
        <S.TextContent
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <S.Title>ESPECIALISTA EM TÉCNICAS MILENARES</S.Title>
            <S.Text>
              Nosso Itamae é especialista na arte do Edomae, estilo clássico que
              exige anos de prática para o domínio da cura e salga de peixes
              brancos. Com um histórico de liderança em restaurantes estrelados,
              ele aplica um padrão de qualidade que envolve desde a seleção
              direta com pescadores artesanais até a execução técnica de pratos
              autorais que desafiam o paladar convencional.
            </S.Text>
          </motion.div>
        </S.TextContent>
        <S.ImgContainer
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <S.Img src={chefe} alt="chefe" />
        </S.ImgContainer>
      </S.ContentContainer>
    </S.MainContainer>
  );
}
