"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { RegisterForm } from "@/components/auth/register-form";

export const AuthDialogButton = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Create Account</Button>
    </DialogTrigger>
    <DialogContent
      className="sm:max-w-[425px]"
      onOpenAutoFocus={(event) => {
        event.preventDefault();
      }}
      onPointerDownOutside={(event) => {
        event.preventDefault();
      }}
    >
      <RegisterForm />
    </DialogContent>
  </Dialog>
);
