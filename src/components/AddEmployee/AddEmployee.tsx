import classes from './AddEmployee.module.css';
import useEmployeeForm from '../../hooks/useEmployeeForm';
import { FormEvent } from 'react';

const AddEmployee = () => {
  const {
    employee,
    setEmployee,
    errors,
    setErrors,
    handleInputChange,
    initialEmployeeState,
  } = useEmployeeForm();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      !employee.dateOfBirth ||
      !employee.firstName ||
      !employee.jobTitle ||
      !employee.lastName
    ) {
      setErrors('All fields are mandatory');
      return;
    }
    console.log(employee);
    setErrors('');
    setEmployee(initialEmployeeState);
    alert('Employee successfully added');
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label>First Name*</label>
      <input
        name='firstName'
        placeholder='Employee`s first name'
        value={employee.firstName}
        onChange={handleInputChange}
      />
      <label>Last Name*</label>
      <input
        name='lastName'
        placeholder='Employee`s last name'
        value={employee.lastName}
        onChange={handleInputChange}
      />
      <label>Date of birth*</label>
      <input
        type='date'
        name='dateOfBirth'
        value={employee.dateOfBirth}
        onChange={handleInputChange}
      />
      <label>Job Title*</label>
      <input
        name='jobTitle'
        placeholder='Employee`s job position'
        value={employee.jobTitle}
        onChange={handleInputChange}
      />
      {errors && <div className={classes.error}>{errors}</div>}
      <button>Spremi</button>
    </form>
  );
};
export default AddEmployee;
