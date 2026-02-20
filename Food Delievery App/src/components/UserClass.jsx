import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Child UserClass Constructor", props);

    this.state = {
      userInfo: {
        name: "Dummy",
        Twitter: "Yo Developer",
        location: "Earth",
        avatar_url: "https://www.dummyimage.com/avatar.png",
        company: "Dummy Company",
      },
    };
  }

  // componentDidMount is a lifecycle method that is called after the component is rendered for the first time. It is used to perform side effects such as fetching data via API calls, setting up subscriptions, or manually changing the DOM in React components.

  async componentDidMount() {
    console.log(this.props.name + "Child UserClass componentDidMount");
    //first constructor is called then render is called and then componentDidMount is called. componentDidMount is called only once in the lifecycle of a component.
    //Thats why we do API calls in componentDidMount because we want to fetch data after the component is rendered for the first time. If we do API calls in constructor then it will be called every time the component is rendered which is not good for performance.

    const data = await fetch("https://api.github.com/users/karanoza");
    const json = await data.json();
    console.log("GitHub Data:", json);

    this.setState({
      userInfo: json,
    });
  }
  render() {
    return (
      <div className="user-card">
        <img
          src={this.state.userInfo.avatar_url}
          alt="Avatar"
          width="100"
          height="100"
        />
        <div className="user-card-details">
          <h2>Name: {this.state.userInfo.name}</h2>
          <h3>Twitter: {this.state.userInfo.twitter_username}</h3>
          <h4>Location: {this.state.userInfo.location}</h4>
          <h4>Company: {this.state.userInfo.company}</h4>
        </div>
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
