import { Button } from "components/atomes";
import { useNavigate } from "react-router-dom";
import { useFetchDetailsMovies } from "store/Hook";

const DetailsMovie = ({ id, page = "popular" }) => {
  const { data: details, isLoading } = useFetchDetailsMovies(id);
  const navigate = useNavigate();
  return (
    !isLoading && (
      <div className={"flex flex-col md:flex-row justify-between gap-10"}>
        <div className={" w-full"}>
          <img
            className={"rounded-lg   w-full h-full object-contain"}
            src={`${process.env.REACT_APP_API_IMG}/${details.poster_path}`}
            alt={details.original_title}
          />
        </div>
        <div>
          <ul className='flex flex-col gap-3'>
            <li className='inline-flex gap-3'>
              <h3 className='text-base md:text-lg text-gray-100 font-semibold'>
                {details.original_title}
              </h3>
            </li>
            <li>
              <p className='leading-7  mt-3 capitalize text-base  text-gray-300 font-medium'>
                {details.overview}
              </p>
            </li>
            <li>
              <span className='text-gray-300'>budget : </span>
              <span className='text-green-400'>
                {details.budget.toLocaleString()} $
              </span>{" "}
            </li>
            <li>
              <span className='text-gray-300'>Genre : </span>
              {details.genres?.map((genre) => (
                <p className='inline-flex  text-gray-200' key={genre.id}>
                  <span className='mr-'>{genre.name}</span>
                </p>
              ))}
            </li>
            <li>
              <span className='text-gray-300'>Language :</span>
              <span className='text-gray-100 ml-2'>
                {details.original_language}
              </span>
            </li>
            <li>
              <span className='text-gray-300'>View ON :</span>
              <a
                className='text-yellow-500 font-semibold ml-2'
                rel='noreferrer'
                target={"_blank"}
                href={`https://www.imdb.com/title/${details.imdb_id}`}
              >
                IMDB
              </a>
            </li>
            <li>
              <a
                className='text-sky-500 font-semibold'
                rel='noreferrer'
                target={"_blank"}
                href={`${details.homepage}`}
              >
                Home Page
              </a>
            </li>
            <li>
              <span className='text-gray-300'> Released Data :</span>
              <span className='text-gray-200 ml-2'>
                {" "}
                {details.release_date}
              </span>
            </li>
            <li>
              <span className='text-gray-300'> status :</span>
              <span className='ml-2 text-gray-200'>{details.status}</span>
            </li>
            <li className='inline-flex gap-3 items-center'>
              <span className='text-gray-300'> Rate :</span>
              <span className='bg-sky-500 w-7 h-7  text-white rounded-full flex items-center justify-center'>
                {details.vote_average.toFixed()}
              </span>
            </li>
            <li>
              <span className='text-gray-300'>Made in :</span>
              {details.production_countries?.map((item, i) => (
                <span className='text-white ml-2' key={i}>
                  {item.name}
                </span>
              ))}
            </li>
            {page === "popular" && (
              <li className='text-right'>
                <Button
                  onClick={() => navigate(`/movie/${details.id}`)}
                  label={"More Info"}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  );
};

export default DetailsMovie;
