"use client";
import { useEffect, useRef } from "react";

import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { gsap } from "gsap";
import { components } from "..";
import Bounded from "@/components/Bounded";
import Shapes from "./Shapes";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const component = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()

      t1.fromTo(".name-animation", {
        x: -100, opacity:0, rotate: -10
      },
      {
        x:0,
        opacity: 1,
        rotate: 0,
        ease: "elastic.out(1,0,3)",
        duration: 0.8,
        transformOrigin: "left top",
        delay: 0.2, 
        stagger: {
          each: 0.1,
          from: 'random',
        },
      }
    );

      t1.fromTo( ".job-title", {
        y:20,
        opacity:0,
        scale:1.2
      }, {
        opacity:1,
        y:0,
        duration:1,
        scale:1,
        ease: "elastic.out(1,0,3)",
      })

    }, component);
    return () => ctx.revert();
    }, []);

  const renderLetters = (name:KeyTextField, key:string) =>{
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span key={index} className={`name-animation name-animation-${key} inline-block opacity-0`}>
        {letter}
      </span>
    ))
  }


  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className="grid min-h[60vh] grid-cols-1 md:grid-cols-2 items-center">
        <Shapes />
        <div className="col-start-1 md:row-start-1">
          <h1 
            className = "mb-8 text-[clamp(7rem,2vmin,5rem)] font-extrabold leading-none tracking-tighter" 
            aria-label={
              slice.primary.first_name + " " + slice.primary.last_name
            }
          >
          <span className = "block text-pallets-500">
            {renderLetters(slice.primary.first_name, "first")}
          </span>
          <span className="-mt-[.2em] block text-pallets-300">
            {renderLetters(slice.primary.last_name, "last")}
          </span>
        </h1>
        <span className="job-title text-[clamp(1rem,2vmin,3rem)] block text-pallets-300">
            {slice.primary.tag_line}
        </span>
        <span className="job-title text-[clamp(1rem,2vmin,3rem)] block text-pallets-300">
            Actively seeking Summer 2024 internships.
        </span>
        </div>
      </div>

    </Bounded>
  );
};

export default Hero;
