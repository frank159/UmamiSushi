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
    font-weight: 400; /* Mohave Regular como padrão */
    font-size: 16px !important; /* 16px */
    background-color: #000000;
    color: #133F20;
    -webkit-font-smoothing: antialiased;
  }

h1 {
    font-family: var(--font-aboreto), serif !important;
    font-size: 56px !important;
    font-weight: 400;
    
    @media (max-width: 768px) {
      font-size: 24px !important;
    }
  }

  h3 {
    font-family: var(--font-mohave), sans-serif !important;
    font-size: 1rem;
    font-weight: 200;
    line-height: 1.5;
  }
  p {
    font-family: var(--font-mohave), sans-serif !important;
    font-size: 1rem;
    font-weight: 200;
    line-height: 1.5;
  }

  /* Classes auxiliares para textos específicos */
  .text-bold {
    font-weight: 700; /* Mohave Bold */
  }

  .text-extrabold {
    font-weight: 900; /* Mohave ExtraBold */
  }
`;