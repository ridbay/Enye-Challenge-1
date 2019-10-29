import React from "react";
import { connect } from "react-redux";
import './Table.css'

const Table = (props)=> {
        const { users } = props;
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
                        {users.map((user, index )=> {
                            return (
                                <tr key={index}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.birthday.birthday}</td>
                                    <td>{user.age.age}</td>
                                    <td>{user.hobby}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
}


const mapStateToProps = state => {
    return { users: state.users };
}
  
export default connect(mapStateToProps)(Table);