import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import EmployeeListPage from './components/EmployeeListPage';
import grp46 from '../src/assets/Group 46.png'
import moptro from '../src/assets/moptro logo.png'
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState('dashboard');
  const employees = [
    { id: 1, name: 'John Doe', role: 'Software Engineer', dob: '1990-01-01' },
    { id: 2, name: 'Shreyas Lakhani', role: 'Frontend Engineer', dob: '1990-01-01' },
    { id: 3, name: 'Nirav Sharma', role: 'backend Engineer', dob: '1990-01-01' },
    { id: 4, name: 'Jemin Kumar', role: 'web Engineer', dob: '1990-01-01' },
    // Add more employees here
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleHomeClick = () => {
    setView('dashboard');
  };

  const handleUserClick = () => {
    setView('employeeList');
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="bg-[#000E09]">
      <div className='h-[25vh]'>
      <div className='flex justify-end'><img className='w-[20%]'  src={grp46} alt="" /></div>
      <div className='flex justify-center'><img className='w-[30%]' src={moptro} alt="" /></div>
      </div>
      {view === 'dashboard' && <DashboardPage />}
      {view === 'employeeList' && <EmployeeListPage employees={employees} />}
      <div className='flex justify-evenly py-2'>
        <IoHome onClick={handleHomeClick} color='green' size={30} />
        <FaUserAlt onClick={handleUserClick} color='green' size={30} />
      </div>
    </div>
  );
}

export default App;
