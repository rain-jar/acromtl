import Image from "next/image";
import styles from "./page.module.css";
import HomeCarousel from '../components/HomeCarousel'
import WelcomeSection from '../components/Welcome'
import OurRunsSection from '../components/OurRunsSection'



export default function Home() {
  return (
    <main className="w-full">
      {/* 2. Carousel placeholder (full width) */}
      <section className="mt-0 w-full">
        <HomeCarousel />
      </section>

      {/* 3. Welcome section (text left, image right) */}
      <WelcomeSection />

      {/* 4. Our Runs (grid, flip cards later) */}
      <OurRunsSection />
    </main>
  )
}
