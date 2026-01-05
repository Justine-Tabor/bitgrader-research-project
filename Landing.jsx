import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/bitgrader.png";
import hero from "../assets/hero-illustration.png";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-12 py-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="BitGrader" className="w-8 h-8" />
          <span className="font-semibold text-lg">BitGrader</span>
        </div>

        <ul className="flex items-center gap-8 text-sm text-gray-700">
          <li className="cursor-pointer hover:text-bitgreen">Home</li>
          <li className="cursor-pointer hover:text-bitgreen">Courses</li>
          <li className="cursor-pointer hover:text-bitgreen">Why Us?</li>
          <li className="cursor-pointer hover:text-bitgreen">Contacts</li>
        </ul>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm text-bitgreen font-medium"
          >
            Sign In
          </Link>
          <button className="bg-bitgreen text-white px-5 py-2 rounded-full text-sm">
            Sign Up
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="mx-12 mt-6 bg-green-50 rounded-3xl px-16 py-14 flex items-center justify-between">

        {/* TEXT */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
            Become part of the BitGrader community and help redefine how learning is measured.
          </h1>

          <p className="text-gray-600 mb-8">
            We’re building tools that empower students, support educators, and elevate the quality of digital education.
            Join us as we push the boundaries of what’s possible in modern grading and assessment.
          </p>

          <button className="bg-bitgreen text-white px-6 py-3 rounded-full font-medium">
            Get Started
          </button>
        </div>

        {/* IMAGE */}
        <img
          src={hero}
          alt="Learning Illustration"
          className="max-w-md"
        />
      </section>

      {/* COURSES SECTION */}
      <section className="px-12 mt-20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Explore top courses
            </h2>
            <p className="text-gray-600 text-sm">
              Find expertly crafted lessons that guide you from fundamentals to mastery.
            </p>
          </div>

          <button className="border border-bitgreen text-bitgreen px-4 py-2 rounded-full text-sm">
            View all courses
          </button>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex gap-6 text-sm text-gray-600">
          <span className="font-medium text-gray-900 border-b-2 border-bitgreen pb-1">
            All
          </span>
          <span>Web Developing</span>
          <span>Digital Marketing</span>
          <span>Web Design</span>
          <span>Programming</span>
        </div>
      </section>
    </div>
  );
};

export default Landing;
