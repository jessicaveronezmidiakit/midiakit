"use client";

import { useEffect } from "react";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (value: number) => Math.min(Math.max(value, 0), 1);
const ease = (t: number) => 1 - (1 - t) ** 3;

export function ScrollEffects() {
  useEffect(() => {
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const intro = document.getElementById("intro");
    const hero = document.querySelector<HTMLElement>(".hero");
    const bag = document.getElementById("bag");
    const anchor = document.querySelector<HTMLElement>(".bag-anchor");
    const scene = document.getElementById("marcas");
    const peek = document.getElementById("peek");
    const cases = document.getElementById("cases");
    if (!intro || !hero || !bag || !anchor || !scene || !peek) return;

    const introText = intro.querySelector<HTMLElement>(".intro-text");
    const introSkip = intro.querySelector<HTMLButtonElement>(".skip");
    const introVeil = intro.querySelector<HTMLElement>(".intro-veil");
    const flies = [...intro.querySelectorAll<HTMLElement>(".fly")];
    const cam = scene.querySelector<HTMLElement>(".cam");
    const reel = document.getElementById("reel");
    const slides = [...scene.querySelectorAll<HTMLElement>(".slide")];
    const peekImg = peek.querySelector("img");
    const peekCap = peek.querySelector("figcaption");
    const targets = slides.map((_, index) => ({
      a: (index / slides.length) * Math.PI * 2 - Math.PI / 2,
      r: index % 2 ? 0.82 : 1,
      rot: ((index * 37) % 24) - 12,
    }));

    if (!location.hash) {
      try {
        history.scrollRestoration = "manual";
      } catch {
        /* navegador sem a API */
      }
      scrollTo(0, 0);
    }

    let homes: number[][] = [];
    const measureIntro = () => {
      homes = flies.map((fly) => [
        intro.clientWidth / 2 - fly.offsetLeft - fly.offsetWidth / 2,
        intro.clientHeight / 2 - fly.offsetTop - fly.offsetHeight / 2,
      ]);
    };

    const introRun = intro.parentElement;
    const introProgress = () => {
      if (!introRun) return clamp01(scrollY / intro.offsetHeight);
      const distance = Math.max(introRun.offsetHeight - intro.offsetHeight, 1);
      return clamp01((scrollY - introRun.offsetTop) / distance);
    };

    const drawIntro = () => {
      const progress = introProgress();
      // As fotos abrem e permanecem na tela até a seção seguinte encostar.
      const out = ease(clamp01(progress / 0.72));
      if (calm || !introText || !introSkip || !introVeil) return;
      flies.forEach((fly, index) => {
        const home = homes[index] ?? [0, 0];
        fly.style.translate = `${home[0] * 0.82 * (1 - out)}px ${home[1] * 0.82 * (1 - out)}px`;
        fly.style.scale = String(lerp(0.8, 1, out));
        fly.style.rotate = "var(--r)";
      });
      introVeil.style.opacity = String(0.78 * (1 - clamp01(progress / 0.55)));
      introText.style.opacity = "1";
      introSkip.style.opacity = String(1 - clamp01(progress / 0.22));
    };

    const placeBag = () => {
      const box = anchor.getBoundingClientRect();
      const small = innerWidth < 720;
      const endW = small ? 60 : 86;
      const endH = endW * 1.15;
      const t = clamp01((scrollY - hero.offsetTop) / (hero.offsetHeight * 0.75));
      const eased = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
      const width = lerp(box.width, endW, eased);
      const inset = small ? 44 : 52;
      const x = lerp(box.left, innerWidth - endW - inset, eased);
      const y = lerp(box.top, innerHeight - endH - (small ? 64 : 76), eased);
      const wobble = calm ? 0 : Math.sin(scrollY / 160) * 7 * eased;
      bag.style.width = `${width}px`;
      bag.style.setProperty("--docked", eased > 0.9 ? "1" : "0");
      bag.style.transform = `translate(${x}px, ${y}px) rotate(${lerp(-10, 6, eased) + wobble}deg)`;
    };

    if (calm) scene.classList.add("static");
    const drawScene = () => {
      if (calm || !cam || !reel || slides.length === 0) return;
      const rect = scene.getBoundingClientRect();
      const progress = clamp01(-rect.top / (scene.offsetHeight - innerHeight));
      const small = innerWidth < 720;
      const rx = innerWidth * (small ? 0.36 : 0.34);
      const ry = innerHeight * (small ? 0.3 : 0.28);
      const stage = scene.querySelector(".stage")?.getBoundingClientRect();
      const camera = cam.getBoundingClientRect();
      if (!stage) return;
      const originX = camera.left + camera.width * 0.5 - (stage.left + stage.width / 2);
      const originY = camera.top + camera.height * 0.6 - (stage.top + stage.height * (small ? 0.54 : 0.56));
      const flash = cam.querySelector<HTMLElement>(".flash");
      if (flash) flash.style.opacity = String(Math.max(0, 1 - Math.abs(progress - 0.05) / 0.04));
      slides.forEach((slide, index) => {
        const t = ease(clamp01((progress - 0.03 - index * 0.018) / 0.2));
        const target = targets[index];
        const x = originX + (Math.cos(target.a) * rx * target.r - originX) * t;
        const y = originY + (Math.sin(target.a) * ry * target.r - originY) * t;
        const out = clamp01((progress - 0.46) / 0.1);
        slide.style.opacity = t > 0 ? String(1 - out) : "0";
        slide.style.transform = `translate(${x}px, ${y}px) rotate(${target.rot * t}deg) scale(${0.15 + 0.85 * t + out * 0.4})`;
      });
      const film = ease(clamp01((progress - 0.46) / 0.14));
      cam.style.opacity = String(1 - film);
      cam.style.transform = `scale(${1 + film * 0.6})`;
      const travel = clamp01((progress - 0.58) / 0.4);
      const startX = innerWidth * 0.08;
      const endX = -(reel.scrollWidth - innerWidth * 0.92);
      reel.style.opacity = String(film);
      reel.style.transform = `translateX(${startX + (endX - startX) * travel}px) scale(${0.4 + 0.6 * film})`;
    };

    const hoverable = () => matchMedia("(hover: hover)").matches;
    let openWord: HTMLElement | null = null;
    let peekY = 0;
    const words = [...document.querySelectorAll<HTMLElement>(".pw")];
    words.forEach((word) => word.setAttribute("aria-expanded", "false"));

    const showPeek = (button: HTMLElement, x: number, y: number) => {
      if (!peekImg || !peekCap) return;
      const src = button.dataset.img;
      peekImg.hidden = !src;
      if (src) peekImg.src = src;
      peekCap.textContent = button.dataset.cap || "";
      peek.classList.toggle("text-only", !src);
      const width = peek.offsetWidth || 190;
      const height = peek.offsetHeight || 272;
      const left = Math.min(Math.max(x - width / 2, 12), innerWidth - width - 12);
      const top = y - height - 24 > 60 ? y - height - 24 : y + 28;
      peek.style.left = `${left}px`;
      peek.style.top = `${top}px`;
      peek.classList.add("show");
    };
    const hidePeek = () => {
      peek.classList.remove("show");
      openWord?.setAttribute("aria-expanded", "false");
      openWord = null;
    };

    const onEnter = (event: Event) => {
      const button = event.currentTarget as HTMLElement;
      if (!(event instanceof MouseEvent) || !hoverable()) return;
      showPeek(button, event.clientX, event.clientY);
    };
    const onLeave = () => {
      if (hoverable()) hidePeek();
    };
    const onClick = (event: Event) => {
      const button = event.currentTarget as HTMLElement;
      event.stopPropagation();
      if (openWord === button) return hidePeek();
      hidePeek();
      openWord = button;
      peekY = scrollY;
      button.setAttribute("aria-expanded", "true");
      const box = button.getBoundingClientRect();
      showPeek(button, box.left + box.width / 2, box.top);
    };
    const onDocumentClick = (event: MouseEvent) => {
      if (openWord && !(event.target as HTMLElement).closest(".pw")) hidePeek();
    };
    const onSkip = () => {
      const end = introRun ? introRun.offsetTop + introRun.offsetHeight : intro.offsetHeight;
      scrollTo({ top: end, behavior: calm ? "auto" : "smooth" });
    };

    words.forEach((word) => {
      word.addEventListener("mouseenter", onEnter);
      word.addEventListener("mousemove", onEnter);
      word.addEventListener("mouseleave", onLeave);
      word.addEventListener("click", onClick);
    });
    introSkip?.addEventListener("click", onSkip);
    document.addEventListener("click", onDocumentClick);

    let frame = 0;
    const draw = () => {
      frame = 0;
      drawIntro();
      placeBag();
      drawScene();
      if (openWord && Math.abs(scrollY - peekY) > 60) hidePeek();
    };
    const requestDraw = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };

    const heroObserver = new IntersectionObserver(
      (entries, observer) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          document.documentElement.classList.add("ready");
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    heroObserver.observe(hero);

    let casesObserver: IntersectionObserver | undefined;
    if (cases) {
      casesObserver = new IntersectionObserver(
        (entries, observer) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            cases.classList.add("in");
            observer.disconnect();
          }
        },
        { threshold: 0.3 },
      );
      casesObserver.observe(cases);
    }

    measureIntro();
    draw();
    addEventListener("scroll", requestDraw, { passive: true });
    addEventListener("resize", () => {
      measureIntro();
      requestDraw();
    });

    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", requestDraw);
      heroObserver.disconnect();
      casesObserver?.disconnect();
      words.forEach((word) => {
        word.removeEventListener("mouseenter", onEnter);
        word.removeEventListener("mousemove", onEnter);
        word.removeEventListener("mouseleave", onLeave);
        word.removeEventListener("click", onClick);
      });
      introSkip?.removeEventListener("click", onSkip);
      document.removeEventListener("click", onDocumentClick);
    };
  }, []);

  return null;
}
