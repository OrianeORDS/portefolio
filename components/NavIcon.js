export default function NavIcon(props) {

  // icones centrées, plusieurs tailles possibles, et au minimum un container de 40px de large cliquables pour faciliter l'accessibilité
  return (
      <a href={props.goTo} 
      download={props.download || undefined}   
      target={props.newTab ? "_blank" : undefined}
      rel={props.newTab ? "noopener noreferrer" : undefined} 
      className="w-10 flex justify-center items-center"
      aria-label={props.alterName} >
        <div className=" flex justify-center items-center w-6 h-6 sm:w-8 sm:h-8 fill-light-purple hover:fill-medium-purple  ">
          {props.icon}
      </div>
    
    </a>
  ) 
}