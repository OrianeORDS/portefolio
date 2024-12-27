export default function ProjectCard (props) {

    return( 
        <div className="w-[350px] h-[500px] p-3  gap-3 bg-medium-green-50 rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-intense-green flex flex-col justify-start items-start">
            <div className="self-stretch h-full p-3 gap-3 flex flex-col justify-start items-start ">
                <div className="text-dark-green text-xs font-source">{props.title} props.title </div>
                <div className="text-dark-green text-xs font-source"> {props.description} Description : Portefolio de mes projets de développement front et back avec React, Next et Tailwind. <br/><br/>Temps de réalisation : 1 semaine, seule. <br/><br/>Apprentissages : La conception de ce portefolio a été l’occasion de m’approprier un nouvel outil de maquettage : Figma. Je découvre l’idée d’un “design développeur friendly”. Je profite également de sa réalisation pour approfondir React en intégrant les frameworks Next.js et Tailwind.   <br/><br/></div>
            </div>
            <img className="self-stretch h-96" src={props.image} alt={props.alt} />
        </div>
    )
}