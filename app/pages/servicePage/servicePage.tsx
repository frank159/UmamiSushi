"use client";
import Image from "next/image";
import logotipo from "../../../public/images/logos/logotipoVersaoS.png";
import * as S from "./servicePageStyled";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

import almoco from "../../../public/images/almoco.png";
import buffet from "../../../public/images/buffet.jpg";
import lacarte from "../../../public/images/lacarte.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function ServicePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <S.MainContainer>
      <S.ContentContainer ref={ref}>
        <S.TextContainer
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <S.Title>NOSSOS SERVIÇOS</S.Title>
          <S.Text>
            Descubra nossas modalidades de atendimento e os horários disponíveis
          </S.Text>
        </S.TextContainer>
        <S.ServiceContainer
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {isMobile ? (
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerView={1}
              spaceBetween={20}
              centeredSlides={isMobile}
              loop={false}
              className="testimonialSwiper"
              style={{ width: "100%", paddingBottom: "40px" }}
            >
              <SwiperSlide>
                <S.ServiceCard bg={almoco.src}>
                  <S.TitleCard>Almoço Executivo</S.TitleCard>
                  <S.TextCard>
                    {" "}
                    O menu inclui entrada, prato principal e sobremesa, com
                    opções que variam entre grelhados orientais e combinados de
                    sushis clássicos montados individualmente.
                    <br />
                    Horário: Segunda a sexta, das 11h30 às 14h30.
                  </S.TextCard>
                </S.ServiceCard>
              </SwiperSlide>

              <SwiperSlide>
                <S.ServiceCard bg={buffet.src}>
                  <S.TitleCard>Buffet por kg</S.TitleCard>
                  <S.TextCard>
                    {" "}
                    Um cardápio vasto que contempla criações trufadas, peixes
                    maturados e combinados exclusivos, finalizados com rigor
                    técnico para um ritual completo de sabores. <br />
                    Horário: Terça a domingo, das 18h30 às 23h30.{" "}
                  </S.TextCard>
                </S.ServiceCard>
              </SwiperSlide>

              <SwiperSlide>
                <S.ServiceCard bg={lacarte.src}>
                  <S.TitleCard>À La Carte</S.TitleCard>
                  <S.TextCard>
                    {" "}
                    Um cardápio vasto que contempla criações trufadas, peixes
                    maturados e combinados exclusivos, finalizados com rigor
                    técnico para um ritual completo de sabores. <br />
                    Horário: Terça a domingo, das 18h30 às 23h30.{" "}
                  </S.TextCard>
                </S.ServiceCard>
              </SwiperSlide>
            </Swiper>
          ) : (
            <>
              <S.ServiceCard bg={almoco.src}>
                <S.TitleCard>Almoço Executivo</S.TitleCard>
                <S.TextCard>
                  O menu inclui entrada, prato principal e sobremesa, com opções
                  que variam entre grelhados orientais e combinados de sushis
                  clássicos montados individualmente.
                  <br />
                  Horário: Segunda a sexta, das 11h30 às 14h30.
                </S.TextCard>
              </S.ServiceCard>
              <S.ServiceCard bg={buffet.src}>
                <S.TitleCard>Buffet por kg</S.TitleCard>
                <S.TextCard>
                  Um buffet completo que apresenta desde sushis tradicionais e
                  sashimis sazonais até uma variedade de pratos quentes, robatas
                  e saladas com insumos selecionados. <br />
                  Horário: Segunda a sábado, das 11h30 às 15h.{" "}
                </S.TextCard>
              </S.ServiceCard>
              <S.ServiceCard bg={lacarte.src}>
                <S.TitleCard>À La Carte</S.TitleCard>
                <S.TextCard>
                  Um cardápio vasto que contempla criações trufadas, peixes
                  maturados e combinados exclusivos, finalizados com rigor
                  técnico para um ritual completo de sabores. <br />
                  Horário: Terça a domingo, das 18h30 às 23h30.{" "}
                </S.TextCard>
              </S.ServiceCard>
            </>
          )}
        </S.ServiceContainer>{" "}
      </S.ContentContainer>
    </S.MainContainer>
  );
}
