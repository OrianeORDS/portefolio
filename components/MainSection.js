"use client"; 

import ProjectCard from "./ProjectCard";
import OpenableBoxes from "./OpenableBoxes";
import { useState } from "react";






export default function MainSection() {

        const [projectToDisplay, setProjectToDisplay] = useState(null); 


    return (
            <section className="flex flex-col py-8 mb-10 justify-center items-center">

                <OpenableBoxes setProjectToDisplay={setProjectToDisplay}/>


                <div id="projetPrincipal"  className="flex flex-col items-stretch justify-between gap-10 w-full box-border p-3 
                sm:flex-row sm:px-16 xl:p-24 sm:justify-around sm:gap-5"> 

                    {projectToDisplay ? ( <ProjectCard key={projectToDisplay.id} project={projectToDisplay} />) : null }
      
                </div>


{/*
                <div className="hidden sm:flex flex-col items-stretch justify-between gap-10 w-full box-border p-3 
                sm:flex-row sm:p-16 xl:p-24 sm:justify-around sm:gap-5"> 
                        {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} /> ))}
                </div>

*/}



            </section>
            )

    }