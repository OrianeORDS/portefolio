import PulseEffect from "./PulseEffect";

export default function OpenedBoxContent({item, pulseEffect, displayedProject }) { 
    
return (
    <div className="flex gap-2 rounded-md relative pulse-effect-parent ">
        {pulseEffect && <PulseEffect displayedProject={displayedProject}/> }
        {item.icon? <span className="fill-medium-purple items-center h-6 w-6 flex justify-center
        ">{item.icon}
        </span> : null}
        <span className={"text-sm text-justify self-center font-source font-light"} >{item.text}</span>
     </div>

)
}