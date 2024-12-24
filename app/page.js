import Image from "next/image";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome"

// bg-dark-green min-h-screen text-white-purple font-oswald 

export default function Home() {
  return (
    <div className=" w-full max-w-[1400px] bg-white-green">       {/* container principal y compris footer et navbar */}
      <Navbar/>
      <Welcome/>

      <section>
        {/* Boutons */}
        <div className="flex gap-8 mt-10">
          <button className="bg-dark-purple text-white py-4 px-8 rounded-lg shadow-lg hover:bg-intense-purple">
            QUI SUIS-JE ?
          </button>
          <button className="bg-dark-purple text-white py-4 px-8 rounded-lg shadow-lg hover:bg-intense-purple">
            MES PROJETS DE CODE
          </button>
        </div>
        </section>


      {/* Formulaire de contact */}
      <section className="mt-12 bg-dark-purple text-white p-6">
        <div className="max-w-lg mx-auto">
          <h2 className="text-lg mb-4 text-center">Formulaire de Contact</h2>
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Votre email :
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-white text-dark-purple p-2 border border-medium-purple focus:border-intense-purple focus:ring-intense-purple"
                placeholder="Entrez votre email"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Votre nom :
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-white text-dark-purple p-2 border border-medium-purple focus:border-intense-purple focus:ring-intense-purple"
                placeholder="Entrez votre nom"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Votre message :
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full rounded-md bg-white text-dark-purple p-2 border border-medium-purple focus:border-intense-purple focus:ring-intense-purple"
                placeholder="Tapez votre message ici..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-medium-green text-white py-2 px-4 rounded-md shadow-md hover:bg-intense-green focus:ring-2 focus:ring-intense-green focus:outline-none"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* Section Coordonnées */}
      <footer className="bg-dark-purple text-white p-6 text-center text-sm">
        <div className="max-w-lg mx-auto">
          <h3 className="mb-2">Coordonnées</h3>
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
      </footer>
      </div>
  )
}
