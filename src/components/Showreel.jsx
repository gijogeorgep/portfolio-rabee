import React,{useState} from 'react';import {AnimatePresence} from 'framer-motion';import {gsap,useGsap} from '../lib/anim';import {site} from '../data';import VideoPlayer from './VideoPlayer';
export default function Showreel(){const [o,setO]=useState(false);
 const ref=useGsap(el=>{const tl=gsap.timeline({scrollTrigger:{trigger:el,start:'top top',end:'+=120%',pin:true,scrub:1}});
  tl.fromTo('[data-frame]',{clipPath:'inset(25% 25% 25% 25% round 24px)'},{clipPath:'inset(0% 0% 0% 0% round 0px)'}).fromTo('[data-t]',{scale:1},{scale:.6,opacity:0},0)},[]);
 return <section ref={ref} className="relative h-screen overflow-hidden"><div data-frame className="absolute inset-0"><video autoPlay muted loop playsInline src={site.reel} className="h-full w-full object-cover"/><div className="absolute inset-0 bg-black/30"/></div>
  <button data-t onClick={()=>setO(true)} data-cursor="Play" className="absolute inset-0 grid place-items-center"><span className="text-center font-serif text-6xl md:text-9xl">Showreel<br/><span className="stroke">2025</span></span></button>
  <AnimatePresence>{o&&<VideoPlayer src={site.reel} title="Showreel" onClose={()=>setO(false)}/>}</AnimatePresence></section>}
