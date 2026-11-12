import React,{useEffect} from 'react';import {motion} from 'framer-motion';import {projects} from '../data';import Img from './Img';
export default function ProjectDetails({id}){const p=projects.find(x=>x.id===id);
 useEffect(()=>{window.__lenis?.stop();return()=>window.__lenis?.start()},[]);
 if(!p)return null;const next=projects[(projects.indexOf(p)+1)%projects.length];
 return <motion.div data-lenis-prevent initial={{y:'100%'}} animate={{y:0}} exit={{y:'100%'}} transition={{duration:.9,ease:[.76,0,.24,1]}} className="fixed inset-0 z-[600] overflow-y-auto bg-ink">
  <a href="#/" data-cursor="Close" className="fixed right-6 top-5 z-10 text-xs uppercase tracking-[.3em] mix-blend-difference md:right-10">Close ✕</a>
  <Img src={p.img} alt={p.title} className="h-[80vh] w-full"/><div className="px-6 py-16 md:px-10"><span className="text-xs uppercase tracking-widest text-ember">{p.cat} · {p.year}</span><h1 className="font-serif text-7xl md:text-[10vw]">{p.title}</h1><p className="mt-8 max-w-xl text-bone/70">{p.desc}</p></div>
  <div className="grid gap-4 px-6 md:grid-cols-3 md:px-10">{p.images.map((s,k)=><Img key={k} src={s} alt={`${p.title} ${k+1}`} className="aspect-[4/5]"/>)}</div>
  <a href={`#/project/${next.id}`} data-cursor="Next" className="mt-24 block border-t border-bone/20 px-6 py-16 text-right md:px-10"><span className="text-xs uppercase tracking-widest">Next project</span><div className="font-serif text-6xl hover:italic md:text-9xl">{next.title} →</div></a></motion.div>}
