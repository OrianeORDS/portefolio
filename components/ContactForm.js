import FormInput from "./FormInput";
import Label from "./Label";
import TitleH2 from "./TitleH2";

export default function ContactForm() { 
return (

  <div className="max-w-lg mx-auto">
    <h2 className= "text-medium-purple text-left uppercase w-full boder-box m-0 font-oswald text-lg sm:text-xl ">
    Formulaire de contact </h2>
    <form className="flex flex-col py-5 gap-4 font-source">
      <FormInput
        labeltext="Votre email :"
        htmlFor="email"
        type="email"
        id="email"
        placeholder="Entrez votre email"
        />

      <FormInput
        labeltext="Votre nom"
        htmlFor="nom"
        type="text"
        id="name"
        placeholder="Entrez votre nom :"
        />
      
      <div> 
        <Label labeltext="Votre message :"  htmlFor="message" />
        <textarea
          id="message"
          rows="4"
          className="mt-1 block w-full box-border rounded-md bg-white text-dark-purple p-2 border border-medium-purple focus:border-intense-purple focus:ring-intense-purple"
          placeholder="Tapez votre message ici..."
        ></textarea>

      </div>
        

      <button
        type="submit"
        className="bg-intense-green text-white py-2 px-4 rounded-md shadow-md hover:bg-intense-green focus:ring-2 focus:ring-intense-green focus:outline-none"
      >
        Envoyer
      </button>
    </form>
  </div>

)}