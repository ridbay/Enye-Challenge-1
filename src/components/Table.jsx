import React from 'react';
import './Table.css'

const Table = (props)=> {
        const { items } = props;
        console.log("items entering table", items)
        return (
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Birthday</th>
                            <th>Age (years)</th>
                            <th>Hobby</th>
                        </tr>
                        {items.map((item, index )=> {
                            return (
                                <tr key={index}>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.birthday.birthday}</td>
                                    <td>{item.age.age}</td>
                                    <td>{item.hobby}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
}

export default Table;