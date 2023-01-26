import About from "@/components/About";
import ContactMe from "@/components/contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import type { NextPage } from "next";
import Head from 'next/head';
import Link from "next/link";
import { useState, useEffect } from 'react';

const Home: NextPage = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
     scrollbar-thumb-[#f7ab0a]/80">
      <Head>
        <title>Eddie Portfolio</title>
      </Head>
        
        <Header />
        
        <section id="hero" className="snap-start">
          <Hero />
          </section>

        
        <section id='about' className="snap-center">
          <About />
        </section>

        
        <section id='experience' className="snap-center">
        <WorkExperience />
        </section>

        
        <section id="skills" className="snap-start">
          <Skills />
        </section>

        
        <section id="projects" className="snap-start">
          <Projects />
        </section>

        
        <section id="Contact" className="snap-start">
          <ContactMe />
        </section>

        <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className=" flex items-center justify-center">
            <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src="https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/326094181_569242291721700_451785794995372643_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vrfc2evc9QYAX-JP2ry&_nc_ht=scontent-lcy1-1.xx&oh=00_AfAdpa1OvC9i7HchLtXbtKwuwVT7XPdP6KnJSmbTAw3EXQ&oe=63CFA28C">
            </img>
            </div>
        </footer>
        </Link>
       
</div>
        
        
  )
}

export default Home;
