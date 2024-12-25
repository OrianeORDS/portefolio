
export default function ContactForm() { 
return (

  <div className="max-w-lg mx-auto">
    <h2 className="text-lg mb-4 text-center"> Formulaire de Contact</h2>
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

)}