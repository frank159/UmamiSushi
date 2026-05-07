import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #480001;
  color: #ffffff;
  padding: 1rem 6rem; /* Padding reduzido para manter o aspecto "slim" */
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  /* Estilizando a imagem dentro do wrapper */
  img {
    width: 60px; /* Largura padrão (Desktop) */
    height: auto; /* Mantém a proporção */

    @media (max-width: 768px) {
      width: 40px; /* Largura solicitada para Mobile */
    }
  }
`;

export const CopyrightText = styled.p`
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.5px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const SocialLink = styled.span`
  transition: transform 0.2s ease;
  display: block; /* Garante que o link envolva a imagem corretamente */

  &:hover {
    transform: scale(1.1);
  }

  /* Ajuste caso você queira forçar um tamanho via CSS */
  img {
    display: block;
  }
`;
