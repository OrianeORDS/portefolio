import { LocationIcon, MailIcon, TelIcon } from "./IconsSVG";

export default function ContactInfos () {

{/* Masquage de l'email et du téléphone avec javascript */}
  const phoneParts = ['06', '43', '43', '87', '42'];
  const fullNumber = phoneParts.join(' '); 
  const telLink = `tel:${phoneParts.join('')}`;

  const emailParts = ['oriane.', 'royon', '@gmail.com']; 
  const email = `${emailParts[0]}${emailParts[1]}${emailParts[2]}`; 


return (
    <div className="max-w-lg mx-auto py-5 w-full">
         <h2 className= "text-medium-purple text-left uppercase w-full boder-box m-0 py-5 font-oswald text-lg sm:text-xl ">
            Coordonnées </h2>

        <ul className="list-none py-5 px-0 m-0 gap-2">
            <li className="flex gap-2">
                <span className="flex justify-center items-center w-6 h-6 sm:w-8 sm:h-8 fill-medium-purple">
                {<MailIcon/>}
                </span> 
                <span  className=" text-light-green  hover:text-light-purple">{email} </span>
                <noscript className=" text-light-green" > <p> Veuillez activer JavaScript pour lire l'email </p></noscript>
            </li>

            <li className="flex gap-2">
                <span className="flex justify-center items-center w-6 h-6 sm:w-8 sm:h-8 fill-medium-purple">
                {<TelIcon/>}
                </span> 
                <a href={telLink} className="text-light-green no-underline hover:text-light-purple"> {fullNumber} </a>
                <noscript className=" text-light-green" > <p> Veuillez activer JavaScript pour lire le téléphone </p></noscript>
                
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