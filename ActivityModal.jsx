export default function ActivityModal({ activity, onClose }) {
  if (!activity) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">

      {/* Card */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden relative">

        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-green-400 px-5 py-4 text-white">
          <p className="text-xs opacity-90">
            Due {activity.due}
          </p>

          <h2 className="text-lg font-semibold">
            {activity.task}
          </h2>

          {/* Status */}
          <div className="mt-2 flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                activity.done ? "bg-green-300" : "bg-orange-300"
              }`}
            />
            <span className="text-xs font-medium opacity-95">
              {activity.done ? "Completed" : "Unfinished"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <p className="text-sm font-semibold text-gray-800">
              {activity.course}
            </p>
            <p className="text-xs text-gray-500">CPE 3</p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-800">
              Instructions
            </p>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              Answer the questions inside the PDF file.
              Submission deadline is <strong>{activity.due}, 12:00 PM</strong>.
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <button
              className="bg-teal-600 text-white px-6 py-2 rounded-full text-sm
                         hover:bg-teal-700 transition"
            >
              Go to activity
            </button>
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white text-lg"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
