import { ActivityIndicator, Dimensions, Text, View } from "react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/button";
import { Input } from "@/components/Input";
import Feather from '@expo/vector-icons/Feather';
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import api from "@/libs/axios";

export const registerSchema = z.object({
    name: z.string().min(4, 'Name must be at least 4 characters long'),
    email: z.string().email('Invalid email address'),
    username: z.string().min(4, 'Username must be at least 4 characters long'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
});
type FormData = z.infer<typeof registerSchema>



const RegisterScreen = () => {
    const { handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema),
        mode: "onChange"
    })
    // view pass
    const [passView, setPassView] = useState<boolean>(true)
    const [conView, setConView] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(false)


    const handleRegister = async (formData: FormData) => {
        setLoading(true)
        try {
            const { data } = await api.post('/auth/register', formData)
            console.log(data);
        } catch (error: any) {
            console.error(error);
        }
        setLoading(false)
    }
    return (
        <View className="flex-1 justify-center gap-3 items-center">
            <ThemedText type='title'>Register</ThemedText>
            {/* name */}
            <View className="flex gap-2" style={{ width: Dimensions.get('window').width - 80 }}>
                <ThemedText>Full Name</ThemedText>
                <Input onChangeText={(val) => setValue('name', val)} placeholder="Full Name" />
                {errors.name && <Text className="text-red-400">{errors.name.message}</Text>}
            </View>
            {/* username */}
            <View className="flex gap-2" style={{ width: Dimensions.get('window').width - 80 }}>
                <ThemedText>username</ThemedText>
                <Input onChangeText={(val) => setValue('username', val)} placeholder="username" />
                {errors.username && <Text className="text-red-400">{errors.username.message}</Text>}
            </View>
            {/* email */}
            <View className="flex gap-2" style={{ width: Dimensions.get('window').width - 80 }}>
                <ThemedText>Email</ThemedText>
                <Input onChangeText={(val) => setValue('email', val)} placeholder="Email" />
                {errors.email && <Text className="text-red-400">{errors.email.message}</Text>}
            </View>
            {/* Password */}
            <View className="flex gap-2" style={{ width: Dimensions.get('window').width - 80 }}>
                <ThemedText>Password</ThemedText>
                <Input onChangeText={(val) => setValue('password', val)} secureTextEntry={passView} placeholder="Password" postChild={<Feather onPress={() => setPassView(!passView)} name={passView ? "eye-off" : 'eye'} size={18} color="white" />} />
                {errors.password && <Text className="text-red-400">{errors.password.message}</Text>}
            </View>
            {/* confirm password */}
            <View className="flex gap-2" style={{ width: Dimensions.get('window').width - 80 }}>
                <ThemedText>Confirm Password</ThemedText>
                <Input onChangeText={(val) => setValue('confirmPassword', val)} secureTextEntry={conView} postChild={<Feather onPress={() => setConView(!conView)} name={conView ? "eye-off" : 'eye'} size={18} color="white" />} placeholder="Confirm Password" />
                {errors.confirmPassword && <Text className="text-red-400">{errors.confirmPassword.message}</Text>}
            </View>
            {/* submit */}
            <View className="" style={{ width: Dimensions.get('window').width - 80 }}>
                {loading ? (
                    <ActivityIndicator size="large" color="blue" />
                ) : <Button onPress={handleSubmit(handleRegister)} className="w-full p-3 py-2 text-center">REGISTER</Button>
                }
            </View>
            <View className="" style={{ width: Dimensions.get('window').width - 80 }}>
                <ThemedText>Already have a account? <Link href={'/login'} className="text-green-600 ml-3">Login</Link></ThemedText>
            </View>
        </View>
    );
};

export default RegisterScreen;
