export default function OpenedBoxContent({item, ...rest}) { 
    
return (
    <div className="flex items-center gap-2">
        {item.icon? <span className="fill-medium-purple items-center h-6 w-6 flex justify-center
        ">{item.icon}</span> : null}
        <span className={"text-sm text-justify self-center font-source font-light"} >{item.text}</span>
     </div>

)
}