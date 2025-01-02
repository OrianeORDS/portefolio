import ContactForm from "./ContactForm";
import ContactInfos from "./ContactInfos";

export default function ContactSection() {
  return (

      <section className="py-12 p-10 gap-10 box-border bg-dark-purple-90 text-white-green flex flex-col sm:flex-row "> 
        <ContactInfos/>
        <ContactForm/>
      </section> 
  )
}