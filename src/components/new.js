import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';

class Table2 extends Component {
    render(){
        const { items } = this.props;
        const columns = [
            {
              title: 'First Name',
              dataIndex: 'fname',
              key: 'fname',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Last Name',
              dataIndex: 'lName',
              key: 'lName',
            },
            {
              title: 'Birthday',
              dataIndex: 'birthday',
              key: 'birthday',
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
              },
              {
                title: 'Hobby',
                dataIndex: 'hobby',
                key: 'hobby',
              },
            
            
          ];
          const data = [...items];
    
    }

  

}
export default Table2;