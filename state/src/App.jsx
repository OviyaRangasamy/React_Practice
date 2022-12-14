import { Component } from "react";

class Forms extends Component {
  state = {
    c_name: "",
    mobile_no: "",
    food: "",
    orderDate: "",
    price: "",
    serve:"",
    items: [],
    feedback:"",
  }
  render(){
    return(
      <>
      <div>
        <label htmlFor="c_name">Name: </label>
        <input 
        type="text" 
        name="c_name" 
        id="c_name" 
        value={this.state.c_name}
        onChange={(e)=>{
          console.log(e.target.value)
          this.setState({c_name:e.target.value})
        }}
        />
      </div>
      <div>
        <label htmlFor="mobile_no">Mobile No: </label>
        <input 
        type="text" 
        name="mobile_no" 
        id="mobile_no" 
        value={this.state.mobile_no}
        onChange={(e)=>{
          console.log(e.target.value)
          this.setState({mobile_no:e.target.value})
        }}
        />
      </div>
      <div>
        <label htmlFor="orderDate">Order Date: </label>
        <input 
        type="Date" 
        name="orderDate" 
        id="orderDate" 
        value={this.state.orderDate}
        onChange={(e)=>{
          console.log(e.target.value)
          this.setState({orderDate:e.target.value})
        }}
        />
      </div>
      <div>
        Select Cuisine
     
      <div>
        <input 
        type="radio" 
        name="food" 
        id="chinese" 
        value={"Chinese"}
        onChange={(e)=>{
          console.log(e.target.value)
          this.setState({food:e.target.value})
        }}
        />
        <label htmlFor="food">Chinese</label>
      </div>
      <div>
        <input 
        type="radio" 
        name="food" 
        id="indian" 
        value={"Indian"}
        onChange={(e)=>{
          console.log(e.target.value)
          this.setState({food:e.target.value})
        }}
        />
        <label htmlFor="food">Indian</label>
      </div>
      </div>

      <div>
        <label htmlFor="price">Price: </label>
        <input 
        type="range" 
        name="price" 
        id="price" 
        min="100"
        max="500"
        value={this.state.price}
        onChange={(e)=>{
          console.log(e.target.value)
          this.setState({price:e.target.value})
        }}
        />
      </div>

      <div>
        Select serving type:
        <select  name="serve" onChange={(e)=>{
          console.log(e.target.value)
          this.setState({serve:e.target.value})
        }}>
          <option value="Dine in">Dine In</option>
          <option value="Parcel">Parcel</option>
        </select>
      </div>

      <div>
        Select food:
      <div>
        <input 
        type="checkbox" 
        name="items" 
        id="Noodles" 
        value={"Noodles"}
        onChange={(e)=>{
          console.log(e.target.value)
          this.setState({items:e.target.value})
        }}
        />
        <label htmlFor="items">Noodles</label>
      </div>
      <div>
        <input 
        type="checkbox" 
        name="items" 
        id="Meals" 
        value={"Meals"}
        onChange={(e)=>{
          console.log(e.target.value)
          this.setState({items:e.target.value})
        }}
        />
        <label htmlFor="food">Meals</label>
      </div>
      </div>
<div>
  Please Provide your Feedback:
</div>
      <textarea placeholder="Type here" onChange={(e)=>{
        console.log(e.target.value)
        this.setState({feedback:e.target.value})

      }}></textarea>

<h5>Name: {this.state.c_name}</h5>
<h5>Mobile No: {this.state.mobile_no}</h5>
<h5>Order Date: {this.state.orderDate}</h5>
<h5>Cuisine: {this.state.food}</h5>
<h5>Serve type: {this.state.serve}</h5>
<h5>Price: {this.state.price}</h5>
<h5>Food: {this.state.items}</h5>
<h5>Feedback: {this.state.feedback}</h5>

      
      </>
    )
  }
}

export default Forms;