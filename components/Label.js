export default function Label(props) { 
    return (<label htmlFor={props.htmlFor} className="block text-sm font-medium font-source">
        {props.labeltext}
        </label>   )
}
