"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { toast } from "react-toastify";
const LogInPage = () => {
 const onSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const user = Object.fromEntries(formData);

  const { data, error } = await authClient.signIn.email({
    email: user.email,
    password: user.password,
  
  });

  if (data) {
    toast.success("Login successful 🎉");
    
    setTimeout(() => {
      window.location.href = "/";
    }, 800);
  } else {
    toast.error(error?.message || "Login failed ❌");
  }

  console.log("Data Here", data, error);
};
  return (
    <div className=" mx-auto p-10 w-full max-w-md">
      <h2 className="text-center text-4xl font-bold text-indigo-500 ">
     Please Login
      </h2>
      <Form
        onSubmit={onSubmit}
        className="flex w-full flex-col border border-zinc-300 p-5 rounded-lg shadow-lg gap-4 bg-slate-300 mt-8">
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}>
          <Label>Email</Label>
          <Input placeholder="Enter your Email" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}>
          <Label>Password</Label>
          <Input placeholder="Enter your Password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2 justify-between">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LogInPage;
