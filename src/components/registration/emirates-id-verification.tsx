// "use client"

// import type React from "react"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent } from "@/components/ui/card"
// import { Upload, Check, AlertCircle } from "lucide-react"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// export default function EmiratesIdVerification() {
//   const router = useRouter()
//   const [emiratesId, setEmiratesId] = useState("")
//   const [frontImage, setFrontImage] = useState<File | null>(null)
//   const [backImage, setBackImage] = useState<File | null>(null)
//   const [verificationStatus, setVerificationStatus] = useState<"idle" | "verifying" | "success" | "error">("idle")

//   const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmiratesId(e.target.value)
//   }

//   const handleFrontImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setFrontImage(e.target.files[0])
//     }
//   }

//   const handleBackImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setBackImage(e.target.files[0])
//     }
//   }

//   const handleVerify = (e: React.FormEvent) => {
//     e.preventDefault()
//     setVerificationStatus("verifying")

//     // Simulate verification process
//     setTimeout(() => {
//       // In a real app, you would verify the Emirates ID here
//       setVerificationStatus("success")
//       // Navigate to completion page after successful verification
//       setTimeout(() => {
//         router.push("/complete")
//       }, 1500)
//     }, 2000)
//   }

//   return (
//     <div className="space-y-8">
//       <div>
//         <h1 className="text-3xl font-bold mb-2">Verify your Emirates ID</h1>
//         <p className="text-muted-foreground">Please provide your Emirates ID details for verification</p>
//       </div>

//       {verificationStatus === "success" && (
//         <Alert className="bg-green-50 border-green-200">
//           <Check className="h-4 w-4 text-green-600" />
//           <AlertTitle className="text-green-800">Verification Successful</AlertTitle>
//           <AlertDescription className="text-green-700">
//             Your Emirates ID has been successfully verified. Redirecting to complete your registration...
//           </AlertDescription>
//         </Alert>
//       )}

//       {verificationStatus === "error" && (
//         <Alert variant="destructive">
//           <AlertCircle className="h-4 w-4" />
//           <AlertTitle>Verification Failed</AlertTitle>
//           <AlertDescription>
//             We couldn't verify your Emirates ID. Please check your information and try again.
//           </AlertDescription>
//         </Alert>
//       )}

//       <form onSubmit={handleVerify} className="space-y-6">
//         <div className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="emiratesId">Emirates ID Number</Label>
//             <Input
//               id="emiratesId"
//               value={emiratesId}
//               onChange={handleIdChange}
//               placeholder="784-XXXX-XXXXXXX-X"
//               required
//               disabled={verificationStatus === "verifying" || verificationStatus === "success"}
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="frontImage">ID Front Side</Label>
//               <Card className="border-dashed">
//                 <CardContent className="p-4 flex flex-col items-center justify-center min-h-[150px]">
//                   {frontImage ? (
//                     <div className="text-center">
//                       <Check className="h-8 w-8 text-green-500 mx-auto mb-2" />
//                       <p className="text-sm text-muted-foreground">{frontImage.name}</p>
//                     </div>
//                   ) : (
//                     <>
//                       <Upload className="h-8 w-8 text-muted-foreground mb-2" />
//                       <p className="text-sm text-muted-foreground">Upload front side of Emirates ID</p>
//                     </>
//                   )}
//                   <Input
//                     id="frontImage"
//                     type="file"
//                     accept="image/*"
//                     onChange={handleFrontImageChange}
//                     className="hidden"
//                     disabled={verificationStatus === "verifying" || verificationStatus === "success"}
//                   />
//                   <Button
//                     type="button"
//                     variant="outline"
//                     size="sm"
//                     className="mt-4"
//                     onClick={() => document.getElementById("frontImage")?.click()}
//                     disabled={verificationStatus === "verifying" || verificationStatus === "success"}
//                   >
//                     {frontImage ? "Change Image" : "Select Image"}
//                   </Button>
//                 </CardContent>
//               </Card>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="backImage">ID Back Side</Label>
//               <Card className="border-dashed">
//                 <CardContent className="p-4 flex flex-col items-center justify-center min-h-[150px]">
//                   {backImage ? (
//                     <div className="text-center">
//                       <Check className="h-8 w-8 text-green-500 mx-auto mb-2" />
//                       <p className="text-sm text-muted-foreground">{backImage.name}</p>
//                     </div>
//                   ) : (
//                     <>
//                       <Upload className="h-8 w-8 text-muted-foreground mb-2" />
//                       <p className="text-sm text-muted-foreground">Upload back side of Emirates ID</p>
//                     </>
//                   )}
//                   <Input
//                     id="backImage"
//                     type="file"
//                     accept="image/*"
//                     onChange={handleBackImageChange}
//                     className="hidden"
//                     disabled={verificationStatus === "verifying" || verificationStatus === "success"}
//                   />
//                   <Button
//                     type="button"
//                     variant="outline"
//                     size="sm"
//                     className="mt-4"
//                     onClick={() => document.getElementById("backImage")?.click()}
//                     disabled={verificationStatus === "verifying" || verificationStatus === "success"}
//                   >
//                     {backImage ? "Change Image" : "Select Image"}
//                   </Button>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>

//         <Button
//           type="submit"
//           className="w-full bg-[#0e0e2c] hover:bg-[#1a1a4b] text-white"
//           disabled={
//             !emiratesId ||
//             !frontImage ||
//             !backImage ||
//             verificationStatus === "verifying" ||
//             verificationStatus === "success"
//           }
//         >
//           {verificationStatus === "verifying" ? "Verifying..." : "Verify Emirates ID"}
//         </Button>
//       </form>
//     </div>
//   )
// }

"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { useDropzone } from "react-dropzone"
import Tesseract from "tesseract.js"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Check, AlertCircle, X, Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"

export default function EmiratesIdVerification() {
  const router = useRouter()
  const { toast } = useToast()
  const [emiratesId, setEmiratesId] = useState("")
  const [frontImage, setFrontImage] = useState<string | null>(null)
  const [backImage, setBackImage] = useState<string | null>(null)
  const [extractedData, setExtractedData] = useState({ front: "", back: "" })
  const [isFrontValid, setIsFrontValid] = useState<boolean | null>(null)
  const [isBackValid, setIsBackValid] = useState<boolean | null>(null)
  const [frontError, setFrontError] = useState("")
  const [backError, setBackError] = useState("")
  const [isProcessingFront, setIsProcessingFront] = useState(false)
  const [isProcessingBack, setIsProcessingBack] = useState(false)
  const [verificationStatus, setVerificationStatus] = useState<"idle" | "verifying" | "success" | "error">("idle")

  const onDropFront = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setFrontImage(reader.result as string)
        // Reset validation when new image is uploaded
        setIsFrontValid(null)
        setFrontError("")
        setExtractedData((prev) => ({ ...prev, front: "" }))
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const onDropBack = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setBackImage(reader.result as string)
        // Reset validation when new image is uploaded
        setIsBackValid(null)
        setBackError("")
        setExtractedData((prev) => ({ ...prev, back: "" }))
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const frontDropzone = useDropzone({
    accept: { "image/*": [] },
    onDrop: onDropFront,
    disabled: isProcessingFront || verificationStatus === "verifying" || verificationStatus === "success",
  })

  const backDropzone = useDropzone({
    accept: { "image/*": [] },
    onDrop: onDropBack,
    disabled: isProcessingBack || verificationStatus === "verifying" || verificationStatus === "success",
  })

  const validateEmiratesIDFront = async () => {
    if (!frontImage) return

    setFrontError("")
    setIsProcessingFront(true)

    try {
      const {
        data: { text },
      } = await Tesseract.recognize(frontImage, "eng+ara")
      setExtractedData((prev) => ({ ...prev, front: text }))

      // Check for Emirates ID pattern
      const emiratesIDPattern = /784-\d{4}-\d{7}-\d{1}/

      // Also check for common Emirates ID keywords
      const hasEmiratesKeywords =
        text.toLowerCase().includes("emirates") ||
        text.toLowerCase().includes("uae") ||
        text.toLowerCase().includes("united arab") ||
        text.toLowerCase().includes("هوية") || // Arabic for "identity"
        text.toLowerCase().includes("الإمارات") // Arabic for "Emirates"

      if (emiratesIDPattern.test(text) || hasEmiratesKeywords) {
        setIsFrontValid(true)
        toast({
          title: "Front ID Validated",
          description: "Front side of Emirates ID has been successfully validated.",
          variant: "default",
        })
      } else {
        setIsFrontValid(false)
        setFrontError("Invalid Emirates ID detected. Please upload a valid ID.")
        toast({
          title: "Validation Failed",
          description: "Front side does not appear to be a valid Emirates ID.",
          variant: "destructive",
        })
      }
    } catch (err) {
      setIsFrontValid(false)
      setFrontError("Failed to process image. Please try again.")
      toast({
        title: "Processing Error",
        description: "Failed to process front image. Please try again with a clearer image.",
        variant: "destructive",
      })
      console.error(err)
    } finally {
      setIsProcessingFront(false)
    }
  }

  const validateEmiratesIDBack = async () => {
    if (!backImage) return

    setBackError("")
    setIsProcessingBack(true)

    try {
      const {
        data: { text },
      } = await Tesseract.recognize(backImage, "eng+ara")
      setExtractedData((prev) => ({ ...prev, back: text }))

      // Check for common Emirates ID back side keywords
      const hasBackSideKeywords =
        text.toLowerCase().includes("card number") ||
        text.toLowerCase().includes("occupation") ||
        text.toLowerCase().includes("employer")
        // text.toLowerCase().includes("توقيع") || // Arabic for "signature"
        // text.toLowerCase().includes("تاريخ الانتهاء") // Arabic for "expiry date"

      if (hasBackSideKeywords) {
        setIsBackValid(true)
        toast({
          title: "Back ID Validated",
          description: "Back side of Emirates ID has been successfully validated.",
          variant: "default",
        })
      } else {
        setIsBackValid(false)
        setBackError("Invalid Emirates ID back side. Please upload a valid ID.")
        toast({
          title: "Validation Failed",
          description: "Back side does not appear to be a valid Emirates ID.",
          variant: "destructive",
        })
      }
    } catch (err) {
      setIsBackValid(false)
      setBackError("Failed to process image. Please try again.")
      toast({
        title: "Processing Error",
        description: "Failed to process back image. Please try again with a clearer image.",
        variant: "destructive",
      })
      console.error(err)
    } finally {
      setIsProcessingBack(false)
    }
  }

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmiratesId(e.target.value)
  }

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()

    // Check if both sides are validated
    if (isFrontValid === null && frontImage) {
      validateEmiratesIDFront()
      toast({
        title: "Validation Required",
        description: "Please validate the front side of your Emirates ID first.",
        variant: "default",
      })
      return
    }

    if (isBackValid === null && backImage) {
      validateEmiratesIDBack()
      toast({
        title: "Validation Required",
        description: "Please validate the back side of your Emirates ID first.",
        variant: "default",
      })
      return
    }

    // Check if both validations passed
    if (!isFrontValid || !isBackValid) {
      toast({
        title: "Verification Failed",
        description: "Both sides of the Emirates ID must be validated successfully.",
        variant: "destructive",
      })
      return
    }

    setVerificationStatus("verifying")

    // Simulate verification process
    setTimeout(() => {
      setVerificationStatus("success")
      // Navigate to completion page after successful verification
      setTimeout(() => {
        router.push("/complete")
      }, 2000)
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl mb-2" style={{ fontWeight: 700 }}>
          Verify your Emirates ID
        </h1>
        <p className="text-muted-foreground">Please provide your Emirates ID details for verification</p>
      </div>

      {verificationStatus === "success" && (
        <Alert className="bg-green-50 border-green-200">
          <Check className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Verification Successful</AlertTitle>
          <AlertDescription className="text-green-700">
            Your Emirates ID has been successfully verified. Redirecting to complete your registration...
          </AlertDescription>
        </Alert>
      )}

      {verificationStatus === "error" && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Verification Failed</AlertTitle>
          <AlertDescription>
            We couldn't verify your Emirates ID. Please check your information and try again with a clearer image.
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleVerify} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="emiratesId">Emirates ID Number</Label>
            <Input
              id="emiratesId"
              value={emiratesId}
              onChange={handleIdChange}
              placeholder="784-XXXX-XXXXXXX-X"
              required
              disabled={verificationStatus === "verifying" || verificationStatus === "success"}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>
                ID Front Side {isFrontValid === true && <span className="text-green-500 ml-1">(Validated)</span>}
              </Label>
              <Card className="border-dashed">
                <CardContent className="p-4">
                  <div
                    {...frontDropzone.getRootProps()}
                    className="p-5 border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center"
                  >
                    <input {...frontDropzone.getInputProps()} />
                    {!frontImage ? (
                      <div className="flex flex-col items-center justify-center">
                        <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Drag & drop front side of Emirates ID here, or click to select
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">File Uploaded! Drop a new file to replace.</p>
                    )}
                  </div>

                  {frontImage && (
                    <div className="relative mt-4">
                      <img
                        src={frontImage || "/placeholder.svg"}
                        alt="Front ID"
                        className="w-full h-auto rounded-md object-contain max-h-[150px]"
                      />
                      {isFrontValid !== null && (
                        <div className="absolute top-2 right-2">
                          {isFrontValid ? (
                            <div className="bg-green-100 p-1 rounded-full">
                              <Check className="h-6 w-6 text-green-600" />
                            </div>
                          ) : (
                            <div className="bg-red-100 p-1 rounded-full">
                              <X className="h-6 w-6 text-red-600" />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {frontImage && isFrontValid === null && !isProcessingFront && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-4 w-full"
                      onClick={validateEmiratesIDFront}
                      disabled={isProcessingFront}
                    >
                      Validate Front Side
                    </Button>
                  )}

                  {isProcessingFront && (
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <p className="text-sm">Processing...</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {frontError && <p className="text-sm text-red-500">{frontError}</p>}
            </div>

            <div className="space-y-2">
              <Label>
                ID Back Side {isBackValid === true && <span className="text-green-500 ml-1">(Validated)</span>}
              </Label>
              <Card className="border-dashed">
                <CardContent className="p-4">
                  <div
                    {...backDropzone.getRootProps()}
                    className="p-5 border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center"
                  >
                    <input {...backDropzone.getInputProps()} />
                    {!backImage ? (
                      <div className="flex flex-col items-center justify-center">
                        <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Drag & drop back side of Emirates ID here, or click to select
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">File Uploaded! Drop a new file to replace.</p>
                    )}
                  </div>

                  {backImage && (
                    <div className="relative mt-4">
                      <img
                        src={backImage || "/placeholder.svg"}
                        alt="Back ID"
                        className="w-full h-auto rounded-md object-contain max-h-[150px]"
                      />
                      {isBackValid !== null && (
                        <div className="absolute top-2 right-2">
                          {isBackValid ? (
                            <div className="bg-green-100 p-1 rounded-full">
                              <Check className="h-6 w-6 text-green-600" />
                            </div>
                          ) : (
                            <div className="bg-red-100 p-1 rounded-full">
                              <X className="h-6 w-6 text-red-600" />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {backImage && isBackValid === null && !isProcessingBack && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-4 w-full"
                      onClick={validateEmiratesIDBack}
                      disabled={isProcessingBack}
                    >
                      Validate Back Side
                    </Button>
                  )}

                  {isProcessingBack && (
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <p className="text-sm">Processing...</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {backError && <p className="text-sm text-red-500">{backError}</p>}
            </div>
          </div>

          {extractedData.front && (
            <div className="space-y-2">
              <Label>Extracted Text (Front)</Label>
              <div className="p-3 bg-muted rounded-md text-xs max-h-[100px] overflow-y-auto">
                <pre className="whitespace-pre-wrap">{extractedData.front}</pre>
              </div>
            </div>
          )}

          {extractedData.back && (
            <div className="space-y-2">
              <Label>Extracted Text (Back)</Label>
              <div className="p-3 bg-muted rounded-md text-xs max-h-[100px] overflow-y-auto">
                <pre className="whitespace-pre-wrap">{extractedData.back}</pre>
              </div>
            </div>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-[#0e0e2c] hover:bg-[#1a1a4b] text-white"
          disabled={
            !emiratesId ||
            !frontImage ||
            !backImage ||
            verificationStatus === "verifying" ||
            verificationStatus === "success" ||
            isProcessingFront ||
            isProcessingBack
          }
        >
          {verificationStatus === "verifying" ? "Verifying..." : "Verify Emirates ID"}
        </Button>
      </form>
    </div>
  )
}
