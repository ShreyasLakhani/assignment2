import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeeListPage({ employees }) {
  const [search, setSearch] = useState('');

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='flex flex-col justify-center items-center'>
       <input
        className='rounded-xl pl-3 w-2/3 py-2 bg-[#5E5E5E82] text-white outline-none'
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    <div className='mt-5 w-full h-[64vh] flex flex-col items-center overflow-y-auto'>
      {filteredEmployees.map(employee => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
    </div>
  );
}

export default EmployeeListPage;
