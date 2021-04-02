import { Component } from "react";

// SignUpForm.jsx <--> users-service.js <--> users-api.js <--> server.js (Express)
import { signUp } from "../../utilities/users-service";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: "",
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // removes confirm and error so we don't send unnessecary data to server    
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      // The promise returned by the signUp service method will
      // resolve to the user object included in the paylooad of the JSON Web Token (JWT)
      const user = await signUp(formData);
      console.log(user);
    } catch (error) {
      this.setState({
        error: "Sign Up Failed",
      });
    }
  };
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Confirm</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <button type="submit" disabled={disable}>
              Sign Up
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
