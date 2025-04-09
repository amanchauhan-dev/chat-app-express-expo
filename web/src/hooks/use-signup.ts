import api from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

// validation

export const registerSchema = z
    .object({
        name: z.string().min(2, "Name must be at least 2 characters long"),
        email: z.string().email("Invalid email address"),
        username: z.string().min(3, "Username must be at least 3 characters long"),
        password: z.string().min(6, "Password must be at least 6 characters long"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords must match",
        path: ["confirmPassword"],
    });

export type RegisterSchema = z.infer<typeof registerSchema>;


// hook
export const useSignup = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) });


    // submit function
    const onSubmit = async (formData: RegisterSchema) => {
        setLoading(true)
        console.log(process.env.NEXT_PUBLIC_SERVER_URL);
        try {
            const { data } = await api.post("/auth/register", formData)
            console.log('data', data);
        } catch (error: any) {
            console.log('error',error);
            toast.error('Something went wrong, please try again latter')
        } finally {
            setLoading(false)
        }
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
        setValue, setLoading,
        loading
    }
}