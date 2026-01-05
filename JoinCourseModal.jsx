import { createPortal } from "react-dom"

export default function JoinCourseModal({ onClose }) {
  return createPortal(
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
      
      {/* Modal Card */}
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-xl">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h3 className="text-lg font-semibold mb-2">Join Course</h3>
        <p className="text-sm text-gray-500 mb-4">
          Enter the course code provided by your teacher.
        </p>

        <input
          type="text"
          placeholder="e.g. CPE3-SD2-2025"
          className="w-full px-4 py-2 rounded-lg border text-sm
                     focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Cancel
          </button>

          <button
            className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm
                       hover:bg-emerald-600"
          >
            Join
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") // ✅ THIS IS THE MAGIC
  )
}
