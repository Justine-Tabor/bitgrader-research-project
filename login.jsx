import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useNavigate, NavLink } from "react-router-dom"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      {/* Card */}
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
              alt="Login Illustration"
              className="max-w-xs"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="p-10 flex flex-col justify-center">

          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition mb-6"
          >
            ← Back
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2 justify-center mb-6">
            <img
              src="/src/assets/bitgrader-final.png"
              alt="BitGrader"
              className="h-14 w-auto"
            />
          </div>

          <h3 className="text-2xl font-semibold text-center mb-8">
            Log In
          </h3>

          {/* Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

            <div>
              <label className="text-sm text-gray-600">
                Email / Username
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="mt-1 w-full rounded-full bg-gray-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="text-sm text-gray-600">
                Password
              </label>

              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-full bg-gray-100 px-4 py-3 pr-12 text-sm
                             focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                {/* Eye toggle */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2
                             text-gray-500 hover:text-green-600 transition"
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>

              <div className="text-right mt-1">
                <NavLink
                  to="/forgot-password"
                  className="text-xs text-gray-400 hover:text-green-500"
                >
                  Forgot password?
                </NavLink>
              </div>
            </div>

            <button
              type="submit"
              onClick={() => navigate("/dashboard/student")} //For by passing the Log In, solely for debugging
              className="w-full bg-teal-500 text-white py-3 rounded-full hover:bg-teal-600 transition font-medium"
            >
              Log In
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <NavLink
              to="/signup"
              className="text-green-500 font-medium hover:underline"
            >
              Sign Up
            </NavLink>
          </p>

        </div>
      </div>
    </div>
  )
}
