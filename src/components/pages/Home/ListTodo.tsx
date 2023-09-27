import { useState } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import Button from "../../elements/Button";
import {
  setTodoUpdate,
  setTodoDelete,
  fetchDeleteTodo,
} from "../../../store/slices/todo-slice";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { ImCross, ImCheckmark } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function ListTodo() {
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const { todos } = useAppSelector((state) => state.users);
  const { id, content } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <>
      {isDeleted && (
        <div className="flex gap-3 items-center">
          <p className="font-bold">
            Apakah yakin ingin menghapus "{content}" ?
          </p>
          <Button
            className="px-1 shadow-none bg-green-600 hover:bg-green-400"
            onClick={() => {
              dispatch(fetchDeleteTodo(id)).then(() => navigate(0));
            }}
          >
            <ImCheckmark />
          </Button>
          <Button
            className="px-1 shadow-none bg-red-600 hover:bg-red-400"
            onClick={() => setIsDeleted(!isDeleted)}
          >
            <ImCross />
          </Button>
        </div>
      )}
      <ul className="flex flex-col gap-4 w-full max-h-96 overflow-auto">
        {todos.map((todo) => {
          return (
            <li className="flex gap-1 items-center" key={todo.id}>
              <p className="flex-1 bg-slate-400 text-white py-1 ps-3 rounded shadow-md">
                {todo.content}
              </p>
              <Button
                type="button"
                className="py-2 bg-green-600 hover:bg-green-400 shadow-green-600"
                onClick={() =>
                  dispatch(
                    setTodoUpdate({ id: todo.id, content: todo.content })
                  )
                }
              >
                <BiSolidEditAlt />
              </Button>
              <Button
                type="button"
                className="py-2 bg-red-600 hover:bg-red-400 shadow-red-600"
                onClick={() => {
                  setIsDeleted(!isDeleted);
                  dispatch(
                    setTodoDelete({ id: todo.id, content: todo.content })
                  );
                }}
              >
                <MdDelete />
              </Button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListTodo;
