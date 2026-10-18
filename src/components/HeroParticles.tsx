import { CSSProperties } from "react";
import { Snowflake } from "lucide-react";

// Deterministic pseudo-random numbers so server and client render the same particles.
function rng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const r = rng(42);
const between = (min: number, max: number) => min + r() * (max - min);

const embers = Array.from({ length: 22 }, () => ({
  left: between(2, 48),
  size: between(2, 5),
  duration: between(6, 12),
  delay: between(0, 12),
  drift: between(-60, 60),
}));

const flakes = Array.from({ length: 22 }, () => ({
  left: between(52, 98),
  size: between(2, 5),
  duration: between(9, 16),
  delay: between(0, 16),
  drift: between(-50, 50),
  icon: r() < 0.3,
}));

// Embers rise on the warm (left) side, snow falls on the cool (right) side.
export function HeroParticles() {
  return (
    <div aria-hidden className="particles pointer-events-none absolute inset-0 overflow-hidden">
      {embers.map((e, i) => (
        <span
          key={`e${i}`}
          className="ember"
          style={
            {
              left: `${e.left}%`,
              width: e.size,
              height: e.size,
              animationDuration: `${e.duration}s`,
              animationDelay: `-${e.delay}s`,
              "--drift": `${e.drift}px`,
            } as CSSProperties
          }
        />
      ))}
      {flakes.map((f, i) =>
        f.icon ? (
          <Snowflake
            key={`f${i}`}
            className="flake text-ice-200/70"
            size={f.size * 3}
            style={
              {
                left: `${f.left}%`,
                animationDuration: `${f.duration}s`,
                animationDelay: `-${f.delay}s`,
                "--drift": `${f.drift}px`,
              } as CSSProperties
            }
          />
        ) : (
          <span
            key={`f${i}`}
            className="flake flake-dot"
            style={
              {
                left: `${f.left}%`,
                width: f.size,
                height: f.size,
                animationDuration: `${f.duration}s`,
                animationDelay: `-${f.delay}s`,
                "--drift": `${f.drift}px`,
              } as CSSProperties
            }
          />
        ),
      )}
    </div>
  );
}
