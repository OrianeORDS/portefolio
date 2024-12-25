import { LocationIcon, MailIcon, TelIcon } from "./IconsSVG";

export default function ContactInfos () {
return (
    <div className="max-w-lg mx-auto py-8">
         <h2 className= "text-medium-purple text-left uppercase w-full boder-box m-0 font-oswald text-lg sm:text-xl ">
            Coordonnées </h2>

        <ul className="list-none py-5 px-0 m-0 gap-2">
            <li className="flex gap-2">
                <span className="flex justify-center items-center w-6 h-6 sm:w-8 sm:h-8 fill-medium-purple">
                {<MailIcon/>}
                </span> 
                <span>orianeroyon.arobas@gmail.com
                </span>
            </li>

            <li className="flex gap-2">
                <span className="flex justify-center items-center w-6 h-6 sm:w-8 sm:h-8 fill-medium-purple">
                {<TelIcon/>}
                </span> 
                <span>06 43 43 quatre-vingt-sept 42
                </span>
            </li>

            <li className="flex gap-2">
                <span className="flex justify-center items-center w-6 h-6 sm:w-8 sm:h-8 fill-medium-purple">
                {<LocationIcon/>}
                </span> 
                <span>Saint-Denis, France
                </span>
            </li>

            <li className="flex gap-2 pl-8">
                <a href="https://www.linkedin.com/in/oriane-royon-da-silva-0146106b/" className="underline text-medium-purple  hover:text-light-purple">
                Profil LinkedIn
                </a>
                |
                <a href="https://github.com/OrianeORDS/" className="underline ml-2 text-medium-purple hover:text-light-purple">
                Page GitHub
                </a>
            </li>
        </ul>
    </div>


)}