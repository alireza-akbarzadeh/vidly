import React from "react";
import { useFetchVideos } from "store/Hook";

const Videos = ({ id }) => {
  const { data, isLoading } = useFetchVideos(id);
  React.useEffect(() => {}, [id]);
  return (
    !isLoading && (
      <div className='overflow-hidden h-0 pb-[56.25%] relative'>
        <iframe
          className='w-full h-full lg:h-[700px] rounded-lg left-0 top-0 absolute'
          src={`https://www.youtube.com/embed/${data?.results[0]?.key}`}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
      </div>
    )
  );
};

export default Videos;
// https://www.youtube.com/watch?v=1rq1QQDiTvI
