// src/pages/Register.tsx

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import {
  RegisterFormInputs,
  registerSchema,
} from "@/validations/registerSchema";
import useRegisterUser from "@/api/auth/useRegisterUser";

const Register = () => {
  // Initialize react-hook-form with zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate: registerUser } = useRegisterUser();
  // Submit handler
  const onSubmit = (data: RegisterFormInputs) => {
    console.log("Form Data:", data);
    registerUser(data);
    // Handle form submission logic here (e.g., API call)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-sm space-y-6 rounded-lg border border-gray-200 p-6 shadow-lg bg-white"
    >
      <h2 className="text-center text-2xl font-bold text-gray-900">
        Create an Account
      </h2>

      {/* Email Input */}
      <div className="grid w-full gap-2">
        <Label htmlFor="email" className="text-gray-700">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
          {...register("email")}
          className="w-full"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Password Input */}
      <div className="grid w-full gap-2">
        <Label htmlFor="password" className="text-gray-700">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          placeholder="Enter your password"
          {...register("password")}
          className="w-full"
        />
        {errors.password && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="default"
        size="lg"
        className="w-full bg-primary text-white hover:bg-primary/90"
      >
        Sign Up
      </Button>

      {/* Login Link */}
      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary underline hover:text-primary/80"
        >
          Log in
        </Link>
      </p>
    </form>
  );
};

export default Register;
