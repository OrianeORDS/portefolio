import Image from "next/image";

export default function Welcome() {
  return (
    <div className= "flex items-center gap-5 py-24"> 
        <div className="w-48 h-48 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/portrait.png')" }}
        ></div>
        <div>
            <h1 className="text-4xl font-bold leading-tight">ORIANE <br /> ROYON <br /> DA SILVA</h1>
            <p className="mt-2 text-intense-purple-70 text-lg font-medium">
                DÉVELOPPEUSE FULL-STACK
            </p>
        </div>
    </div>

  )}