export interface UserRegistration {
  name: string
  username: string
  email: string
  password: string
}

export interface EmiratesIdData {
  idNumber: string
  frontImage: File | null
  backImage: File | null
}

export type VerificationStatus = "idle" | "verifying" | "success" | "error"

