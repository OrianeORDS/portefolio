import Label from "./Label";

export default function FormItem (props) {
      
    return (
    
    <div>
       <Label htmlFor={props.htmlFor} labeltext={props.labeltext} />    
        <input
            type= {props.type}
            name={props.name}
            id= {props.id}
            className="mt-1 block w-full box-border rounded-md bg-white text-dark-purple p-2 border border-medium-purple focus:border-intense-purple focus:ring-intense-purple"
            placeholder= {props.placeholder}
            onChange={(e) => props.onInputChange(e)}
        />
  </div>
)
}