import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import Button from "../../elements/Button";
import Form from "../../elements/Form";
import Input from "../../elements/Input";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchUpdateTodo } from "../../../store/slices/todo-slice";

function FormUpdateTodo() {
  const { id, content, isUpdated } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleUpdateTodo = () => {
    const data = {
      id,
      content: formik.values.content,
    };
    dispatch(fetchUpdateTodo(data)).then(() => navigate(0));
  };

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    validationSchema: Yup.object({
      content: Yup.string().required(),
    }),
    onSubmit: handleUpdateTodo,
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="p-0 lg:w-full">
      <div className="flex w-full gap-5">
        <Input
          type="text"
          id="content"
          name="content"
          placeholder="Edit your todo"
          className="flex-1 ps-3"
          onChange={formik.handleChange}
          readOnly={!isUpdated}
          defaultValue={isUpdated ? content : ""}
        ></Input>
        <Button type="submit" disabled={!isUpdated}>
          Save
        </Button>
      </div>
    </Form>
  );
}

export default FormUpdateTodo;
