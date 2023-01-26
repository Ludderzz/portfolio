
import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Developer", "Designer", "Creator"],
        loop: true,
        delaySpeed: 2000
    });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img className="relative rounded-full h-32 w-32 mx-auto round object-cover" src="https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/287646674_1624259231276218_7092134572011131332_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vzCsTaDXysQAX_6IabS&_nc_ht=scontent-lcy1-1.xx&oh=00_AfCA9RhDGCoXxktTT-1ts5gG52wu668tUHyGmyYuhvGO6A&oe=63CC21D8" alt="" />
        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[15px]">Website Developer</h2>
         <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>   
        <Cursor cursorColor="#00FFFF"></Cursor>   </h1>  
     

        <div className="pt-5">
            <Link href="#about">
            <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
            <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
            <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
            <button className="heroButton">Projects</button>
            </Link>
        </div>
        </div>
    </div>
    
  )
}