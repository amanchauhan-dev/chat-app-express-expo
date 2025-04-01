import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserType = {
    id: string,
    name: string
    username:string;
    avatar?: string;
    email: string;
    create_at: string;
    updated_at: string;
    bio?: string;
}

export type AuthSliceType = {
    user: UserType | null;
    token: string | null;
    isAuthenticated: boolean
}

const initialState: AuthSliceType = {
    user: null,
    token: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthSliceType>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
