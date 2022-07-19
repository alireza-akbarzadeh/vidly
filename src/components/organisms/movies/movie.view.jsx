import { Like } from "components/atomes";
import Table, { THead, Tbody, Td, Th, Tr } from "../../molecules/table";

const MovieView = (props) => {
  const { movies, handleDelete, count, handleLike } = props;
  return (
    <Table>
      <THead>
        <Tr>
          <Th>Title</Th>
          <Th>Genre</Th>
          <Th>Stock</Th>
          <Th>Rate</Th>
          <Th></Th>
          <Th></Th>
          <Th className='text-center'>
            <span className='text-center text-lg'>{count}</span>
          </Th>
        </Tr>
      </THead>
      <Tbody>
        {movies?.map((movie) => (
          <Tr key={movie._id} isHover>
            <Td
              scope='row'
              className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              {movie.title}
            </Td>
            <Td>{movie.genre.name}</Td>
            <Td>{movie.numberInStock}</Td>
            <Td>{movie.dailyRentalRate}</Td>
            <Td>
              <Like onSelect={handleLike} />
            </Td>
            <Td className='cursor-pointer'></Td>
            <Td className='text-right'>
              <button
                onClick={() => handleDelete(movie._id)}
                className='text-white bg-red-700
                 hover:bg-red-800 focus:outline-none
                  focus:ring-4 focus:ring-red-300 font-medium
                rounded-full text-sm px-5 py-2 text-center mr-2 mb-1 dark:bg-red-600
                 dark:hover:bg-red-700 dark:focus:ring-red-900'
              >
                Delete
              </button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default MovieView;
