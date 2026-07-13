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
  background-color: #000;
  @media (max-width: 768px) {
    height: 40vh;
    min-height: auto;
    justify-content: center;
    align-items: center;
    padding: 0;
    text-align: center;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  padding-left: 6rem;
  padding-right: 6rem;
  height: auto;
  gap: 10rem;
  z-index: 2;

  @media (max-width: 1240px) {
    flex-direction: column;
    align-items: start;
    padding: 4rem;
    gap: 0rem;
  }

  @media (max-width: 768px) {
    height: 40vh;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
  }
`;

export const ImgContainer = styled(motion.div)`
  height: 100%;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
    }
  }
`;

export const Img = styled(Image)`
  height: auto;
  width: 100%;
  max-height: 50vh;
  object-fit: contain;

  @media (max-width: 768px) {
    max-height: none;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
  }
`;

export const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  height: 100%;
  width: 40%;
  padding-top: 2rem;
  z-index: 3;

  @media (max-width: 1240px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding-top: 0;
    height: 100%;
    gap: 1rem;
  }
`;

export const Title = styled.h1`
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    width: 100%;
    text-align: end;
}
`;

export const Text = styled.p`
  width: 85%;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
    text-align: start;
  }
`;
