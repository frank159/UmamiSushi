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

`;

export const ImgContainer = styled(motion.div)`
  height: 100%;

  @media (max-width: 1240px) {
    width: 50%;
    height: 50vh;
    overflow: hidden;
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
  align-items: center;
  padding-left: 4rem;
  padding-right: 4.5rem;

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

export const Title = styled.h1`
  width: 70%;
`;
export const Text = styled.p`
  width: 80%;

  @media (max-width: 1240px) {
    margin-top: 0.4rem;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0.2rem;
  }
`;


export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
  width: 100%;

  padding-top: 1rem;
`;


export const ButtonContent = styled.a`
  margin-bottom: 1rem;
  text-decoration: none;
  font-size: 16px;
  font-family:
    var(--font-mohave), sans-serif;
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