import React from 'react';

function EmployeeCard({ employee }) {
    return (
      <div className='flex flex-col gap-3 w-[85%] mt-5 text-white bg-[#5E5E5E82] rounded-xl py-2'>
        <div className='flex'><p className='w-[20%] ml-5 text-gray-400'>Id</p><p className='pr-3'>:</p><p>{employee.id}</p></div>
        <div className='flex'><p className='w-[20%] ml-5 text-gray-400'>Name</p><p className='pr-3'>:</p><p>{employee.name}</p></div>
        <div className='flex'><p className='w-[20%] ml-5 text-gray-400'>DOB</p><p className='pr-3'>:</p><p className='text-orange-400'>{employee.role}</p></div> 
        <div className='flex'><p className='w-[20%] ml-5 text-gray-400'>Role</p><p className='pr-3'>:</p><p className='text-green-500'>{employee.dob}</p></div>
      </div>
    );
  }

  export default EmployeeCard