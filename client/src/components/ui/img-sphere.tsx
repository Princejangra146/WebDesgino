"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { X } from "lucide-react";

export interface ImageData {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface Position3D {
  x: number;
  y: number;
  z: number;
}

interface WorldPosition extends Position3D {
  scale: number;
  zIndex: number;
  isVisible: boolean;
  fadeOpacity: number;
}

export interface SphereImageGridProps {
  images?: ImageData[];
  containerSize?: number;
  sphereRadius?: number;
  dragSensitivity?: number;
  momentumDecay?: number;
  maxRotationSpeed?: number;
  baseImageScale?: number;
  hoverScale?: number;
  perspective?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  className?: string;
}

const toRad = (deg: number) => (deg * Math.PI) / 180;

const SphereImageGrid: React.FC<SphereImageGridProps> = ({
  images = [],
  containerSize = 400,
  sphereRadius = 200,
  dragSensitivity = 0.6,
  momentumDecay = 0.95,
  maxRotationSpeed = 5,
  baseImageScale = 0.14,
  hoverScale = 1.25,
  perspective = 1000,
  autoRotate = true,
  autoRotateSpeed = 0.2,
  className = "",
}) => {
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState({ x: 10, y: 10 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [positions, setPositions] = useState<Position3D[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<ImageData | null>(null);

  const lastMouse = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const actualR = sphereRadius || containerSize * 0.5;
  const baseSize = containerSize * baseImageScale;

  // Generate base sphere positions (Fibonacci)
  useEffect(() => {
    const count = images.length;
    const pts: Position3D[] = [];
    const gr = (1 + Math.sqrt(5)) / 2;
    const inc = (2 * Math.PI) / gr;

    for (let i = 0; i < count; i++) {
      const t = i / count;
      const incAngle = Math.acos(1 - 2 * t);
      const az = inc * i;

      const x = actualR * Math.sin(incAngle) * Math.cos(az);
      const y = actualR * Math.cos(incAngle);
      const z = actualR * Math.sin(incAngle) * Math.sin(az);
      pts.push({ x, y, z });
    }
    setPositions(pts);
  }, [images.length, actualR]);

  const clampSpeed = (v: number) =>
    Math.max(-maxRotationSpeed, Math.min(maxRotationSpeed, v));

  // Project sphere to screen
  const worldPositions: WorldPosition[] = positions.map((pos) => {
    const rx = toRad(rotation.x);
    const ry = toRad(rotation.y);

    let { x, y, z } = pos;

    // rotate Y
    const x1 = x * Math.cos(ry) + z * Math.sin(ry);
    const z1 = -x * Math.sin(ry) + z * Math.cos(ry);
    x = x1;
    z = z1;

    // rotate X
    const y2 = y * Math.cos(rx) - z * Math.sin(rx);
    const z2 = y * Math.sin(rx) + z * Math.cos(rx);
    y = y2;
    z = z2;

    const depth = (z + actualR) / (2 * actualR);
    const scale = 0.5 + depth * 0.7;
    const isVisible = z > -actualR * 0.8;
    const fadeOpacity = Math.max(0, Math.min(1, depth + 0.2));

    return {
      x,
      y,
      z,
      scale,
      zIndex: Math.round(1000 + z),
      isVisible,
      fadeOpacity,
    };
  });

  // Momentum / autorotate loop
  const tick = useCallback(() => {
    setVelocity((prev) => {
      const v = {
        x: prev.x * momentumDecay,
        y: prev.y * momentumDecay,
      };
      return v;
    });

    setRotation((prev) => ({
      x: prev.x + clampSpeed(velocity.x),
      y:
        prev.y +
        clampSpeed(velocity.y) +
        (autoRotate ? autoRotateSpeed : 0),
    }));

    raf.current = requestAnimationFrame(tick);
  }, [
    autoRotate,
    autoRotateSpeed,
    momentumDecay,
    velocity.x,
    velocity.y,
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [mounted, tick]);

  // Mouse / touch handlers
  const onDown = (x: number, y: number) => {
    setDragging(true);
    setVelocity({ x: 0, y: 0 });
    lastMouse.current = { x, y };
  };

  const onMove = (x: number, y: number) => {
    if (!dragging) return;
    const dx = x - lastMouse.current.x;
    const dy = y - lastMouse.current.y;

    const rx = -dy * dragSensitivity;
    const ry = dx * dragSensitivity;

    setRotation((prev) => ({
      x: prev.x + clampSpeed(rx),
      y: prev.y + clampSpeed(ry),
    }));
    setVelocity({ x: clampSpeed(rx), y: clampSpeed(ry) });
    lastMouse.current = { x, y };
  };

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) =>
      onMove(e.clientX, e.clientY);
    const handleMouseUp = () => setDragging(false);
    const handleTouchMove = (e: TouchEvent) => {
      if (!dragging) return;
      const t = e.touches[0];
      onMove(t.clientX, t.clientY);
    };
    const handleTouchEnd = () => setDragging(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [mounted, dragging]);

  if (!mounted || !images.length) {
    return (
      <div
        className="rounded-lg flex items-center justify-center bg-zinc-900/60 text-zinc-500"
        style={{ width: containerSize, height: containerSize }}
      >
        Loading sphere…
      </div>
    );
  }

  return (
    <>
      <div
        ref={containerRef}
        className={`relative select-none cursor-grab active:cursor-grabbing ${className}`}
        style={{
          width: containerSize,
          height: containerSize,
          perspective: `${perspective}px`,
        }}
        onMouseDown={(e) => onDown(e.clientX, e.clientY)}
        onTouchStart={(e) => {
          const t = e.touches[0];
          onDown(t.clientX, t.clientY);
        }}
      >
        <div className="relative w-full h-full" style={{ zIndex: 10 }}>
          {images.map((img, index) => {
            const pos = worldPositions[index];
            if (!pos || !pos.isVisible) return null;

            const size = baseSize * pos.scale;
            const isHover = hovered === index;
            const scale = isHover ? hoverScale : 1;

            return (
              <div
                key={img.id}
                className="absolute transition-transform duration-200 ease-out"
                style={{
                  width: size,
                  height: size,
                  left: containerSize / 2 + pos.x,
                  top: containerSize / 2 + pos.y,
                  opacity: pos.fadeOpacity,
                  transform: `translate(-50%, -50%) scale(${scale})`,
                  zIndex: pos.zIndex,
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(img)}
              >
                <div className="rounded-full border border-white/20 overflow-hidden shadow-xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-square">
              <img
                src={selected.src}
                alt={selected.alt}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-2 right-2 w-8 h-8 bg-black/60 rounded-full text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            {(selected.title || selected.description) && (
              <div className="p-4">
                {selected.title && (
                  <h3 className="text-lg font-semibold mb-1">
                    {selected.title}
                  </h3>
                )}
                {selected.description && (
                  <p className="text-sm text-zinc-700">
                    {selected.description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SphereImageGrid;