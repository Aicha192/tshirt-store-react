import { Apple, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [accept, setAccept] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  return (
    <div className="bg-white p-8 rounded-lg w-[400px] space-y-5">

      <h2 className="text-2xl font-bold">Create account</h2>

      <div className="grid grid-cols-2 gap-4">
        <input className="p-3 border rounded" placeholder="First name" />
        <input className="p-3 border rounded" placeholder="Last name" />
      </div>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border rounded"
      />
       <div className="relative w-full max-w-sm">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        className="w-full p-3 border rounded"
      />
      <button type="button" onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
       </div>
       <div className='relative'>
      <input
        type={showConfirmPassword ? "text" : "password"}
        placeholder="Confirm your password"
        className="w-full p-3 border rounded"
      />
      <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
       </div>
       <div className="flex items-start gap-2">
  <input
    type="checkbox"
    id="terms"
    checked={accept}
    onChange={() => setAccept(!accept)}
    className="mt-1 w-4 h-4 accent-black"
  />

  <label htmlFor="terms" className="text-sm text-gray-600">
    I agree to the{" "}
    <span className="text-purple-500 font-medium cursor-pointer">
      Terms & Conditions
    </span>
  </label>
</div>
      <button className="w-full bg-black text-white py-3 rounded">
        Create account
      </button>
     <div className="flex items-center gap-4 my-6">
  <div className="flex-1 h-px bg-gray-600"></div>
  <span className="text-sm text-gray-400">
    Or register with
  </span>
  <div className="flex-1 h-px bg-gray-600"></div>
</div>

<div className="flex gap-4">
  <button className="flex-1 border border-gray-600 py-2 flex items-center justify-center
  gap-2 rounded-lg ">
  <img src="" alt="" /> Google
  </button>

  <button className="flex-1 border border-gray-600 py-2 flex items-center justify-center
  gap-2 rounded-lg ">
    <Apple />Apple
  </button>
</div>
      <p className="text-sm">
        Already have an account?
        <Link to="/auth/login" className="underline ml-2 text-purple-400">
          Log in
        </Link>
      </p>

    </div>
  )
}
