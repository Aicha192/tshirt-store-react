import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [remember, setRemember] = useState(false);

  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="bg-white p-8 rounded-lg w-[400px] space-y-5">
      <h2 className="text-2xl font-bold">Login</h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border rounded"
      />
      <div className="relative w-full max-w-sm">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        className="w-full p-3 border rounded focus:outline-none"
      />
      <button type="button" onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="remember"
          checked={remember}
          onChange={() => setRemember(!remember)}
          className="w-4 h-4 accent-black"
        />
        <label htmlFor="remember" className="text-sm text-gray-600">
          Remember me
        </label>
      </div>
      <button className="w-full bg-black text-white py-3 rounded">Login</button>

      <p className="text-sm">
        Don't have an account?
        <Link to="/auth/register" className="underline ml-2 text-purple-500">
          Sign up
        </Link>
      </p>
    </div>
  );
}
