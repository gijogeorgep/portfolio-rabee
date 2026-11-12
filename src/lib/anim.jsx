import React,{useLayoutEffect,useRef} from 'react';import gsap from 'gsap';import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export const reduced=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export {gsap,ScrollTrigger};
// Scoped GSAP context: auto-reverts tweens + ScrollTriggers on unmount. Skipped under reduced-motion.
export function useGsap(fn,deps=[]){const ref=useRef(null);
 useLayoutEffect(()=>{if(reduced())return;const ctx=gsap.context(()=>fn(ref.current),ref);return()=>ctx.revert()},deps);return ref}
export const split=(t)=>t.split(' ').map((w,i)=><span key={i} className="line"><span data-w className="inline-block">{w}&nbsp;</span></span>);
export const scrollTo=(id)=>{const el=document.getElementById(id);window.__lenis?window.__lenis.scrollTo(el,{duration:1.6}):el?.scrollIntoView({behavior:'smooth'})};
