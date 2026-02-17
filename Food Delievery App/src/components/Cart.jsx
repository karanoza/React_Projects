import  User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


class Cart extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Cart Constructor", props);

  
  }

  componentDidMount() {
    console.log("Parent Cart componentDidMount");
  }
  render() {
    return (
      console.log("Parent Cart Render"),
      <div>
        <h1>Class and functional Component differences</h1>
       
        <UserClass name={"First"} location={"Pune"} />
         <UserClass name={"Second"} location={"Mumbai"} />
      </div>
    );
  }
}

export default Cart;
