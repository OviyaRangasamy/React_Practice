import ChildC from "./childC";

const ChildB = ({name})=>{
    return(
        <>
        <p>
            I am ChildB {name || "NA"}
        </p>
        <ChildC name={name}></ChildC>
        </>
    )
}
export default ChildB;