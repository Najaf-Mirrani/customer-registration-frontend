import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRegistration } from "@/contexts/registration-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WelcomeScreen() {
  const { formData } = useRegistration()

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold">Welcome, {formData.firstName}!</h1>
        <p className="text-muted-foreground max-w-md">
          Your Emirates ID has been successfully verified. Thank you for completing the registration process.
        </p>
      </div>

      <Card className="border-2 border-muted">
        <CardHeader>
          <CardTitle>Your Account Information</CardTitle>
          <CardDescription>Here's a summary of your registration details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Full Name</h3>
              <p className="text-lg font-medium">
                {formData.firstName} {formData.lastName}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Emirates Id</h3>
              <p className="text-lg font-medium">{formData.emiratesId}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Mobile Number</h3>
              <p className="text-lg font-medium">{formData.mobileNumber}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Account Status</h3>
              <p className="text-lg font-medium text-green-600">Verified</p>
            </div>
          </div>
          <div className="pt-4">
              <Link href="/">
                <Button className="w-full bg-[#0e0e2c] hover:bg-[#1a1a4b] text-white">Go to Dashboard( coming soon )</Button>
              </Link>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}
