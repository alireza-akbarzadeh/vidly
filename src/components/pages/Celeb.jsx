import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useFetchPerson } from "store/Hook";

const Celeb = () => {
  const { data } = useFetchPerson();
  return (
    <div>
      {data?.results?.map((person) => (
        <div className='flex items-center gap-5' key={person.id}>
          <div className='w-28 h-28'>
            <LazyLoadImage
              className={"w-full h-full object-contain  rounded-2xl"}
              alt={person.name}
              src={`${process.env.REACT_APP_API_IMG}/${person.profile_path}`}
            />
          </div>
          <div className='text-gray-300 font-semibold text-lg'>
            {person.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Celeb;
