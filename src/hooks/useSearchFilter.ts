import { useState, useMemo } from 'react';
import { Employee } from './useFetchData';

const useSearchFilter = (data: Employee[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm, setFilterTerm] = useState('');
  const [sortTerm, setSortTerm] = useState('');

  const filteredEmployees = useMemo(() => {
    const searchTerms = searchTerm
      .toLowerCase()
      .split(' ')
      .filter((term) => term);

    let filtered = data.filter((employee) => {
      const employeeName =
        `${employee.firstName} ${employee.lastName}`.toLowerCase();
      const matchesSearch = searchTerms.every((term) =>
        employeeName.split(' ').some((namePart) => namePart.startsWith(term))
      );
      const matchesFilter = filterTerm
        ? employee.jobTitle === filterTerm
        : true;
      return matchesSearch && matchesFilter;
    });

    if (sortTerm) {
      filtered = filtered.sort((a, b) => {
        if (sortTerm === 'firstName') {
          return a.firstName.localeCompare(b.firstName);
        } else if (sortTerm === 'lastName') {
          return a.lastName.localeCompare(b.lastName);
        } else if (sortTerm === 'jobTitle') {
          return a.jobTitle.localeCompare(b.jobTitle);
        }
        return 0;
      });
    }

    return filtered;
  }, [data, searchTerm, filterTerm, sortTerm]);

  return {
    searchTerm,
    setFilterTerm,
    setSearchTerm,
    filterTerm,
    filteredEmployees,
    sortTerm,
    setSortTerm,
  };
};

export default useSearchFilter;
