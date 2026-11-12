import React,{useEffect,useState} from 'react';import {motion} from 'framer-motion';
export default function VideoPlayer({src,title,onClose}){const [err,setErr]=useState(false);
 useEffect(()=>{const k=e=>e.key==='Escape'&&onClose();addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[]);
 return <motion.div initial={{clipPath:'inset(50% 50% 50% 50%)'}} animate={{clipPath:'inset(0% 0% 0% 0%)'}} exit={{clipPath:'inset(50% 50% 50% 50%)'}} transition={{duration:.8,ease:[.76,0,.24,1]}} className="fixed inset-0 z-[800] flex items-center justify-center bg-black" role="dialog" aria-label={title}>
  {err?<p className="text-bone/60">This video could not be loaded.</p>:<video src={src} controls autoPlay playsInline onError={()=>setErr(true)} className="max-h-full max-w-full"/>}
  <button onClick={onClose} data-cursor="Close" className="absolute right-6 top-6 text-xs uppercase tracking-[.3em]">Close ✕</button></motion.div>}
