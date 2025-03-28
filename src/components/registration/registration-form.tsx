"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import EmiratesIdVerification from "./emirates-id-verification"

export default function RegistrationForm() {
  const [ registerationStep, setRegistrationStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    agreeToTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle form submission here
    console.log("Form submitted:", formData)
    setRegistrationStep(1);
    // router.push("/verify-id")
  }

  const renderRegisterationStepsLogic = () =>{
    if(registerationStep === 0){
      return <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
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
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="6+ characters"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
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
    }
    else if(registerationStep === 1){
      return <EmiratesIdVerification />
    }
    else{
      return <>Welcome</>
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Create your account</h1>
        <p className="text-muted-foreground">Register to verify your Emirates ID</p>
      </div>
      { renderRegisterationStepsLogic() }
    </div>
  )
}

