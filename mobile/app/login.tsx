import { useContext, useState } from "react";
import { Dimensions, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { AuthContext } from "@/context/AuthContext";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/button";
import { Input } from "@/components/Input";
import { Feather } from "@expo/vector-icons";

const LoginScreen = () => {
    const auth = useContext(AuthContext);
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const router = useRouter();
    const [passView, setPassView] = useState<boolean>(true)
    if (!auth) return null; // Ensure auth is not undefined

    const handleLogin = () => {
        auth.setLogin(true);
        auth.setUser({ id: 1, name: "Aman Chauhan", email: "aman@example.com" });
        router.replace("/(screens)/(tabs)"); // Redirect after login
    };

    return (
        <View className="flex-1 justify-center gap-3 items-center">
            <ThemedText type='title'>Login</ThemedText>
            <View className="flex gap-2" style={{ width: Dimensions.get('window').width - 80 }}>
                <ThemedText>username</ThemedText>
                <Input onChangeText={(val) => setUsername(val)} placeholder="username" />
            </View>
            <View className="flex gap-2" style={{ width: Dimensions.get('window').width - 80 }}>
                <ThemedText>Password</ThemedText>
                <Input onChangeText={(val) => setPassword(val)} secureTextEntry={passView} placeholder="Password" postChild={<Feather onPress={() => setPassView(!passView)} name={passView ? "eye-off" : 'eye'} size={18} color="white" />} />
            </View>
            <View className="" style={{ width: Dimensions.get('window').width - 80 }}>
                <Button onPress={handleLogin} className="w-full p-3 py-2 text-center">LOGIN</Button>
            </View>
            <View className="" style={{ width: Dimensions.get('window').width - 80 }}>
                <ThemedText>Don't have a account? <Link href={'/register'} className="text-green-600 ml-3">Register here</Link></ThemedText>
            </View>
        </View>
    );
};

export default LoginScreen;
