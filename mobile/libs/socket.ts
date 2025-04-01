import { io } from "socket.io-client";
import { server_url } from "@/constants/server"
export const socket = io(server_url, {
    transports: ["websocket"], // Use WebSocket for better performance
    withCredentials: true,
    autoConnect: false, // Prevent auto-connecting until login
});

export const connectSocket = () => {
    if (!socket.connected) {
        socket.connect();
    }
};

export const disconnectSocket = () => {
    if (socket.connected) {
        socket.disconnect();
    }
};
