import Image from "next/image";
import NavIcon from "./NavIcon";
import { HomeIcon, UploadIcon, MailIcon } from "./IconsSVG";

export default function Navbar() {
  return (
    <nav className="bg-dark-purple text-white-green flex justify-end items-start gap-[25px] p-[5px_20px] self-stretch  sm:p-[15px_20px] sm:gap-[50px]">
        <NavIcon goTo="#" icon={<UploadIcon/>} alterName="home icon"/>
        <NavIcon goTo="#" icon={<HomeIcon/> } alterName="send email icon"/>
        <NavIcon goTo="#" icon={<MailIcon/>} alterName="upload cv icon"/>
  </nav>
  ) 
}