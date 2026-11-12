import React,{useRef} from 'react';import gsap from 'gsap';
export default function Magnetic({children,strength=.35,className=''}){const r=useRef();
 const mv=e=>{const b=r.current.getBoundingClientRect();gsap.to(r.current,{x:(e.clientX-b.left-b.width/2)*strength,y:(e.clientY-b.top-b.height/2)*strength,duration:.4})};
 const lv=()=>gsap.to(r.current,{x:0,y:0,duration:.8,ease:'elastic.out(1,.4)'});
 return <span ref={r} onMouseMove={mv} onMouseLeave={lv} className={`inline-block ${className}`}>{children}</span>}
