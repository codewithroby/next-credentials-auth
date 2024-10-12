"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ImSpinner9 } from "react-icons/im";
import { UserRoleType } from "@/types/auth/roles";

export const SetRoleForm = ({
  setRole,
  role,
}: {
  setRole: () => Promise<void>;
  role: UserRoleType;
}) => {
  const router = useRouter();
  const form = useForm();

  const onSubmit = async () => {
    await setRole().then(() => {
      router.refresh();
    });
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Button
            type="submit"
            className="w-full uppercase relative"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <ImSpinner9 className="size-5 animate-spin" />
            ) : (
              <span>{role}</span>
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};
