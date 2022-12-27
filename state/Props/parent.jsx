import { useState } from "react";
import ChildA from "./childA";

const ParentComponent = ()=>{
    const[name,setName] = useState("")

    return(
        <>
        <input type="text"  
        value = {name}
        onChange = {(e)=>setName(e.target.value)}
        />
        <p>I am parent Component</p>
        <ChildA name={name}></ChildA>
        </>
    )
}

export default ParentComponent;