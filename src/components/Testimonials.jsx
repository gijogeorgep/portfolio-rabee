import React,{useState,useEffect,useRef} from 'react';import gsap from 'gsap';import {testimonials} from '../data';
export default function Testimonials(){const [i,setI]=useState(0);const r=useRef();
 useEffect(()=>{const t=setInterval(()=>setI(x=>(x+1)%testimonials.length),6000);return()=>clearInterval(t)},[]);
 useEffect(()=>{const a=gsap.fromTo(r.current,{opacity:0,y:30},{opacity:1,y:0,duration:.9,ease:'power3.out'});return()=>a.kill()},[i]);
 const [q,a,role]=testimonials[i];
 return <section className="px-6 py-32 text-center md:px-10"><div ref={r} aria-live="polite"><p className="mx-auto max-w-4xl font-serif text-3xl italic leading-snug md:text-6xl">“{q}”</p><p className="mt-8 text-sm uppercase tracking-widest">{a} <span className="text-bone/50">— {role}</span></p></div>
  <div className="mt-10 flex justify-center gap-3">{testimonials.map((_,k)=><button key={k} aria-label={`Testimonial ${k+1}`} onClick={()=>setI(k)} className={`h-1 w-10 ${k===i?'bg-ember':'bg-bone/20'}`}/>)}</div></section>}
