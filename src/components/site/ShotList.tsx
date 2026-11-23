"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { contact, quoteBody } from "@/content/midia-kit";

type ShotListValue = {
  shots: string[];
  toggle: (item: string) => void;
  remove: (index: number) => void;
  toast: (message: string) => void;
  message: string;
};

const ShotListContext = createContext<ShotListValue | null>(null);

export function useShotList() {
  const value = useContext(ShotListContext);
  if (!value) throw new Error("useShotList precisa do ShotListProvider");
  return value;
}

export function ShotListProvider({ children }: { children: ReactNode }) {
  const [shots, setShots] = useState<string[] | null>(null);
  const [note, setNote] = useState("");

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("jv-lista") || "[]");
      setShots(Array.isArray(stored) ? stored.filter((item) => typeof item === "string") : []);
    } catch {
      setShots([]);
    }
  }, []);

  useEffect(() => {
    if (!shots) return;
    try {
      localStorage.setItem("jv-lista", JSON.stringify(shots));
    } catch {
      /* armazenamento indisponível */
    }
  }, [shots]);

  useEffect(() => {
    if (!note) return;
    const timer = window.setTimeout(() => setNote(""), 2200);
    return () => window.clearTimeout(timer);
  }, [note]);

  const list = shots ?? [];
  const value: ShotListValue = {
    shots: list,
    message: quoteBody(list),
    toast: setNote,
    toggle(item) {
      setShots((current) => {
        const base = current ?? [];
        if (base.includes(item)) {
          setNote("Removido da sua lista");
          return base.filter((entry) => entry !== item);
        }
        setNote("✦ Adicionado à sua lista");
        return [...base, item];
      });
    },
    remove(index) {
      setShots((current) => (current ?? []).filter((_, itemIndex) => itemIndex !== index));
    },
  };

  return (
    <ShotListContext.Provider value={value}>
      {children}
      <Bag />
      <figure className="peek" id="peek" aria-hidden="true">
        <img alt="" hidden />
        <figcaption />
      </figure>
      <div className={`toast${note ? " show" : ""}`} role="status" aria-live="polite">
        {note}
      </div>
    </ShotListContext.Provider>
  );
}

function Bag() {
  const { shots } = useShotList();
  const ref = useRef<HTMLAnchorElement>(null);
  const previous = useRef(shots.length);

  useEffect(() => {
    const bag = ref.current;
    if (bag && shots.length > previous.current) {
      bag.classList.remove("pop-anim");
      void bag.offsetWidth;
      bag.classList.add("pop-anim");
    }
    previous.current = shots.length;
  }, [shots.length]);

  return (
    <a id="bag" ref={ref} href="#contato" aria-label="Vamos criar — ir para o contato e sua lista">
      <svg viewBox="0 0 100 115" aria-hidden="true">
        <use href="#bag-svg" />
      </svg>
      <span className="count" hidden={shots.length === 0}>
        {shots.length}
      </span>
      <span className="label">vamos criar</span>
    </a>
  );
}

export function AddButton({ item, children }: { item: string; children: string }) {
  const { shots, toggle } = useShotList();
  const on = shots.includes(item);
  const plain = children.replace(/^\+\s*/, "");
  return (
    <button
      className="add"
      type="button"
      aria-pressed={on}
      onClick={() => toggle(item)}
    >
      {on ? (plain.includes("à lista") ? "✓ Na sua lista" : `✓ ${plain}`) : children}
    </button>
  );
}
