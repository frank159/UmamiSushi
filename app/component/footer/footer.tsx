"use client";
import Image from "next/image";
import * as S from "./footerStyled";

import logotipoRodape from "../../../public/images/logos/logotipoRodape.png";

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.LogoWrapper>
          <Image
            src={logotipoRodape}
            alt="logotipoRodape"
            width={60}
            height={60}
            priority
          />
        </S.LogoWrapper>

        <S.CopyrightText>
          © 2026 Umami Sushi. Todos os direitos reservados.
        </S.CopyrightText>
      </S.FooterContent>
    </S.FooterContainer>
  );
}
