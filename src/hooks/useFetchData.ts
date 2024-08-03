import { useEffect, useState } from 'react';

export interface Employee {
  id?: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  jobTitle: string;
}

const useFetchData = () => {
  const [data, setData] = useState<Employee[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/paganini/api/job-interview/employees');
      if (!response.ok) {
        throw new Error('Please check network logs');
      }
      const data = await response.json();
      console.log(data);
      setData(data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setError(err as Error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading };
};

export default useFetchData;
