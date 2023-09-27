import axios from "axios";
import jwtDecode from "jwt-decode";

interface Decode {
  sub: number;
  iat: number;
  exp: number;
}

export const getUsersById = async (token: string) => {
  const decoded: Decode = jwtDecode(token)
  const id = decoded.sub
  try {
    const response = await axios.get(
      `https://todos-service-production.up.railway.app/users/${id}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
