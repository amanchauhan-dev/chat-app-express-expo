import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { RootState } from '../redux'

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}


// Define a type for the slice state
interface AuthState {
    login: boolean;
    token: string;
    user: User | null;
}

// Define the initial state using that type
const initialState: AuthState = {
    login: false,
    token: '',
    user: null,
}

export const AuthSlice = createSlice({
    name: 'Auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<{ token: string; user: User }>) => {
            state.login = true
            state.token = action.payload.token
            state.user = action.payload.user
        },
        setLogout: (state) => {
            state.login = false
            state.token = ''
            state.user = null
        },
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload
        },
    },
})

export const {setLogin,setLogout,setUser } = AuthSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.Auth.value

export default AuthSlice.reducer