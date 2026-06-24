'use client';

import { useEffect, useRef } from 'react';
import { MARKUP } from '@/lib/raphaelo/markup';
import { initRaphaelo } from '@/lib/raphaelo/runtime';

/**
 * Landing Raphaëlo Pizza — design « Feu & Matière » (Claude design).
 *
 * Le markup statique est rendu fidèlement (identique au livrable), puis la logique
 * impérative (preloader, curseur, GSAP/Lenis, braises, menu, i18n FR/EN…) est attachée
 * une seule fois côté client. Contenu 100 % interne — pas d'entrée utilisateur.
 */
export function RaphaeloLanding() {
  const booted = useRef(false);

  useEffect(() => {
    if (booted.current) return; // évite le double-init en mode strict (dev)
    booted.current = true;
    const cleanup = initRaphaelo();
    return cleanup;
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
