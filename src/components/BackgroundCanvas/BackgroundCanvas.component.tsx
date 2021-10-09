import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(36,0,0,1) 0%, rgba(0,0,0,1) 53%, rgba(1,51,61,1) 86%, rgba(1,94,112,1) 100%);
`;

let mouse = {};

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
  constructor(x, y, directionX, directionY, size, color, id) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  //method to draw individual particle
  draw(ctx, newColor = false) {
    if(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      // ctx.fillStyle = '#8C5523';
      ctx.fillStyle = newColor ? newColor : this.color;
      ctx.fill();
    }
  }

  // Check particle position, check mouse position, move the particle, draw the particle
  update(canvas, ctx, mouse) {
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
  const bgCanvas = useRef<HTMLCanvasElement>();
  const [particles, setParticles] = useState([]);
  const [ctx, setCtx] = useState(null);

  const init = () => {
    let canvas = bgCanvas.current;

    mouse = {
      x: null,
      y: null,
      radius: (canvas?.height/120) * (canvas?.width/120),
    };

    let particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 7000;
    for(let i = 0; i < numberOfParticles; i++) {
      let size = (Math.random() * 2) + 1;
      let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
      let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
      let directionX = (Math.random() * 5) - 2.5;
      let directionY = (Math.random() * 5) - 2.5;
      // let color = '#8C5523';
      let color = getRandomColor();
  
      particlesArray.push(new Particle(x, y, directionX, directionY, size, color, i));
    }
    setParticles(particlesArray);
  }

  const connect = () => {
    const canvas = bgCanvas.current;
    let opacityValue = 1;
    for(let a = 0; a < particles.length; a++) {
      for (let b = a; b < particles.length; b++) {
        let distance = (( particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
        if (distance < (canvas.width/6) * (canvas.height/6)) {
          opacityValue = 1 - (distance/12000);

          // if(particles[a].x < canvas.width/2 || particles[b].x < canvas.width/2) {
          //   ctx.strokeStyle = 'rgba(24, 112, 47, ' + opacityValue + ')';
          // }else{
            ctx.strokeStyle = 'rgba(140, 85, 31, ' + opacityValue + ')';
          // }

          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  const animate = () => {
    let canvas = bgCanvas.current;
    const ctx = canvas.getContext("2d");

    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update(canvas, ctx, mouse);
    }
  
    connect();
  }

  useEffect(() => {
    const canvas = bgCanvas.current;
    mouse.radius = ((canvas.height/90) * (canvas.height/90));
    setCtx(canvas.getContext("2d"));
  }, []);

  useEffect(() => {
    const canvas = bgCanvas.current;

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
        mouse.x = undefined;
        mouse.y = undefined;
      })
    }

    init();
    animate();

  }, [ctx]);

  return (<StyledCanvas ref={bgCanvas}></StyledCanvas>)
};

export default BackgroundCanvas;