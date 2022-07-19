// @lodash
import _ from "lodash";
import PropTypes from "prop-types";
// @paginate
export default function Pagination({
  itemCount,
  pageSize,
  onPageChange,
  currentPage,
}) {
  const pagesCount = Math.ceil(itemCount / pageSize);
  const pages = _.range(1, pagesCount, +1);

  // const handleNextPage = () => setPage((prev) => console.log(prev, ""));
  // const handlePrevPage = () => setPage((prev) => prev.length - 1);

  if (pagesCount === 1) return null;
  return (
    <nav aria-label='Page navigation' className='mt-8'>
      <ul className='inline-flex items-center -space-x-px'>
        <li onClick={() => console.log()}>
          <button className='block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
            <span className='sr-only'>Previous</span>
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </li>
        {pages.map((page) => (
          <li key={page} onClick={() => onPageChange(page)}>
            <button
              className={`py-2 px-3 
              ${
                currentPage === page
                  ? "bg-gray-100 text-gray-700  dark:text-white dark:bg-green-500  dark:border-gray-700"
                  : "bg-white  dark:bg-gray-800"
              }
               leading-tight text-gray-500 border
             border-gray-300 hover:bg-gray-100 hover:text-gray-700
              dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700
               dark:hover:text-white`}
            >
              {page}
            </button>
          </li>
        ))}
        <li onClick={() => console.log()}>
          <button className='block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
            <span className='sr-only'>Next</span>
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
