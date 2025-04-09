"use client";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProgressBarLink } from "@/context/progress-bar";
import { useClientOnly } from "@/hooks/avoid-hydration";
import { Skeleton } from "@/components/ui/skeleton";
import { useSignup } from "@/hooks/use-signup";


export default function RegisterForm() {
  const isClient = useClientOnly();
  const {
    register,
    handleSubmit,
    errors,
    loading,
    onSubmit
  } = useSignup();

  if (!isClient)
    return <Skeleton className="w-[400px] h-[500px]" />

  return (
    <Card className="w-[400px] shadow-lg md:p-6 max-md:!bg-transparent max-md:!border-0">
      <CardHeader className="text-xl font-semibold text-center">Sign Up</CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="Name" {...register("name")} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <Input placeholder="Email" {...register("email")} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <Input placeholder="Username" {...register("username")} />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

          <Input type="password" placeholder="Password" {...register("password")} />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <Input type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
          )}

          <Button type="submit" disabled={loading} className="w-full">Sign Up</Button>
        </form>
      </CardContent>
      <CardFooter className="text-center text-sm">
        <div>
          Already have an account? <ProgressBarLink href="/login" className="text-blue-500">Login</ProgressBarLink>
        </div>
      </CardFooter>
    </Card>
  )
}
