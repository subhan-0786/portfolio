import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Volunteer from '../components/Volunteer';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Subhan Amjad - Portfolio</title>
        <meta name="description" content="Subhan Amjad's professional portfolio." />
      </Head>
      <Navbar />
      <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <HeroSection />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Volunteer />
        <Contact />
      </main>
      <Footer />
    </>
  );
}