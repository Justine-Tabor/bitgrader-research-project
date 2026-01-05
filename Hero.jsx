import { NavLink } from "react-router-dom"

export default function Hero() {
  return (
    <section className="px-10 mt-8">
      <div className="max-w-7xl mx-auto bg-green-50 rounded-3xl p-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div>
          <h1 className="text-4xl font-semibold text-gray-900 leading-snug">
            Become part of the <br />
            BitGrader community and <br />
            help redefine how learning is measured.
          </h1>

          <p className="mt-6 text-gray-600 max-w-md text-sm leading-relaxed">
            We are building tools that empower students, support educators,
            and elevate the quality of digital education. Join us as we push
            the boundaries of what’s possible in modern grading and assessment.
          </p>

          <NavLink
            to="/login"
            className="inline-block mt-8 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
          >
            Get Started
          </NavLink>
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          <img
            src="/src/assets/hero-illustration.png"
            className="max-w-md w-full"
            alt="Learning"
          />
        </div>

      </div>
    </section>
  )
}
