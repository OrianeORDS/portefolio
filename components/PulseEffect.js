"use client";
import React, { useEffect, useRef} from 'react';
import anime from 'animejs';


export default function PulseEffect({displayedProject}) {

    const animationRef = useRef(null);

    useEffect(() => {
        animationRef.current = anime({
            targets: '.pulse-effect-parent > .pulse-effect',
            backgroundColor: [
                'rgba(255, 255, 255, 0.0)',
                'rgba(255, 255, 255, 0.15)', 
            ],
            scale: [1, 1.1],
            duration: 2000, 
            easing: 'easeInOutQuad', 
            direction: 'alternate',
            loop: true, 
            delay: (el, i, l) => 300, 
            autoplay: true, 
      }); 
      return () => {
        animationRef.current?.pause();
        animationRef.current = null; 
      };
    }, []);

    
    useEffect(() => {
        if (animationRef.current) {
            console.log(displayedProject)
            if (displayedProject === null) {
                animationRef.current.play();
            } else {
                animationRef.current.pause();
                anime.set(".pulse-effect-parent > .pulse-effect", {
                    backgroundColor: "rgba(255, 255, 255, 0.0)", 
                  });
            } 
        }
    }, [displayedProject]);


    return (

        <div className="pulse-effect absolute inset-0 rounded-md overflow-hidden"></div>
       
    );

}