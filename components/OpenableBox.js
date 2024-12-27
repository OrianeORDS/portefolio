
import React, { useState} from "react";
import Cross from "@/components/Cross" ; 
import TitleH2 from "./TitleH2";
import OpenedBoxContent from "@/components/DraftAnchorTag";
import { ArrowDownIcon } from "./IconsSVG";
import {quiJeSuis, mesProjets} from "@/data/openableBoxData";


export default function OpenableBox(props) {
    const [isOpen, setIsOpen] = useState(false);
    function handleToggle(){setIsOpen(!isOpen);}

      console.log("data");
      console.log(quiJeSuis);

    return (
        <div onClick={handleToggle} className= {`relative flex flex-col justify-start bg-dark-purple-90 hover:bg-intense-purple
        ${isOpen ? "w-full" : "w-2/3"} boder-box  sm:w-2/5 ${isOpen ? "h-auto" : "h-24"} box-border p-8 sm:p-8 lg:p-10 rounded-xl shadow-lg `}
         >
          <div className="flex flex-col gap-0"> 
            <TitleH2 title={props.title}/>
            

        {/*pour "mes projets" => Ajout d'un sous-titre avec des fléches */} 
            {isOpen && props.title == mesProjets.title && 
              <div className="pt-10 sm:pt-14 sm:p-5 pb-0 inline-block"> 
                <p className="font-semibold text-sm p-0 m-0 inline text-medium-green-50 hover:text-medium-green">Selectionnez un projet ci-dessous</p>
                <div className= "flex gap-5 w-full justify-left"> 
                {Array.from({ length: 5 }).map((_, index) => (
                  <span  key={index} className="fill-medium-purple hover:fill-light-green items-center h-6 w-6 flex justify-center" >
                    <ArrowDownIcon />
                  </span>
                ))}

                </div>
              </div> }
          </div>

        {/* 'QUi suis-je" */} 
          {isOpen && props.title == quiJeSuis.title && 
            <ul className="flex flex-col text-white-green m-0 p-0 text-left font-normal mt-4 sm:p-5">
            {props.items.map((item, index) => (
              <li key={index}  className="py-1 p-2 flex border rounded-md cursor-pointer">
              < OpenedBoxContent item={item}/> 
              </li>) 
            )}
            </ul>
          } 

        {/*Mes projets */}
          {isOpen && props.title == mesProjets.title && (
            <ul className="flex flex-col text-white-green m-0 p-0 text-left font-normal mt-4 sm:p-5">
              {props.items.map((item, index) => (
                <li 
                    aria-label={`Select project ${item.text}`}
                    onMouseEnter={() => props.setHoveredProject(item.id)} 
                    onMouseLeave={() => props.setHoveredProject(null)} 
                    onClick={() => props.setSelectedProject(item.id)} 
                    key={item.id} 
                    className={`py-1 p-2 flex border rounded-md cursor-pointer ${
                      props.selectedProject === item.id
                        ? "bg-medium-green text-dark-purple"
                        : ""
                    }`}
                  >
                    < OpenedBoxContent item={item}/> 
                  </li>

                  )) }
            </ul>

          )}

          <Cross isOpen={isOpen}/>
        </div>
    ) }