"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProgressBarLink } from "@/context/progress-bar";
import { useClientOnly } from "@/hooks/avoid-hydration";
import { Skeleton } from "@/components/ui/skeleton";

export const authSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type AuthSchema = z.infer<typeof authSchema>;

export default function LoginForm() {
  const isClient = useClientOnly();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthSchema>({ resolver: zodResolver(authSchema) });

  const onSubmit = (data: AuthSchema) => {
    console.log("Logging in...", data);
  };

  if (!isClient) return <Skeleton className="w-[400px] h-[500px]" />;
  return (
    <Card className="w-[400px] shadow-lg md:p-6  max-md:!bg-transparent max-md:!border-0">
      <CardHeader className="text-xl font-semibold text-center">Login</CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="Email" {...register("email")} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <Input type="password" placeholder="Password" {...register("password")} />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <Button type="submit" className="w-full">Login</Button>
        </form>
      </CardContent>
      <CardFooter className="text-center text-sm">
        <p>
          Don&apos;t have an account? <ProgressBarLink href="/signup" className="text-blue-500">Sign Up</ProgressBarLink>
        </p>
      </CardFooter>
    </Card>
  )
}
