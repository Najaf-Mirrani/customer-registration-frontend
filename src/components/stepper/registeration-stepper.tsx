"use client";

import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Paper,
  Grid,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import EmiratesIDVerification from "../form/varification/verification";
import RegistrationForm from "../form/register-customer";

export default function RegistrationStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = ["Personal Information", "Emirates ID Verification"];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitSuccess(true);
    setIsSubmitting(false);
    setActiveStep(steps.length);
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, maxWidth: "800px", mx: "auto" }}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {activeStep === 0 && <RegistrationForm />}
        {activeStep === 1 && <EmiratesIDVerification />}
      </Grid>

      <Grid container justifyContent="space-between" sx={{ mt: 3 }}>
        {activeStep > 0 && (
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
        )}
        {activeStep < steps.length - 1 ? (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Submit"}
          </Button>
        )}
      </Grid>

      <Snackbar
        open={submitSuccess}
        autoHideDuration={6000}
        onClose={() => setSubmitSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success">Registration successful! Welcome aboard.</Alert>
      </Snackbar>
    </Paper>
  );
}
