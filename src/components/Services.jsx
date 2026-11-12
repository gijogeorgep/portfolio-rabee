import React from 'react';import {gsap,useGsap} from '../lib/anim';import {services} from '../data';
export default function Services(){
 const ref=useGsap(el=>{gsap.from('[data-s]',{y:80,opacity:0,stagger:.12,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 70%'}});
  gsap.to('[data-mq]',{xPercent:-40,ease:'none',scrollTrigger:{trigger:el,scrub:1}})},[]);
 return <section ref={ref} id="services" className="overflow-hidden py-32"><div data-mq className="mb-20 whitespace-nowrap font-serif text-[12vw] stroke">Services — Services — Services — Services —</div>
  <div className="grid gap-px bg-bone/10 px-6 md:grid-cols-4 md:px-10">{services.map(([t,d],i)=><div key={t} data-s className="bg-ink p-8 transition-colors hover:bg-ember hover:text-ink md:min-h-80"><span className="text-xs">0{i+1}</span><h3 className="mt-16 font-serif text-3xl">{t}</h3><p className="mt-4 text-sm opacity-70">{d}</p></div>)}</div></section>}
