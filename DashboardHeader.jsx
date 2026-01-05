import PageHeader from "./PageHeader"

export default function DashboardHeader() {
  return (
    <PageHeader
        variant="secondary"
      subtitle="Dashboard"
      title="Dashboard"
      description="Welcome to your dashboard. Manage your courses, track your progress, and stay on top of your learning."
      image="/src/assets/dashboard-picture.png"
    />
  )
}
