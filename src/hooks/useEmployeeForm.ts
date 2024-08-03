import { useState } from 'react';
import { Employee } from './useFetchData';

const useEmployeeForm = () => {
  const initialEmployeeState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    jobTitle: '',
  };
  const [employee, setEmployee] = useState<Employee>(initialEmployeeState);
  const [errors, setErrors] = useState('');

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  return {
    employee,
    setEmployee,
    errors,
    setErrors,
    handleInputChange,
    initialEmployeeState,
  };
};
export default useEmployeeForm;
