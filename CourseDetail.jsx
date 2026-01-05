import { useState } from "react"
import { useParams } from "react-router-dom"

/* ================= MAIN ================= */

export default function CourseDetail() {
  const role = "teacher" // 🔁 switch between "student" / "teacher"

  const { courseId } = useParams()
  const [activeTab, setActiveTab] = useState("Materials")

  return (
    <div className="flex-1 px-15 pt-0 py-8">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-2xl p-6">
          <h1 className="text-2xl font-semibold">
            Software Development 2
          </h1>
          <p className="text-sm opacity-90">
            Instructor: Hugh Jazz • Course ID: {courseId}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b">
          {["Materials", "Activities", "Quizzes"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium ${
                activeTab === tab
                  ? "border-b-2 border-emerald-500 text-emerald-600"
                  : "text-gray-500 hover:text-emerald-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "Materials" && <MaterialsTab role={role} />}
      </div>
    </div>
  )
}

/* ================= MATERIALS ================= */

function MaterialsTab({ role }) {
  const [materials, setMaterials] = useState([
    { name: "Week 1 – Introduction.pdf", type: "application/pdf", url: null },
    { name: "OOP Slides.pptx", type: "application/vnd.ms-powerpoint", url: null },
  ])

  const [previewFile, setPreviewFile] = useState(null)

  const handleUpload = (e) => {
    const files = Array.from(e.target.files)

    const newMaterials = files.map((file) => ({
      name: file.name,
      type: file.type,
      url: URL.createObjectURL(file),
    }))

    setMaterials((prev) => [...prev, ...newMaterials])
  }

  const handleDelete = (name) => {
    setMaterials((prev) => prev.filter((m) => m.name !== name))
  }

  return (
    <div className="space-y-4">

      {/* Teacher Upload */}
      {role === "teacher" && (
        <div className="flex justify-end">
          <label className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm cursor-pointer">
            + Upload Material
            <input
              type="file"
              multiple
              hidden
              onChange={handleUpload}
            />
          </label>
        </div>
      )}

      {/* List */}
      {materials.map((material, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center"
        >
          <span className="text-sm">{material.name}</span>

          <div className="flex gap-3 text-sm">
            <button
              onClick={() => setPreviewFile(material)}
              className="text-emerald-500 hover:underline"
            >
              Preview
            </button>

            <button className="text-emerald-500 hover:underline">
              Download
            </button>

            {role === "teacher" && (
              <button
                onClick={() => handleDelete(material.name)}
                className="text-red-400 hover:underline"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      ))}

      {/* Preview Modal */}
      {previewFile && (
        <PreviewModal file={previewFile} onClose={() => setPreviewFile(null)} />
      )}
    </div>
  )
}

/* ================= PREVIEW MODAL ================= */

function PreviewModal({ file, onClose }) {
  const isPDF = file.type === "application/pdf"
  const isImage = file.type.startsWith("image/")

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-4xl h-[80vh] p-4 flex flex-col">

        <div className="flex justify-between items-center border-b pb-2 mb-2">
          <h3 className="font-semibold text-sm">{file.name}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-hidden">
          {isPDF && (
            <iframe
              src={file.url}
              className="w-full h-full rounded-lg"
              title="PDF Preview"
            />
          )}

          {isImage && (
            <img
              src={file.url}
              alt="Preview"
              className="max-h-full mx-auto"
            />
          )}

          {!isPDF && !isImage && (
            <div className="text-center text-gray-500 mt-10">
              Preview not available for this file type.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
