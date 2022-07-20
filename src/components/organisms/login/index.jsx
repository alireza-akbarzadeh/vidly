import { Button } from "components/atomes";
import { Input } from "postcss";
import React from "react";

const Login = () => {
  return (
    <form action='' className='max-w-lg mx-auto'>
      <Input
        label={"email"}
        type='email'
        name='email'
        placeholder='Enter Your Email'
      />
      <Input
        label={"Password"}
        type='password'
        name='password'
        placeholder='Enter Your PassWord'
      />
      <Button label={"submit"} />
    </form>
  );
};

export default Login;
