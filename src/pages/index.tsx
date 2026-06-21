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
import { Footer } from "@/components/Footer";
import { NAVY } from "@/theme";

const openMail = () => { window.location.href = "mailto:parthpsawant20@gmail.com"; };

export default function Home() {
  return (
    <>
      <Head>
        <title>Parth Sawant — Backend Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ background: NAVY, minHeight: "100vh" }}>
        <GlobalStyles />
        <Background />
        <Nav onContact={openMail} />
        <Hero onContact={openMail} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Archive />
        <Footer />
      </div>
    </>
  );
}
