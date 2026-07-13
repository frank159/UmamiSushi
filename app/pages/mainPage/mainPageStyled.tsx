import { motion } from "motion/react";
import styled from "styled-components";
import Image from "next/image";

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 100vh;
  overflow: hidden;
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6; 
  z-index: -1;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover; 

    transform: scaleX(-1);
    @media (max-width: 768px) {
    transform: scaleX(1);
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(
    0,
    0,
    0,
    0.4
  ); // Escurece um pouco o vídeo para o texto aparecer
`;

export const StyledLogo = styled(Image)`
  height: 3rem; // Tamanho padrão (Desktop)
  width: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 1.6rem; // Tamanho reduzido para Mobile
  }
`;

export const LogoContent = styled(motion.div)`
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-top: 3vh;
    margin-bottom: 13vh;
  }
`;

export const TitleContent = styled(motion.h1)``;

export const TextContent = styled(motion.p)`
  margin-top: 1rem;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: white;
  text-align: start;

  margin-top: 14vh;
  margin-left: 5vw;

  @media (max-width: 768px) {
    margin-top: 0;
    padding-right: 10%;
  }
`;

export const ButtonContentDiv = styled(motion.div)`
  margin-top: 3rem;
  margin-bottom: 1rem;
  flex-direction: row;
  display: flex;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
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
