// src/hooks/useRegisterUser.ts
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../axios";
import { RegisterFormInputs } from "@/validations/registerSchema";

const registerUser = async (data: RegisterFormInputs) => {
  const response = await axiosInstance.post("/users/register", data);
  return response.data;
};

const useRegisterUser = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};

export default useRegisterUser;
