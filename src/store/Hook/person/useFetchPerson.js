import { useQuery } from "react-query";
import { fetchPerson } from "services/api";
import { queryKeys } from "constant/queryKeys";

const useFetchPerson = () => {
  return useQuery(queryKeys.person, fetchPerson);
};

export default useFetchPerson;
