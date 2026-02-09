import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child UserClass Constructor", props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }

  componentDidMount() {
    console.log("Child UserClass componentDidMount");
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      console.log("Child UserClass Render", this.props),
      <div>
        <h2>{name} base Profile</h2>
        <h3>Count: {count}</h3>
        {/* Never Update State variable directly like this.state.count = this.state.count + 1 */}
        <button onClick={() => this.setState({ count: this.state.count + 2 })}>
          Even Count
        </button>
        <h3>Count2: {this.state.count2}</h3>
        <button
          onClick={() => this.setState({ count2: this.state.count2 + 2 })}
        >
          Odd Count
        </button>
        <p>This is the user class base profile component.</p>
        <p>Location: {location}</p>
      </div>
    );
  }
}

export default UserClass;
