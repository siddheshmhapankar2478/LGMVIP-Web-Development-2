import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home.js'
import Cards from './components/Cards/Cards.js'
import Header from './components/Header/Header.js'
import Loading from './components/Load/Loading.jsx';
// import Footer from './components/Footer/Footer';
const App = () => {
  const [users, setUsers] = useState([]);
  const [isButtonClicked, setisButtonClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setisButtonClicked(true);
    setTimeout(() => {
      setIsLoading(true);
    }, 5000);
    const response = await fetch('https://reqres.in/api/users');
    const result = await response.json();
    setUsers(result.data);
  };

  return (
    <>
      <Header fetchUsers={fetchUsers} />
      {isButtonClicked ?
        (isLoading ?
          (<Cards users={users} />) :
          (<Loading />)
        )
        :
        (<Home />)
      }
    </>
  );
}
export default App;
