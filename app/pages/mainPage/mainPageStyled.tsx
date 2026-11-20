import { motion } from "motion/react";
import styled from "styled-components";
import Image from "next/image";

const MOBILE_HEADER_H = "56px";

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
  background: rgba(0, 0, 0, 0.4);
`;

export const StyledLogo = styled(Image)`
  height: 3rem;
  width: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 1.6rem;
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
    box-sizing: border-box;
    height: 100svh;
    margin-top: 7rem;
    padding-top: calc(${MOBILE_HEADER_H} + 2rem);
    padding-right: 10%;
  }
`;

export const ButtonContentDiv = styled(motion.div)`
  margin-top: 3rem;
  margin-bottom: 1rem;
  flex-direction: row;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
    gap: 0.75rem;
    width: 100%;
  }
`;

export const ButtonContent = styled.a`
  margin-bottom: 1rem;
  text-decoration: none;
  font-size: 16px;
  font-family: var(--font-mohave), sans-serif;
  background-color: #480001;
  color: white;
  border: none;
  padding: 0.3rem 2rem;
  cursor: pointer;

  transition: all 0.1s ease-in-out;

  @media (max-width: 768px) {
    flex: 1;
    text-align: center;
    padding: 0.6rem 1rem;
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