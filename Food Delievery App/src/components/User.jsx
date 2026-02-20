import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("useEffect called for count:", count);
  }, []);

  async function getUserInfo() {
    // Simulate an API call to fetch user information.
  }

  return <div></div>;
};

export default User;
