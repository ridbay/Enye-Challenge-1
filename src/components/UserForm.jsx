import React from 'react';
import { Form, Icon, Input, Button, DatePicker } from 'antd';
import moment from 'moment';
import { connect } from "react-redux";
import {submitUser} from '../redux/actions'

const hasErrors = (fieldsError) => {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      birthday: "",
      age: "",
      hobby: ""
    }
  }
  componentDidMount() {
    // To disabled submit button at the beginning.
    // this.props.form.validateFields();
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const {firstName, lastName, hobby, birthday, age} = this.state;
    this.props.submitUser({firstName, lastName, hobby, birthday, age});
    this.setState({
      firstName: "",
      lastName: "",
      birthday: "",
      age: "",
      hobby: ""
    });

  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleDateChange = (date, dateString) => {
    const years = moment().diff(dateString, 'years', false);
    this.setState({ birthday: dateString });
    this.setState({ age: years })
  };
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const {firstName, lastName, hobby} = this.state;

    // Only show error after a field is touched.
    const fNameError = isFieldTouched('fName') && getFieldError('fName');
    const lNameError = isFieldTouched('fName') && getFieldError('fName');
    const hobbyError = isFieldTouched('hobby') && getFieldError('hobby');
    const dateError = isFieldTouched('date-picker') && getFieldError('date-picker');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={fNameError ? 'error' : ''} help={fNameError || ''}>
          {getFieldDecorator('fName', {
            rules: [{ required: true, message: 'Please input your First Name!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="First Name"
              name="firstName"
              setfieldsvalue={firstName}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />,
          )}
        </Form.Item>
        <Form.Item label="Birthday" validateStatus={dateError ? 'error' : ''} help={dateError || ''}>
          {getFieldDecorator('date-picker', {
            rules: [{ required: true, message: 'Please select your date of birth!' }],
          })(<DatePicker onChange={this.handleDateChange} initialValue={moment()} showToday />)}
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
              onChange={this.handleChange}
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


const mapDispatchToProps = (dispatch) => {
  return {
    submitUser: ({firstName, lastName, hobby, birthday, age}) => dispatch(submitUser({firstName, lastName, hobby, birthday, age}))
  };
}
export default connect(mapDispatchToProps)(Form.create({ name: 'horizontal_login' })(UserForm));
