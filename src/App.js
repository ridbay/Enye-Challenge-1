import React, { Component } from 'react';
import { connect } from 'react-redux';
import "antd/dist/antd.css";
import './App.css';
import moment from 'moment'

import UserForm from './components/UserForm';
import Table from './components/Table';


import {submitUser} from './redux/actions'


class App extends Component {


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(submitUser());

    // items.push({
    //   firstName,
    //   lastName,
    //   birthday,
    //   age,
    //   hobby,
    // });
    // setFirstName('');
    // setLastName('');
    // setBirthday(null);
    // setAge('');
    // setHobby('');
    // setItems([...items]);
  }

 
  // handleDateChange = (date, dateString) => {
  //   const years = moment().diff(dateString, 'years', false);
  //   setBirthday({ birthday: dateString });
  //   setAge({ age: years })
  // };
  render() {

    return (
      <div className="App">

        <UserForm handleSubmit={this.handleSubmit} />
        <Table />

      </div>
    );
  }
}


const mapStateToProps = state => ({items: state.count})
export default connect(mapStateToProps)(App);
