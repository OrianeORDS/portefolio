import Image from "next/image";


export default function Welcome() {
  return (

    <div className= " flex justify-center items-center py-5 sm:px-20 w-full box-border" >

{/* Pour la taille mobile */}
      <div className= "relative sm:hidden bg-img-oriane bg-white-green bg-contain bg-center bg-no-repeat 
      w-[calc(100%-40px)] min-h-[400px]">
          <div className="absolute inset-0 bg-white-green opacity-60 z-0 w-full h-full" >
          </div>
          <div className="absolute flex-col bottom-6 w-full">
            <h1 className="flex justify-center text-5xl font-bold  font-oswald text-intense-purple bg-white-purple-25 ">
              ORIANE ROYON DA SILVA</h1>
            <p className="flex  justify-center  text-intense-green font-bold text-lg font-oswald bg-white-green-25">
              DÉVELOPPEUSE FULL-STACK
            </p>
          </div>
      </div>

{/* Au delà de la taille mobile (donc à partir de taile sm) */}
        <div className="hidden sm:flex justify-center 
                          h-[500px] w-full
                        bg-contain bg-center bg-no-repeat bg-img-oriane bg-white-green" >
        </div>
        <div className = "hidden sm:flex flex-col w-full "> 
          <h1 className="text-5xl text-left font-bold  font-oswald text-intense-purple bg-white-purple-25 ">
                  ORIANE <br /> ROYON <br /> DA SILVA
          </h1>
          <p className=" text-intense-green  text-left font-bold text-lg font-oswald bg-white-green-25">
            DÉVELOPPEUSE FULL-STACK
          </p>
        </div>


    </div>
   

  )
}