import React from 'react';import {gsap,useGsap,split} from '../lib/anim';import {site} from '../data';
export default function Hero({ready}){
 const base=import.meta.env.BASE_URL||'/';
 const heroSrc=site.heroImg?.startsWith('/')&&!site.heroImg.startsWith(base)?`${base}${site.heroImg.slice(1)}`:site.heroImg;
 const ref=useGsap(el=>{if(!ready)return;gsap.timeline().from('[data-w]',{yPercent:120,rotate:4,stagger:.08,duration:1.2,ease:'power4.out'}).from('[data-fade]',{opacity:0,y:20,stagger:.15},'-=.6');
  gsap.to('[data-vid]',{yPercent:15,scale:1.1,ease:'none',scrollTrigger:{trigger:el,start:'top top',end:'bottom top',scrub:true}})},[ready]);
 return <section ref={ref} id="top" className="relative flex h-screen items-end overflow-hidden px-6 pb-16 md:px-10">
  <img data-vid src={heroSrc} alt={site.name} className="absolute inset-0 h-full w-full object-cover object-center opacity-65 will-change-transform md:object-[center_20%]"/>
  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40"/>
  <div className="relative"><h1 className="font-serif text-[15vw] font-light leading-[.9] md:text-[11vw]">{split('Stories in')}<br/><i className="text-ember">{split('light & motion')}</i></h1>
   <p data-fade className="mt-6 max-w-sm text-sm text-bone/70">{site.tagline}. Photographer & filmmaker — available worldwide.</p></div>
  <div data-fade className="absolute bottom-6 right-6 text-xs uppercase tracking-[.3em] md:right-10">Scroll ↓</div></section>}
