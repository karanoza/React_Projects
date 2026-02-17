import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Child UserClass Constructor", props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }

// componentDidMount is a lifecycle method that is called after the component is rendered for the first time. It is used to perform side effects such as fetching data via API calls, setting up subscriptions, or manually changing the DOM in React components.

  componentDidMount() {
    console.log(this.props.name +"Child UserClass componentDidMount");
    //first constructor is called then render is called and then componentDidMount is called. componentDidMount is called only once in the lifecycle of a component.
    //Thats why we do API calls in componentDidMount because we want to fetch data after the component is rendered for the first time. If we do API calls in constructor then it will be called every time the component is rendered which is not good for performance.
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      console.log(this.props.name + "Child UserClass Render"),
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


/*
- Parent Constructor
- Parent Render

  - First Child Constructor
  - First Child Render
  
  - Second Child Constructor
  - Second Child Render

   <DOM Updated - In Single Batch>

  - First Child componentDidMount
  - Second Child componentDidMount

- Parent componentDidMount

*/
