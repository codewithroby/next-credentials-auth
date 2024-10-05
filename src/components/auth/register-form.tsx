"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { registerSchema } from "@/schemas/auth/register";
import { type RegisterSchemaType } from "@/types/auth/register";
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
import { register } from "@/app/actions/auth";

export const RegisterForm = () => {
  const form = useForm<z.infer<RegisterSchemaType>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onBlur",
    reValidateMode: "onBlur",
    shouldFocusError: false,
  });

  const onSubmit = async (values: z.infer<RegisterSchemaType>) => {
    await register(values);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                {form.formState.isSubmitted && <FormMessage />}
              </FormItem>
            )}
          />
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
          <Button type="submit" className="w-full uppercase">
            Create Account
          </Button>
        </form>
      </Form>
      <span className="text-center text-sm">Already have an account?</span>
    </>
  );
};
