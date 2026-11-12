import React,{useEffect,useRef,useState} from 'react';import gsap from 'gsap';
export default function CustomCursor(){const d=useRef(),[label,setL]=useState('');
 useEffect(()=>{if(!window.matchMedia('(pointer:fine)').matches)return;
  const x=gsap.quickTo(d.current,'x',{duration:.4,ease:'power3'}),y=gsap.quickTo(d.current,'y',{duration:.4,ease:'power3'});
  const mv=e=>{x(e.clientX);y(e.clientY)};
  const ov=e=>{const t=e.target.closest?.('[data-cursor]');setL(t?t.dataset.cursor:'');gsap.to(d.current,{scale:t?1:.25,duration:.3})};
  gsap.set(d.current,{scale:.25});addEventListener('mousemove',mv);addEventListener('mouseover',ov);
  return()=>{removeEventListener('mousemove',mv);removeEventListener('mouseover',ov)}},[]);
 return <div ref={d} className="pointer-events-none fixed left-0 top-0 z-[999] -ml-12 -mt-12 hidden h-24 w-24 items-center justify-center rounded-full bg-bone text-[11px] font-medium uppercase tracking-widest text-ink mix-blend-difference md:flex">{label}</div>}
