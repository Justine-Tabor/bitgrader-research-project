import { useState, useRef } from "react"
import PageHeader from "../components/PageHeader"

const MAX_TOTAL_SIZE_MB = 10
const ALLOWED_TYPES = ["application/pdf", "application/zip"]

const messagesData = [
  {
    id: 1,
    sender: "Hugh Jazz",
    role: "Instructor",
    preview: "Please attach the code for the activity.",
    date: "October 21, 2024",
    messages: [
      {
        type: "notification",
        text: "Your activity in Software Development 2 has been graded.",
      },
      {
        type: "message",
        from: "teacher",
        text: "Please attach the code for the activity.",
      },
      {
        type: "message",
        from: "student",
        text: "Noted sir, I’ll upload it shortly.",
      },
    ],
  },
]

export default function Inbox() {
  const [activeChat, setActiveChat] = useState(messagesData[0])
  const [newMessage, setNewMessage] = useState("")
  const [pendingFiles, setPendingFiles] = useState([])
  const [uploadProgress, setUploadProgress] = useState(0)
  const fileInputRef = useRef(null)

  const totalSizeMB =
    pendingFiles.reduce((acc, f) => acc + f.size, 0) / 1024 / 1024

  const addFiles = (files) => {
    const validFiles = []

    for (const file of files) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        alert("Only PDF or ZIP files are allowed.")
        continue
      }

      validFiles.push(file)
    }

    const newTotal =
      [...pendingFiles, ...validFiles].reduce((a, f) => a + f.size, 0) /
      1024 /
      1024

    if (newTotal > MAX_TOTAL_SIZE_MB) {
      alert(`Maximum total attachment size is ${MAX_TOTAL_SIZE_MB} MB`)
      return
    }

    setPendingFiles((prev) => [...prev, ...validFiles])
  }

  const handleSend = () => {
    if (!newMessage.trim() && pendingFiles.length === 0) return

    const newMessages = []

    pendingFiles.forEach((file) => {
      newMessages.push({
        type: "attachment",
        from: "student",
        fileName: file.name,
        fileSize: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      })
    })

    if (newMessage.trim()) {
      newMessages.push({
        type: "message",
        from: "student",
        text: newMessage,
      })
    }

    setActiveChat({
      ...activeChat,
      messages: [...activeChat.messages, ...newMessages],
    })

    // Simulated upload progress (backend-ready)
    setUploadProgress(0)
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setUploadProgress(progress)
      if (progress >= 100) clearInterval(interval)
    }, 100)

    setNewMessage("")
    setPendingFiles([])
    fileInputRef.current.value = ""
  }

  return (
    <div className="flex-1 px-0 py-0">
      <div className="max-w-7xl mx-auto space-y-6">

        <PageHeader
          subtitle="Courses >"
          title="Inbox"
          description="Stay updated with your latest messages and notifications."
          image="/src/assets/inbox-illustration.png"
        />

        <div className="bg-white rounded-2xl shadow-sm flex h-[600px] overflow-hidden">

          {/* LEFT */}
          <div className="w-1/3 border-r bg-gray-50 px-2 py-4">
            {messagesData.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setActiveChat(chat)}
                className={`w-full text-left p-4 rounded-xl transition ${
                  activeChat.id === chat.id
                    ? "bg-white shadow border-l-4 border-emerald-500"
                    : "hover:bg-white"
                }`}
              >
                <p className="text-xs text-gray-400">{chat.date}</p>
                <p className="font-semibold text-sm">{chat.sender}</p>
                <p className="text-xs text-gray-500 truncate">{chat.preview}</p>
              </button>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex flex-col">

            {/* Header */}
            <div className="border-b px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-semibold text-emerald-600">
                {activeChat.sender.charAt(0)}
              </div>
              <div>
                <h2 className="font-semibold">{activeChat.sender}</h2>
                <p className="text-xs text-gray-500">{activeChat.role}</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 px-6 py-4 space-y-2 overflow-y-auto">
              {activeChat.messages.map((msg, index) => {
                if (msg.type === "notification") {
                  return (
                    <div
                      key={index}
                      className="mx-auto bg-emerald-50 text-emerald-700 text-xs px-4 py-1.5 rounded-full w-fit"
                    >
                      🔔 {msg.text}
                    </div>
                  )
                }

                if (msg.type === "attachment") {
                  return (
                    <div
                      key={index}
                      className="ml-auto bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm max-w-xs"
                    >
                      📎 {msg.fileName}
                      <p className="text-xs opacity-80">{msg.fileSize}</p>
                    </div>
                  )
                }

                return (
                  <div
                    key={index}
                    className={`max-w-md px-4 py-2 rounded-lg text-sm ${
                      msg.from === "student"
                        ? "ml-auto bg-emerald-500 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                )
              })}
            </div>

            {/* Input */}
            <div
              className="border-t px-4 py-3 space-y-2"
              onDrop={(e) => {
                e.preventDefault()
                addFiles(e.dataTransfer.files)
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              {/* Draft Attachments */}
              {pendingFiles.length > 0 && (
                <div className="bg-gray-100 p-3 rounded-lg space-y-1 text-sm">
                  {pendingFiles.map((file, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center"
                    >
                      <span>📎 {file.name}</span>
                      <button
                        onClick={() =>
                          setPendingFiles((prev) =>
                            prev.filter((_, i) => i !== idx)
                          )
                        }
                        className="text-red-500 text-xs"
                      >
                        Remove
                      </button>
                    </div>
                  ))}

                  <p className="text-xs text-gray-500">
                    Total size: {totalSizeMB.toFixed(2)} / {MAX_TOTAL_SIZE_MB} MB
                  </p>

                  <div className="h-1 bg-gray-300 rounded">
                    <div
                      className="h-1 bg-emerald-500 rounded"
                      style={{
                        width: `${(totalSizeMB / MAX_TOTAL_SIZE_MB) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              {uploadProgress > 0 && uploadProgress < 100 && (
                <div className="h-1 bg-gray-200 rounded">
                  <div
                    className="h-1 bg-emerald-500 rounded transition-all"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              )}

              <div className="flex items-center gap-3">
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="text-gray-400 hover:text-emerald-500"
                >
                  📎
                </button>

                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  multiple
                  onChange={(e) => addFiles(e.target.files)}
                />

                <input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type here"
                  className="flex-1 px-4 py-2 rounded-full border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />

                <button
                  onClick={handleSend}
                  className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm hover:bg-emerald-600"
                >
                  Send
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
