import { motion } from "motion/react";
import styled from "styled-components";

export const MainContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6rem;
  @media (max-width: 768px) {
    padding: 0;
    height: auto;
  }
`;

// Transformado em motion.div para podermos animar
export const ContentContainer = styled(motion.div)`
  width: 80%;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  min-height: 80%;
  background-color: #000;

  @media (max-width: 1240px) {
    grid-template-columns: 1fr;
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 100%; /* Ocupa a largura total da tela no mobile */
    min-height: auto;
  }
`;

export const LeftPanel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 4rem;
  z-index: 1;
  padding-bottom: 6rem;

  @media (max-width: 1240px) {
    padding: 4rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem;
    padding-bottom: 2rem; /* Reduzido pois o vídeo virá abaixo */
    align-items: flex-start;
    text-align: left;
    width: 100%;
    background-color: #000;
  }
`;

export const RightPanel = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
  }

  /* Esconde completamente o painel da imagem da direita em 1240px */
  @media (max-width: 1240px) {
    display: none;
  }
`;

export const BackgroundImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: -2;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }

  img {
    object-fit: cover;
    opacity: 0.4;
  }

  /* Remove a imagem de fundo no mobile */
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-family:
    "Times New Roman", Times, serif; /* Substitua pela fonte Serif do seu projeto (ex: Playfair Display) */
  font-size: 3.5rem;
  font-weight: 400;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: 2rem;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    width: 100%;
  }
`;

export const Description = styled.p`
  font-family: sans-serif;
  font-size: 0.95rem;
  color: #d1d1d1;
  line-height: 1.5;
  max-width: 85%;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
  width: 100%;
`;

export const ButtonContent = styled.button`
  margin-bottom: 1rem;
  font-size: 16px;
  font-family:
    var(--font-mohave), sans-serif; /* Usando a variável que configuramos */
  background-color: #480001;
  color: white;
  border: none;
  padding: 0.3rem 2rem;
  cursor: pointer;

  transition: all 0.1s ease-in-out;

  @media (max-width: 768px) {
    padding: 0.3rem 1.5rem;
    font-size: 12px !important;
  }

  &:hover {
    background-color: #680001;
    transform: scale(1.05);
    transition: all 0.1s;
  }

  &:active {
    background-color: #280001;
    transition: all 0.1s;
  }
`;

export const AddressInfo = styled.p`
  font-family: sans-serif;
  font-size: 0.75rem;
  color: #a0a0a0;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileVideoSection = styled.div`
  display: none; /* Escondido por padrão */

  @media (max-width: 768px) {
    display: flex;
    position: relative;
    width: 100%;
    height: 200px; /* Altura da seção do vídeo */
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`;

export const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  z-index: 0;
  filter: brightness(
    0.6
  ); /* Escurece um pouco o vídeo para o texto ler melhor */
`;

export const AddressOverlay = styled.div`
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 0.7rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0 1rem;
  width: 100%;
`;
