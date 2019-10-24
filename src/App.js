import React, { useState } from 'react';
import "antd/dist/antd.css";
import './App.css';
import moment from 'moment';
import {connect} from 'react-redux';
import {setItem} from './redux/actions'

import UserForm from './components/UserForm';
import Table from './components/Table'


const App =(props)=> {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState(null);
  const [age, setAge] = useState('');
  const [hobby, setHobby] = useState('');
  // const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItems = [];
    newItems.push({
      firstName,
      lastName,
      birthday,
      age,
      hobby,
    });

    console.log("checking the new items", setItem(newItems))
    // setItems([...items, newItems]);
    props.setItem(newItems)
    // setFirstName('');
    // setLastName('');
    // setBirthday(null);
    // setAge('');
    // setHobby('');
    // setItems([])
  }

  const changeFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const changeLastName = (e) => {
    setLastName(e.target.value)
  }
  const changeHobby = (e) => {
    setHobby(e.target.value)
  }
  const handleDateChange = (date, dateString) => {
    const years = moment().diff(dateString, 'years',false);
    setBirthday({ birthday: dateString});
    setAge({age: years })
  };

    return (
      <div className="App">

          <UserForm 
          changeFirstName={changeFirstName}
          changeLastName={changeLastName}
          changeHobby={changeHobby}
          handleSubmit={handleSubmit}
          firstName={firstName}
          lastName={lastName}
          birthday={birthday}
          age={age}
          hobby={hobby}
          handleDateChange={handleDateChange} />
        <Table />

      </div>
    );
}
const mapDispatchToProps = dispatch => ({
  setItem: item => dispatch(setItem(item))
})


export default connect(null, mapDispatchToProps)(App);
