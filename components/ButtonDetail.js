
export default function SectionButton(props) { 
    
    const Container = props.item.anchor ? "a" : "div" 
    const ContainerProps = props.item.anchor ? 
    { href: props.item.anchor, className: "flex items-center gap-2  text-inherit hover:underline hover:text-medium-green ", }
     : { className: "flex items-center gap-2 text-white-green text-left " };


return (

    <Container {...ContainerProps}>
        {props.item.icon? <span className="fill-medium-purple items-center h-6 w-6 flex justify-center
        ">{props.item.icon}</span> : null}
        <span className={`text-sm text-justify self-center font-source font-light ${props.item.anchor ? "hover:text-base" : null} `} >{props.item.text}</span>
     </Container>

)

}

// className="flex items-center gap-2"
