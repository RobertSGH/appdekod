import React from 'react';
import classes from './SearchFilter.module.css';

interface SearchFilterProps {
  searchTerm: string;
  filterTerm: string;
  sortTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SearchFilter = ({
  searchTerm,
  filterTerm,
  onSearchChange,
  onFilterChange,
  sortTerm,
  onSortChange,
}: SearchFilterProps) => {
  return (
    <div className={classes.searchFilter}>
      <input
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={onSearchChange}
      />
      <select value={filterTerm} onChange={onFilterChange}>
        <option value=''>Filter by Job Title</option>
        <option value='Programer'>Programer</option>
        <option value='Dizajner'>Dizajner</option>
        <option value='Analitičar'>Analitičar</option>
        <option value='Manager'>Manager</option>
        <option value='Konzultant'>Konzultant</option>
        <option value='Inženjer'>Inženjer</option>
      </select>
      <select value={sortTerm} onChange={onSortChange}>
        <option value=''>Sort by...</option>
        <option value='firstName'>First Name</option>
        <option value='lastName'>Last Name</option>
        <option value='jobTitle'>Job Title</option>
      </select>
    </div>
  );
};

export default SearchFilter;
