import { useQuery } from "react-query";
import { fetchVideos } from "services/api";
import { queryKeys } from "constant/queryKeys";

const useFetchVideo = (id) => {
  return useQuery(queryKeys.videos, () => fetchVideos(id));
};

export default useFetchVideo;
