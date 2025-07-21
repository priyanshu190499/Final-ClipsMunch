import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef } from "react";
import CTAButton from "./CTAButton";
import Bcurve from "../assets/blackcurve.png";
import Wcurve from "../assets/white curve.webp"
import circle from "../assets/canva_white_circle.png"
const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

  uv += (uMouse - vec2(0.5)) * uAmplitude;

  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function HeroSection({
  color = [0.7, 0.1, 0.1],
  speed = 1.0,
  amplitude = 0.1,
  mouseReact = true,
  openPopup,
  ...rest
}) {
  const ctnDom = useRef(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  // Dummy brand logos (replace with real ones as needed)
  const brandLogos = [
        "Content Ideation", "Boltshift", "Biosynthesis", "BuildingBlocks", "AltShift",
        "Clandestine", "Boltshift", "Biosynthesis", "BuildingBlocks", "AltShift"
      ]

  useEffect(() => {
    if (!ctnDom.current) return;
    const ctn = ctnDom.current;
    const renderer = new Renderer();
    const gl = renderer.gl;
    gl.clearColor(1, 1, 1, 1);

    let program;

    function resize() {
      const scale = 1;
      renderer.setSize(ctn.offsetWidth * scale, ctn.offsetHeight * scale);
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        );
      }
    }
    window.addEventListener("resize", resize, false);
    resize();

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(...color) },
        uResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          ),
        },
        uMouse: { value: new Float32Array([mousePos.current.x, mousePos.current.y]) },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    let animateId;

    function update(t) {
      animateId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    }
    animateId = requestAnimationFrame(update);
    ctn.appendChild(gl.canvas);

    function handleMouseMove(e) {
      const rect = ctn.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      mousePos.current = { x, y };
      program.uniforms.uMouse.value[0] = x;
      program.uniforms.uMouse.value[1] = y;
    }
    if (mouseReact) {
      ctn.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener("resize", resize);
      if (mouseReact) {
        ctn.removeEventListener("mousemove", handleMouseMove);
      }
      ctn.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, speed, amplitude, mouseReact]);

  return (
    <>
      {/* HERO CANVAS + CONTENT (80vh) */}
      <section className="relative w-full min-h-[100vh] flex flex-col justify-end overflow-hidden bg-[#b71c1c]">
        {/* OGL Canvas BG */}
        <div
          ref={ctnDom}
          className="absolute inset-0 w-full h-full z-0"
          style={{ pointerEvents: 'none' }}
          {...rest}
        />

        

        {/* Hero Content Overlay */}
        <div className="absolute top-1/6 z-10 flex flex-col items-start justify-center text-left px-4 md:px-24 pt-16 md:pt-24 pb-10 md:pb-20 w-full max-w-5xl">
          <h3 className="text-lg md:text-2xl font-medium text-white drop-shadow-sm mb-2" style={{textShadow:'0 2px 8px rgba(0,0,0,0.18)'}}>One Subscription For Your All Video Editing Requirements</h3>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-md" style={{textShadow:'0 4px 16px rgba(0,0,0,0.22)'}}>Your Video First<br />Content Partner</h1>
          <div className="flex flex-col sm:flex-row gap-4 items-start justify-start mb-8">
            {/* Schedule a Call Button with glowing dot */}
           <CTAButton openPopup={ openPopup }/>
            {/* Portfolio Button */}
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-full border-2 border-white text-white font-bold text-base md:text-lg shadow-md hover:bg-white hover:text-red-600 active:bg-red-100 transition-all focus:outline-none"
              style={{boxShadow:'0 2px 12px 0 rgba(0,0,0,0.10)'}}
            >
              PORTFOLIO
            </a>
          </div>
        </div>
      </section>

      {/* Trusted by 100+ Brands Section (improved) */}
      <section className="relative w-full bg-[#f5efea] dark:bg-black pb-12 md:pb-12 pt-12 md:pt-24 px-4 md:px-24 border-b-2 border-primary flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8 md:gap-0">
        <div className="flex flex-col items-start py-8 justify-center w-full md:w-auto md:pr-12 md:border-r-2 md:border-r-primary">
          <span className="text-white text-3xl md:text-2xl font-semibold mb-1">Trusted By</span>
          <span className="text-primary text-3xl md:text-2xl font-extrabold mb-1">100+ Brands</span>
          <span className="text-white text-3xl md:text-2xl font-semibold">Across The Globe</span>
        </div>
        {/* Infinite Scrolling Brand Logos */}
        <div className="flex-1 flex items-center min-w-0 w-full md:w-auto md:pl-12">
          <div className="relative overflow-hidden w-full">
            <div className="flex gap-8 animate-scrollBrands items-center py-2">
              {brandLogos.concat(brandLogos).map((logo, idx) => (
                <img
                  key={idx}
                  src={`https://demoxml.com/wp/darkyn/wp-content/uploads/2025/03/${logo}.png`}
                  alt={logo}
                  className="h-12 w-fit md:h-16 object-cover"
                  
                />
              ))}
            </div>
          </div>
        </div>
       
        <div className="absolute z-11  bottom-[100%] right-[15%] ">
          <div className=" z-10 "> 
          <img src={Bcurve} alt="curve" className="hidden dark:block"/>
          <img src={Wcurve} alt="curve" className="block dark:hidden"/>
        </div>
          <img src={circle} alt="circle" className="absolute top-3 left-[24.5%] animate-spin-slow"/>
           
        </div>
        <style>{`
          @keyframes scrollBrands {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scrollBrands {
            animation: scrollBrands 18s linear infinite;
          }
        `}</style>
      </section>
    </>
  );
}


