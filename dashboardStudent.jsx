import PageHeader from "../components/PageHeader"
import CoursesDashboard from "../components/Courses-dashboard"
import PendingActivities from "../components/PendingActivities"

export default function DashboardStudent() {
  return (
    <>
      <PageHeader
        subtitle="Dashboard"
        title="Dashboard"
        description="Welcome to your dashboard. Manage your courses, track your progress, and stay on top of your learning."
        image="/src/assets/dashboard-picture.png"
      />

      <CoursesDashboard />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PendingActivities />
        <div />
      </div>
    </>
  )
}
