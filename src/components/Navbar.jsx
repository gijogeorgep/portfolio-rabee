import React,{useRef,useState,useEffect} from 'react';import {gsap,scrollTo} from '../lib/anim';import {nav,site} from '../data';import Magnetic from './Magnetic';
export default function Navbar(){const [open,setOpen]=useState(false);const m=useRef(),tl=useRef();
 useEffect(()=>{const ctx=gsap.context(()=>{tl.current=gsap.timeline({paused:true})
  .set(m.current,{display:'flex'}).fromTo(m.current,{clipPath:'circle(0% at 95% 5%)'},{clipPath:'circle(150% at 95% 5%)',duration:.9,ease:'expo.inOut'})
  .from('[data-nl]',{yPercent:110,stagger:.07,duration:.7,ease:'power4.out'},'-=.3').eventCallback('onReverseComplete',()=>gsap.set(m.current,{display:'none'}))},m);return()=>ctx.revert()},[]);
 useEffect(()=>{if(!tl.current)return;open?tl.current.play():tl.current.reverse();window.__lenis&&(open?window.__lenis.stop():window.__lenis.start())},[open]);
 const go=id=>{setOpen(false);setTimeout(()=>scrollTo(id),open?700:0);if(location.hash)history.pushState(null,'',location.pathname)};
 return <><header className="fixed inset-x-0 top-0 z-[700] flex items-center justify-between px-6 py-5 mix-blend-difference md:px-10">
  <a href="#top" onClick={e=>{e.preventDefault();go('top')}} className="font-serif text-2xl" data-cursor="Home">{site.name}</a>
  <Magnetic><button onClick={()=>setOpen(!open)} aria-expanded={open} data-cursor={open?'Close':'Menu'} className="text-xs uppercase tracking-[.3em]">{open?'Close':'Menu'}</button></Magnetic></header>
  <nav ref={m} className="fixed inset-0 z-[650] hidden flex-col justify-center bg-ember px-8 text-ink md:px-20" aria-label="Main">
   {nav.map(([l,id],i)=><span key={id} className="line"><a data-nl href={'#'+id} onClick={e=>{e.preventDefault();go(id)}} data-cursor="Go" className="block font-serif text-5xl leading-[1.1] hover:italic md:text-8xl"><sup className="mr-3 font-sans text-sm">0{i+1}</sup>{l}</a></span>)}</nav></>}
