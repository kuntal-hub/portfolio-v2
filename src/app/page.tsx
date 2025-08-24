import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import MyBlogs from "@/components/MyBlogs";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import React from "react";
import { chatWithMeUrl } from "@/data";

export default function Home() {
  return (
    <main className="bg-black-100 flex justify-center min-h-screen items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Hero />
      <Grid />
      <Services />
      <Project />
      <Skills />
      <MyBlogs />
      <Clients />
      <Experience />
      <Approach />
      <Footer />
      <a href={chatWithMeUrl} target="_blank" className="btn-whatsapp-pulse z-[100]">
        <img src={"/whatsapp-svgrepo-com.svg"} alt="icons" className=" rounded-3xl" width={40} height={40} />
      </a>
    </main>
  );
}
