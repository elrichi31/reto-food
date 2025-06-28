import { FoodieDashboard } from "@/components/foodie-dashboard"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/")
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <FoodieDashboard />
    </div>
  )
}
