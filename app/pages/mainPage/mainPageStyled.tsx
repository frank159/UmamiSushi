import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; // Garante que o vídeo fique atrás de tudo

  video {
    width: 100%;
    height: 100%;
    object-fit: cover; // O vídeo preenche a tela sem esticar

    /* OPÇÃO A: Inverter horizontalmente (Espelhar) */
    transform: scaleX(-1);

    /* OPÇÃO B: Inverter cores (Negativo) */
    /* filter: invert(100%); */
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

export const LogoContent = styled.div`
  margin-bottom: 1rem;
`;

export const TextContent = styled.h3`
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
`;

export const ButtonContentDiv = styled.div`
  margin-top: 3rem;
  margin-bottom: 1rem;
  flex-direction: row;
  display: flex;
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
  margin-right: 2rem;

  transition: all 0.1s ease-in-out;

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
