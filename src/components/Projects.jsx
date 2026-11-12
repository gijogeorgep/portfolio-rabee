import React from 'react';import {gsap,useGsap} from '../lib/anim';import {projects} from '../data';import Img from './Img';
export default function Projects(){
 const ref=useGsap(el=>{gsap.from('[data-h]',{yPercent:110,duration:1.2,ease:'power4.out',scrollTrigger:{trigger:el,start:'top 75%'}});
  gsap.utils.toArray('[data-card]').forEach(c=>{gsap.fromTo(c,{clipPath:'inset(100% 0 0 0)'},{clipPath:'inset(0% 0 0 0)',duration:1.4,ease:'expo.out',scrollTrigger:{trigger:c,start:'top 85%'}});
   gsap.fromTo(c.querySelector('img'),{yPercent:-10,scale:1.2},{yPercent:10,ease:'none',scrollTrigger:{trigger:c,scrub:true}})})},[]);
 return <section ref={ref} id="work" className="px-6 py-32 md:px-10"><span className="line"><h2 data-h className="font-serif text-6xl md:text-9xl">Selected <i>work</i></h2></span>
  <div className="mt-20 grid gap-y-24 md:grid-cols-12">{projects.map((p,i)=>
   <a key={p.id} href={`#/project/${p.id}`} data-cursor="View" className={`group block ${['md:col-span-5','md:col-span-6 md:col-start-7 md:mt-40','md:col-span-6 md:col-start-2','md:col-span-5 md:col-start-8'][i%4]}`}>
    <div data-card><Img src={p.img} alt={p.title} className="aspect-[4/5] transition-transform duration-700 group-hover:scale-[.97]"/></div>
    <div className="mt-4 flex justify-between"><h3 className="font-serif text-3xl group-hover:italic">{p.title}</h3><span className="text-xs uppercase tracking-widest text-bone/60">{p.cat} · {p.year}</span></div></a>)}</div></section>}
