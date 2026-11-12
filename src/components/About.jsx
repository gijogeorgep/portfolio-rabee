import React from 'react';import {gsap,useGsap,split} from '../lib/anim';import Img from './Img';import {aboutMedia} from '../data';
export default function About(){
 const ref=useGsap(el=>{gsap.from('[data-w]',{yPercent:110,stagger:.03,scrollTrigger:{trigger:el,start:'top 65%'}});
  gsap.fromTo('[data-p]',{yPercent:-8},{yPercent:8,ease:'none',scrollTrigger:{trigger:el,scrub:true}});
  gsap.fromTo('[data-p2]',{yPercent:12},{yPercent:-12,ease:'none',scrollTrigger:{trigger:el,scrub:true}});
  gsap.from('[data-n]',{textContent:0,snap:{textContent:1},duration:2,scrollTrigger:{trigger:el,start:'top 50%'}});
  gsap.from('[data-thumb]',{y:30,opacity:0,stagger:.12,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 45%'}})},[]);
 return <section ref={ref} id="about" className="grid gap-12 px-6 py-32 md:grid-cols-12 md:px-10">
  <div className="relative md:col-span-5">
   <div className="aspect-[3/4] overflow-hidden">
    <div data-p className="h-[116%]">
     <Img src={aboutMedia.portrait} alt="Portrait of Rabee" className="h-full"/>
    </div>
   </div>
   <div data-p2 className="absolute -bottom-8 -right-4 hidden w-1/2 overflow-hidden border border-bone/20 shadow-2xl sm:block md:-right-6">
    <Img src={aboutMedia.rig} alt="35mm Cinema Rig" className="aspect-[4/3]"/>
    <span className="block bg-ink/90 px-3 py-1.5 text-[9px] uppercase tracking-widest text-bone/70">35mm Rig · On Set</span>
   </div>
  </div>
  <div className="md:col-span-6 md:col-start-7 md:pt-16">
   <h2 className="font-serif text-4xl leading-tight md:text-6xl">{split('I chase the quiet moment between the frames — and make it last.')}</h2>
   <p className="mt-8 max-w-md text-bone/70">I’m Rabee — a director of photography and visual storyteller. With over a decade of crafting editorial narratives, brand films, and raw documentaries across the globe, every frame begins with listening.</p>
   <div className="mt-12 flex gap-12 font-serif text-5xl">
    {[['10','Years'],['180','Projects'],['14','Awards']].map(([n,l])=><div key={l}><span data-n>{n}</span>+<p className="font-sans text-xs uppercase tracking-widest text-bone/60">{l}</p></div>)}
   </div>
   <div className="mt-14 border-t border-bone/15 pt-8">
    <span className="text-[11px] uppercase tracking-[.25em] text-bone/50">In the field · Process & Gear</span>
    <div className="mt-4 grid grid-cols-3 gap-3">
     {aboutMedia.process.map(({src,caption},i)=>(
      <div key={i} data-thumb className="group overflow-hidden">
       <Img src={src} alt={caption} className="aspect-square transition-transform duration-500 group-hover:scale-105"/>
       <span className="mt-1.5 block text-[9px] uppercase tracking-wider text-bone/60">{caption}</span>
      </div>
     ))}
    </div>
   </div>
  </div>
 </section>
}
