import { createContext, Dispatch, SetStateAction, useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

interface AuthContextProps {
    login: boolean;
    setLogin: Dispatch<SetStateAction<boolean>>;
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
    const [login, setLogin] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    return (
        <AuthContext.Provider value={{ login, setLogin, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
