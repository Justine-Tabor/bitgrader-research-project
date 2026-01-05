import { useState } from "react"
import ActivityModal from "./ActivityModal"

export default function PendingActivities() {
  const [selectedActivity, setSelectedActivity] = useState(null)

  const activities = [
    {
      id: 1,
      course: "Software Development 2",
      task: "Activity 3",
      due: "Nov 3, 2025",
      done: false,
    },
    {
      id: 2,
      course: "Embedded System",
      task: "Activity 3",
      due: "Nov 5, 2025",
      done: true,
    },
    {
      id: 3,
      course: "Software Development 3",
      task: "Activity 4",
      due: "Nov 6, 2025",
      done: false,
    },
  ]

  return (
    <>
      <div className="bg-white rounded-2xl p-6 shadow-sm">

        {/* Label */}
        <h3 className="text-sm font-semibold text-gray-700 mb-6">
          Pending activities
        </h3>

        <div className="space-y-1">
          {activities.map(item => (
            <button
              key={item.id}
              onClick={() => setSelectedActivity(item)}
              className="
                w-full text-left flex items-start gap-4
                rounded-xl p-4
                hover:bg-gray-50
                transition
                cursor-pointer
              "
            >

              {/* Status bar */}
              <div
                className={`w-1.5 rounded-full self-stretch ${
                  item.done ? "bg-green-500" : "bg-orange-500"
                }`}
              />

              {/* Content */}
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">
                  {item.course}
                </p>
                <p className="text-xs text-gray-500">
                  {item.task}
                </p>
              </div>

              {/* Due Date */}
              <span
                className={`
                  text-xs font-medium px-3 py-1 rounded-full
                  ${
                    item.done
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }
                `}
              >
                Due {item.due}
              </span>

            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedActivity && (
        <ActivityModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </>
  )
}
