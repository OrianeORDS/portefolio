import Image from "next/image";
import NavIcon from "./NavIcon";

export default function Navbar() {
  return (
    <nav className="bg-dark-purple text-white-green flex justify-end items-start gap-[25px] p-[5px_20px] self-stretch  sm:p-[15px_20px] sm:gap-[50px]">
        <NavIcon goTo="#" source="/svg/basil_home-solid.svg" alterName="home icon"/>
        <NavIcon goTo="#" source="/svg/basil_envelope-solid.svg" alterName="send email icon"/>
        <NavIcon goTo="#" source="/svg/basil_upload-solid.svg" alterName="upload cv icon"/>
  </nav>
  ) 
}