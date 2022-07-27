import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { fetchVideos } from "services/api";

const Videos = ({ id }) => {
  const [video, setVideo] = useState(null);

  const onReady = (event) => {
    event.target.pauseVideo();
  };
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    fetchVideos(id).then((res) => setVideo(res));
  }, [id]);
  return (
    video && (
      <div className='overflow-hidden h-0 pb-[56.25%] relative'>
        <YouTube
          title={video?.results[0]?.name}
          loading={"eager"}
          videoId={video?.results[0]?.key}
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
