import NavIcon from "./NavIcon";
import { HomeIcon, UploadIcon, MailIcon } from "./IconsSVG";

export default function Navbar() {

  return (
    <nav className="bg-dark-purple-90 text-white-green flex justify-end  gap-[25px] p-4 sm:p-5 sm:gap-24 pr-5 sm:pr-10 ">
        <NavIcon goTo="#home" icon={<HomeIcon/> } alterName="home icon"/>
        <NavIcon goTo="#sendemail" icon={<MailIcon/>} alterName="send email icon"/>
        <NavIcon goTo="/documents/CV_ords.pdf" download="CV OrianeRDS en fr.pdf" newTab={true} icon={<UploadIcon/>} alterName="upload cv icon"  />
  </nav>
  ) 
} 