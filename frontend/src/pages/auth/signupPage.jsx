import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import InputField from "../../components/auth/InputField";

function SignUpPage() {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleInputChange} icon={<Mail size={20} />} />
                    <InputField label="Username" type="text" name="username" value={formData.username} onChange={handleInputChange} icon={<User size={20} />} />
                    <InputField
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        icon={<Lock size={20} />}
                        toggleIcon={showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        onToggle={() => setShowPassword(!showPassword)}
                    />
                    <InputField
                        label="Confirm Password"
                        type={showPasswordConfirm ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        icon={<Lock size={20} />}
                        toggleIcon={showPasswordConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                        onToggle={() => setShowPasswordConfirm(!showPasswordConfirm)}
                    />
                    <button className="w-full bg-gray-600 text-white py-3 rounded-xl hover:bg-gray-700 transition shadow-md cursor-pointer">Sign Up</button>
                </form>
                <p className="text-center text-sm mt-3">
                    Already have an account? <Link to="/login" className="text-blue-600 hover:underline cursor-pointer">Login</Link>
                </p>
            </div>
        </div>
    );
}
export default SignUpPage;
