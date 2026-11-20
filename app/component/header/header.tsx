"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";

type NavItem = { id: string; label: string };

const NAV: NavItem[] = [
  { id: "inicio", label: "INÍCIO" },
  { id: "cozinha", label: "COZINHA" },
  { id: "coquetelaria", label: "COQUETELARIA" },
  { id: "sobre", label: "SOBRE NÓS" },
  { id: "servicos", label: "SERVIÇOS" },
  { id: "contato", label: "CONTATO" },
];

const MOBILE_HEADER_H = 56;
const DESKTOP_HEADER_H = 80;

function scrollToSection(id: string) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const behavior: ScrollBehavior = reduce ? "auto" : "smooth";

  if (id === "inicio") {
    window.scrollTo({ top: 0, behavior });
    history.replaceState(null, "", window.location.pathname);
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const offset = isDesktop ? DESKTOP_HEADER_H : MOBILE_HEADER_H;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior });
  history.replaceState(null, "", `#${id}`);
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.76, 0, 0.24, 1];

const topBar: Variants = {
  closed: { y: 0, rotate: 0 },
  open: { y: 7, rotate: 45 },
};
const midBar: Variants = {
  closed: { opacity: 1, scaleX: 1 },
  open: { opacity: 0, scaleX: 0 },
};
const botBar: Variants = {
  closed: { y: 0, rotate: -0 },
  open: { y: -7, rotate: -45 },
};

function BurgerIcon({ open }: { open: boolean }) {
  const state = open ? "open" : "closed";
  const t = { duration: 0.35, ease: EASE };
  const bar = "block h-[1.5px] w-6 origin-center bg-white";

  return (
    <span className="flex h-[16px] w-6 flex-col justify-between" aria-hidden="true">
      <motion.span className={bar} variants={topBar} animate={state} transition={t} />
      <motion.span className={bar} variants={midBar} animate={state} transition={t} />
      <motion.span className={bar} variants={botBar} animate={state} transition={t} />
    </span>
  );
}

const desktopLinkClass = "block whitespace-nowrap py-1";

function DesktopLink({ id, label }: NavItem) {
  return (
    <motion.div initial="rest" whileHover="hover" whileTap={{ scale: 0.97 }} className="relative">
      <a
        href={`#${id}`}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(id);
        }}
        className={desktopLinkClass}
      >
        {label}
      </a>
      <motion.span
        aria-hidden="true"
        className="absolute left-0 -bottom-0.5 h-px w-full origin-left bg-white"
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 0.3, ease: EASE }}
      />
    </motion.div>
  );
}

const panelVariants: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: 0.5, ease: EASE },
  },
  exit: {
    clipPath: "inset(0 0 100% 0)",
    opacity: 0,
    transition: { when: "afterChildren", duration: 0.45, ease: EASE_IN_OUT },
  },
};

const panelVariantsReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
  exit: { opacity: 0, transition: { duration: 0 } },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.12 } },
  exit: { transition: { staggerChildren: 0.035, staggerDirection: -1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
  exit: {
    opacity: 0,
    y: -14,
    transition: { duration: 0.26, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <header
        style={{ paddingInline: "clamp(1.25rem, 4vw, 4rem)" }}
        className={`fixed inset-x-0 top-0 z-50 flex h-14 w-full items-center justify-between transition-[height,background-color,backdrop-filter] duration-300 ${
          scrolled ? "lg:h-20" : "lg:h-[104px]"
        } ${scrolled || open ? "bg-black/60 backdrop-blur-md" : "bg-transparent"}`}
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/60 to-transparent transition-opacity duration-300 ${
            scrolled || open ? "opacity-0" : "opacity-100"
          }`}
        />

        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            close();
            scrollToSection("inicio");
          }}
          className="relative flex items-center"
        >
          <Image
            src="/images/logos/logotipoVersaoS.png"
            alt="Guará Estúdio"
            width={160}
            height={40}
            className="h-7 w-auto pb-2 lg:h-10"
          />
        </a>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-10 font-[family-name:var(--font-aboreto)] text-[15px] uppercase tracking-[0.1em] text-white lg:flex xl:gap-20"
        >
          {NAV.map((item) => (
            <DesktopLink key={item.id} {...item} />
          ))}
        </nav>

        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          whileTap={{ scale: 0.9 }}
          className="-mr-3 flex h-full w-12 shrink-0 items-center justify-center lg:hidden"
        >
          <BurgerIcon open={open} />
        </motion.button>
      </header>

      {/* Menu mobile.
          Fica FORA do <header> de propósito: o header usa backdrop-filter, e isso faria
          os elementos "fixed" dentro dele se posicionarem em relação ao header. */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="blur"
              aria-hidden="true"
              className="fixed inset-x-0 bottom-0 z-40 bg-black/40 backdrop-blur-md lg:hidden"
              style={{ top: MOBILE_HEADER_H }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: reduceMotion ? 0 : 0.3 } }}
              exit={{
                opacity: 0,
                transition: { duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.3 },
              }}
              onClick={close}
            />

            <motion.nav
              key="panel"
              id="mobile-menu"
              aria-label="Menu mobile"
              className="fixed inset-x-0 z-40 overflow-y-auto border-t border-white/15 bg-[#120905]/95 font-[family-name:var(--font-aboreto)] lg:hidden"
              style={{
                top: MOBILE_HEADER_H,
                maxHeight: `calc(100svh - ${MOBILE_HEADER_H}px)`,
              }}
              variants={reduceMotion ? panelVariantsReduced : panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.ul
                variants={listVariants}
                style={{ paddingInline: "clamp(1.25rem, 4vw, 4rem)" }}
                className="flex flex-col py-3"
              >
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.id}
                    variants={reduceMotion ? undefined : itemVariants}
                    className="border-b border-white/15 last:border-b-0"
                  >
                    <motion.div
                      whileTap={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          close();
                          setTimeout(() => scrollToSection(item.id), 120);
                        }}
                        className="flex w-full items-baseline justify-end gap-3 py-4 text-lg uppercase tracking-[0.1em] text-white"
                      >
                        {item.label}
                        <span className="w-6 text-[11px] text-white/50">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </a>
                    </motion.div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}