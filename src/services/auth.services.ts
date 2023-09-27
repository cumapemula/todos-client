import axios from "axios";

export const login = async (data: object) => {
  try {
    const response = await axios.post(
      "https://todos-service-production.up.railway.app/auth/login",
      data
    );
    localStorage.setItem('token', response.data.access_token)
    return response.data;
  } catch (error) {
    return error
  }
};

export const register = async (data: object) => {
  try {
    const response = await axios.post(
      "https://todos-service-production.up.railway.app/users",
      data
    );
    return response.data
  } catch (error) {
    return error
  }
};