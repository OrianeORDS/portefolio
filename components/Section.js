import SectionButton from "@/components/SectionButton"; 
import {ListArrow, ReactIcon, PortefolioIcon, BadmintonIcon, ArtIcon} from "./IconsSVG";


export default function Section() {

        const sectionItems = {
                quiJeSuis : [ 
                        {text : "Développeuse Full-stack, j’aime être à l’interface entre les exigences du design, et les contraintes du traitement des données, pour offrir une expérience utilisateur fluide et visuellement agréable."},
                        {text: "Le métier de développeuse me passionne pour trois raisons principales :"},
                        {icon: <ListArrow/>, text:  "L’apprentissage constant qu’il implique,"},
                        {icon: <ListArrow/>, text:  "La créativité qu’offre le maniement des technologies,"}, 
                        {icon: <ListArrow/>, text:  "Le caractère concret et mesurable des réalisations,"},     
                        { text : "Enfin, j'apprécie les collaborations inhérentes au monde de la tech : j’aime travailler en équipe pour concevoir, développer et améliorer des applications web." },
                ],
                mesProjets : [
                        { icon: <ReactIcon/>, text: "React based app using a museum API" },
                        { icon: <PortefolioIcon />, text: "Portfolio with Next and Tailwind" },
                        { icon: <BadmintonIcon/>, text: "A blog about learning Node.js" },
                        { icon : <ArtIcon/>, text: "Portfolio with Next and Tailwind" },
                ],
        };

        
    return (
            <section className="flex justify-center items-center">
                <div className="flex flex-col items-center justify-between gap-10 w-full 
                sm:flex-row sm:p-24 sm:justify-around sm:gap-0">
                        <SectionButton title= "Qui je suis" items={sectionItems.quiJeSuis}/>
                        <SectionButton title= "Mes projets de code" items={sectionItems.mesProjets}/>
                </div>
            </section>
            )

    }