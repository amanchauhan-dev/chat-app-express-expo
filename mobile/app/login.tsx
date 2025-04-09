import { useState } from "react";
import { ActivityIndicator, Dimensions, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/button";
import { Input } from "@/components/Input";
import { Feather } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import api from "@/libs/axios";
import { login, UserType } from "@/libs/store/authSlice";
import { saveToken } from "@/database/secureStorage";
import { saveUserData } from "@/database/authStorage";

const loginSchema = z.object({
    username: z.string({ required_error: 'Username or email is required' }).min(4, 'username is too short'),
    password: z.string({ required_error: "password is required" }),
});

type FormData = z.infer<typeof loginSchema>

const LoginScreen = () => {
    const { handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
        mode: 'onChange'
    });
    const dispatch = useAppDispatch()
    const auth = useAppSelector(s => s.auth)
    const router = useRouter();
    const [passView, setPassView] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(false);

    if (!auth) return null; // Ensure auth is not undefined
    
    const handleLogin = async (formData: FormData) => {
        try {
            setLoading(true)
            const { data } = await api.post('/auth/login', formData)
            await saveUserData(data?.user)
            await saveToken(data?.token)
            dispatch(login({ user: data?.user, token: data?.token, isAuthenticated: true }))
            router.navigate('/(screens)/(tabs)')
        } catch (error: any) {
            console.error(error.message)
        } finally {
            setLoading(false)
        }
    };


    return (
        <View className="flex-1 justify-center gap-3 items-center">
            <ThemedText type='title'>Login</ThemedText>
            <View className="flex gap-2" style={{ width: Dimensions.get('window').width - 80 }}>
                <ThemedText>username</ThemedText>
                <Input onChangeText={(val) => setValue('username', val)} placeholder="username" />
                {errors.username && <Text className="text-red-400">{errors.username.message}</Text>}

            </View>
            <View className="flex gap-2" style={{ width: Dimensions.get('window').width - 80 }}>
                <ThemedText>Password</ThemedText>
                <Input onChangeText={(val) => setValue('password', val)} secureTextEntry={passView} placeholder="Password" postChild={<Feather onPress={() => setPassView(!passView)} name={passView ? "eye-off" : 'eye'} size={18} color="white" />} />
                {errors.password && <Text className="text-red-400">{errors.password.message}</Text>}
            </View>
            <View className="" style={{ width: Dimensions.get('window').width - 80 }}>
                {loading ? (
                    <ActivityIndicator size="large" color="blue" />
                ) : <Button onPress={handleSubmit(handleLogin)} className="w-full p-3 py-2 text-center">LOGIN</Button>
                }
            </View>
            <View className="" style={{ width: Dimensions.get('window').width - 80 }}>
                <ThemedText>Don't have a account? <Link href={'/register'} className="text-green-600 ml-3">Register here</Link></ThemedText>
            </View>
        </View>
    );
};

export default LoginScreen;
