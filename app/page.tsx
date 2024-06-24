import About from '@/components/About';
import Experience from '@/components/Experience';
import Grid from '@/components/Grid';
import Projects from '@/components/Projects';
import MainProject from '@/components/MainProject';
import { FloatingNav } from '@/components/ui/FloatingNav';
import Footer from '@/components/Footer';
import Education from '@/components/Education';
import { navItems } from '@/data';
import { FrontPage } from '@/components/FrontPage';

export default function Home() {
  return (
    <main className="relative flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10px-5">
      <div className="w-full">
        <FloatingNav navItems={navItems}/>
        <FrontPage/>
        <About/>
        <MainProject/>
        <Projects/>
        <Grid/>
        <Experience/>
        <Education/>
        <Footer/>
      </div>
    </main>
  );
}
