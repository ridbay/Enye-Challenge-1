import React, { useState, useReducer  } from 'react';
import uuid from 'uuid/v4';
import moment from 'moment';

import Table from './components/Table';
import UserForm from './components/UserForm';
import itemReducer from './redux/reducer'

import "antd/dist/antd.css";
import './App.css';

const initialItems = [];


const App = () => {

  const [items, dispatchItems] = useReducer(itemReducer, initialItems);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [hobby, setHobby] = useState('');
  const [birthday, setBirthday] = useState(null);
  const [age, setAge] = useState('');

  const handleFirstNameChange = event => {
    console.log(event.target.value)
    setFirstName(event.target.value);

  };

  const handleLastNameChange = event => {
    console.log(event.target.value)
    setLastName(event.target.value);
  };
  const handleHobbyChange = event => {

    setHobby(event.target.value);
  };

  const handleBirthdayChange = (date, dateString) => {
    const years = moment().diff(dateString, 'years',false);
    setBirthday({ birthday: dateString});
    setAge({age: years })
  };

  const handleSubmit = event => {
    dispatchItems({
      type: 'SET_ITEM',
      firstName,
      lastName,
      hobby,
      birthday,
      age,
      id: uuid(),
    });
        setFirstName('');
    setLastName('');
    setHobby('');
    setBirthday('');
    setAge('');
    event.preventDefault();
  };



  return (
  <div>
 
          <UserForm 
          firstName={firstName}
          lastName={lastName}
          hobby={hobby}
          birthday={birthday}
          age={age}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
          handleHobbyChange={handleHobbyChange}
          handleBirthdayChange={handleBirthdayChange}
          handleSubmit={handleSubmit}
          />

          <p>{firstName}</p>
          <Table items={items}/>
  </div>)

};
export default App;