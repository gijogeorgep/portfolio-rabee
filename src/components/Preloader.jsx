import React,{useState,useEffect} from 'react';import {gsap,reduced,useGsap} from '../lib/anim';import {site} from '../data';
export default function Preloader({onDone}){const [n,setN]=useState(0);
 useEffect(()=>{if(reduced())onDone()},[]);
 const ref=useGsap(el=>{const c={v:0};const tl=gsap.timeline({onComplete:onDone});
  tl.from('[data-logo]',{yPercent:110,duration:1,ease:'power4.out',stagger:.06})
  .to(c,{v:100,duration:2,ease:'power2.inOut',onUpdate:()=>setN(Math.round(c.v))},0)
  .to('[data-logo]',{yPercent:-110,duration:.7,ease:'power3.in',stagger:.04})
  .to(el,{clipPath:'inset(0 0 100% 0)',duration:1,ease:'expo.inOut'},'-=.2')},[]);
 return <div ref={ref} className="fixed inset-0 z-[900] flex flex-col items-center justify-center bg-ink" style={{clipPath:'inset(0)'}}>
  <div className="flex font-serif text-6xl md:text-8xl">{site.name.split('').map((c,i)=><span key={i} className="line"><span data-logo className="inline-block">{c}</span></span>)}</div>
  <div className="absolute bottom-8 right-8 font-serif text-7xl tabular-nums text-ember md:text-9xl">{n}</div></div>}
