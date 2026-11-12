import React,{useState,useEffect} from 'react';import {AnimatePresence,motion} from 'framer-motion';import {gsap,useGsap} from '../lib/anim';import {gallery} from '../data';import Img from './Img';
function Lightbox({i,set}){const n=gallery.length;
 useEffect(()=>{const k=e=>{e.key==='Escape'&&set(null);e.key==='ArrowRight'&&set((i+1)%n);e.key==='ArrowLeft'&&set((i-1+n)%n)};addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[i]);
 return <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[800] flex items-center justify-center bg-black/95" role="dialog" aria-label="Photo viewer" onClick={()=>set(null)}>
  <motion.img key={i} initial={{scale:.92,opacity:0}} animate={{scale:1,opacity:1}} src={gallery[i].src} alt={gallery[i].alt} className="max-h-[88vh] max-w-[92vw] object-contain" onClick={e=>e.stopPropagation()}/>
  <button className="absolute left-5 text-3xl" aria-label="Previous" onClick={e=>{e.stopPropagation();set((i-1+n)%n)}}>←</button><button className="absolute right-5 text-3xl" aria-label="Next" onClick={e=>{e.stopPropagation();set((i+1)%n)}}>→</button>
  <span className="absolute bottom-6 text-xs tracking-widest">{i+1} / {n}</span><button className="absolute right-6 top-6 text-xs uppercase tracking-[.3em]">Close ✕</button></motion.div>}
export default function PhotographyGallery(){const [i,setI]=useState(null);
 const ref=useGsap(el=>{const t=el.querySelector('[data-track]');
  gsap.to(t,{
   x:()=>-(t.scrollWidth - window.innerWidth + (window.innerWidth < 768 ? 48 : 80)),
   ease:'none',
   scrollTrigger:{
    trigger:el,
    pin:true,
    scrub:1,
    start:'top top',
    end:()=>'+='+(t.scrollWidth - window.innerWidth + (window.innerWidth < 768 ? 48 : 80)),
    invalidateOnRefresh:true
   }
  })},[]);
 return <section ref={ref} id="gallery" className="flex min-h-screen flex-col justify-center overflow-hidden py-20">
  <h2 className="mb-10 px-6 font-serif text-5xl md:px-10 md:text-7xl">Gallery <span className="stroke">— scroll, look</span></h2>
  <div data-track className="flex gap-6 will-change-transform px-6 md:px-10">{gallery.map((g,k)=><button key={k} onClick={()=>setI(k)} data-cursor="Expand" aria-label={g.alt} className="group h-[52vh] shrink-0 overflow-hidden md:h-[65vh]"><Img src={g.src} alt={g.alt} className="h-full min-w-[75vw] transition duration-700 group-hover:scale-105 group-hover:contrast-125 md:min-w-[22vw]"/></button>)}</div>
  <AnimatePresence>{i!==null&&<Lightbox i={i} set={setI}/>}</AnimatePresence></section>}
