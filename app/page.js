
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import MainSection from "@/components/MainSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PulseEffect from "@/components/PulseEffect";

// bg-dark-green min-h-screen text-white-purple font-oswald 

export default function Portefolio() {
  return (
    <div className=" w-full max-w-[1400px] bg-white-green flex flex-col h-fit">       {/* container principal y compris footer et navbar */}
      <Navbar/>
      <Home/>
      <MainSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}
