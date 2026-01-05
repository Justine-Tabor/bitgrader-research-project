import { NavLink, useNavigate } from "react-router-dom"
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  Inbox,
  User,
  LogOut,
} from "lucide-react"

export default function Sidebar() {
  const navigate = useNavigate()

  return (
    <aside className="w-52 bg-white border-r min-h-screen flex flex-col">

      {/* Logo */}
      <div className="py-6 flex justify-center">
        <img
          src="/src/assets/bitgrader-final.png"
          alt="BitGrader"
          className="h-12"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {/* ✅ FIXED */}
        <SidebarLink to="/dashboard" icon={LayoutDashboard} label="Dashboard" />
        <SidebarLink to="/dashboard/courses" icon={BookOpen} label="Courses" /> 
        <SidebarLink to="/dashboard/calendar" icon={Calendar} label="Calendar" />
        <SidebarLink to="/dashboard/inbox" icon={Inbox} label="Inbox" />
        <SidebarLink to="/dashboard/profile" icon={User} label="Profile" />
      </nav>

      {/* Logout */}
      <div className="px-3 pb-6">
        <button
          onClick={() => navigate("/login")}
          className="
            w-full flex items-center gap-3 px-4 py-2.5
            rounded-lg text-sm text-red-500
            hover:bg-red-50 hover:text-red-600
            transition-all duration-200
          "
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  )
}

/* Sidebar NavLink */
function SidebarLink({ to, icon: Icon, label }) {
  return (
    <NavLink
      to={to}
      end={to === "/dashboard"}  
      className={({ isActive }) =>
        `
        group w-full flex items-center gap-3
        px-4 py-2.5 rounded-lg text-sm
        cursor-pointer
        transition-all duration-200
        ${
          isActive
            ? "bg-green-50 text-green-600 font-medium border-l-4 border-green-500"
            : "text-gray-600 hover:bg-gray-100 hover:text-green-600 hover:translate-x-1"
        }
        `
      }
    >
      <Icon
        size={18}
        className="transition-colors duration-200 group-hover:text-green-600"
      />
      <span>{label}</span>
    </NavLink>
  )
}
