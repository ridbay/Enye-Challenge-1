import React from 'react';
import { Form, Icon, Input, Button, DatePicker } from 'antd';
import moment from 'moment';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //     }
  //   });
  // };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const {handleChange,handleDateChange, handleSubmit,firstName,lastName, hobby} = this.props;

    // Only show error after a field is touched.
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
              setFieldsValue={firstName} 
              onChange={handleChange} 
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
              setFieldsValue={lastName} 
              onChange={handleChange} 
            />,
          )}
        </Form.Item>
        <Form.Item label="Birthday" validateStatus={dateError ? 'error' : ''} help={dateError || ''}>
          {getFieldDecorator('date-picker', {
            rules: [{ required: true, message: 'Please select your date of birth!' }],
          })(<DatePicker onChange={handleDateChange} defaultValue={moment()} showToday />)}
        </Form.Item>
        <Form.Item validateStatus={hobbyError ? 'error' : ''} help={hobbyError || ''}>
          {getFieldDecorator('hobby', {
            rules: [{ required: true, message: 'Please input your Hobby!' }],
          })(
            <Input
              prefix={<Icon type="customer-service" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Hobby"
              name="hobby"
              setFieldsValue={hobby}
              onChange={handleChange}
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
}

export default Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);
