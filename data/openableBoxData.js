import projectsData from "./projectsData"
import {ListArrowIcon} from "../components/IconsSVG"

 

const quiJeSuis = [
    {title: "Qui je suis"},
    {text : "Développeuse Full-stack, j’aime être à l’interface entre les exigences du design, et les contraintes du traitement des données, pour offrir une expérience utilisateur fluide et visuellement agréable."},
    {text: "Le métier de développeuse me passionne pour trois raisons principales :"},
    {icon: <ListArrowIcon/>, text:  "L’apprentissage constant qu’il présuppose,"},
    {icon: <ListArrowIcon/>, text:  "La créativité qu’offre le maniement des outils,"}, 
    {icon: <ListArrowIcon/>, text:  "Le caractère concret et mesurable des projets,"},     
    {text : "Enfin, j'apprécie les collaborations inhérentes au monde de la tech : j’aime travailler en équipe pour concevoir, développer et améliorer des applications web." },
    ]


const mesProjets = {
    title: "Mes Projets de Code", // Titre pour la section
    projets: projectsData.map((project) => ({
        id: project.id,
        icon: project.icon,
        text: project.title,
    })),
    };


export {mesProjets, quiJeSuis}