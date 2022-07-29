import { Button, Input } from "components/atomes";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useAuth } from "store/Hook";
import * as Yup from "yup";
import { Loading } from "..";

const Login = ({ token }) => {
  const authMuted = useAuth(token.request_token);
  console.log(authMuted.data, "auth muted");
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("User Name is Required"),
      password: Yup.string().required("Password  is Required"),
    }),
    onSubmit: (values) => {
      const data = {
        username: values.username,
        password: values.password,
        request_token: token.request_token,
      };
      authMuted.mutate(data);
    },
  });

  return (
    <div className='flex items-center justify-center min-h-[80vh] w-full'>
      {authMuted.isLoading ? (
        <Loading />
      ) : authMuted.isError ? (
        toast.error(authMuted.error.status_message)
      ) : null}
      <form onSubmit={formik.handleSubmit} className='max-w-lg mx-auto w-full'>
        <Input
          placeholder='Enter username'
          label={"username"}
          id='username'
          onChange={formik.handleChange}
          value={formik.values.username}
          onBlur={formik.handleBlur}
          status={formik.touched.username && formik.errors.username && "error"}
          helperText={
            formik.touched.username &&
            formik.errors.username &&
            formik.errors.username
          }
        />
        <Input
          placeholder='Enter password'
          label={"password"}
          id='password'
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          status={formik.touched.password && formik.errors.password && "error"}
          helperText={
            formik.touched.password &&
            formik.errors.password &&
            formik.errors.password
          }
        />
        <Button type='submit' fullWidth label={"Login"} />
      </form>
    </div>
  );
};

export default Login;
