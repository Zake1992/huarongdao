import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { NavLink, Routes, Route } from 'react-router-dom';
import HuaRongDao from './huarongdao/HuaRongDao';
import HuaRongDao10 from './huarongdao/HuaRongDao10';

gsap.registerPlugin(useGSAP);

export default function Boxes() {
  const container = useRef();

  return (
    <main>
      <section className="boxes-container" ref={container}>
        <nav className="space-x-4">
          <NavLink to="huarongdao">华容道3*3方块移动</NavLink>
          <NavLink to="huarongdao10">华容道10*10方块移动</NavLink>
        </nav>

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}

          <Route path="huarongdao" element={<HuaRongDao />} />
          <Route path="huarongdao10" element={<HuaRongDao10 />} />

          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </section>
    </main>
  );
}
