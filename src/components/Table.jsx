import React, { Component } from 'react';
import './Table.css'

class Table extends Component {

    render() {
        const { items } = this.props;
        return (
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Birthday</th>
                            <th>Age</th>
                            <th>Hobby</th>
                        </tr>
                        {items.map((item, index )=> {
                            return (
                                <tr key={index}>
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

export default Table;