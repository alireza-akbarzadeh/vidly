import { QueryClient } from "react-query";
import { toast } from "react-toastify";

function queryErrorHandler(error) {
  const id = "react-query-error";
  const title =
    error instanceof Error ? error.message : "error connecting to server";
  toast.error(title);
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
    },
  },
});

export default queryClient;
