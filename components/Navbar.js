import Image from "next/image";
import NavIcon from "./NavIcon";
import { HomeIcon, UploadIcon, MailIcon } from "./IconsSVG";

export default function Navbar() {
  return (
    <nav className="bg-dark-purple-90 text-white-green flex justify-end  gap-[25px] p-4 sm:p-5 sm:gap-24 pr-10 sm:pr-10 ">
        <NavIcon goTo="#" icon={<UploadIcon/>} alterName="home icon"/>
        <NavIcon goTo="#" icon={<HomeIcon/> } alterName="send email icon"/>
        <NavIcon goTo="#" icon={<MailIcon/>} alterName="upload cv icon"/>
  </nav>
  ) 
}