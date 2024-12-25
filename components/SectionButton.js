
"use client"; 
import React, { useState } from "react";
import Cross from "@/components/Cross" ; 

export default function SectionButton(props) {
    const [isOpen, setIsOpen] = useState(false);
    function handleToggle(){setIsOpen(!isOpen);}
    console.log(props.items)

    return (
        <button onClick={handleToggle} className= {`relative flex flex-col justify-center items-left bg-dark-purple hover:bg-intense-purple
        ${isOpen ? "w-5/6" : "w-2/3"} boder-box  sm:w-2/5 ${isOpen ? "h-auto" : "h-24"} p-4 rounded-xl shadow-lg `}
         >
          <h2 className="text-medium-purple text-center uppercase w-full boder-box m-0 font-bold font-oswald text-base">
          {props.title}
          </h2>
  
          {isOpen && props.items && (
            <ul className="flex flex-col text-white-green m-0 p-0 text-left font-normal mt-4 ">
              {props.items.map((item, index) => (
                <li key={index} className="flex items-top gap-2 text-white-green text-left py-1">
                {item.icon? <span className="fill-medium-purple">{item.icon}</span> : null}
                  <span className="text-xs text-justify">{item.text}</span>
                </li>
              ))}
            </ul>
          )}

          <Cross isOpen={isOpen}/>
        </button>
    ) }