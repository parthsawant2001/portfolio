import { useState } from "react";
import Head from "next/head";
import { GlobalStyles } from "@/components/GlobalStyles";
import { Background } from "@/components/Background";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Archive } from "@/components/Archive";
import { ContactModal } from "@/components/ContactModal";
import { Footer } from "@/components/Footer";
import { NAVY } from "@/theme";

export default function Home() {
  const [contact, setContact] = useState(false);
  return (
    <>
      <Head>
        <title>Parth Sawant — Backend Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ background: NAVY, minHeight: "100vh" }}>
        <GlobalStyles />
        <Background />
        <Nav onContact={() => setContact(true)} />
        <Hero onContact={() => setContact(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Archive />
        <Footer />
        {contact && <ContactModal onClose={() => setContact(false)} />}
      </div>
    </>
  );
}
