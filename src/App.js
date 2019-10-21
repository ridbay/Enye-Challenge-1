import React, { Component } from 'react';
import "antd/dist/antd.css";
import './App.css';
import moment from 'moment'

import UserForm from './components/UserForm';
import Table from './components/Table'


class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      birthday: null,
      age: '',
      hobby: '',
      items: [],
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const items = [...this.state.items];
    const {firstName, lastName, birthday, age, hobby} = this.state;
    items.push({
      firstName,
      lastName,
      birthday,
      age,
      hobby,
    });
    this.setState({
      firstName: '',
      lastName: '',
      birthday: null,
      age: '',
      hobby: '',
      items,
    })
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  }

  handleDateChange = (date, dateString) => {
    const years = moment().diff(dateString, 'years',false);
    this.setState({ birthday: dateString, age: years });
  };

  render() {
    return (
      <div className="App">

          <UserForm 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          birthday={this.state.birthday}
          age={this.state.age}
          hobby={this.state.hobby}
          handleDateChange={this.handleDateChange} />
        <Table items={this.state.items} />

      </div>
    );
  }
}

export default App;
