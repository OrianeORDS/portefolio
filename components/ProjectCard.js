
import Image from "next/image" ; 
export default function ProjectCard ({project} ) {

    return( 
        <div className="w-[350px] p-3 gap-3 box-border
        bg-medium-green-50 hover:bg-medium-green rounded-xl shadow-md border border-intense-green 
        flex flex-col ">
            <div className="self-stretch h-full p-3 gap-3 flex flex-col justify-start items-start ">
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
                    <p> <a href={project.links.github}> Consulter le projet Github. </a></p> 
                    { project.links.website && <p>   <a href={project.links.website}> Visiter le site internet. </a> </p>} 
                    { project.links.figma && <p>   <a href={project.links.figma}> Voir le design Figma. </a> </p>} 
                </div>
            </div>
            <div className="aspect-square overflow-hidden ">
             <Image className="self-stretch rounded-xl object-cover" src={project.image.source} alt={project.image.alt} layout="responsive" width={16} height={9} />
            </div>
        </div>

    )
}
