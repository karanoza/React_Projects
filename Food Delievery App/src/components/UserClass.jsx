import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log("UserClass Constructor", props);
    }
    render() {
        const { name, location } = this.props;
        return (
            <div>
                <h2>{name} base Profile</h2>
                <p>This is the user class base profile component.</p>
                <p>Location: {location}</p>
            </div>
        );
    }
}

export default UserClass;