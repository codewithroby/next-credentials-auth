"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ImSpinner9 } from "react-icons/im";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/app/actions/auth";
import { LoginSchemaType } from "@/types/auth/login";
import { loginSchema } from "@/schemas/auth/login";
import Link from "next/link";

export const LoginForm = () => {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    reValidateMode: "onBlur",
    shouldFocusError: false,
  });

  const onSubmit = async (values: LoginSchemaType) => {
    const result = await login(values);
    console.log(result);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@domain.com" {...field} />
                </FormControl>
                {form.formState.isSubmitted && <FormMessage />}
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
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                {form.formState.isSubmitted && <FormMessage />}
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full uppercase relative"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <ImSpinner9 className="size-5 animate-spin" />
            ) : (
              <span>Login</span>
            )}
          </Button>
        </form>
      </Form>
      <Link
        href="/register"
        aria-label="Don't have an account?"
        className="text-center text-xs font-medium uppercase pt-2"
      >
        Don&apos;t have an account?
      </Link>
    </>
  );
};
