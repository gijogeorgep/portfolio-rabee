import React,{useState} from 'react';
export default function Img({src,alt='',className='',...r}){const [s,setS]=useState('load');
 const base=import.meta.env.BASE_URL||'/';
 const fullSrc=src?.startsWith('/')&&!src.startsWith(base)?`${base}${src.slice(1)}`:src;
 return <div className={`relative overflow-hidden bg-neutral-900 ${className}`}>
 {s==='load'&&<div className="absolute inset-0 animate-pulse bg-neutral-800"/>}
 {s==='err'?<div className="absolute inset-0 grid place-items-center text-xs text-neutral-500">Image unavailable</div>:
 <img src={fullSrc} alt={alt} loading="lazy" onLoad={()=>setS('ok')} onError={()=>setS('err')} className="h-full w-full object-cover will-change-transform" {...r}/>}</div>}
