import { MutableRefObject, RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface IStyledCanvas {
  ref?: any;
}

const StyledCanvas = styled.canvas<IStyledCanvas>`
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(36,0,0,1) 0%, rgba(0,0,0,1) 53%, rgba(1,51,61,1) 86%, rgba(1,94,112,1) 100%);
`;

interface IMouse {
  x: number,
  y: number,
  radius: number,
}

let mouse: IMouse = {
  x: 0,
  y: 0,
  radius: 0,
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color+'55';
}

// Create particle
class Particle {
  id: number;
  canMove: boolean;
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  color: string;
  constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string, id: number, canMove: boolean) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
    this.canMove = canMove;
  }

  //method to draw individual particle
  draw(ctx: CanvasRenderingContext2D, newColor = false) {
    if(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      // ctx.fillStyle = '#8C5523';
      ctx.fillStyle = typeof newColor === 'string' ? newColor : this.color;
      ctx.fill();
    }
  }

  // Check particle position, check mouse position, move the particle, draw the particle
  update(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, mouse: IMouse) {
    //check if particle is still within canvas
    if(this.x > canvas.width-11 || this.x < 11) {
      this.directionX = -this.directionX;
    }

    // if(this.id === 0){
    //   console.log(this.x, this.y, canvas.height);
    // }
    if(this.y > canvas.height-11 || this.y < 11) {
      this.directionY = -this.directionY;
    }

    //check collision detection - mouse position / particle position
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx*dx + dy*dy);
    if (distance < mouse.radius + this.size) {
      if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
        this.x += 10;
      }
      if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 10;
      }
      if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
        this.y += 10;
      }
      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 10;
      }
      this.directionX = -this.directionX;
      this.directionY = -this.directionY;
    }
    // move particle
    this.x += this.directionX;
    this.y += this.directionY;

    let newColor = false;

    // if(this.x < canvas.width / 2) {
    //   newColor = '#ffffff';
    // }
    // draw particle
    this.draw(ctx, newColor);
  }
}

const BackgroundCanvas = () => {
  const bgCanvas = useRef<HTMLCanvasElement | undefined>();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D|null>(null);

  const init = () => {
    let canvas:(HTMLCanvasElement | undefined) = bgCanvas.current;

    mouse = {
      x: 0,
      y: 0,
      radius: canvas ? (canvas?.height/120) * (canvas?.width/120) : 0,
    } as IMouse;

    let particlesArray = [] as Particle[];
    let numberOfParticles = canvas ? (canvas.height * canvas.width) / 7000 : 0;
    for(let i = 0; i < numberOfParticles; i++) {
      let size = (Math.random() * 2) + 1;
      let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
      let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
      let directionX = (Math.random() * 5) - 2.5;
      let directionY = (Math.random() * 5) - 2.5;
      // let color = '#8C5523';
      let color = getRandomColor();
  
      particlesArray.push(new Particle(x, y, directionX, directionY, size, color, i, true));
    }

    //Cat face particles
    particlesArray.push(new Particle(319, 191, 0, 0, 2, getRandomColor(), 989990, false));
    particlesArray.push(new Particle(240, 297, 0, 0, 2, getRandomColor(), 989991, false));
    particlesArray.push(new Particle(263, 329, 0, 0, 2, getRandomColor(), 989992, false));
    particlesArray.push(new Particle(238, 411, 0, 0, 2, getRandomColor(), 989993, false));
    particlesArray.push(new Particle(94, 473, 0, 0, 2, getRandomColor(), 989994, false));
    particlesArray.push(new Particle(94, 301, 0, 0, 2, getRandomColor(), 989995, false));

    // cat ear
    particlesArray.push(new Particle(288, 216, 0, 0, 2, getRandomColor(), 989996, false));
    particlesArray.push(new Particle(196, 267, 0, 0, 2, getRandomColor(), 989997, false));
    particlesArray.push(new Particle(231, 287, 0, 0, 2, getRandomColor(), 989998, false));

    //cat eye
    particlesArray.push(new Particle(226, 313, 0, 0, 2, getRandomColor(), 989999, false));
    particlesArray.push(new Particle(156, 337, 0, 0, 2, getRandomColor(), 990000, false));
    particlesArray.push(new Particle(156, 346, 0, 0, 2, getRandomColor(), 990001, false));
    particlesArray.push(new Particle(166, 349, 0, 0, 2, getRandomColor(), 990002, false));
    
    //cat nose
    particlesArray.push(new Particle(110, 377, 0, 0, 2, getRandomColor(), 990003, false));
    particlesArray.push(new Particle(124, 389, 0, 0, 2, getRandomColor(), 990004, false));
    particlesArray.push(new Particle(122, 399, 0, 0, 2, getRandomColor(), 990005, false));
    particlesArray.push(new Particle(101, 408, 0, 0, 2, getRandomColor(), 990006, false));

    //cat upper lips
    particlesArray.push(new Particle(95, 416, 0, 0, 2, getRandomColor(), 990007, false));
    particlesArray.push(new Particle(100, 426, 0, 0, 2, getRandomColor(), 990008, false));
    particlesArray.push(new Particle(137, 443, 0, 0, 2, getRandomColor(), 990009, false));
    particlesArray.push(new Particle(164, 427, 0, 0, 2, getRandomColor(), 990010, false));

    //cat lower lips
    particlesArray.push(new Particle(95, 447, 0, 0, 2, getRandomColor(), 990011, false));
    particlesArray.push(new Particle(110, 444, 0, 0, 2, getRandomColor(), 990012, false));


    setParticles(particlesArray);
  }

  interface IDrawByPointProps {
    ctx: CanvasRenderingContext2D;
    firstParticleId: number;
    lastParticleId: number;
    circle: boolean;
  }

  const drawByPoints = ({ctx, firstParticleId, lastParticleId, circle}: IDrawByPointProps) => {
    const faceParticles = particles.filter(particle => particle.id >= firstParticleId && particle.id <= lastParticleId);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    for (let i = 0; i < faceParticles.length; i++) {
      if(!circle && i+1 === faceParticles.length) continue;
      const nextIndex = i+1 === faceParticles.length ? 0 : i+1;
      ctx.beginPath();
      ctx.moveTo(faceParticles[i].x, faceParticles[i].y);
      ctx.lineTo(faceParticles[nextIndex].x, faceParticles[nextIndex].y);
      ctx.stroke();
    }
  }

  const connect = () => {
    const canvas = bgCanvas.current;
    let opacityValue = 1;
    for(let a = 0; a < particles.length; a++) {
      for (let b = a; b < particles.length; b++) {
        if(!particles[a].canMove && !particles[b].canMove){
          continue;
        }
        let distance = (( particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
        let distanceFactor = 6;
        if (ctx !== null && canvas && distance < (canvas.width/distanceFactor) * (canvas.height/distanceFactor)) {
          
          opacityValue = 1 - (distance/12000);
          ctx.strokeStyle = 'rgba(140, 85, 31, ' + opacityValue + ')';

          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }

    if (ctx !== null) {
      // connect the cat face
      drawByPoints({
        ctx: ctx,
        firstParticleId: 989990,
        lastParticleId: 989995,
        circle: true, 
      });

      //connect the cat ear
      drawByPoints({
        ctx: ctx,
        firstParticleId: 989996,
        lastParticleId: 989998,
        circle: true, 
      });

      //connect the cat eye
      drawByPoints({
        ctx: ctx,
        firstParticleId: 989999,
        lastParticleId: 990002,
        circle: false, 
      });

      //connect the cat nose
      drawByPoints({
        ctx: ctx,
        firstParticleId: 990003,
        lastParticleId: 990006,
        circle: false, 
      });

      //connect the cat upper lips
      drawByPoints({
        ctx: ctx,
        firstParticleId: 990007,
        lastParticleId: 990010,
        circle: false, 
      });

      //connect the cat lower lips
      drawByPoints({
        ctx: ctx,
        firstParticleId: 990011,
        lastParticleId: 990012,
        circle: false, 
      });
    }
  }

  const animate = () => {
    if (bgCanvas && bgCanvas.current && typeof bgCanvas.current.getContext === 'function') {
      const canvas = bgCanvas.current as HTMLCanvasElement;
      const _ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      
      requestAnimationFrame(animate);
      _ctx.clearRect(0, 0, innerWidth, innerHeight);
      
      for (let i = 0; i < particles.length; i++) {
        if(particles[i].canMove){
          particles[i].update(canvas, _ctx, mouse);
        } else {
          particles[i].draw(_ctx, false);
        }
      }
      
      connect();
    }
  }
    
  useEffect(() => {
    const canvas = bgCanvas.current as HTMLCanvasElement;
    mouse.radius = ((canvas.height/90) * (canvas.height/90));
    setCtx(canvas.getContext("2d"));
  }, []);

  useEffect(() => {
    const canvas = bgCanvas.current as HTMLCanvasElement;

    if (typeof window !== "undefined") {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      window.addEventListener('mousemove', event => {
        mouse.x = event.x;
        mouse.y = event.y;
      });

      window.addEventListener('resize', () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        mouse.radius = ((canvas.height/90) * (canvas.height/90));
        init();
      });

      window.addEventListener('mouseout', () => {
        mouse.x = 0;
        mouse.y = 0;
      })
    }

    init();
    animate();

  }, [ctx]);

  return (<StyledCanvas ref={bgCanvas}></StyledCanvas>)
};

export default BackgroundCanvas;