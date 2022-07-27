import React from "react";
import { useFetchVideos } from "store/Hook";
import YouTube from "react-youtube";

const Videos = ({ id }) => {
  const { data, isLoading } = useFetchVideos(id);
  React.useEffect(() => {}, [id]);
  const onReady = (event) => {
    event.target.pauseVideo();
  };
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    !isLoading && (
      <div className='overflow-hidden h-0 pb-[56.25%] relative'>
        <YouTube
          videoId={data?.results[0]?.key}
          opts={opts}
          iframeClassName='w-full h-full lg:h-[700px] rounded-lg left-0 top-0 absolute'
          onReady={onReady}
        />
      </div>
    )
  );
};

export default Videos;
// https://www.youtube.com/watch?v=1rq1QQDiTvI
