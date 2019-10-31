import React from 'react';
// import './Table.css';

const UserList = ({users})=> {

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
                        {users.map(user=> {
                            return (
                                <tr key={user.id}>
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


export default UserList;