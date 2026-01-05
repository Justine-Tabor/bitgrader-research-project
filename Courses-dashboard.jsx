import { useState } from "react"
import { useNavigate } from "react-router-dom"   // ✅ ADD
import JoinCourseModal from "./JoinCourseModal"

export default function CoursesDashboard() {
  const [showJoinModal, setShowJoinModal] = useState(false)
  const navigate = useNavigate()                 // ✅ ADD

  const courses = [
    { id: 1, title: "Software Development 2", code: "CPE 3", color: "bg-slate-600" },
    { id: 2, title: "Embedded System", code: "CPE 3", color: "bg-purple-400" },
    { id: 3, title: "Software Development 3", code: "CPE 3", color: "bg-pink-400" },
  ]

  return (
    <>
      <section className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-lg">Courses</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {courses.map(course => (
            <div
              key={course.id}
              onClick={() => navigate(`/dashboard/courses/${course.id}`)} // ✅ ADD
              className="
                bg-white rounded-xl shadow-sm overflow-hidden
                hover:shadow-md transition cursor-pointer
              "
            >
              <div className={`h-20 ${course.color}`} />

              <div className="p-4">
                <p className="text-sm font-semibold">{course.title}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {course.code}
                </p>
              </div>
            </div>
          ))}

          {/* Join Course */}
          <button
            onClick={() => setShowJoinModal(true)}
            className="
              bg-white rounded-xl border-2 border-dashed border-gray-300
              flex flex-col items-center justify-center
              text-gray-400 hover:border-green-500
              hover:text-green-600 transition
              min-h-[140px]
            "
          >
            <span className="text-3xl leading-none">+</span>
            <span className="font-medium">Join Course</span>
            <span className="text-xs">Enter course code</span>
          </button>

        </div>
      </section>

      {showJoinModal && (
        <JoinCourseModal onClose={() => setShowJoinModal(false)} />
      )}
    </>
  )
}
