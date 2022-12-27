import ChildB from "./childB"

const ChildA = ({name = "NA"})=>{
    return(
        <>
        <p>I am ChildA {name || "NA"}</p>
       <ChildB name={name}></ChildB>
        </>
    )
}
export default ChildA