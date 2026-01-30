import  User from "./User";
import UserClass from "./UserClass";
const Cart = () => {
  return (
    <div>
      <h1>Class and functional Component differences</h1>
      <User name={"Karan Oza"} />
  <UserClass name={"Karan Oza ka class"} location={"Pune"} />
    </div>
  );
};

export default Cart;
