import React, { useRef, useEffect, useState } from 'react';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4';

interface BoomerangVideoBgProps {
  className?: string;
}

const BoomerangVideoBg: React.FC<BoomerangVideoBgProps> = ({ className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const displayCanvasRef = useRef<HTMLCanvasElement>(null);
  const [framesReady, setFramesReady] = useState(false);
  const [fallback, setFallback] = useState(false);
  const framesRef = useRef<HTMLCanvasElement[]>([]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const frames: HTMLCanvasElement[] = [];
    let capturing = true;
    let lastTime = -1;
    const MAX_WIDTH = 960;

    const captureFrame = () => {
      if (!capturing || video.readyState < 2) return;
      if (video.currentTime === lastTime) return;
      lastTime = video.currentTime;
      const vw = video.videoWidth, vh = video.videoHeight;
      if (!vw || !vh) return;
      const scale = Math.min(1, MAX_WIDTH / vw);
      const w = Math.round(vw * scale), h = Math.round(vh * scale);
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      try {
        ctx.drawImage(video, 0, 0, w, h);
        frames.push(canvas);
      } catch {
        capturing = false;
        setFallback(true);
      }
    };

    const hasVFC = typeof (video as any).requestVideoFrameCallback === 'function';
    let rafId = 0;
    const rafLoop = () => { captureFrame(); if (capturing) rafId = requestAnimationFrame(rafLoop); };
    const vfcLoop = () => {
      captureFrame();
      if (capturing && (video as any).requestVideoFrameCallback)
        (video as any).requestVideoFrameCallback(vfcLoop);
    };
    const onEnded = () => {
      capturing = false;
      if (frames.length) { framesRef.current = frames; setFramesReady(true); }
    };
    const onError = () => setFallback(true);
    const onLoaded = () => {
      video.play().catch(() => setFallback(true));
      if (hasVFC) (video as any).requestVideoFrameCallback(vfcLoop);
      else rafId = requestAnimationFrame(rafLoop);
    };
    const timeout = setTimeout(() => {
      if (!framesReady && video.readyState < 2) setFallback(true);
    }, 4500);

    video.addEventListener('loadedmetadata', onLoaded);
    video.addEventListener('ended', onEnded);
    video.addEventListener('error', onError);
    if (video.readyState >= 1) onLoaded();

    return () => {
      capturing = false;
      cancelAnimationFrame(rafId);
      clearTimeout(timeout);
      video.removeEventListener('loadedmetadata', onLoaded);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('error', onError);
    };
  }, []);

  useEffect(() => {
    if (!framesReady) return;
    const canvas = displayCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const frames = framesRef.current;
    if (!frames.length) return;
    const first = frames[0];
    canvas.width = first.width;
    canvas.height = first.height;
    let index = 0, direction = 1;
    let last = performance.now();
    const interval = 1000 / 30;
    let rafId = 0;
    const render = (now: number) => {
      if (now - last >= interval) {
        last = now;
        ctx.drawImage(frames[index], 0, 0);
        index += direction;
        if (index >= frames.length - 1) { index = frames.length - 1; direction = -1; }
        else if (index <= 0) { index = 0; direction = 1; }
      }
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, [framesReady]);

  return (
    <div className={className ?? 'absolute inset-0 w-full h-full'}>
      {/* Fallback gradient background */}
      <div className={`absolute inset-0 leaf-bg ${fallback || !framesReady ? 'block' : 'hidden'}`}>
        <div
          className="absolute -left-24 top-24 w-[420px] h-[420px] rounded-full pulse-glow"
          style={{ background: 'radial-gradient(circle, rgba(215,255,184,0.6), transparent 65%)', filter: 'blur(40px)' }}
        />
        <div
          className="absolute right-[-80px] top-1/3 w-[520px] h-[520px] rounded-full float-1"
          style={{ background: 'radial-gradient(circle, rgba(88,204,2,0.55), transparent 65%)', filter: 'blur(50px)' }}
        />
        <div
          className="absolute left-1/3 bottom-[-100px] w-[600px] h-[600px] rounded-full float-2"
          style={{ background: 'radial-gradient(circle, rgba(31,77,18,0.7), transparent 70%)', filter: 'blur(60px)' }}
        />
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              width: `${4 + (i % 5)}px`,
              height: `${4 + (i % 5)}px`,
              left: `${(i * 47) % 100}%`,
              top: `${(i * 73) % 100}%`,
              animationDelay: `${(i % 9) * 0.6}s`,
              animationDuration: `${6 + (i % 5)}s`,
              opacity: 0.3 + (i % 5) * 0.1,
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <span
            key={`l${i}`}
            className="leaf-particle"
            style={{
              left: `${(i * 31 + 5) % 90}%`,
              top: `${(i * 19 + 12) % 80}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${12 + i}s`,
              transform: `rotate(${i * 45}deg)`,
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path
                d="M17 4c0 8-4 12-9 12 0 0-1-7 4-11 0 0 5-1 5-1zM6 20c0-4 3-6 6-7"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        ))}
      </div>

      <video
        ref={videoRef}
        src={BG_VIDEO}
        className="w-full h-full object-cover"
        style={{ display: framesReady && !fallback ? 'block' : 'none' }}
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        autoPlay
      />
      <canvas
        ref={displayCanvasRef}
        className="w-full h-full object-cover absolute inset-0"
        style={{ display: framesReady && !fallback ? 'block' : 'none' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1f4d12]/60" />
    </div>
  );
};

export default BoomerangVideoBg;
