/* index.js */
import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Volunteer from '../components/Volunteer';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Head>
                <title>Subhan Amjad - Portfolio</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            </Head>
            <Navbar />
            <main>
                <HeroSection />
                <Education />
                <Experience />
                <Projects />
                <Skills />
                <Volunteer />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
