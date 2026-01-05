import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Courses from "./components/Courses"

import Login from "./pages/login"
import Signup from "./pages/signup"
import SignupStudent from "./pages/signupStudent"
import SignupTeacher from "./pages/signupTeacher"

import DashboardLayout from "./layouts/DashboardLayout"
import DashboardStudent from "./pages/dashboardStudent"
import CalendarStudent from "./pages/CalendarStudent"
import ProfileStudent from "./pages/ProfileStudent"
import Inbox from "./pages/Inbox"   // ✅ ADD THIS
import CoursesStudent from "./pages/CoursesStudent"
import CourseDetail from "./pages/CourseDetail"


export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <Courses />
          </>
        }
      />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/student" element={<SignupStudent />} />
      <Route path="/signup/teacher" element={<SignupTeacher />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardStudent />} /> {/* /dashboard */}
        <Route path="student" element={<DashboardStudent />} />
        <Route path="courses/:courseId" element={<CourseDetail />} />
        <Route path="courses" element={<CoursesStudent />} />
        <Route path="calendar" element={<CalendarStudent />} />
        <Route path="inbox" element={<Inbox />} />     {/* ✅ /dashboard/inbox */}
        <Route path="profile" element={<ProfileStudent />} />
      </Route>
    </Routes>
  )
}
