import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(0);

 
 
  return (
    <div>
      <h2>{name}'s Profile</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 2)}>Odd Count</button>
      <h3>Count2: {count2}</h3>
      <button onClick={() => setCount2(count2 + 2)}>Even Count2</button>

      <p>This is the user profile component.</p>
    </div>
  );
};

export default User;