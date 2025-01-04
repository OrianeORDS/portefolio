"use client"; 

import OpenableMesProjets from "./OpenableMesProjets";
import OpenableQuiJeSuis from "./OpenableQuiJeSuis";
import { quiJeSuis, mesProjets }from "@/data/openableBoxData";
import { useEffect, useState } from "react";
import projectsData from "@/data/projectsData";

/*deux boites ouvrables (openableBoxes) ont la même apparence, mais le comportement du contenu diffère :
    chacune des deux boites à donc son propre component  : 
         - openableQuiJeSuis
         - openableMesProjets                  
*/


export default function OpenableBoxes({setProjectToDisplay}) { 


            const [hoveredProject, setHoveredProject] = useState(null); 
            const [selectedProject, setSelectedProject] = useState(null); 
            const [displayedProject, setDisplayedProject] = useState(null); 
    
            function handleSelect(itemId, event) { 
                    event.stopPropagation(); 
                    setSelectedProject(itemId)
            }
    
    
            const toDisplay = (displayedProject) => {
            return projectsData.find(
              (project) => project.id === displayedProject) || null
           ; }
    
           useEffect(() => {
            const project = toDisplay(displayedProject);
            setProjectToDisplay(project); 
          }, [displayedProject, setProjectToDisplay]);



    return (

                <div className="flex flex-col justify-between items-center gap-10 w-full box-border p-3 
                sm:flex-row sm:p-16 xl:p-24 sm:justify-around sm:gap-5">
                        <OpenableQuiJeSuis items={quiJeSuis} title={quiJeSuis[0].title} />
                        <OpenableMesProjets items={mesProjets.projets} title={mesProjets.title}
                        hoveredProject={hoveredProject} setHoveredProject={setHoveredProject}
                        selectedProject={selectedProject} setSelectedProject={setSelectedProject}  handleSelect={handleSelect}
                        displayedProject={displayedProject} setDisplayedProject = {setDisplayedProject}
                        />
                </div>
)


}