import React,{useState} from 'react';import {AnimatePresence} from 'framer-motion';import {gsap,useGsap} from '../lib/anim';import {films} from '../data';import Img from './Img';import VideoPlayer from './VideoPlayer';
export default function VideoPortfolio(){const [cur,setCur]=useState(null);const [hov,setHov]=useState(0);
 const ref=useGsap(el=>{gsap.from('[data-row]',{opacity:0,x:-60,stagger:.15,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 70%'}})},[]);
 return <section ref={ref} id="film" className="relative bg-bone px-6 py-32 text-ink md:px-10"><h2 className="font-serif text-6xl md:text-9xl">Film <i>&</i> motion</h2>
  <div className="relative mt-16">{films.map((f,i)=><button key={f.id} data-row onClick={()=>setCur(f)} onMouseEnter={()=>setHov(i)} data-cursor="Play" className="flex w-full items-baseline justify-between border-t border-ink/20 py-8 text-left transition-all hover:px-4 hover:text-ember md:py-10">
   <span className="font-serif text-4xl md:text-7xl">{f.title}</span><span className="text-xs uppercase tracking-widest">{f.type} · {f.year}</span></button>)}
   <Img src={films[hov].poster} alt="" className="pointer-events-none absolute right-10 top-1/2 hidden h-56 w-96 -translate-y-1/2 md:block"/></div>
  <AnimatePresence>{cur&&<VideoPlayer src={cur.src} title={cur.title} onClose={()=>setCur(null)}/>}</AnimatePresence></section>}
