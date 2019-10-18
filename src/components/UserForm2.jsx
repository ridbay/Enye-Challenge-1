import React, { Component } from 'react';
import { DatePicker} from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';

class Form extends Component {

  render() {
    
    const {handleChange,handleDateChange, handleSubmit,firstName,lastName, age, hobby} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit} >
          <label>First Name:
          <input type="text" name="firstName" value={firstName} onChange={handleChange} />
          </label>
          <label>Last Name:
          <input type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </label>
          <label>Birthday:
            <DatePicker onChange={handleDateChange} defaultValue={moment()} showToday />
          </label>
          {/* <label>Age:
          <input type="text"
              name="age"
              value={age}
              onChange={handleChange}
            />
          </label> */}
          <label>Hobby:
          <input type="text"
              name="hobby"
              value={hobby}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}


export default Form;