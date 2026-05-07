"use client";

import { useEffect } from "react";
import { Aboreto, Mohave } from "next/font/google";
import { GlobalStyles } from "@/app/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";

const aboreto = Aboreto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aboreto", // Isso cria a variável CSS
});

const mohave = Mohave({
  // Importante: adicione os pesos que você usa no GlobalStyles (400, 700, 900)
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-mohave", // Isso cria a variável CSS
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <html
      lang="pt-br"
      className={`${aboreto.variable} ${mohave.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
