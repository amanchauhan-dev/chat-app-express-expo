import { Dimensions, View } from "react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/button";
import { Input } from "@/components/Input";
import Feather from '@expo/vector-icons/Feather';
import { useState } from "react";
const RegisterScreen = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    // view pass
    const [passView, setPassView] = useState<boolean>(true)
    const [conView, setConView] = useState<boolean>(true)

    const handleRegister = () => {

    }
    return (
        <View className="flex-1 justify-center gap-3 items-center">
            <ThemedText type='title'>Register</ThemedText>
            {/* name */}
            <View className="flex gap-2" style={{ width: Dimensions.get('window').width - 80 }}>
                <ThemedText>Full Name</ThemedText>
                <Input onChangeText={(val) => setName(val)} placeholder="Full Name" />
            </View>
            {/* username */}
            <View className="flex gap-2" style={{ width: Dimensions.get('window').width - 80 }}>
                <ThemedText>username</ThemedText>
                <Input onChangeText={(val) => setUsername(val)} placeholder="username" />
            </View>
            {/* email */}
            <View className="flex gap-2" style={{ width: Dimensions.get('window').width - 80 }}>
                <ThemedText>Email</ThemedText>
                <Input onChangeText={(val) => setEmail(val)} placeholder="Email" />
            </View>
            {/* Password */}
            <View className="flex gap-2" style={{ width: Dimensions.get('window').width - 80 }}>
                <ThemedText>Password</ThemedText>
                <Input onChangeText={(val) => setPassword(val)} secureTextEntry={passView} placeholder="Password" postChild={<Feather onPress={() => setPassView(!passView)} name={passView ? "eye-off" : 'eye'} size={18} color="white" />} />
            </View>
            {/* confirm password */}
            <View className="flex gap-2" style={{ width: Dimensions.get('window').width - 80 }}>
                <ThemedText>Confirm Password</ThemedText>
                <Input onChangeText={(val) => setConfirmPassword(val)} secureTextEntry={conView} postChild={<Feather onPress={() => setConView(!conView)} name={passView ? "eye-off" : 'eye'} size={18} color="white" />} placeholder="Confirm Password" />
            </View>
            {/* submit */}
            <View className="" style={{ width: Dimensions.get('window').width - 80 }}>
                <Button onPress={handleRegister} className="w-full p-3 py-2 text-center">REGISTER</Button>
            </View>
            <View className="" style={{ width: Dimensions.get('window').width - 80 }}>
                <ThemedText>Already have a account? <Link href={'/login'} className="text-green-600 ml-3">Login</Link></ThemedText>
            </View>
        </View>
    );
};

export default RegisterScreen;
