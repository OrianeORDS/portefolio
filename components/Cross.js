
  
export default function CrossButton(props) {

  return (
    <div
      className={` w-4 h-4 hover:w-5 hover:h-5 cursor-pointer absolute top-3 right-3
        transition-transform duration-300 ease-in-out
      ${props.isOpen ? "rotate-45" : "rotate-0"}
      `}
    >
      <span
        className="absolute top-2 left-0 w-full h-0.5 bg-white-green "
      ></span>
      <span
        className="absolute top-2 left-0 w-full h-0.5 bg-white-green rotate-90"
      ></span>
    </div>
  );
};