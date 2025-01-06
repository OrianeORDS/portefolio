
import React, { useState, useEffect}  from "react";
import Cross from "@/components/Cross" ; 
import TitleH2 from "./TitleH2";
import OpenedBoxContent from "./OpenedBoxContent";

export default function OpenableMesProjets({ items, title, hoveredProject, setHoveredProject, selectedProject, setSelectedProject, handleSelect, displayedProject, setDisplayedProject}) {

      const [isOpen, setIsOpen] = useState(false);
      function handleToggle(event){
        if (event.target.closest(".ClickableProjectsZone")) {
          return; 
        }
        else {setIsOpen(!isOpen);
          setSelectedProject(null); 
        } 
      }
  

      useEffect(() => {
        if (hoveredProject) {
          setDisplayedProject(hoveredProject); // Priorité au projet survolé
        } else if (selectedProject) {
          setDisplayedProject(selectedProject); // Sinon, le projet cliqué
        } else {
          setDisplayedProject(null); // Sinon aucun projet affiché
        }
      }, [hoveredProject, selectedProject, setDisplayedProject]);
  

    return (
        <div id="mesProjets" onClick={handleToggle} className= {`relative flex flex-col justify-start bg-dark-purple-90 hover:bg-intense-purple
        ${isOpen ? "w-full" : "w-2/3"} boder-box  sm:w-2/5 ${isOpen ? "h-auto" : "h-24"} box-border p-8 sm:p-8 lg:p-10 rounded-xl shadow-lg `}
         >
        <div className="flex flex-col gap-0"> 
            <TitleH2 title={title}/>
        </div>

          {isOpen && 
            <ul className="ClickableProjectsZone flex flex-col text-white-green m-0 p-0 text-left font-normal mt-4 sm:p-5">
              {items.map((item, index) => (
                <li 
                    key={index} 
                    aria-label={`Select project ${item.text}`}
                    onMouseEnter={() => setHoveredProject(item.id)} 
                    onMouseLeave={() => setHoveredProject(null)} 
                    onClick={(event) => handleSelect(item.id, event)} 
                    className={`py-1 p-2 py-5 flex border rounded-md cursor-pointer ${
                      displayedProject === item.id
                        ? "bg-medium-green-50 text-dark-purple font-bold"
                        : ""
                    }`}
                  >
                    < OpenedBoxContent item={item} pulseEffect="pulse-effect" displayedProject={displayedProject}/> 
                  </li>

                  )) }
            </ul>
            }



          <Cross isOpen={isOpen}/>
        </div>
    ) }