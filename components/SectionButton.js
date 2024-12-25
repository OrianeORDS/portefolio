
"use client"; 
import React, { useState } from "react";
import Cross from "@/components/Cross" ; 
import ButtonDetail from "@/components/ButtonDetail";
import TitleH2 from "./TitleH2";

export default function SectionButton(props) {
    const [isOpen, setIsOpen] = useState(false);
    function handleToggle(){setIsOpen(!isOpen);}

    return (
        <button onClick={handleToggle} className= {`relative flex flex-col justify-center items-left bg-dark-purple-90 hover:bg-intense-purple
        ${isOpen ? "w-full" : "w-2/3"} boder-box  sm:w-2/5 ${isOpen ? "h-auto" : "h-24"} p-5 sm:p-8 lg:p-10 rounded-xl shadow-lg `}
         >
          <TitleH2 title={props.title}/>
  
          {isOpen && props.items && (
            <ul className="flex flex-col text-white-green m-0 p-0 text-left font-normal mt-4 sm:p-5">
              {props.items.map((item, index) => (
                <li key={index} className="py-1 flex">
                < ButtonDetail item={item}/> 
                </li>
              ))}
            </ul>
          )}

          <Cross isOpen={isOpen}/>
        </button>
    ) }

    // {item.anchor? href={item.anchor} : null }>

//  href={item.anchor}                           className="flex items-left gap-2 text-inherit hover:underline hover:text-medium-green" 