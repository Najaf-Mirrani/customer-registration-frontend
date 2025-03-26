"use client"

import { useState } from "react"
import { Container, Box, Typography, Paper, Grid, useMediaQuery, useTheme } from "@mui/material"
import { ArrowDownCircle } from "lucide-react"
import RegistrationForm from "./form/register-customer"
import RegistrationStepper from "./stepper/registeration-stepper"

export default function LandingPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [showForm, setShowForm] = useState(false)

  const scrollToForm = () => {
    setShowForm(true)
    setTimeout(() => {
      document.getElementById("register-customer")?.scrollIntoView({
        behavior: "smooth",
      })
    }, 100)
  }

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          py: 12,
          textAlign: "center",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Join Our Community Today
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              mb: 6,
              maxWidth: "800px",
              mx: "auto",
              opacity: 0.9,
            }}
          >
            Register now to access exclusive features and become part of our growing network of satisfied customers.
          </Typography>
          <Box
            onClick={scrollToForm}
            sx={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "translateY(5px)",
              },
            }}
          >
            <Typography variant="body1" sx={{ mb: 1 }}>
              Get Started
            </Typography>
            <ArrowDownCircle size={32} />
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Why Choose Us
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              title: "Easy Registration",
              description: "Simple and quick registration process that takes less than 2 minutes to complete.",
            },
            {
              title: "Secure Platform",
              description: "Your data is protected with industry-leading security measures and encryption.",
            },
            {
              title: "24/7 Support",
              description: "Our customer support team is available around the clock to assist you.",
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom color="primary">
                  {feature.title}
                </Typography>
                <Typography variant="body1">{feature.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Registration Form Section */}
      <Box
        id="registration-form"
        sx={{
          bgcolor: "background.paper",
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
            Register Now
          </Typography>

          {showForm || isMobile ? (
            // <RegistrationForm />
            <RegistrationStepper />
          ) : (
            <Box
              sx={{
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => setShowForm(true)}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  maxWidth: "600px",
                  mx: "auto",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Click here to show the registration form
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fill out our simple form to create your account
                </Typography>
              </Paper>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  )
}

