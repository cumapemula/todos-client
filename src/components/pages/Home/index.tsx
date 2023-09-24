import Button from "../../elements/Button";
import Card from "../../elements/Card";
import Container from "../../elements/Container";
import Form from "../../elements/Form";
import Input from "../../elements/Input";

function Home() {
  return (
    <Container className="gap-10">
      <Form className="py-3 px-3 lg:w-2/5">
        <div className="flex w-full gap-5">
          <Input
            type="text"
            id="todos"
            placeholder="Add your new todo"
            className="flex-1 ps-3"
          ></Input>
          <Button type="submit">Add</Button>
        </div>
      </Form>
      <Card className="py-3 px-3 lg:w-2/5 gap-10">
        <Form className="p-0 lg:w-full">
          <div className="flex w-full gap-5">
            <Input
              type="text"
              id="editTodo"
              placeholder="Edit your todo"
              className="flex-1 ps-3"
            ></Input>
            <Button type="submit">Save</Button>
          </div>
        </Form>
        <ul className="flex flex-col gap-4 w-full max-h-96 overflow-auto">
          <li className="flex gap-1 items-center">
            <p className="flex-1 bg-slate-400 text-white py-1 ps-3 rounded shadow-md">
              List
            </p>
            <Button type="button">+</Button>
            <Button type="button">+</Button>
          </li>
        </ul>
      </Card>
      <Button type="button">Logout</Button>
    </Container>
  );
}

export default Home;
