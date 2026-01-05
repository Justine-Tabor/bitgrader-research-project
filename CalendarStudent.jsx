import { useState } from "react"
import { addMonths, subMonths } from "date-fns"

import PageHeader from "../components/PageHeader"
import MiniCalendar from "../components/MiniCalendar"
import BigCalendar from "../components/BigCalendar"
import ActivityModal from "../components/ActivityModal"

export default function CalendarStudent() {

  const role = "student"
  
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedActivity, setSelectedActivity] = useState(null)

  return (
    <div className="flex-1 px-15 pt-0 py-8">
      <div className="max-w-6xl mx-auto space-y-5">

        <PageHeader
          subtitle="Calendar"
          title="Calendar"
          description="View your schedule and stay organized with your course activities."
          image="/src/assets/calendar-picture.png"
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <MiniCalendar
            currentMonth={currentMonth}
            onPrev={() => setCurrentMonth(subMonths(currentMonth, 1))}
            onNext={() => setCurrentMonth(addMonths(currentMonth, 1))}
          />

          <div className="lg:col-span-3">
            <BigCalendar
              currentMonth={currentMonth}
              onSelectActivity={setSelectedActivity}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedActivity && (
        <ActivityModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </div>
  )
}
