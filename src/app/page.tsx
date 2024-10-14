import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import React from "react";

export default function Home() {
  return (
    <main className="bg-black-100 flex justify-center min-h-screen items-center flex-col mx-auto sm:px-10 px-5">
      <Hero />
      <Grid />
      <Project />
    </main>
  );
}
