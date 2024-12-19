import Image from "next/image";

export default function NavIcon(props) {

  // icones centrées, plusieurs tailles possibles, et au minimum un container de 40px de large cliquables pour faciliter l'accessibilité
  return (
    <a href={props.goTo} className="w-10 flex justify-center items-center">
      <div className="w-6 h-6 sm:w-8 sm:h-8">
        <Image
            src={props.source}
            alt={props.alterName}
            layout="responsive"
            width={100}
            height={100}
        />
    </div>
  </a>
  ) 
}