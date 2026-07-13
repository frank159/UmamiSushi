"use client";

import React from "react";
import Image from "next/image";
import * as S from "./footerStyled";

import whatsappIcon from "../../../public/images/logos/whats.png";
import instagramIcon from "../../../public/images/logos/insta.png";
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

        <S.SocialWrapper>
          <S.SocialLink>
            <Image src={whatsappIcon} alt="WhatsApp" width={20} height={20} />
          </S.SocialLink>

          <S.SocialLink>
            <Image src={instagramIcon} alt="Instagram" width={20} height={20} />
          </S.SocialLink>
        </S.SocialWrapper>
      </S.FooterContent>
    </S.FooterContainer>
  );
}
