import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react"

export default function SignupStudent() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center bg-green-400 text-white p-10">
          <h2 className="text-3xl font-semibold leading-snug">
            Your progress awaits. <br />
            Log in to continue growing.
          </h2>

          <div className="mt-10">
            <img
              src="/src/assets/login-illustration.png"
              alt="Signup Illustration"
              className="max-w-xs"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="p-10 flex flex-col justify-center">

          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src="/src/assets/bitgrader-final.png"
              alt="BitGrader"
              className="h-14"
            />
          </div>

          <h3 className="text-2xl font-semibold text-center mb-8">
            Sign Up
          </h3>

          {/* Form */}
          <form className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="text-sm text-gray-600">
                Full name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="mt-1 w-full rounded-full bg-gray-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Username */}
            <div>
              <label className="text-sm text-gray-600">
                Username
              </label>
              <input
                type="text"
                placeholder="Choose a username"
                className="mt-1 w-full rounded-full bg-gray-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-600">
                Password
              </label>

              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600"
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm text-gray-600">
                Re-enter password
              </label>

              <div className="relative mt-1">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600"
                >
                  {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="text-sm text-gray-500 hover:text-green-600"
              >
                Back
              </button>

              <button
                type="submit"
                className="px-8 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition font-medium"
              >
                Sign Up
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
