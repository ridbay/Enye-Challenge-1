import React, { Component } from 'react';


class Form extends Component {
  constructor(){
    super();
    this.state = {
      value: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <label>First Name: 
          <input type="text" 
                 name="fname"   
                 value={this.state.value} 
                 onChange={this.handleChange} 
          />
          </label>
          <input type="submit" value="Submit"/>
        </form>

        <div>{this.state.value}</div>
      </div>
    )
  }
}


export default Form;