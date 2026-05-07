import { motion } from "motion/react";
import styled from "styled-components";
import fundoChef from "../../../public/images/fundoChef.png";
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
  /* @media (max-width: 768px) {
    height: 40vh;
    min-height: auto;
    justify-content: center;
    align-items: center;
    padding: 0;
    text-align: center;
  } */
`;

export const ImgContainer = styled(motion.div)`
  height: 100%;

  @media (max-width: 1240px) {
    width: 50%;
    height: 50vh;
    overflow: hidden; // ESSENCIAL pra cortar corretamente
  }

  @media (max-width: 768px) {
    height: 50vh;
    width: 100%;
    padding: 0 2rem;
  }
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 70vh;
  width: 100%;

  @media (max-width: 1240px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    height: auto;
  }
`;

export const TextContent = styled(motion.div)`
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-bottom: 10rem;

  background-image: url(${fundoChef.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1240px) {
    padding: 2rem;
    background-image: none;
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1``;
export const Text = styled.p`
  width: 80%;

  @media (max-width: 1240px) {
    border-left: 2px solid #fff;
    padding-left: 1rem;
    margin-left: 0.4rem;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0.2rem;
  }
`;
