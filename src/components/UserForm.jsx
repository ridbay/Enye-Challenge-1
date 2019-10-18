import React, { Component } from 'react';


class Form extends Component {

  render() {
    const {handleChange, handleSubmit,firstName,lastName,birthday, age, hobby} = this.props;
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
          <input type="date"
              name="birthday"
              value={birthday}
              onChange={handleChange}
            />
          </label>
          <label>Age:
          <input type="text"
              name="age"
              value={age}
              onChange={handleChange}
            />
          </label>
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