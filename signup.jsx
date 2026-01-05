import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { User, GraduationCap } from "lucide-react"

export default function Signup() {
  const [role, setRole] = useState(null)
  const navigate = useNavigate()

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
          <div className="flex items-center gap-2 justify-center mb-6">
            <img
              src="/src/assets/bitgrader-final.png"
              alt="BitGrader"
              className="h-14 w-auto"
            />
          </div>

          <h3 className="text-2xl font-semibold text-center mb-8">
            Sign Up
          </h3>

          {/* Role Selection */}
          <div className="space-y-4">

            {/* Student */}
            <button
              onClick={() => setRole("student")}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl border-2 transition
                ${
                  role === "student"
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 hover:border-green-400"
                }`}
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-500 text-white">
                <User size={20} />
              </div>
              <span className="font-medium text-gray-800">
                Student
              </span>
            </button>

            {/* Teacher */}
            <button
              onClick={() => setRole("teacher")}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl border-2 transition
                ${
                  role === "teacher"
                    ? "border-yellow-400 bg-yellow-50"
                    : "border-gray-200 hover:border-yellow-400"
                }`}
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-400 text-white">
                <GraduationCap size={20} />
              </div>
              <span className="font-medium text-gray-800">
                Teacher
              </span>
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={() => navigate("/login")}
              className="text-sm text-gray-500 hover:text-green-600"
            >
              Back
            </button>

            <button
              disabled={!role}
              onClick={() => navigate(`/signup/${role}`)}
              className={`px-8 py-3 rounded-full text-white transition
                ${
                  role
                    ? "bg-teal-500 hover:bg-teal-600"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
