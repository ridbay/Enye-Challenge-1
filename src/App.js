import React, { useReducer, createContext } from 'react';


import AddUser from './components/AddUser';
import UserTable from './components/UserTable';
import userReducer from './redux/reducer';

import "antd/dist/antd.css";
import './App.css';

const initialUsers = [];

export const UserContext = createContext(null);

const App = () => {

  const [users, dispatchUsers] = useReducer(userReducer, initialUsers)

  return (
    <UserContext.Provider value={dispatchUsers}>
      <AddUser />
      <UserTable users={users} />
    </UserContext.Provider>
  )
};
export default App;