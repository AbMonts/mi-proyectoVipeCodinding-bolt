import { useEffect, useRef, useState, type CSSProperties, type ReactElement } from 'react';

const ARROW_ROWS = [
  'X',
  'XX',
  'XOX',
  'XOOX',
  'XOOOX',
  'XOOOOX',
  'XOOOOOX',
  'XOOOOOOX',
  'XOOOOOOOX',
  'XOOOOXXXXX',
  'XOOXOX',
  'XOX XOX',
  'XX  XOX',
  'X    XOX',
  '     XX',
];
const ARROW_WIDTH = Math.max(...ARROW_ROWS.map((row) => row.length));
const ARROW_HEIGHT = ARROW_ROWS.length;
const PIXEL_SIZE = 2;

const SPARKLE_COLORS = ['#7ddcc4', '#ff9c8a', '#ffffff'];
const SPARKLE_LIMIT = 16;
const SPAWN_INTERVAL_MS = 70;

interface Sparkle {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  color: string;
}

function PixelArrow() {
  const outline: ReactElement[] = [];
  const fill: ReactElement[] = [];

  ARROW_ROWS.forEach((row, y) => {
    row.split('').forEach((cell, x) => {
      if (cell === ' ') return;
      const rect = <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} />;
      if (cell === 'X') outline.push(rect);
      else fill.push(rect);
    });
  });

  return (
    <svg
      width={ARROW_WIDTH * PIXEL_SIZE}
      height={ARROW_HEIGHT * PIXEL_SIZE}
      viewBox={`0 0 ${ARROW_WIDTH} ${ARROW_HEIGHT}`}
      shapeRendering="crispEdges"
      className="block overflow-visible"
    >
      <g fill="#ffffff">{outline}</g>
      <g className="pixel-cursor-fill">{fill}</g>
    </svg>
  );
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const nextSparkleId = useRef(0);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const cursor = cursorRef.current;
    if (!finePointer.matches || !cursor) return;

    document.body.classList.add('custom-cursor');
    let lastSpawn = 0;

    const handleMove = (event: MouseEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.style.opacity = '1';

      const now = performance.now();
      if (reduceMotion.matches || now - lastSpawn < SPAWN_INTERVAL_MS) return;
      lastSpawn = now;

      const angle = Math.random() * Math.PI * 2;
      const distance = 14 + Math.random() * 18;
      const sparkle: Sparkle = {
        id: nextSparkleId.current++,
        x: event.clientX + 6,
        y: event.clientY + 6,
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance,
        size: Math.random() < 0.5 ? 4 : 6,
        color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
      };
      setSparkles((previous) => [...previous.slice(-(SPARKLE_LIMIT - 1)), sparkle]);
    };

    const handleLeave = () => {
      cursor.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMove);
    document.documentElement.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  const removeSparkle = (id: number) => {
    setSparkles((previous) => previous.filter((sparkle) => sparkle.id !== id));
  };

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0 transition-opacity duration-200 drop-shadow-[0_1px_0_rgba(11,37,69,0.6)]"
      >
        <PixelArrow />
      </div>

      {sparkles.map((sparkle) => {
        const style = {
          left: sparkle.x,
          top: sparkle.y,
          width: sparkle.size,
          height: sparkle.size,
          backgroundColor: sparkle.color,
          '--dx': `${sparkle.dx}px`,
          '--dy': `${sparkle.dy}px`,
        } as CSSProperties;

        return (
          <span
            key={sparkle.id}
            aria-hidden="true"
            className="pixel-sparkle"
            style={style}
            onAnimationEnd={() => removeSparkle(sparkle.id)}
          />
        );
      })}
    </>
  );
}
