import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ReelExperience from "@/components/ReelExperience";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Experiences from "@/components/Experiences";
import Dining from "@/components/Dining";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <ReelExperience />
      <About />
      <Rooms />
      <Experiences />
      <Dining />
      <Gallery />
      <Location />
      <BookingCTA />
      <Footer />
      <StickyBookingBar />
    </main>
  );
}
