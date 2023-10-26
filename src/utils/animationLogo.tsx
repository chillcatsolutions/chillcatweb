import { MutableRefObject } from "react";

import { gsap } from 'gsap';

export type HeroReferencesType = {
    startRef: MutableRefObject<any>
    startTextRef: MutableRefObject<any>
    firstPipeRef: MutableRefObject<any>
    mainTitleRef: MutableRefObject<any>
    secondaryTitleRef: MutableRefObject<any>
}

export type AnimationLogoProps = HeroReferencesType & {
    copyButtonRef: MutableRefObject<any>
    tl: MutableRefObject<any>
} 

export const animationLogo = ({
    startRef,
    startTextRef,
    firstPipeRef,
    mainTitleRef,
    secondaryTitleRef,
    copyButtonRef,
    tl
}: AnimationLogoProps) => {

    if(startRef.current
        && startTextRef.current
        && firstPipeRef.current
        && mainTitleRef.current
        && secondaryTitleRef.current
        && copyButtonRef.current) {
        tl.current = gsap.timeline()
        .fromTo(startRef.current, {
          y: -200,
          duration: 1,
          stagger: 0.2, 
        }, {
          y: -100,
          duration: 1,
          stagger: 0.2,
        })
        .to(startRef.current, {
          rotate: '+=20',
          duration: 0.4,
          stagger: 0.2, 
        })
        .to(startRef.current, {
          rotate: '-=40',
          duration: 0.4,
          stagger: 0.2, 
        })
        .to(startRef.current, {
          rotate: '+=20',
          duration: 0.5,
          stagger: 0.2, 
        })
        .to(startRef.current, {
          y: -90,
          duration: .5,
          stagger: 0.2, 
        })
        .to(startRef.current, {
          y: 10,
          rotate: '+=360',
          duration: .5,
          stagger: 0.2, 
        })
        .fromTo(startTextRef.current, {
          opacity: 0,
          duration: .5,
          stagger: 0.2, 
        }, {
          opacity: 1,
          duration: .5,
          stagger: 0.2,
        })
        .fromTo(firstPipeRef.current, {
          width: 0,
          duration: .3,
          stagger: 0.2, 
        }, {
          width: 500,
          duration: .3,
          stagger: 0.2,
        }).fromTo(mainTitleRef.current, {
          opacity: 0,
          duration: .5,
          stagger: 0.2, 
        }, {
          opacity: 1,
          duration: .8,
          stagger: 0.2,
        })
        .fromTo(secondaryTitleRef.current, {
          opacity: 0,
          duration: .5,
          stagger: 0.2, 
        }, {
          opacity: 1,
          duration: .8,
          stagger: 0.2,
        })
        .fromTo(copyButtonRef.current, {
          opacity: 0,
          duration: .5,
          stagger: 0.2, 
        }, {
          opacity: 1,
          duration: .8,
          stagger: 0.2,
        })
        .to(secondaryTitleRef.current, {
          y: 0,
          rotation: '-=20',
          duration: .5,
          stagger: 0.2, 
        })
        .to(secondaryTitleRef.current, {
          y: -60,
          rotation: '+=20',
          duration: .5,
          stagger: 0.2, 
        })
        .to(firstPipeRef.current, {
          width: 230,
          duration: .3,
          stagger: 0.2, 
        });
      }
}