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

export const Logo = styled(Image)`
  height: 7rem; 
  width: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Img2 = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
  }
`;

export const Title = styled(motion.h1)`
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
    width: 80%;
  }
`;

export const DescktopBr = styled.br`
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  padding-left: 11rem;
  padding-right: 11rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70vh;

  @media (max-width: 1440px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media (max-width: 1240px) {
    flex-direction: column;
    height: auto;
    padding: 4rem 2rem;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
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
    align-items: start;
    text-align: start;
  }
`;

export const LogoContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: end;
    justify-content: end;
    width: 100%;
  }
`;

export const ImgContainer = styled(motion.div)`
  height: 100%;
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
    object-fit: cover;
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
