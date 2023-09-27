import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { fetchLogin, reset } from "../../../store/slices/auth-slice";
import Button from "../../elements/Button";
import Container from "../../elements/Container";
import Form from "../../elements/Form";
import Input from "../../elements/Input";
import InputGroup from "../../elements/InputGroup";
import Label from "../../elements/Label";
import { Link, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useEffect } from "react";

function Login() {
  const { isSuccess, token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(reset());
  }, []);

  const handleLogin = () => {
    const data = {
      email: formik.values.email,
      pin: formik.values.pin,
    };
    dispatch(fetchLogin(data));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      pin: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      pin: Yup.string().min(6).max(6).required(),
    }),
    onSubmit: handleLogin,
  });

  if (token !== null) {
    return <Navigate to={"/home"} />;
  }

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <h2 className="text-center font-extrabold tracking-wide uppercase mb-10 text-3xl">
          Login
        </h2>
        {isSuccess !== null && isSuccess && (
          <p className="bg-green-600 text-xs w-3/4 text-center text-white  rounded py-1">
            Login success
          </p>
        )}
        {isSuccess !== null && !isSuccess && (
          <p className="bg-red-600 text-xs w-3/4 text-center text-white  rounded py-1">
            Email or PIN is incorrect
          </p>
        )}
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <small className="text-red-600">{formik.errors.email}</small>
          )}
        </InputGroup>
        <InputGroup>
          <Label htmlFor="pin">PIN</Label>
          <Input
            type="password"
            id="pin"
            name="pin"
            onChange={formik.handleChange}
            maxLength={6}
          />
          {formik.touched.pin && formik.errors.pin && (
            <small className="text-red-600">{formik.errors.pin}</small>
          )}
        </InputGroup>
        <Button
          type="submit"
          className="w-2/4 mt-8 bg-slate-500 hover:bg-slate-400 shadow-slate-600"
        >
          Submit
        </Button>
        <p className="mt-5">
          You don't have an account yet?
          <Link to={"/register"} className="text-blue-500 font-bold ms-2">
            Register
          </Link>
        </p>
        <Link to={"/"} className="text-blue-500 mt-3 font-bold">
          Back to home
        </Link>
      </Form>
    </Container>
  );
}

export default Login;
