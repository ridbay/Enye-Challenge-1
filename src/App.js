import React, { useState } from 'react';
import "antd/dist/antd.css";
import './App.css';
import moment from 'moment'

import UserForm from './components/UserForm';
import Table from './components/Table'


const App =()=> {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState(null);
  const [age, setAge] = useState('');
  const [hobby, setHobby] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    items.push({
      firstName,
      lastName,
      birthday,
      age,
      hobby,
    });

    setFirstName('');
    setLastName('');
    setBirthday(null);
    setAge('');
    setHobby('');
    setItems([...items]);
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
        <Table items={items} />

      </div>
    );
}

export default App;
