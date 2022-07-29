import { Login } from "components/organisms";
import React from "react";
import { useCreateToken } from "store/Hook";

const LoginPage = () => {
  const { data: token, isLoading } = useCreateToken();

  return !isLoading && <Login token={token} />;
};

export default LoginPage;
