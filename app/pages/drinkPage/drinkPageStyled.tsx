import { motion } from "motion/react";
import styled from "styled-components";
import Image from "next/image";

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 80vh;
  }
`;

// export const ContentContainer = styled.div`
//   display: flex;
//   padding-left: 11rem;
//   padding-right: 11rem;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   height: 70vh;
//   background-color: red;

//   @media (max-width: 1240px) {

// }
// `;

// export const TextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: start;
//   align-items: flex-start;
//   height: 100%;
//   background-color: blue;
// `;

// export const ImgContainer = styled.div`
//   height: 100%;
//   background-color: green;
// `;

// export const Img = styled(Image)`
//   height: 100%; // Tamanho padrão (Desktop)
//   width: auto;
//   object-fit: contain;

//   @media (max-width: 768px) {
//     height: 1.6rem; // Tamanho reduzido para Mobile
//   }
// `;

export const Logo = styled(Image)`
  height: 7rem; // Tamanho padrão (Desktop)
  width: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    display: none;
  }
`;

// export const Img2Container = styled.div`
//   height: 100%;
//   width: 90%;
//   display: flex;
//   align-items: end;
// `;

export const Img2 = styled(Image)`
  width: 100%; // Tamanho padrão (Desktop)
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
  }
`;

export const Title = styled(motion.h1)`
  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
    width: 80%;
  }
`;

export const DescktopBr = styled.br`
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
`;

// export const Text = styled.p`
//   max-width: 22rem; // 🔥 controla isso
//   line-height: 1.4;
// `;

// export const LogoContainer = styled.div`
//   display: flex;
//   gap: 1rem;
//   align-items: flex-start;
// `;

/////////////////
export const ContentContainer = styled.div`
  display: flex;
  padding-left: 11rem;
  padding-right: 11rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70vh;
  /* background-color: red; */ // Remova ou comente para produção

  @media (max-width: 1440px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media (max-width: 1240px) {
    flex-direction: column; // Empilha os elementos para evitar esmagamento
    height: auto; // Permite que o container cresça conforme o conteúdo
    padding: 4rem 2rem;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column; // Empilha os elementos para evitar esmagamento
    height: auto; // Permite que o container cresça conforme o conteúdo
    padding: 0;
    gap: 3rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  height: 100%;

  @media (max-width: 1240px) {
    width: 100%;
    align-items: start; // Centraliza o texto no mobile/tablet
    text-align: start;
  }
`;

export const LogoContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: end;
    justify-content: end;
    width: 100%;
  }
`;

export const ImgContainer = styled(motion.div)`
  height: 100%;
  /* background-color: green; */

  @media (max-width: 1240px) {
    display: none;
  }
`;

export const Img = styled(Image)`
  height: 100%;
  width: auto;
  object-fit: contain;

  @media (max-width: 1240px) {
    width: 100%;
    height: 100%;
    object-fit: cover; // Faz a imagem preencher melhor o espaço
  }
`;

export const Img2Container = styled(motion.div)`
  height: 100%;
  width: 90%;
  display: flex;
  align-items: end;

  @media (max-width: 1240px) {
    width: 100%;
    justify-content: center;
    margin-top: 2rem;
  }
`;

export const Text = styled.p`
  max-width: 22rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    max-width: 22rem;
    text-align: end;
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;
