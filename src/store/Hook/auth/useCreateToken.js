import { useQuery } from "react-query";
import { createToken } from "services/api";
import { queryKeys } from "constant/queryKeys";

const useCreateToken = () => {
  return useQuery(queryKeys.token, () => createToken());
};

export default useCreateToken;
