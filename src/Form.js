import React from "react";

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    message:""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      mobileNumber: "",
      message: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      mobileNumber: "",
      message: ""
    });
  };

  render() {
    return (
      <form>
        <input
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="mobileNumber"
          placeholder="Mobile Number"
          value={this.state.mobileNumber}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="message"
          placeholder="Message"
          value={this.state.message}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}> Contact Us </button>
      </form>
    );
  }
}