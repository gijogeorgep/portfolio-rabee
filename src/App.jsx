import React,{useEffect,useState} from 'react';import Lenis from 'lenis';import {AnimatePresence} from 'framer-motion';import {gsap,ScrollTrigger,reduced} from './lib/anim.jsx';
import Preloader from './components/Preloader';import Navbar from './components/Navbar';import CustomCursor from './components/CustomCursor';import Hero from './components/Hero';import Showreel from './components/Showreel';
import Projects from './components/Projects';import VideoPortfolio from './components/VideoPortfolio';import PhotographyGallery from './components/PhotographyGallery';import About from './components/About';
import Services from './components/Services';import Testimonials from './components/Testimonials';import Contact from './components/Contact';import Footer from './components/Footer';import ProjectDetails from './components/ProjectDetails';
export default function App(){const [ready,setReady]=useState(false);const [route,setRoute]=useState(location.hash);
 useEffect(()=>{const h=()=>setRoute(location.hash);addEventListener('hashchange',h);return()=>removeEventListener('hashchange',h)},[]);
 useEffect(()=>{if(reduced())return;const l=new Lenis({lerp:.09});window.__lenis=l;l.on('scroll',ScrollTrigger.update);
  const tick=t=>l.raf(t*1000);gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);return()=>{gsap.ticker.remove(tick);l.destroy();window.__lenis=null}},[]);
 useEffect(()=>{if(ready)ScrollTrigger.refresh()},[ready]);
 const pid=route.startsWith('#/project/')?route.split('/')[2]:null;
 return <>{!ready&&<Preloader onDone={()=>setReady(true)}/>}<CustomCursor/><Navbar/>
  <main><Hero ready={ready}/><Showreel/><Projects/><VideoPortfolio/><PhotographyGallery/><About/><Services/><Testimonials/><Contact/></main><Footer/>
  <AnimatePresence>{pid&&<ProjectDetails key={pid} id={pid}/>}</AnimatePresence></>}
