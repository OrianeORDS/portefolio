import Image from "next/image";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import ContactInfos from "@/components/ContactInfos";


// bg-dark-green min-h-screen text-white-purple font-oswald 

export default function Home() {
  return (
    <div className=" w-full max-w-[1400px] bg-white-green">       {/* container principal y compris footer et navbar */}
      <Navbar/>
      <Welcome/>
      <Section/>
      <section className="py-12 bg-dark-purple text-white p-6">
        <ContactForm/>
        <ContactInfos/>
      </section> 

      <footer className="bg-dark-purple text-white p-6 text-center text-sm">
      </footer>
      </div>
  )
}
