"use client";

import { useEffect, useRef } from "react";
import {
  Color,
  Group,
  IcosahedronGeometry,
  LineBasicMaterial,
  LineSegments,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  WebGLRenderer,
  WireframeGeometry,
} from "three";

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new Scene();
    const camera = new PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6.5;

    const renderer = new WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const group = new Group();

    const accentColor = new Color(0x00c2cb);

    const coreGeo = new IcosahedronGeometry(2.1, 1);
    const coreWire = new WireframeGeometry(coreGeo);
    const lineMaterial = new LineBasicMaterial({
      color: accentColor,
      transparent: true,
      opacity: 0.45,
    });
    const coreLines = new LineSegments(coreWire, lineMaterial);
    group.add(coreLines);

    const pointsGeo = new IcosahedronGeometry(2.1, 1);
    const pointsMaterial = new PointsMaterial({
      color: accentColor,
      size: 0.05,
      transparent: true,
      opacity: 0.9,
    });
    const points = new Points(pointsGeo, pointsMaterial);
    group.add(points);


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
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    />
  );
}
