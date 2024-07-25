/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SigninValidation } from "@/lib/validation";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useSignInAccount } from "@/lib/react-query/queriesAndMutations";
import Loader from "@/components/shared/Loader";

const SigninForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { mutateAsync: signInUser, isPending: isSigning } = useSignInAccount();

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2: Defin submit handler
  async function onSubmit(values: z.infer<typeof SigninValidation>) {
    // Ensure no active session exists before sign-in
    const user = await signInUser(values);
    if (user) return navigate("/");
    return toast({ title: "User Not Found!" });
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 my-8 flex-center flex-col">
        <img src="/assets/images/logo.svg" alt="logo" />
        <h2 className="h3-bold md:h2-bold sm:-pt-1">Login to Your account</h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          Welcome back to
          <span className="text-lime-400 mx-0.5">car-insta,</span> Please enter
          your detail..
        </p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-1 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
                <FormMessage className="text-red text-xs italic leading-tight" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage className="text-red text-xs italic leading-tight" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="px-6 py-3 my-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            {isSigning ? (
              <div className="flex gap-2">
                <Loader />
                Signing ...
              </div>
            ) : (
              "Login"
            )}
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2">
            Don&apos;t have an account ?
            <Link
              to="/sign-up"
              className="text-primary-500 text-small-semibold ml-1"
            >
              Sign Up
            </Link>
          </p>
          <button
            type="submit"
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            Login as Guest
          </button>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;
