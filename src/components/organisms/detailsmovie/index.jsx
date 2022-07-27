import { Button } from "components/atomes";
import { useNavigate } from "react-router-dom";
import { useFetchDetailsMovies } from "store/Hook";

const DetailsMovie = ({ id }) => {
  const { data: details, isLoading } = useFetchDetailsMovies(id);
  const navigate = useNavigate();
  return (
    !isLoading && (
      <div className={"flex flex-col md:flex-row justify-between gap-10"}>
        <div className={"h-full w-full"}>
          <img
            className={"rounded-lg   w-full h-full object-cover"}
            src={`${process.env.REACT_APP_API_IMG}/${details.poster_path}`}
            alt={details.original_title}
          />
        </div>
        <div>
          <ul className='flex flex-col gap-3'>
            <li className='inline-flex gap-3'>
              <h3 className='font-semibold text-base md:text-lg'>
                {details.original_title}
              </h3>
            </li>
            <li>
              <p className='leading-7  mt-3 capitalize'>{details.overview}</p>
            </li>
            <li>budget : {details.budget}</li>
            <li>
              Genre :{" "}
              {details.genres?.map((genre) => (
                <p className='inline-flex gap-3' key={genre.id}>
                  <span>{genre.name},</span>
                </p>
              ))}
            </li>
            <li>Language : {details.original_language}</li>
            <li>
              View ON :{""}
              <a
                className='text-yellow-500 font-semibold'
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
            <li>Released Data : {details.release_date}</li>
            <li> status : {details.status}</li>
            <li className='inline-flex gap-3'>
              Rate :<span>{details.vote_average.toFixed()}</span>
            </li>
            <li>
              <span>Made in : </span>
              {details.production_countries?.map((item, i) => (
                <span key={i}>{item.name}</span>
              ))}
            </li>
            <li className='flex items-center justify-between w-full'>
              <Button
                onClick={() => navigate(`/movie/${details.id}`)}
                label={"More Info"}
              />
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default DetailsMovie;
