import {ListArrowIcon, ReactIcon, PortefolioIcon, BadmintonIcon, ArtIcon} from "./IconsSVG";
import ProjectCard from "./ProjectCard";
import OpenableBox from "@/components/OpenableBox";


export default function MainSection() {

        const sectionItems = {
                quiJeSuis : [ 
                        {text : "Développeuse Full-stack, j’aime être à l’interface entre les exigences du design, et les contraintes du traitement des données, pour offrir une expérience utilisateur fluide et visuellement agréable."},
                        {text: "Le métier de développeuse me passionne pour trois raisons principales :"},
                        {icon: <ListArrowIcon/>, text:  "L’apprentissage constant qu’il présuppose,"},
                        {icon: <ListArrowIcon/>, text:  "La créativité qu’offre le maniement des outils,"}, 
                        {icon: <ListArrowIcon/>, text:  "Le caractère concret et mesurable des projets,"},     
                        {text : "Enfin, j'apprécie les collaborations inhérentes au monde de la tech : j’aime travailler en équipe pour concevoir, développer et améliorer des applications web." },
                ],
                mesProjets : [
                        { anchor:"#" , icon: <ReactIcon/>, text: "React based app using a museum API" },
                        { anchor:"#", icon: <PortefolioIcon />, text: "Portfolio with Next and Tailwind" },
                        { anchor:"#", icon: <BadmintonIcon/>, text: "A blog about learning Node.js" },
                        { anchor:"#", icon : <ArtIcon/>, text: "Portfolio with Next and Tailwind" },
                ],
        };

        
    return (
            <section className="flex flex-col py-10 mb-10 justify-center items-center">
                <div className="flex flex-col items-center justify-between gap-10 w-full box-border p-3 
                sm:flex-row sm:p-16 xl:p-24 sm:justify-around sm:gap-5">
                        <OpenableBox title= "Qui je suis" items={sectionItems.quiJeSuis}/>
                        <OpenableBox title= "Mes projets de code" items={sectionItems.mesProjets}/>
                </div>
                <div> 
                        <ProjectCard/>
                </div>
            </section>
            )

    }