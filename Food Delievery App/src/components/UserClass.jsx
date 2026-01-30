import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log("UserClass Constructor", props);

        this.state = {
            count: 0,
            count2: 1
        };
    }
    render() {
        const { name, location } = this.props;
        const { count } = this.state;
        return (
            <div>
                <h2>{name} base Profile</h2>
                <h3>Count: {count}</h3>
                <h3>Count2: {this.state.count2}</h3>
                <p>This is the user class base profile component.</p>
                <p>Location: {location}</p>
            </div>
        );
    }
}

export default UserClass;