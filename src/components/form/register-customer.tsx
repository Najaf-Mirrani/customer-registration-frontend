"use client";

import type React from "react";
import { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  Alert,
  Snackbar,
  CircularProgress,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Eye, EyeOff, CheckCircle2 } from "lucide-react";
import EmiratesIDVerification from "./varification/verification";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  company?: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  company?: string;
  agreeToTerms?: string;
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    company: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (name: string, value: string | boolean) => {
    let errorMessage = "";

    switch (name) {
      case "firstName":
        if (!value) errorMessage = "First name is required";
        else if (typeof value === "string" && value.length < 2) errorMessage = "First name must be at least 2 characters";
        break;

      case "lastName":
        if (!value) errorMessage = "Last name is required";
        else if (typeof value === "string" && value.length < 2) errorMessage = "Last name must be at least 2 characters";
        break;

      case "email":
        if (!value) errorMessage = "Email is required";
        else if (typeof value === "string" && !/\S+@\S+\.\S+/.test(value)) errorMessage = "Invalid email format";
        break;

      case "phone":
        if (!value) errorMessage = "Phone number is required";
        else if (typeof value === "string" && !/^(?:\+971|0)?[5-9][0-9]{8}$/.test(value)) {
          errorMessage = "Invalid UAE phone number (e.g., 0501234567)";
        }
        break;

      case "agreeToTerms":
        if (!value) errorMessage = "You must agree to the terms and conditions";
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: errorMessage || undefined }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    validateField(name, newValue);
  };

  const validateForm = (): boolean => {
    let valid = true;
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key as keyof FormData]);
      if (errors[key as keyof FormErrors]) valid = false;
    });
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        company: "",
        agreeToTerms: false,
      });
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitSuccess(false);
  };

  return (
    <div className="m-5">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h3" gutterBottom>
              Personal Information
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              required
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              required
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              required
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              required
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} color="primary" />}
              label="I agree to the terms and conditions"
            />
            {errors.agreeToTerms && (
              <Typography color="error" variant="caption" display="block">
                {errors.agreeToTerms}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              disabled={isSubmitting}
              sx={{
                py: 1.5,
                mt: 2,
              }}
            >
              {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Register Account"}
            </Button>
          </Grid>
        </Grid>
     
      <Snackbar open={submitSuccess} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert onClose={handleCloseSnackbar} severity="success" icon={<CheckCircle2 />} sx={{ width: "100%" }}>
          Registration successful! Welcome aboard.
        </Alert>
      </Snackbar>
    </div>
  );
}
