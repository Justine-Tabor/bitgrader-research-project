import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 px-10 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
