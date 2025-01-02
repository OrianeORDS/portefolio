
import React, { useState} from "react";
import Cross from "@/components/Cross" ; 
import TitleH2 from "./TitleH2";
import OpenedBoxContent from "./OpenedBoxContent";


export default function OpenableQuiJeSuis({items, title }) {

  const [isOpen, setIsOpen] = useState(false);
  function handleToggle(){setIsOpen(!isOpen);}

    return (
        <div onClick={handleToggle} className= {`relative flex flex-col justify-start bg-dark-purple-90 hover:bg-intense-purple
        ${isOpen ? "w-full" : "w-2/3"} boder-box  sm:w-2/5 ${isOpen ? "h-auto" : "h-24"} box-border p-8 sm:p-8 lg:p-10 rounded-xl shadow-lg `}
         >
            <TitleH2 title={title}/>

          {isOpen && 
            <ul className="flex flex-col text-white-green m-0 p-0 text-left font-normal mt-4 sm:p-5">
              {items.map((item, index) => (
                <li key={index}  className="py-1 p-2 flex border rounded-md cursor-pointer">
                  < OpenedBoxContent item={item}/> 
                </li>) 
            )}
            </ul>
          } 

          <Cross isOpen={isOpen}/>
        </div>
    ) }