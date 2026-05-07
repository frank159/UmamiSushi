// src/styles/GlobalStyles.ts
'use client';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body {
    font-family: var(--font-mohave), sans-serif;
    font-weight: 300; /* 👈 Mude de 400 para 300 */
    font-size: 16px !important;
    background-color: #000000;
    color: #ffff;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    text-rendering: optimizeSpeed !important;
}

h1 {
    font-family: var(--font-aboreto), serif !important;
    font-size: 48px !important;
    font-weight: 300;
    
    @media (max-width: 768px) {
      font-size: 24px !important;
    }
  }

  h2 {
    font-family: var(--font-mohave), sans-serif !important;
    font-weight: 300;
    line-height: 1.5;
    font-size: 32px !important;

     @media (max-width: 768px) {
      font-size: 24px !important;
    }
  }

  h3 {
    font-family: var(--font-mohave), sans-serif !important;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
  }
  p {
    font-family: var(--font-mohave), sans-serif !important;
    font-size: 1rem;
    font-weight: 100;
    line-height: 1.5;
  }

  /* Classes auxiliares para textos específicos */
  .text-bold {
    font-weight: 700; /* Mohave Bold */
  }

  .text-extrabold {
    font-weight: 300; /* Mohave ExtraBold */
  }
`;