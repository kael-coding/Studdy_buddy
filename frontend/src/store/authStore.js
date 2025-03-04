import { create } from "zustand";
import axios from "axios";


axios.defaults.withCredentials = true;
const API_URL = "http://localhost:5000/api/auth";
export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    isCheckingAuth: true,


    signup: async (email, userName, password) => {
        set({ isLoading: true });
        try {
            const res = await axios.post(`${API_URL}/signup`, { email, userName, password });
            set({ user: res.data.user, isAuthenticated: true, isLoading: false });
        } catch (err) {
            set({ error: err.response.data.message || "Error signing up", isLoading: false });
            throw err;
        }
    },
    login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/login`, { email, password });
            set({
                isAuthenticated: true,
                user: response.data.user,
                error: null,
                isLoading: false,
            });
        } catch (error) {
            set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
            throw error;
        }
    },
    verifyEmail: async (verificationCode) => {
        set({ isLoading: true });
        try {
            const res = await axios.post(`${API_URL}/verify-email`, { code: verificationCode });
            set({ user: res.data.user, isAuthenticated: true, isLoading: false });
        } catch (err) {
            set({ error: err.response.data.message || "Error verifying email", isLoading: false });
            throw err;
        }
    },
    checkAuth: async () => {
        await new Promise((resole) => setTimeout(resole, 1000));
        set({ isCheckingAuth: false, error: null });
        try {
            const res = await axios.get(`${API_URL}/check-auth`);
            set({
                user: res.data.user, isAuthenticated: true, isCheckingAuth: false
            })
        } catch (error) {
            set({ error: error.response.data.message || "Error checking authentication" });

        }
    },
    forgotpassword: async (email) => {
        set({ isLoading: true });
        try {
            await axios.post(`${API_URL}/forgot-password`, { email });
            set({ isLoading: false });
        } catch (error) {
            set({ error: error.response.data.message || "Error sending email", isLoading: false });
            throw error;
        }
    }
}));