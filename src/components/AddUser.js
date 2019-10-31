import React, { useState, useContext } from 'react';
import uuid from 'uuid/v4';
import { Form, Icon, Input, Button, DatePicker } from 'antd';
import "antd/dist/antd.css";
import moment from 'moment';

import { UserContext } from '../App';

const Adduser = (props) => {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;


    const dispatch = useContext(UserContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [hobby, setHobby] = useState('');
    const [birthday, setBirthday] = useState(null);
    const [age, setAge] = useState('');


    const handleSubmit = (event) => {
        dispatch({ type: 'ADD_USER', firstName, lastName, hobby, birthday, age, id: uuid() });
        setFirstName('');
        setLastName('');
        setHobby('');
        setBirthday(null);
        setAge('');
        event.preventDefault();
    }

    const handleFirstNameChange = event=> setFirstName(event.target.value);
    const handleLastNameChange = event=> setLastName(event.target.value);
    const handleHobbyChange = event=> setHobby(event.target.value);
    const handleBirthdayChange = (date, dateString) => {
        const years = moment().diff(dateString, 'years',false);
        setBirthday({ birthday: dateString});
        setAge({age: years })
      };
    // const handleAgeChange = event=> setAge(event.target.value);


    // Only show error after a field is touched.
    const hasErrors = (fieldsError)=> {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
      }
    const fNameError = isFieldTouched('fName') && getFieldError('fName');
    const lNameError = isFieldTouched('fName') && getFieldError('fName');
    const hobbyError = isFieldTouched('hobby') && getFieldError('hobby');
    const dateError = isFieldTouched('date-picker') && getFieldError('date-picker');

    return (
      <Form layout="inline" onSubmit={handleSubmit}>

        <Form.Item validateStatus={fNameError ? 'error' : ''} help={fNameError || ''}>
          {getFieldDecorator('fName', {
            rules: [{ required: true, message: 'Please input your First Name!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="First Name"
              name="firstName" 
              setfieldsvalue={firstName} 
              onChange={handleFirstNameChange} 
            />,
          )}
        </Form.Item>

        <Form.Item validateStatus={lNameError ? 'error' : ''} help={lNameError || ''}>
          {getFieldDecorator('lName', {
            rules: [{ required: true, message: 'Please input your Last Name!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Last Name"
              name="lastName" 
              setfieldsvalue={lastName} 
              onChange={handleLastNameChange} 
            />,
          )}
        </Form.Item>
        <Form.Item label="Birthday" validateStatus={dateError ? 'error' : ''} help={dateError || ''}>
          {getFieldDecorator('date-picker', {
            rules: [{ required: true, message: 'Please select your date of birth!' }],
          })(
              
          <DatePicker onChange={handleBirthdayChange} initialValue={moment()} showToday />
          
          )}
        </Form.Item>
        <Form.Item validateStatus={hobbyError ? 'error' : ''} help={hobbyError || ''}>
          {getFieldDecorator('hobby', {
            rules: [{ required: true, message: 'Please input your Hobby!' }],
          })(
            <Input
              prefix={<Icon type="customer-service" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Hobby"
              name="hobby"
              setfieldsvalue={hobby}
              onChange={handleHobbyChange}
            />,
          )}
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
}

export default Form.create({ name: 'horizontal_login' })(Adduser);