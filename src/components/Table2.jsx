import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';

class Table2 extends Component {

    render() {
        const { items } = this.props;
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Birthday</th>
                            <th>Age</th>
                            <th>Hobby</th>
                        </tr>
                        {items.map(item => {
                            return (
                                <tr>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.birthday}</td>
                                    <td>{item.age}</td>
                                    <td>{item.hobby}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table2;