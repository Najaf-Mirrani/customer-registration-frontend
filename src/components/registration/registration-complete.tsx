"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function RegistrationComplete() {
  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Registration Complete!</h1>
        <p className="text-muted-foreground">
          Your account has been successfully created and your Emirates ID has been verified.
        </p>
      </div>

      <div className="pt-4">
        <Link href="/">
          <Button className="w-full bg-[#0e0e2c] hover:bg-[#1a1a4b] text-white">Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}

