"use client"

import type React from "react"
import { createContext, useContext, useState, type ReactNode } from "react"

// Define the type for our form data
type RegistrationFormData = {
  firstName: string
  lastName: string
  email: string
  mobileNumber: string
  emiratesId: string
  agreeToTerms: boolean
}

// Define the type for our context
type RegistrationContextType = {
  formData: RegistrationFormData
  setFormData: React.Dispatch<React.SetStateAction<RegistrationFormData>>
  registerationStep: number
  setRegistrationStep: React.Dispatch<React.SetStateAction<number>>
}

// Create the context with a default value
const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined)

// Create a provider component
export function RegistrationProvider({ children }: { children: ReactNode }) {
  const [registerationStep, setRegistrationStep] = useState(0)
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    emiratesId: "",
    agreeToTerms: false,
  })

  return (
    <RegistrationContext.Provider
      value={{
        formData,
        setFormData,
        registerationStep,
        setRegistrationStep,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  )
}

// Create a custom hook to use the context
export function useRegistration() {
  const context = useContext(RegistrationContext)
  if (context === undefined) {
    throw new Error("useRegistration must be used within a RegistrationProvider")
  }
  return context
}

