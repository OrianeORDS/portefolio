
"use client"; 
import React, { useState } from "react";
import Cross from "@/components/Cross" ; 
import TitleH2 from "./TitleH2";
import OpenedBoxContent from "@/components/OpenedBoxContent";

export default function OpenableBox(props) {
    const [isOpen, setIsOpen] = useState(false);
    function handleToggle(){setIsOpen(!isOpen);}

    return (
        <div onClick={handleToggle} className= {`relative flex flex-col justify-center items-left bg-dark-purple-90 hover:bg-intense-purple
        ${isOpen ? "w-full" : "w-2/3"} boder-box  sm:w-2/5 ${isOpen ? "h-auto" : "h-24"} box-border p-8 sm:p-8 lg:p-10 rounded-xl shadow-lg `}
         >
          <TitleH2 title={props.title}/>
  
          {isOpen && props.items && (
            <ul className="flex flex-col text-white-green m-0 p-0 text-left font-normal mt-4 sm:p-5">
              {props.items.map((item, index) => (
                <li key={index} className="py-1 flex">
                < OpenedBoxContent item={item}/> 
                </li>
              ))}
            </ul>
          )}

          <Cross isOpen={isOpen}/>
        </div>
    ) }

    // {item.anchor? href={item.anchor} : null }>

//  href={item.anchor}                           className="flex items-left gap-2 text-inherit hover:underline hover:text-medium-green" 