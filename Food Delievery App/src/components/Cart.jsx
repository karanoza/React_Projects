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
        <User name={"Karan Oza"} />
        <UserClass name={"Karan Oza ka class"} location={"Pune"} />
      </div>
    );
  }
}

export default Cart;
