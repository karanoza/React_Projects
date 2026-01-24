import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log("UserClass Constructor", props);
    }
    render() {
        return (
            <div>
                <h2>User class base Profile</h2>
                <p>This is the user class base profile component.</p>
            </div>
        );
    }
}

export default UserClass;