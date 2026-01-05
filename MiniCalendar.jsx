import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isToday,
  isSameMonth,
} from "date-fns"

export default function MiniCalendar({ currentMonth, onPrev, onNext }) {
  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  const rows = []
  let day = startDate

  while (day <= endDate) {
    const days = []
    for (let i = 0; i < 7; i++) {
      days.push(day)
      day = addDays(day, 1)
    }
    rows.push(days)
  }

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={onPrev}>&lt;</button>
        <h3 className="font-medium">{format(currentMonth, "MMMM")}</h3>
        <button onClick={onNext}>&gt;</button>
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 text-center text-xs text-gray-400 mb-2">
        {["S","M","T","W","T","F","S"].map(d => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-1 text-sm">
        {rows.flat().map((day, i) => (
          <div
            key={i}
            className={`
              h-8 flex items-center justify-center rounded-full
              ${!isSameMonth(day, currentMonth) && "text-gray-300"}
              ${isToday(day) && "bg-teal-500 text-white"}
            `}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  )
}
