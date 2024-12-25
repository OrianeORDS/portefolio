import TitleH2 from "./TitleH2";

export default function ContactInfos () {
return (
    <div className="max-w-lg mx-auto">
        <TitleH2 title="Coordonnées"/>
        <ul>
            <li>orianeroyon.arobas@gmail.com</li>
            <li>06 44 53 87 21</li>
            <li>Saint-Denis, France</li>
            <li>
                <a href="https://linkedin.com" className="underline hover:text-light-purple">
                Profil LinkedIn
                </a>
                |
                <a href="https://github.com" className="underline ml-2 hover:text-light-purple">
                Page GitHub
                </a>
            </li>
        </ul>
    </div>


)}