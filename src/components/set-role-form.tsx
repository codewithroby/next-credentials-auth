"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ImSpinner9 } from "react-icons/im";
import { UserRoleType } from "@/types/auth/roles";
import { cn } from "@/utils/class-name";
import { USER_ROLES } from "@/constants/roles";

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
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1">
          <Button
            type="submit"
            className={cn("w-full uppercase relative", {
              "bg-green-600 hover:bg-green-600/90": role === USER_ROLES.USER,
              "bg-sky-600 hover:bg-sky-600/90": role === USER_ROLES.MODERATOR,
              "bg-indigo-600 hover:bg-indigo-600/90": role === USER_ROLES.ADMIN,
            })}
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
