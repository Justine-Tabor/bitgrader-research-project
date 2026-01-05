import { useState } from "react"
import PageHeader from "../components/PageHeader"

export default function Profile() {
  const [user, setUser] = useState({
    role: "student",
    username: "jmtabor",
    fullName: "Justine Michael Tabor",
    sex: "Male",
    program: "Computer Engineering",
    email: "justine@email.com",
    profilePic: null,
  })

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const imageURL = URL.createObjectURL(file)
    setUser({ ...user, profilePic: imageURL })
  }

  return (
    <div className="flex-1 px-10 py-8">
      <div className="max-w-5xl mx-auto space-y-8">

        <PageHeader
          subtitle="Profile"
          title="Profile"
          description="Update your details and keep your BitGrader journey organized."
          image="/src/assets/profile-picture.png"
        />

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 flex gap-10">

          {/* Left: Avatar */}
          <div className="flex flex-col items-center gap-4 w-1/3">
            <div className="relative">
              <img
                src={user.profilePic || "/src/assets/default-avatar.png"}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border"
              />

              <label className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow cursor-pointer">
                ✎
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>

            <p className="text-sm text-gray-500 capitalize">
              {user.role}
            </p>
          </div>

          {/* Right: Info */}
          <div className="flex-1 grid grid-cols-2 gap-6">

            <ProfileField label="Username" value={user.username} />
            <ProfileField label="Full Name" value={user.fullName} />
            <ProfileField label="Sex" value={user.sex} />
            <ProfileField label="Program" value={user.program} />
            <ProfileField label="Email" value={user.email} />

            <div className="col-span-2 pt-4">
              <button className="bg-teal-600 text-white px-6 py-2 rounded-full text-sm hover:bg-teal-700 transition">
                Update Information
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

function ProfileField({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <input
        type="text"
        value={value}
        disabled
        className="w-full border rounded-lg px-4 py-2 text-sm bg-gray-50"
      />
    </div>
  )
}
