import { useState } from "react"
import PageHeader from "../components/PageHeader"
import { useNavigate } from "react-router-dom"

const enrolledCourses = [
  {
    id: 1,
    title: "Software Development 2",
    program: "CPE 3",
    color: "bg-slate-600",
  },
  {
    id: 2,
    title: "Embedded System",
    program: "CPE 3",
    color: "bg-purple-400",
  },
  {
    id: 3,
    title: "Software Development 3",
    program: "CPE 3",
    color: "bg-pink-400",
  },
]

export default function CoursesStudent() {
  const navigate = useNavigate()
  const [showJoinModal, setShowJoinModal] = useState(false)
  const [courseCode, setCourseCode] = useState("")

  const handleJoinCourse = () => {
    if (!courseCode.trim()) return
    console.log("Join course with code:", courseCode)
    setCourseCode("")
    setShowJoinModal(false)
  }

  return (
    <div className="flex-1 px-22 py-0">
      <div className="max-w-7xl mx-auto space-y-6">

        <PageHeader
          subtitle="Courses >"
          title="Courses"
          description="Browse your enrolled courses and continue your learning journey."
          image="/src/assets/courses-illustration.png"
        />

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Courses</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {enrolledCourses.map((course) => (
              <div
                key={course.id}
                onClick={() =>
                  navigate(`/dashboard/courses/${course.id}`)
                }
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden"
              >
                <div className={`h-28 ${course.color}`} />
                <div className="p-4">
                  <h3 className="font-semibold text-sm">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {course.program}
                  </p>
                </div>
              </div>
            ))}

            {/* Join Course */}
            <button
              onClick={() => setShowJoinModal(true)}
              className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:text-emerald-600 hover:border-emerald-400 transition h-[180px]"
            >
              <span className="text-3xl mb-2">+</span>
              <span className="font-medium">Join Course</span>
              <span className="text-xs">Enter course code</span>
            </button>

          </div>
        </section>
      </div>

      {/* Join Course Modal (unchanged) */}
      {showJoinModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-sm p-6 space-y-4">
            <h3 className="text-lg font-semibold">Join Course</h3>
            <input
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
              placeholder="Course code"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-emerald-400"
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowJoinModal(false)}>Cancel</button>
              <button onClick={handleJoinCourse} className="bg-emerald-500 text-white px-4 py-2 rounded-lg">
                Join
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
