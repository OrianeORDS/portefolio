
import Image from "next/image" ; 
export default function ProjectCard ({project} ) {
    

    return( 
        <div className="w-full sm:w-[1000px] p-3 gap-3 box-border
        bg-medium-green-50 hover:bg-medium-green rounded-xl shadow-md border border-intense-green 
        flex flex-col sm:flex-row">
            <div className="self-stretch h-full sm:w-1/2 p-3 sm-p0 m:p-10 gap-3 flex flex-col justify-start items-start ">
                <h3 className="text-dark-green text-md font-source">{project.title} </h3>
                <div className="text-dark-green text-xs font-source"> 
                    <p> <span className="font-bold" >Description : </span> {project.description} </p> 
                    { project.status ? 
                        <p> <span className="font-bold">Statut :</span> {project.status} </p> 
                        : <p> <span className="font-bold">Temps de réalisation :</span> {project.duration}</p>
                    }
                    
                   <p> <span className="font-bold">Collaboration : </span> {!project.collab && <span>_</span>} </p>
                    { project.collab && <ul> 
                       { project.collab.map((collab, index) => (
                            <li key={index}>
                                <a href={collab.link}>{collab.name}</a> : ({collab.role})
                            </li>)) 
                        } 
                    </ul> }
                    <p> <span className="font-bold">Technologies</span> :  {project.technologies.join(", ")} </p>
                    <p> <span className="font-bold">Mon rôle :</span> </p>
                    <ul> 
                        {project.role.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                    <p> <span className="font-bold">Apprentissages : </span>  </p>
                    <ul>
                        {project.learnings.map((learning, index) => (
                            <li key={index}>{learning}</li>
                        ))}
                    </ul> 
                    <p className="flex gap-5"> 
                        <span className="font-bold" > Liens : </span> 
                        <span> <a href={project.links.github}  target="_blank" rel="noopener noreferrer"> Projet Github </a></span>
                        { project.links.website && <span className ="flex gap-5 "> <a href={project.links.website}  target="_blank" rel="noopener noreferrer" > Site Web </a> </span>} 
                        { project.links.figma && <span> <a href={project.links.figma } target="_blank" rel="noopener noreferrer"> Design Figma. </a> </span>} 
                    </p>
         
                </div>
            </div>
            <div className="relative aspect-square overflow-hidden sm:w-1/2 ">
             <Image className=" object-cover object-right-bottom rounded-xl" src={project.image.source} alt={project.image.alt} fill  />
            </div>
        </div>

    )
}
