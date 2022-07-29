import { useQuery } from "react-query";
import { createSession } from "services/api";
import { queryKeys } from "constant/queryKeys";

const useCreateSession = () => {
  return useQuery(queryKeys.createSession, () => createSession());
};

export default useCreateSession;
