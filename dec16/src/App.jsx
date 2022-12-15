import {useState} from "react";

// const Form = () => {
//   const [profile, setProfile] = useState({
//     name: "Oviya",
//     city: "Coimbatore",
    
//   });

 

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

 

//     setProfile((prevState) => {
//       return {
//         ...prevState,
//         [name]: value,
//       };
//     });
//   };

 

//   return (
// <>
// <div>
// <p>Name: {profile.name}</p>
// <input name="name" value={profile.name} onChange={handleInputChange} />
// </div>
// <div>
// <p>City: {profile.city}</p>
// <input name="city" value={profile.city} onChange={handleInputChange} />
// </div>
// </>
//   );
// };

const Form_detail = ()=>{
  const [detail,setDetail]=useState({
    name:"Oviya",
    city:"Coimbatore"

  });

  const change_value = (e)=>{
    const{name,value} = e.target;

    setDetail((prevState)=>{
      return{
        ...prevState,
        [name]:value
    };
    });
  };
return(
  <>
  <div>
    <label>Name:{detail.name}</label>
    <div> <input type="text" 
    name="name"
    value={detail.name}
    onChange = {change_value}
    /></div>
   
  </div>
  <div>
    <label>city:{detail.city}</label>
    <div> <input type="text" 
    name="city"
    value={detail.city}
    onChange = {change_value}
    /></div>
   
  </div>
  </>
)
}
export default Form_detail;