import { useEffect } from 'react';
import useFetchData from '../../hooks/useFetchData';
import EmployeeCard from './EmployeeCard/EmployeeCard';
import classes from './Home.module.css';
import SearchFilter from './SearchFilter/SearchFilter';
import useSearchFilter from '../../hooks/useSearchFilter';
import usePagination from '../../hooks/usePagination';
import Pagination from './Pagination/Pagination';

const ITEMS_PER_PAGE = 6;

const Home = () => {
  const { data, loading, error } = useFetchData();
  const {
    searchTerm,
    setSearchTerm,
    filterTerm,
    setFilterTerm,
    filteredEmployees,
    sortTerm,
    setSortTerm,
  } = useSearchFilter(data);
  const { next, prev, currentData, currentPage, maxPage, reset } =
    usePagination(filteredEmployees, ITEMS_PER_PAGE);

  useEffect(() => {
    reset();
  }, [searchTerm, filterTerm, sortTerm]);

  return (
    <div className={classes.container}>
      {error && <p>{error.message}</p>}
      <SearchFilter
        searchTerm={searchTerm}
        filterTerm={filterTerm}
        sortTerm={sortTerm}
        onSortChange={(e) => setSortTerm(e.target.value)}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        onFilterChange={(e) => setFilterTerm(e.target.value)}
      />
      {loading && <p>Loading please wait</p>}
      <div className={classes.employeeList}>
        {currentData().map((employee) => (
          <EmployeeCard key={employee.id} data={employee} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        maxPage={maxPage}
        onNext={next}
        onPrev={prev}
      />
    </div>
  );
};
export default Home;
