import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white-green min-h-screen text-dark-purple font-sans">
      {/* Section principale */}
      <header className="relative p-8 flex flex-col items-center text-center">
        {/* Illustration */}
        <div className="w-48 h-48 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/illustration.png')" }}
        ></div>

        {/* Titre et sous-titre */}
        <h1 className="text-4xl font-bold mt-6 leading-snug">
          ORIANE <br /> ROYON <br /> DA SILVA
        </h1>
        <p className="mt-2 text-intense-purple text-lg font-medium">
          CRÉATIVE ET DÉTERMINÉE : <br />
          DÉVELOPPEUSE FRONT-END EN DEVENIR
        </p>

        {/* Boutons */}
        <div className="flex gap-8 mt-10">
          <button className="bg-dark-purple text-white py-4 px-8 rounded-lg shadow-lg hover:bg-intense-purple">
            QUI SUIS-JE ?
          </button>
          <button className="bg-dark-purple text-white py-4 px-8 rounded-lg shadow-lg hover:bg-intense-purple">
            MES PROJETS DE CODE
          </button>
        </div>
      </header>

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
