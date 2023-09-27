import Button from "../../elements/Button";
import Container from "../../elements/Container";
import Form from "../../elements/Form";
import Input from "../../elements/Input";
import InputGroup from "../../elements/InputGroup";
import Label from "../../elements/Label";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { fetchRegister, reset } from "../../../store/slices/auth-slice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useEffect } from "react";

function Register() {
  const dispatch = useAppDispatch();
  const { isSuccess, message, token } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        dispatch(reset());
        navigate("/login");
      }, 1000);
    }
  }, [isSuccess]);

  useEffect(() => {
    dispatch(reset());
  }, []);

  const handleRegister = () => {
    const data = {
      name: formik.values.name,
      email: formik.values.email,
      pin: formik.values.pin,
    };
    dispatch(fetchRegister(data));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      pin: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      pin: Yup.number().min(6).required(),
    }),
    onSubmit: handleRegister,
  });

  if (token !== null) {
    return <Navigate to={"/"} />
  }

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <h2 className="text-center font-extrabold tracking-wide uppercase mb-10 text-3xl">
          Register
        </h2>
        {isSuccess !== null && isSuccess && (
          <p className="bg-green-600 text-xs w-3/4 text-center text-white  rounded py-1">
            Register success
          </p>
        )}
        {isSuccess !== null && !isSuccess && (
          <p className="bg-red-600 text-xs w-3/4 text-center text-white  rounded py-1">
            {message}
          </p>
        )}
        <InputGroup>
          <Label htmlFor="name">Full Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            className="capitalize"
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name && (
            <small className="text-red-600">{formik.errors.name}</small>
          )}
        </InputGroup>
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
          <Label htmlFor="pin">
            PIN <sub className="opacity-50">(6 digit)</sub>
          </Label>
          <Input
            type="password"
            id="pin"
            name="pin"
            onChange={formik.handleChange}
            minLength={6}
            maxLength={6}
          />
          {formik.touched.pin && formik.errors.pin && (
            <small className="text-red-600 w-56 lg:w-full">
              {formik.errors.pin}
            </small>
          )}
        </InputGroup>
        <Button
          type="submit"
          className="w-2/4 mt-8 bg-slate-500 hover:bg-slate-400 shadow-slate-600"
        >
          Submit
        </Button>
        <p className="mt-5">
          Already have an account?
          <Link to={"/login"} className="text-blue-500 font-bold ms-2">
            Login
          </Link>
        </p>
        <Link to={"/"} className="text-blue-500 mt-3 font-bold">
          Back to home
        </Link>
      </Form>
    </Container>
  );
}

export default Register;
