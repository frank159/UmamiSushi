"use client";
import chefe from "../../../public/images/chef.jpg";
import * as S from "./ChefePageStyled";
import { useInView } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

export default function ChefePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <S.MainContainer>
      <S.ContentContainer ref={ref} id="sobre">
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
            <S.Text style={{ width: "65%" }}>
              Liderado pelo Itamae, com passagem por casas estreladas, nosso balcão resgata a essência do estilo Edomae. Essa técnica centenária exige domínio absoluto sobre o tempo, a salga e a cura dos peixes para extrair o máximo de umami de cada ingrediente. Do contato direto com pescadores artesanais à criação de receitas autorais, cada etapa reflete rigor técnico e respeito à sazonalidade.
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
