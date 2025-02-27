import {ReactIcon, PortefolioIcon, BadmintonIcon, ArtIcon} from "../components/IconsSVG"

const projectsData = [
  {
    id: 1,
    icon : <ArtIcon/>,
    title: "Site de l'exposition Bestiaire intime",
    description:
      "Site dédié à mon exposition Bestiaire intime, conçu pour offrir une expérience utilisateur agréable tout en mettant en valeur les œuvres et en reflétant l'esprit de l'exposition.",
    technologies: ["Canva", "Trello", "GitHub", "CSS", "HTML", "JavaScript"],
    duration: "3 mois",
    collaborators: [
      {
        name: "Sandesh Shrestha",
        role: "Développeur",
        link: "https://github.com/sandesnp",
      },
      {
        name: "Fabio Marques",
        role: "Développeur",
        link: "https://github.com/engfabiom",
      },
    ],
    role: [
      "Gestion de projet : suivi des livrables sur Trello et GitHub",
      "Design responsive de l’ensemble du site et retouche des images avec Canva",
      "Co-développement : squelette HTML et CSS, développement du menu de navigation, intégration des titres et du texte",
    ],
    learnings: [
      "Appréhension des enjeux du travail collaboratif en développement, notamment la compréhension partagée de la structuration du code.",
      "Adoption de la méthode BEM pour un nommage CSS cohérent, facilitant les revues de code et la collaboration.",
      "Manipulation d'éléments HTML à l'aide de CSS et de JavaScript via le DOM, afin d'intégrer une barre de navigation transparente et lumineuse, en harmonie avec l'esprit de l'exposition." ,
    ],
    links: {
      github: "https://github.com/OrianeORDS/intimatebestiary",
      website: "https://www.expo-bestiaireintime.fr/",
    },
    image : { 
      source: "/images/projet-bestiaireintime.png", 
      alt : "Capture du site internet",
    }
  },


    {
      id: 2,
      title: "MextExp : exploitation de l'API du Met Museum",
      icon: <ReactIcon/>,
      description: "Projet collectif donnant à voir une sélection d’œuvres du Met Museum, grâce à l'exploitation de son API.",
      technologies: ["API-REST", "GitHub", "React", "React-DOM, Redux"],
      status: "En cours de développement",
      collab: [
        { name: "Sandesh Shrestha", link: "https://github.com/sandesnp", role: "Collaborateur" },
        { name: "Fabio Marques", link: "https://github.com/engfabiom", role: "Collaborateur" },
      ],
      role: [
        "Intégration de la barre de recherche à partir d’une maquette",
        "Implémentation d’une échelle de couleurs pour faciliter la transition entre les modes clairs et sombres",
        "Développement des fonctionnalités de requêtes complexes de l'API",
        "Stockage des données requêtées et gestion des états via Redux",
      ],
      learnings: [
        "Approfondissement de la gestion des versions avec GitHub (rebase, squash)",
        "Compréhension des flux de données dans l’utilisation d’API REST",
        "Mise en pratique de la gestion des états de l'application via Redux "
      ],
      links: {
        github: "https://github.com/engfabiom/MetExp",
      },
      image: {
        source: "/images/projet-galerie.png", 
        alt : "Capture du projet Figma",
      }
    },

    {
      id: 3, 
      title: "Blog à propos de node.js ",
      icon: <BadmintonIcon/>, 
      description:
        "Blog permettant à un utilisateur de se connecter en répondant à une question secrète, puis de créer ou d’éditer des articles.",
      technologies: ["Node.js", "EJS", "Express.js", "Body Parser"],
      duration: "1 semaine",
      role: [
        "Développement des routes backend avec Express.js pour gérer la création et l’édition d’articles",
        "Templating dynamique des pages avec EJS",
        "Mise en place de l’authentification via une question secrète",
      ],
      learnings: [
        "Acquisition des bases de Node.js et Express.js pour la gestion des requêtes HTTP et des routes",
        "Gestion de projet backend de bout en bout : de la logique métier à l’intégration front-end",
      ],
      links: {
        github: "https://github.com/OrianeORDS/badblog",
        website: "https://badblog.onrender.com/",
      },
      image : {
        source : "/images/projet-badblog.png", 
        alt : "feuilles de design the l'application"
      }
    },
    {
      id: 4,
      title: "Portefolio avec Next.js et Tailwind-css",
      icon: <PortefolioIcon />,
      description: "Portfolio interactif de mes projets de développement front et back, avec Next.js",
      technologies: ["Figma", "React", "Next.js", "Tailwind CSS", "SendGrid", "anime.js"],
      duration: "2 semaines",
      role: [
        "Conception d’un design mobile-first responsive avec Figma",
        "Création des composants React dynamiques et interactifs avec TailwindCSS et Anime.js",
        "Mise en place des routes back-end avec Next.js", 
        "Utilisation de l'API de SendGrid pour le formulaire de contact",
      ],
      learnings: [
        "Découverte du design 'développeur friendly' grâce aux Flexboxs",
        "Approfondissement de l'usage des hooks (useState, useRef, useEffect ) dans React",
      ],
      links: {
        github: "https://github.com/OrianeORDS/portefolio",
        website: "https://portefolio-topaz-eight.vercel.app/",
        figma: "https://www.figma.com/design/pIf33bgQVmbeFaaHlsfN9b/ORDS-WEB-DEV?node-id=62-497&t=NjTOkedrBSd8Lz27-0",
      },
      image: {
        source: "/images/projet-portefolio.png", 
        alt : "Capture du projet Figma",
      }
    },

  ];
  
  export default projectsData;