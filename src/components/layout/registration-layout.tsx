import type { ReactNode } from "react"
import Sidebar from "./sidebar"
import { ThemeProvider } from "next-themes"
import { Toaster } from "../ui/toaster"

interface RegistrationLayoutProps {
  children: ReactNode
}

export default function RegistrationLayout({ children }: RegistrationLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 md:p-12 lg:p-16 flex items-center justify-center">
        <div className="w-full max-w-md">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
        </div>
      </main>
    </div>
  )
}