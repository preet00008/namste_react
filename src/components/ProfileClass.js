import { Component } from "react";

class Profile extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        details : "",
    }
    // console.log("constructor");
  }

  async componentDidMount(){

    const data = await fetch("https://api.github.com/users/preet00008");
    const json = await data.json();
    console.log(json);
    this.setState({
        details : json,
    })
    // console.log("componentDidMount");

  }

  componentDidUpdate(){
    // console.log("componentDidUpdate");
  }

  componentWillUnmount(){
    // console.log("componentWillUnmount");
  }



  render() {
    console.log("hi render");

    return (
      <>
      <img src={this.state.details.avatar_url} />
      <h1>{this.state.details.name}</h1>
        <div>Class Base component</div>
      </>
    );
  }
}

export default Profile;
