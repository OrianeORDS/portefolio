import { LastUpdate } from './LastUpdate';

export default function Footer() { 

    return(
        <footer className="bg-dark-purple text-medium-purple p-6 text-center text-sm">
        <p>© ORDS 26/12/2024 - last update : {new Date(LastUpdate).toLocaleDateString()}</p>
        </footer>


) }