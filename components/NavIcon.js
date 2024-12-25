import Image from "next/image";

export default function NavIcon(props) {

  // icones centrées, plusieurs tailles possibles, et au minimum un container de 40px de large cliquables pour faciliter l'accessibilité
  return (
    <a href={props.goTo} className="w-10 flex justify-center items-center">
      <div className=" flex justify-center items-center w-6 h-6 sm:w-8 sm:h-8 fill-medium-purple  ">
        {props.icon}
    </div>
  </a>
  ) 
}