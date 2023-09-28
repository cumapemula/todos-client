import axios from "axios";

interface DataTodo {
  id?: number;
  authorId?: number;
  content: string;
}


export const createTodo = async (data: DataTodo) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(
      "https://todos-service-production.up.railway.app/todos",
      data,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error
  }
};

export const updateTodo = async (data: DataTodo) => {
  const {id, content} = data;
  const token = localStorage.getItem("token");
  try {
    const response = await axios.patch(
      `https://todos-service-production.up.railway.app/todos/${id}`,
      {
        content,
      },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
      );
      return response.data;
  } catch (error) {
    return error
  }
};

export const deleteTodo = async (id: number) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.delete(
      `https://todos-service-production.up.railway.app/todos/${id}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error
  }
};
