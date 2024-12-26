
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import ContactForm from "@/components/ContactForm";
import ContactInfos from "@/components/ContactInfos";
import MainSection from "@/components/MainSection";
import Footer from "@/components/Footer";


// bg-dark-green min-h-screen text-white-purple font-oswald 

export default function Home() {
  return (
    <div className=" w-full max-w-[1400px] bg-white-green flex flex-col h-fit">       {/* container principal y compris footer et navbar */}
      <Navbar/>
      <Welcome/>
      <MainSection/>
      <section className="py-12 p-10 gap-10 box-border bg-dark-purple-90 text-white-green flex flex-col sm:flex-row "> 
        <ContactInfos/>
        <ContactForm/>
      </section> 
      <Footer/>
    </div>
  )
}
