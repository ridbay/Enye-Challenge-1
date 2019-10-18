import React, { Component } from 'react';


class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      birthday: '2019-10-18',
      age: '',
      hobby: '',
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      firstName: '',
      lName: '',
      birthday: '',
      age: '',
      hobby: '',
    })
  }
  render() {
    
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <label>First Name:
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <label>Last Name:
          <input type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <label>Birthday:
          <input type="date"
              name="birthday"
              value={this.state.birthday}
              onChange={this.handleChange}
            />
          </label>
          <label>Age:
          <input type="text"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </label>
          <label>Hobby:
          <input type="text"
              name="hobby"
              value={this.state.hobby}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div>{this.state.firstName}</div>
        <div>{this.state.lastName}</div>
        <div>{this.state.birthday}</div>
        <div>{this.state.age}</div>
        <div>{this.state.hobby}</div>
      </div>
    )
  }
}


export default Form;