import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface IStyledCanvas {
  ref?: any;
}

type ExtendedHTMLCanvasElement = HTMLCanvasElement & {
  getContext: (contextId: "2d", options?: CanvasRenderingContext2DSettings | undefined) => CanvasRenderingContext2D | null;
};

const StyledCanvas = styled.canvas<IStyledCanvas>`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: transparent;
`;

const FooterCanvas = () => {
  const footerCanvas = useRef<HTMLCanvasElement | undefined>();
  const [ctx, setCtx] = useState<CanvasRenderingContext2D|null>(null);

  const animate = (delta: number) => {
    
    if (footerCanvas && footerCanvas.current) {
      let canvas = footerCanvas.current as ExtendedHTMLCanvasElement;
      const _ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    
      requestAnimationFrame(animate);
      canvas.width = canvas.width;
      _ctx.fillStyle = "rgba(56,81,172, 1)";
      
      var randomLeft = Math.abs(Math.pow( Math.sin(delta/1000), 2 )) * 100;
      var randomRight = Math.abs(Math.pow( Math.sin((delta/1000) + 10), 2 )) * 100;
      var randomLeftConstraint = Math.abs(Math.pow( Math.sin((delta/1000)+2), 2 )) * 100;
      var randomRightConstraint = Math.abs(Math.pow( Math.sin((delta/1000)+1), 2)) * 100;
      
      _ctx.beginPath();
      _ctx.moveTo(0, randomLeft);
      
      // ctx.lineTo(canvas.width, randomRight);
      _ctx.bezierCurveTo(canvas.width / 3, randomLeftConstraint, canvas.width / 3 * 2, randomRightConstraint, canvas.width, randomRight);
      _ctx.lineTo(canvas.width , canvas.height);
      _ctx.lineTo(0, canvas.height);
      _ctx.lineTo(0, randomLeft);
      
      _ctx.closePath();
      _ctx.fill(); 
    } 
  }
    
  useEffect(() => {
    const canvas = footerCanvas.current as HTMLCanvasElement;
    setCtx(canvas.getContext("2d"));
  }, []);

  useEffect(() => {
    const canvas = footerCanvas.current as HTMLCanvasElement;

    if (typeof window !== "undefined") {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      window.addEventListener('resize', () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
      });
    }

    animate(1);

  }, [ctx]);

  return (<StyledCanvas ref={footerCanvas}></StyledCanvas>)
};

export default FooterCanvas;