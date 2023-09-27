import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import Button from "../../elements/Button";
import Form from "../../elements/Form";
import Input from "../../elements/Input";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchCreateTodo } from "../../../store/slices/todo-slice";

function FormCreateTodo() {
  const { id } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCreateTodo = () => {
    const data = {
      authorId: id,
      content: formik.values.content
    }
    dispatch(fetchCreateTodo(data)).then(() => navigate(0))
  };

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    validationSchema: Yup.object({
      content: Yup.string().required(),
    }),
    onSubmit: handleCreateTodo
  })

  return (
      <Form onSubmit={formik.handleSubmit} className="py-3 px-3 lg:w-2/5">
        <div className="flex w-full gap-5">
          <Input
            type="text"
            id="content"
            name="content"
            placeholder="Add your new todo"
            className="flex-1 ps-3"
            onChange={formik.handleChange}
          ></Input>
          <Button type="submit">Add</Button>
        </div>
      </Form>
      
  );
}

export default FormCreateTodo;
