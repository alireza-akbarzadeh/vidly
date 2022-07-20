import { Button, Input } from "components/atomes";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("User Name is Required"),
      password: Yup.string().required("Password  is Required"),
      email: Yup.string().email().required("Email  is not Correct"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className='flex items-center justify-center min-h-[80vh] w-full'>
      <form onSubmit={formik.handleSubmit} className='max-w-lg mx-auto w-full'>
        <Input
          placeholder='Enter Email'
          label={"email"}
          id='email'
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          status={formik.touched.email && formik.errors.email && "error"}
          helperText={
            formik.touched.email && formik.errors.email && formik.errors.email
          }
        />
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
        <Button type='submit' fullWidth label={"Register"} />
      </form>
    </div>
  );
};

export default Register;
