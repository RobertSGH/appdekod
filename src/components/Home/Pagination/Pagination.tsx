import classes from './Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  maxPage: number;
  onNext: () => void;
  onPrev: () => void;
}

const Pagination = ({
  currentPage,
  maxPage,
  onNext,
  onPrev,
}: PaginationProps) => {
  return (
    <div className={classes.pagination}>
      <button onClick={onPrev} disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        Page {currentPage} of {maxPage}
      </span>
      <button onClick={onNext} disabled={currentPage === maxPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
