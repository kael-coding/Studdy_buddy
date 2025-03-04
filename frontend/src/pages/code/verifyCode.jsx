import { useState } from "react";
import { Hash } from "lucide-react";
import { Link } from "react-router-dom";

function VerifyCode() {
    const [code, setCode] = useState(new Array(6).fill(""));

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.match(/^[0-9]$/) || value === "") {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Enter Verification Code</h2>
                <p className="text-center text-gray-600 mb-4">
                    We've sent a verification code to your email. Please enter it below.
                </p>
                <div className="flex justify-center gap-2">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            className="w-12 h-12 text-center text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    ))}
                </div>
                <button className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition mt-4">
                    Verify Code
                </button>
                <p className="text-center text-sm mt-2">
                    Didn't receive the code? <span className="text-blue-600 hover:underline">Resend</span>
                </p>
            </div>
        </div>
    );
}

export default VerifyCode;