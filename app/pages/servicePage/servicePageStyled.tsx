import { motion } from "motion/react";
import styled from "styled-components";
import Image from "next/image";

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
  overflow: hidden;

  padding: 6rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled(motion.div)`
  width: 100%;
`;

export const Title = styled.h1``;

export const Text = styled.p`
  margin-top: 1rem;
`;

export const ServiceContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 4rem;
  width: 100%;
  max-width: 1200px;

  .swiper-pagination-bullet {
    background: #ffffff21;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #ffffff5a;
  }

  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    padding: 0 10px;
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const ServiceCard = styled.div<{ bg: string }>`
  position: relative;
  width: 100%;
  max-width: 380px;
  height: 240px;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  color: #fff;
  border: 1px solid #480001;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-position: center;
    opacity: 0.6;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const TitleCard = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const TextCard = styled.p`
  font-size: 0.85rem;
  line-height: 1.4;
  opacity: 0.9;
`;
