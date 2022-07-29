import { useMutation } from "react-query";
import { auth } from "services/api";
import { queryKeys } from "constant/queryKeys";

const useAuth = (request_token) => {
  return useMutation(queryKeys.auth, (data) => auth({ request_token, data }));
};

export default useAuth;
