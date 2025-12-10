"use client";

import authApi from "@/apis/auth/auth";
import { ISignUpRequest } from "@/apis/auth/auth-req.type";
import AppIcon from "@/components/AppIcon";
import InputControl from "@/components/InputControl";
import { signUpSchema, SignUpSchema } from "@/lib/schemas/auth";
import { addToast, Button, Checkbox, Divider, Form, Link } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function SignUpPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = React.useState(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  const formMethods = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: undefined,
    },
  });

  const signUpMutation = useMutation({
    mutationFn: (body: ISignUpRequest) => authApi.signUp(body),
  });

  const onSubmit: SubmitHandler<SignUpSchema> = (data) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, terms, ...reqData } = data;

    signUpMutation.mutate(reqData, {
      onSuccess: () => {
        addToast({
          title: "Account Created",
          description:
            "Your account has been created successfully! Please log in.",
          color: "success",
        });
        router.push("/sign-in");
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (error: any) => {
        const errorMessage = error.response?.data?.message;
        addToast({
          title: "Sign Up Failed",
          description: errorMessage || "An error occurred during sign up.",
          color: "danger",
        });
      },
    });
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="rounded-large flex w-full max-w-sm flex-col gap-4">
        <div className="flex flex-col items-center pb-6">
          <AppIcon size={60} />
          <p className="text-xl font-medium">Welcome</p>
          <p className="text-small text-default-500">
            Create an account to get started
          </p>
        </div>
        <Form
          className="flex w-full flex-col gap-3"
          validationBehavior="native"
          onSubmit={formMethods.handleSubmit(onSubmit)}
        >
          <div className="flex w-full flex-col">
            <InputControl<SignUpSchema>
              register={formMethods.register}
              isRequired
              classNames={{
                base: "-mb-[2px]",
                inputWrapper:
                  "rounded-b-none data-[hover=true]:z-10 group-data-[focus-visible=true]:z-10",
              }}
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
              type="text"
              variant="bordered"
              isInvalid={!!formMethods.formState.errors.fullName}
              errorMessage={formMethods.formState.errors.fullName?.message}
            />
            <InputControl<SignUpSchema>
              register={formMethods.register}
              isRequired
              classNames={{
                base: "-mb-[2px]",
                inputWrapper:
                  "rounded-none data-[hover=true]:z-10 group-data-[focus-visible=true]:z-10",
              }}
              label="Email Address"
              name="email"
              placeholder="Enter your email"
              type="email"
              variant="bordered"
              isInvalid={!!formMethods.formState.errors.email}
              errorMessage={formMethods.formState.errors.email?.message}
            />
            <InputControl<SignUpSchema>
              register={formMethods.register}
              isRequired
              classNames={{
                base: "-mb-[2px]",
                inputWrapper:
                  "rounded-none data-[hover=true]:z-10 group-data-[focus-visible=true]:z-10",
              }}
              endContent={
                <button type="button" tabIndex={-1} onClick={toggleVisibility}>
                  {isVisible ? (
                    <Icon
                      className="text-default-400 pointer-events-none text-2xl"
                      icon="solar:eye-closed-linear"
                    />
                  ) : (
                    <Icon
                      className="text-default-400 pointer-events-none text-2xl"
                      icon="solar:eye-bold"
                    />
                  )}
                </button>
              }
              label="Password"
              name="password"
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
              variant="bordered"
              isInvalid={!!formMethods.formState.errors.password}
              errorMessage={formMethods.formState.errors.password?.message}
            />
            <InputControl<SignUpSchema>
              register={formMethods.register}
              isRequired
              classNames={{
                inputWrapper: "rounded-t-none",
              }}
              endContent={
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={toggleConfirmVisibility}
                >
                  {isConfirmVisible ? (
                    <Icon
                      className="text-default-400 pointer-events-none text-2xl"
                      icon="solar:eye-closed-linear"
                    />
                  ) : (
                    <Icon
                      className="text-default-400 pointer-events-none text-2xl"
                      icon="solar:eye-bold"
                    />
                  )}
                </button>
              }
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm your password"
              type={isConfirmVisible ? "text" : "password"}
              variant="bordered"
              isInvalid={!!formMethods.formState.errors.confirmPassword}
              errorMessage={
                formMethods.formState.errors.confirmPassword?.message
              }
            />
          </div>

          <div className="py-4">
            <Checkbox
              isRequired
              size="sm"
              isInvalid={!!formMethods.formState.errors.terms}
              {...formMethods.register("terms")}
            >
              I agree with the&nbsp;
              <Link className="relative z-1" href="#" size="sm">
                Terms
              </Link>
              &nbsp; and&nbsp;
              <Link className="relative z-1" href="#" size="sm">
                Privacy Policy
              </Link>
            </Checkbox>
            {formMethods.formState.errors.terms && (
              <p className="text-tiny text-danger mt-1">
                {formMethods.formState.errors.terms.message}
              </p>
            )}
          </div>

          <Button
            color="primary"
            type="submit"
            isLoading={signUpMutation.isPending}
            className="w-full"
          >
            Sign Up
          </Button>
        </Form>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="text-tiny text-default-500 shrink-0">OR</p>
          <Divider className="flex-1" />
        </div>
        <div className="flex flex-col gap-2">
          <Button
            startContent={<Icon icon="flat-color-icons:google" width={24} />}
            variant="bordered"
          >
            Sign Up with Google
          </Button>
          <Button
            startContent={
              <Icon className="text-default-500" icon="fe:github" width={24} />
            }
            variant="bordered"
          >
            Sign Up with Github
          </Button>
        </div>
        <p className="text-small text-center">
          Already have an account?&nbsp;
          <Link href="/sign-in" size="sm">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
