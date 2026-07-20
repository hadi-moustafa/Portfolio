"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const materialsRef = useRef<{
    lines?: THREE.LineBasicMaterial;
    points?: THREE.PointsMaterial;
  }>({});
  const { theme } = useTheme();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();

    const accentHex = getComputedStyle(document.documentElement).getPropertyValue("--amber").trim();
    const accentColor = accentHex ? new THREE.Color(accentHex) : new THREE.Color(0xf59e0b);

    const coreGeo = new THREE.IcosahedronGeometry(2.1, 1);
    const coreWire = new THREE.WireframeGeometry(coreGeo);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: accentColor,
      transparent: true,
      opacity: 0.28,
    });
    const coreLines = new THREE.LineSegments(coreWire, lineMaterial);
    group.add(coreLines);

    const pointsGeo = new THREE.IcosahedronGeometry(2.1, 1);
    const pointsMaterial = new THREE.PointsMaterial({
      color: accentColor,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
    });
    const points = new THREE.Points(pointsGeo, pointsMaterial);
    group.add(points);

    materialsRef.current.lines = lineMaterial;
    materialsRef.current.points = pointsMaterial;

    scene.add(group);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    const animate = () => {
      if (!reduceMotion) {
        group.rotation.y += 0.0018;
        group.rotation.x += 0.0006;
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      coreGeo.dispose();
      coreWire.dispose();
      pointsGeo.dispose();
      lineMaterial.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      materialsRef.current = {};
    };
  }, []);

  // Re-tint the wireframe whenever the active theme's accent color changes,
  // instead of tearing down and rebuilding the whole WebGL scene.
  useEffect(() => {
    const accentHex = getComputedStyle(document.documentElement).getPropertyValue("--amber").trim();
    if (!accentHex) return;
    const color = new THREE.Color(accentHex);
    materialsRef.current.lines?.color.set(color);
    materialsRef.current.points?.color.set(color);
  }, [theme]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none absolute right-[-8%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] hidden lg:block"
    />
  );
}
