import { useEffect } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import Button from "../../elements/Button";
import Card from "../../elements/Card";
import Container from "../../elements/Container";
import { Navigate } from "react-router-dom";
import FormCreateTodo from "./FormCreateTodo";
import FormUpdateTodo from "./FormUpdateTodo";
import ListTodo from "./ListTodo";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { fetchUser } from "../../../store/slices/user-slice";

function Home() {
  const { token } = useAppSelector((state) => state.auth);
  const { todos } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    location.href = "/"
  }

  useEffect(() => {
    dispatch(fetchUser(token));
  }, []);

  if (token === null) {
    return <Navigate to={"/login"} />;
  }

  return (
    <Container className="gap-10">
      <FormCreateTodo />
      {todos.length > 0 && (
        <Card className="py-3 px-3 lg:w-2/5 gap-10">
          <FormUpdateTodo />
          <ListTodo />
        </Card>
      )}
      <Button type="button" onClick={handleLogout}>Logout</Button>
    </Container>
  );
}

export default Home;
