import { Employee } from '../../../hooks/useFetchData';
import classes from './EmployeeCard.module.css';

interface EmployeeCardProps {
  data: Employee;
}

const EmployeeCard = ({ data }: EmployeeCardProps) => {
  return (
    <div className={classes.card} key={data.id}>
      <h3>
        {data.firstName} {data.lastName}
      </h3>
      <p>{new Date(data.dateOfBirth).toLocaleDateString()}</p>
      <h2>{data.jobTitle}</h2>
    </div>
  );
};

export default EmployeeCard;
