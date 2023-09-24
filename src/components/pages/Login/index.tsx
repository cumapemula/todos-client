import Button from "../../elements/Button";
import Container from "../../elements/Container";
import Form from "../../elements/Form";
import Input from "../../elements/Input";
import InputGroup from "../../elements/InputGroup";
import Label from "../../elements/Label";
import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = () => {
    return;
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-center font-extrabold tracking-wide uppercase mb-10 text-3xl">
          Login
        </h2>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="pin">PIN</Label>
          <Input type="password" id="pin" />
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
