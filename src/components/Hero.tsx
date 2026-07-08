import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Hero() {
  const canvas3DRef = useRef<HTMLCanvasElement>(null);
  const canvasParticleRef = useRef<HTMLCanvasElement>(null);

  // Three.js 3D scene
  useEffect(() => {
    const canvas = canvas3DRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(0, 0.5, 4);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(3, 4, 2);
    scene.add(dirLight);

    const rimLight = new THREE.PointLight(0xffffff, 0.8, 10);
    rimLight.position.set(-2, 1, 3);
    scene.add(rimLight);

    const bottomLight = new THREE.PointLight(0xffffff, 0.4, 10);
    bottomLight.position.set(0, -2, 2);
    scene.add(bottomLight);

    // Load GLB model
    let model: THREE.Object3D | null = null;
    let modelLoaded = false;
    const loader = new GLTFLoader();

    loader.load(
      "/campus.glb",
      (gltf) => {
        model = gltf.scene;
        modelLoaded = true;

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.5 / maxDim;
        model.scale.setScalar(scale);
        model.position.sub(center.multiplyScalar(scale));
        model.position.y -= 0.2;

        scene.add(model);
      },
      undefined,
      () => {
        const geo = new THREE.BoxGeometry(1.5, 0.6, 3);
        const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, opacity: 0.2, transparent: true });
        model = new THREE.Mesh(geo, mat);
        modelLoaded = true;
        scene.add(model);
      }
    );

    // Scroll-driven rotation
    let scrollProgress = 0;
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      scrollProgress = Math.max(0, Math.min(1, -rect.top / rect.height));
    };
    window.addEventListener("scroll", handleScroll);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (model && modelLoaded) {
        model.rotation.y = scrollProgress * Math.PI * 2 + Date.now() * 0.0002;
        model.rotation.x = Math.sin(scrollProgress * Math.PI) * 0.25;
        model.position.y = -0.2 + Math.sin(scrollProgress * Math.PI * 2) * 0.15;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  // 2D Particle canvas
  useEffect(() => {
    const canvas = canvasParticleRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    resize();

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.3 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.a})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="hero section-dark" id="hero">
      <canvas className="hero-canvas" id="heroCanvas" ref={canvasParticleRef} />
      <canvas className="hero-3d" id="hero3D" ref={canvas3DRef} />
      <div className="hero-gradient" />
      <div className="hero-content">
        <div className="hero-tag" style={{ opacity: 0, transform: "translateY(20px)" }}>Premium Collection</div>
        <h1 className="hero-title">
          <span className="split-line" style={{ overflow: "hidden", display: "block" }}>
            <span className="split-word" style={{ display: "inline-block", transform: "translateY(110%)" }}>STEP</span>
          </span>
          <span className="split-line" style={{ overflow: "hidden", display: "block" }}>
            <span className="split-word" style={{ display: "inline-block", transform: "translateY(110%)" }}>INTO</span>
          </span>
          <span className="split-line" style={{ overflow: "hidden", display: "block" }}>
            <span className="split-word" style={{ display: "inline-block", transform: "translateY(110%)" }}>STYLE</span>
          </span>
        </h1>
        <p className="hero-sub" style={{ opacity: 0, transform: "translateY(20px)" }}>
          Premium trending sneakers for the bold generation
        </p>
        <div className="hero-cta-wrap" style={{ opacity: 0, transform: "translateY(20px)" }}>
          <a href="#collections" className="hero-cta">Shop Now</a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
