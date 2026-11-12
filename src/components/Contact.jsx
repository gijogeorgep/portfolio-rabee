import React,{useState} from 'react';import {gsap,useGsap} from '../lib/anim';import {site} from '../data';import Magnetic from './Magnetic';
const rules={name:v=>v.trim().length<2&&'Please enter your name',email:v=>!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)&&'Enter a valid email',type:v=>!v&&'Choose a project type',message:v=>v.trim().length<20&&'Tell me a bit more (20+ characters)'};
export default function Contact(){const [f,setF]=useState({name:'',email:'',type:'',date:'',message:''});const [e,setE]=useState({});const [st,setSt]=useState('idle');
 const ref=useGsap(el=>{gsap.timeline({scrollTrigger:{trigger:el,start:'top 60%'}}).from('[data-big]',{yPercent:110,duration:1.2,ease:'power4.out'}).from('[data-f]',{opacity:0,y:30,stagger:.08},'-=.6')},[]);
 const submit=async ev=>{ev.preventDefault();const er={};Object.keys(rules).forEach(k=>{const m=rules[k](f[k]);if(m)er[k]=m});setE(er);if(Object.keys(er).length)return;
  setSt('sending');try{await new Promise(r=>setTimeout(r,1200));/* TODO: POST to your backend / Formspree here */setSt('done')}catch{setSt('error')}};
 const inp='w-full border-b border-ink/40 bg-transparent py-3 outline-none transition focus:border-ink';const ch=k=>ev=>setF({...f,[k]:ev.target.value});
 return <section ref={ref} id="contact" className="bg-ember px-6 py-32 text-ink md:px-10"><span className="line"><h2 data-big className="font-serif text-[14vw] leading-[.9]">Let’s create</h2></span>
  {st==='done'?<p className="mt-16 font-serif text-4xl">Thank you — I’ll reply within 48 hours.</p>:
  <form onSubmit={submit} noValidate className="mt-16 grid gap-8 md:grid-cols-2">
   {[['name','Name','text'],['email','Email','email']].map(([k,l,t])=><label key={k} data-f className="block text-xs uppercase tracking-widest">{l}<input type={t} value={f[k]} onChange={ch(k)} aria-invalid={!!e[k]} className={inp}/><em className="not-italic text-red-900">{e[k]}</em></label>)}
   <label data-f className="block text-xs uppercase tracking-widest">Project<select value={f.type} onChange={ch('type')} className={inp}><option value="">Select…</option><option>Photography</option><option>Film</option><option>Both</option></select><em className="not-italic text-red-900">{e.type}</em></label>
   <label data-f className="block text-xs uppercase tracking-widest">Preferred date<input type="date" value={f.date} onChange={ch('date')} className={inp}/></label>
   <label data-f className="block text-xs uppercase tracking-widest md:col-span-2">Message<textarea rows={3} value={f.message} onChange={ch('message')} className={inp}/><em className="not-italic text-red-900">{e.message}</em></label>
   <div data-f><Magnetic><button disabled={st==='sending'} data-cursor="Send" className="rounded-full bg-ink px-10 py-5 text-xs uppercase tracking-[.3em] text-bone">{st==='sending'?'Sending…':'Send enquiry'}</button></Magnetic>{st==='error'&&<span className="ml-4">Something went wrong — email {site.email}</span>}</div></form>}</section>}
