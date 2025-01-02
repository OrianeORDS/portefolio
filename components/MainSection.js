"use client"; 
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { quiJeSuis, mesProjets }from "@/data/openableBoxData";
import projectsData from "@/data/projectsData";
import OpenableQuiJeSuis from "./OpenableQuiJeSuis";
import OpenableMesProjets from "./OpenableMesProjets";



export default function MainSection() {

        const [hoveredProject, setHoveredProject] = useState(null); 
        const [selectedProject, setSelectedProject] = useState(null); 
        const [displayedProject, setDisplayedProject] = useState(null); 

        function handleSelect(itemId, event) { 
                event.stopPropagation(); 
                setSelectedProject(itemId)
        }


        const toDisplay = (mesProjets, displayedProject) => {
        return projectsData.find(
          (project) => project.id === displayedProject) || null
       ; }

        const projectToDisplay = toDisplay(mesProjets, displayedProject);


    return (
            <section className="flex flex-col py-10 mb-10 justify-center items-center">
                <div className="flex flex-col justify-between items-center gap-10 w-full box-border p-3 
                sm:flex-row sm:p-16 xl:p-24 sm:justify-around sm:gap-5">
                        <OpenableQuiJeSuis items={quiJeSuis} title={quiJeSuis[0].title} />
                        <OpenableMesProjets items={mesProjets.projets} title={mesProjets.title}
                        hoveredProject={hoveredProject} setHoveredProject={setHoveredProject}
                        selectedProject={selectedProject} setSelectedProject={setSelectedProject}  handleSelect={handleSelect}
                        displayedProject={displayedProject} setDisplayedProject = {setDisplayedProject}
                        />
                </div>
                <div className="hidden sm:flex flex-col items-stretch justify-between gap-10 w-full box-border p-3 
                sm:flex-row sm:p-16 xl:p-24 sm:justify-around sm:gap-5"> 
                        {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} /> ))}
                </div>


                <div className="sm:hidden flex flex-col items-stretch justify-between gap-10 w-full box-border p-3 
                sm:flex-row sm:p-16 xl:p-24 sm:justify-around sm:gap-5"> 

                    {projectToDisplay ? ( <ProjectCard key={projectToDisplay.id} project={projectToDisplay} />) : null }
      
                </div>




            </section>
            )

    }