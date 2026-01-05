import { useState } from "react"
import PageHeader from "../components/PageHeader"

export default function ProfileStudent() {
  const [profilePic, setProfilePic] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setProfilePic(URL.createObjectURL(file))
    }
  }

  return (
    <div className="flex-1 px-15 pt-0 py-8">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Header */}
        <PageHeader
          subtitle="Courses >"
          title="Profile"
          description="Update your details and keep your BitGrader journey organized."
          image="/src/assets/profile-picture.png"
        />

        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-10 shadow-sm flex flex-col items-center">

          {/* Profile Picture */}
          <div className="relative">
            <img
              src={profilePic || "/src/assets/avatar-placeholder.png"}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border"
            />

            <label className="absolute bottom-0 right-0 bg-teal-500 text-white p-1.5 rounded-full cursor-pointer hover:bg-teal-600">
              ✎
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          {/* Form */}
          <div className="w-full max-w-md mt-8 space-y-4">
            <Input label="Username" />
            <Input label="Full name" />
            <SelectSex />
            <Input label="Program" />
            <Input label="Password" type="password" />

            <button
              className="w-full mt-4 bg-teal-600 text-white py-2.5 rounded-full
                         hover:bg-teal-700 transition"
            >
              Update information
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

/* Reusable Input */
function Input({ label, type = "text" }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        className="w-full mt-1 px-4 py-2 border rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
    </div>
  )
}

/* Sex Selector */
function SelectSex() {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">
        Sex
      </label>

      <select
        className="w-full mt-1 px-4 py-2 border rounded-lg
                   bg-white
                   focus:outline-none focus:ring-2 focus:ring-teal-500"
        defaultValue=""
      >
        <option value="" disabled>
          Select sex
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  )
}
