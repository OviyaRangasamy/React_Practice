import { Component } from "react";

class Opt_Forms extends Component {
    state = {
        c_name: "",
        mobile_no: "",
        food: "",
        orderDate: "",
        price: "",
        serve: "",
        items: [],
        feedback: "",
    }
    // handling input function with k,v parameters
    _handleinputChangeV1 = (key, value) => {
        this.setState({
            [key]: value
        })
    }
    // handling input function with e as default parameter and the key and values are dynamically assigned
    _handleinputChange = (e) => {
        const { name, value } = e.target
        if (!name) {
            return;
        }
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <>
                <div>
                    <label htmlFor="c_name">Name: </label>
                    <input
                        type="text"
                        name="c_name"
                        id="c_name"
                        value={this.state.c_name}
                        onChange={(e) => {
                            console.log(e.target.value)
                            this._handleinputChangeV1("c_name", e.target.value)
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
                        onChange={this._handleinputChange}
                    />
                </div>
                <div>
                    <label htmlFor="orderDate">Order Date: </label>
                    <input
                        type="Date"
                        name="orderDate"
                        id="orderDate"
                        value={this.state.orderDate}
                        onChange={this._handleinputChange}
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
                            onChange={this._handleinputChange}
                        />
                        <label htmlFor="food">Chinese</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="food"
                            id="indian"
                            value={"Indian"}
                            onChange={this._handleinputChange}
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
                        onChange={this._handleinputChange}
                    />
                </div>

                <div>
                    Select serving type:
                    <select name="serve" onChange={this._handleinputChange}>
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
                            onChange={this._handleinputChange}
                        />
                        <label htmlFor="items">Noodles</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="items"
                            id="Meals"
                            value={"Meals"}
                            onChange={this._handleinputChange}
                        />
                        <label htmlFor="food">Meals</label>
                    </div>
                </div>
                <div>
                    Please Provide your Feedback:
                </div>
                <textarea placeholder="Type here" name="feedback" onChange={this._handleinputChange}></textarea>

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
export default Opt_Forms;