import { Button } from "components/atomes";
import { Input } from "components/atomes";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
const MovieForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      genre: "",
      numberInStock: "",
      rate: "",
    },
    validationSchema: yup.object({
      title: yup.string().required(),
      genre: yup.string().required(),
      numberInStock: yup.number().required(),
      rate: yup.number().required(),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate("/movies");
    },
  });
  return (
    <div className='flex items-center justify-center min-h-[80vh] w-full'>
      <form onSubmit={formik.handleSubmit} className='max-w-lg mx-auto w-full'>
        <Input
          placeholder='Enter title'
          label={"title"}
          id='title'
          onChange={formik.handleChange}
          value={formik.values.title}
          onBlur={formik.handleBlur}
          status={formik.touched.title && formik.errors.title && "error"}
          helperText={
            formik.touched.title && formik.errors.title && formik.errors.title
          }
        />
        <Input
          placeholder='Enter numberInStock'
          label={"numberInStock"}
          id='numberInStock'
          onChange={formik.handleChange}
          value={formik.values.numberInStock}
          onBlur={formik.handleBlur}
          status={
            formik.touched.numberInStock &&
            formik.errors.numberInStock &&
            "error"
          }
          helperText={
            formik.touched.numberInStock &&
            formik.errors.numberInStock &&
            formik.errors.numberInStock
          }
        />

        <Input
          placeholder='Enter rate'
          label={"rate"}
          id='rate'
          onChange={formik.handleChange}
          value={formik.values.rate}
          onBlur={formik.handleBlur}
          status={formik.touched.rate && formik.errors.rate && "error"}
          helperText={
            formik.touched.rate && formik.errors.rate && formik.errors.rate
          }
        />
        <Button label={"submit"} />
      </form>
    </div>
  );
};

export default MovieForm;
