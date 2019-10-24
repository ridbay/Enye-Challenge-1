import React from 'react';
import './Table.css';
import {connect} from 'react-redux';

const Table = (props)=> {
        const { items } = props;
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


const mapStateToProps = (state) => ({
items: state.items
})
export default connect(mapStateToProps)(Table);