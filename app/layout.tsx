"use client";

import { useEffect, useState } from "react";
import { Aboreto, Mohave } from "next/font/google";
import { GlobalStyles } from "@/app/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";
import * as S from "./layoutStyled"; 
import { AnimatePresence } from "framer-motion";

const aboreto = Aboreto({ weight: "400", subsets: ["latin"], variable: "--font-aboreto" });
const mohave = Mohave({ weight: ["300", "400", "700"], subsets: ["latin"], variable: "--font-mohave" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const checkVercelVideo = () => {
      const vercelSource = document.querySelector('source[src*="vercel-storage.com"]');
      const video = vercelSource?.parentElement as HTMLVideoElement;

      if (video) {
        if (video.readyState >= 4) {
          setIsLoading(false);
        } else {
          video.addEventListener("canplaythrough", () => setIsLoading(false));
          
          video.addEventListener("canplay", () => {
             setTimeout(() => setIsLoading(false), 1000);
          });

          video.addEventListener("error", () => setIsLoading(false));
        }
        return true; 
      }
      return false;
    };

    const observer = new MutationObserver((_, obs) => {
      if (checkVercelVideo()) obs.disconnect();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    
    const timeout = setTimeout(() => setIsLoading(false), 6000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <html lang="pt-br" className={`${aboreto.variable} ${mohave.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <StyledComponentsRegistry>
          <GlobalStyles />
          
          <AnimatePresence>
            {isLoading && (
              <S.LoadingOverlay
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <S.RippleContainer>
                  {[0, 1, 2].map((index) => (
                    <S.RippleCircle
                      key={index}
                      initial={{ width: 0, height: 0, opacity: 0.5 }}
                      animate={{
                        width: ["0px", "140px"],
                        height: ["0px", "140px"],
                        opacity: [0.5, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.8,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </S.RippleContainer>
              </S.LoadingOverlay>
            )}
          </AnimatePresence>

          <main style={{ 
            display: isLoading ? "none" : "block",
            opacity: isLoading ? 0 : 1 
          }}>
            {children}
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}