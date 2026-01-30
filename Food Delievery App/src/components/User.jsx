import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div>
      <h2>{name}'s Profile</h2>
      <h3>Count: {count}</h3>
      <h3>Count2: {count2}</h3>
      <p>This is the user profile component.</p>
    </div>
  );
};

export default User;