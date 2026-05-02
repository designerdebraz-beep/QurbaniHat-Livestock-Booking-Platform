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

export default function LoginPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: '/',
    });

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
    <div className="flex min-h-screen items-center justify-center p-4">
      {/* 
        Changed w-125 to w-full with a max-width (max-w-md). 
        Added p-6 for better mobile spacing.
      */}
      <Card className="border mx-auto w-full max-w-md py-8 px-6 shadow-lg">
        <h1 className="text-center text-2xl font-bold mb-6">Login</h1>

        {/* 
          Removed fixed w-96. The form now fills the container 
          but respects the Card's max-width.
        */}
        <Form className="flex w-full flex-col gap-6" onSubmit={onSubmit}>
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

          {/* Buttons wrap on very small screens if necessary */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Button 
              type="submit" 
              className="flex-1 bg-green-600 rounded-full text-white md:py-6 py-3 w-full"
            >
              <Check />
              Submit
            </Button>
            <Button 
              type="reset" 
              variant="secondary" 
              className="rounded-full md:py-6 py-3 w-full"
            >
              Reset
            </Button>
          </div>
        </Form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">or</span>
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