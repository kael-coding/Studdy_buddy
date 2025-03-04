import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import InputField from "../../components/auth/InputField";
import { Link } from "react-router-dom";

function ResetPassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "password") setPassword(value);
        if (name === "confirmPassword") setConfirmPassword(value);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Reset Password</h2>
                <form className="space-y-4">
                    <InputField
                        label="New Password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        icon={<Lock size={20} />}
                        toggleIcon={showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        onToggle={() => setShowPassword(!showPassword)}
                    />
                    <InputField
                        label="Confirm New Password"
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleInputChange}
                        icon={<Lock size={20} />}
                        toggleIcon={showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
                    />
                    <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition shadow-md mt-4">
                        Reset Password
                    </button>
                </form>
                <p className="text-center text-sm mt-3">
                    Back to <Link to="/login" className="text-blue-600 hover:underline cursor-pointer">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default ResetPassword;