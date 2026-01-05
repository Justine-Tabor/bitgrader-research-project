import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isToday,
} from "date-fns"

const dummyEvents = {
  10: [{
    task: "Quiz – SD2",
    course: "Software Development 2",
    due: "Dec 10, 2025",
    done: false,
    color: "bg-orange-100 text-orange-600",
  }],
  14: [{
    task: "Activity – ES",
    course: "Embedded System",
    due: "Dec 14, 2025",
    done: false,
    color: "bg-green-100 text-green-600",
  }],
  24: [{
    task: "Deadline – SD3",
    course: "Software Development 3",
    due: "Dec 24, 2025",
    done: false,
    color: "bg-orange-100 text-orange-600",
  }],
}

export default function BigCalendar({ currentMonth, onSelectActivity }) {
  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  let day = startDate
  const weeks = []

  while (day <= endDate) {
    weeks.push([...Array(7)].map(() => {
      const d = day
      day = addDays(day, 1)
      return d
    }))
  }

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      {/* Weekdays */}
      <div className="grid grid-cols-7 text-xs text-gray-400 mb-2">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
          <div key={d} className="text-center">{d}</div>
        ))}
      </div>

      {/* Calendar */}
      <div className="grid grid-rows-6 gap-2">
        {weeks.map((week, i) => (
          <div key={i} className="grid grid-cols-7 gap-2">
            {week.map((date, idx) => {
              const events = dummyEvents[format(date, "d")] || []

              return (
                <div
                  key={idx}
                  className={`
                    h-24 rounded-lg border p-1 text-xs
                    transition
                    ${!isSameMonth(date, currentMonth) && "text-gray-300"}
                    ${isToday(date) && "border-green-400"}
                  `}
                >
                  <div className="font-medium text-right">
                    {format(date, "d")}
                  </div>

                  <div className="space-y-1 mt-1">
                    {events.map((e, i) => (
                      <button
                        key={i}
                        onClick={() => onSelectActivity(e)}
                        className={`
                          w-full text-left px-2 py-0.5 rounded-full truncate
                          text-[11px] ${e.color}
                          hover:scale-[1.02] hover:shadow
                          transition-all
                        `}
                      >
                        {e.task}
                      </button>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
