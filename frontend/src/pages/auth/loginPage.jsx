import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Loader } from "lucide-react";
import InputField from "../../components/auth/InputField";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const { login, isLoading, error } = useAuthStore()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData.email, formData.password);
        } catch (error) {
            throw error;
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-10 rounded-2xl shadow-lg w-[430px]">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <InputField
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        icon={<Mail size={20} />}
                    />
                    <InputField
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                        icon={<Lock size={20} />}
                        toggleIcon={showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        onToggle={() => setShowPassword(!showPassword)}
                    />
                    <Link to="/forgot-password" className="block text-right text-sm text-blue-600 hover:underline cursor-pointer mt-3">
                        Forgot Password?
                    </Link>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button className="w-full bg-gray-600 text-white py-3 rounded-xl hover:bg-gray-700 transition shadow-md mt-4 cursor-pointer">
                        {isLoading ? <Loader className="w-6 h-6" /> : "Login"}
                    </button>
                </form>
                <p className="text-center text-sm mt-3">
                    Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline cursor-pointer">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
