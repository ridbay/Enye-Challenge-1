import React, { Component } from 'react';

import './App.css';


import Form from './components/UserForm';
import Table from './components/Table'
// import Button from 'antd/es/button';

class App extends Component {
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      birthday: '2019-10-18',
      age: '',
      hobby: '',
      items : [],
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const items = [...this.state.items];
    items.push({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      birthday: this.state.birthday,
      age: this.state.age,
      hobby: this.state.hobby,
    });
    this.setState({
      firstName: '',
      lastName: '',
      birthday: '2019-10-18',
      age: '',
      hobby: '',
      items,
    })
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({[name]: value})
  }
  render(){
    return (
    <div className="App">
      <Form handleChange={this.handleChange} 
      handleSubmit={this.handleSubmit} 
      firstName= {this.state.firstName}
      lastName ={ this.state.lastName}
      birthday = {this.state.birthday}
      age= {this.state.age}
      hobby= {this.state.hobby}/>
      <Table items={this.state.items}/>
    </div>
  );
}
}

export default App;
