"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import EmiratesIdVerification from "./emirates-id-verification"
import { useRegistration } from "@/contexts/registration-context"
import WelcomeScreen from "./registration-complete"

export default function RegistrationForm() {
  const { formData, setFormData, registerationStep, setRegistrationStep } = useRegistration()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setRegistrationStep(1)
  }

  const renderRegisterationStepsLogic = () => {
    if (registerationStep === 0) {
      return (
        <>
        <div>
        <h1 className="text-3xl font-bold mb-2">Create your account</h1>
        <p className="text-muted-foreground">Register to verify your Emirates ID</p>
      </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  minLength={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  minLength={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobileNumber">Mobile Number</Label>
                <Input
                  id="mobileNumber"
                  name="mobileNumber"
                  type="tel"
                  placeholder="Enter your UAE mobile number (e.g., 0501234567)"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  pattern="^0[5-7][0-9]{8}$"
                />
              </div>
            </div>

            <div className="flex items-start space-x-2 pt-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={handleCheckboxChange}
                className="mt-1"
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree with Emirates ID&apos;s{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Terms of Service
                  </Link>
                  ,{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  , and default{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Notification Settings
                  </Link>
                  .
                </label>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#0e0e2c] hover:bg-[#1a1a4b] text-white"
            disabled={!formData.agreeToTerms}
          >
            Continue to ID Verification
          </Button>
        </form>
        </>
      )
    } else if (registerationStep === 1) {
      return <EmiratesIdVerification />
    } else {
      return <WelcomeScreen />
    }
  }

  return (
    <div className="space-y-8">

      {renderRegisterationStepsLogic()}
    </div>
  )
}

