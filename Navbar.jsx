import { NavLink } from "react-router-dom"

console.log("NAVBAR COMPONENT RENDERED")

const baseLink =
  "text-sm transition cursor-pointer"

const inactiveLink =
  "text-gray-600 hover:text-gray-900"

const activeLink =
  "text-green-600 font-medium relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-green-600"

export default function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/bitgrader-final.png"
            className="h-14 w-auto"
            alt="BitGrader logo"
          />
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : inactiveLink}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : inactiveLink}`
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/why-us"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : inactiveLink}`
            }
          >
            Why Us?
          </NavLink>

          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : inactiveLink}`
            }
          >
            Contacts
          </NavLink>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4 text-sm">
          <NavLink
            to="/signup"
            className="text-green-600 hover:underline"
          >
            Sign Up
          </NavLink>

          <NavLink
            to="/login"
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
          >
            Sign In
          </NavLink>
        </div>

      </div>
    </nav>
  )
}
