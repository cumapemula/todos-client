import "./App.css";
import Button from "./components/elements/Button";
import Container from "./components/elements/Container";
import { Link } from "react-router-dom";
import { useAppSelector } from "./hooks/useAppSelector";

function App() {
  const token = useAppSelector((state) => state.auth.token);
  return (
    <Container>
      <h1 className="text-cyan-500 text-4xl font-bold">ToDo List App</h1>
      <p className="text-white w-2/4 text-center mt-5">
        <strong>ToDo List App</strong> is a kind of app that generally used to
        maintain our day-to-day tasks or list everything that we have to do,
        with the most important tasks at the top of the list, and the least
        important tasks at the bottom.
      </p>
      <div className="flex mt-10 gap-5">
        {token !== null ? (
          <Link to={"/home"}>
            <Button type="button">Home</Button>
          </Link>
        ) : (
          <>
            <Link to={"/login"}>
              <Button type="button">Login</Button>
            </Link>
            <Link to={"/register"}>
              <Button type="button">Register</Button>
            </Link>
          </>
        )}
      </div>
    </Container>
  );
}

export default App;
