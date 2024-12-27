import { lastUpdate } from './LastUpdate';

export default function Footer() { 

    return(
        <footer className="bg-dark-purple-90 text-medium-purple py-5 px-10 flex justify-end ">
        <p className="m-0">© ORDS 26/12/2024 - Last update : {new Date(lastUpdate).toLocaleDateString()}</p>
        </footer>


) }