import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = (callback: (ctx: gsap.Context) => void, deps: any[] = []) => {
  const ctx = useRef<gsap.Context>();

  useEffect(() => {
    ctx.current = gsap.context(callback);
    
    return () => {
      ctx.current?.revert();
    };
  }, deps);

  return ctx;
};

