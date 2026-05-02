"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (!error) {
      router.push("./");
    }
    if (error) {
      console.error("Signup error:", error);
    }
  };

  const handleGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    /* Wrapper to center the card on the screen */
    <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* 
         Changed w-125 to w-full max-w-md. 
         This makes it full-width on mobile and fixed-width on desktop. 
      */}
      <Card className="border w-full max-w-md py-8 px-4 sm:px-10 shadow-sm">
        <h1 className="text-center text-2xl font-bold mb-6">Register</h1>

        {/* Removed fixed w-96, using w-full to fill the card container */}
        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text" className="w-full">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" type="text" className="w-full">
            <Label>Image URL</Label>
            <Input placeholder="Image URL" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="w-full"
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
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          {/* Button container: stacks on mobile, side-by-side on tablet/desktop */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Button
              type="submit"
              className="flex-1 bg-green-600 rounded-full sm:rounded-4xl text-white md:py-6 py-3 w-full"
            >
              <Check />
              Submit
            </Button>
            <Button
              type="reset"
              variant="secondary"
              className="flex-1 rounded-full sm:rounded-4xl md:py-6 py-3 w-full"
            >
              Reset
            </Button>
          </div>
        </Form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">or</span>
          </div>
        </div>

        <button
          onClick={handleGoogle}
          className="w-full cursor-pointer bg-green-600 hover:bg-green-700 transition-colors rounded-full text-white py-3 font-medium"
        >
          Sign in with Google
        </button>
      </Card>
    </div>
  );
}