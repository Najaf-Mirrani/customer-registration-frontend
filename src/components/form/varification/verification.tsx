import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Tesseract from "tesseract.js";
import { Card, Typography, Grid } from "@mui/material";
import { CheckCircle, XCircle } from "lucide-react";

const EmiratesIDVerification = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [extractedData, setExtractedData] = useState({ front: "", back: "" });
  const [isValid, setIsValid] = useState(null);
  const [error, setError] = useState("");

  const onDrop = useCallback((acceptedFiles, side) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (side === "front") setFrontImage(reader.result);
        else setBackImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const validateEmiratesIDFront = async () => {
    if (!frontImage) return;
    setError("");
    try {
      const { data: { text } } = await Tesseract.recognize(frontImage, "eng");
      setExtractedData((prev) => ({ ...prev, front: text }));
      const emiratesIDPattern = /784-\d{4}-\d{7}-\d{1}/;
      if (emiratesIDPattern.test(text)) {
        setIsValid(true);
      } else {
        setIsValid(false);
        setError("Invalid Emirates ID detected. Please upload a valid ID.");
      }
    } catch (err) {
      setIsValid(false);
      setError("Failed to process image. Please try again.");
    }
  };

  const renderDropzone = (side, image) => {
    const { getRootProps, getInputProps } = useDropzone({
      accept: "image/*",
      onDrop: (files) => onDrop(files, side),
    });

    return (
      <Card variant="outlined" sx={{ p: 2, textAlign: "center", width: "100%", position: "relative" }}>
        <div {...getRootProps()} className="p-5 border-2 border-dashed border-gray-500 cursor-pointer">
          <input {...getInputProps()} />
          <Typography>
            {image ? "File Uploaded! Drop a new file to replace." : "Drag & drop ID image here, or click to select"}
          </Typography>
        </div>
        {image && (
          <div style={{ position: "relative" }}>
            <img src={image} alt={`${side} ID`} width="100%" style={{ marginTop: 10 }} />
            {side === "front" && isValid !== null && (
              isValid ? (
                <CheckCircle
                  className="absolute top-2 right-2 text-green-500 text-4xl animate-glow"
                />
              ) : (
                <XCircle
                  className="absolute top-2 right-2 text-red-500 text-4xl animate-glowRed"
                />
              )
            )}
          </div>
        )}
          <Typography
            variant="outlined"
            component="button"
            onClick={side === "front" ? validateEmiratesIDFront : validateEmiratesIDFront}
            className="mt-2 py-2 px-4 border border-solid cursor-pointer"
          >
            Validate
          </Typography>
      </Card>
    );
  };

  return (
    <div className="m-5">
      <Typography variant="h6" gutterBottom>
        Emirates ID Verification
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>{renderDropzone("front", frontImage)}</Grid>
        <Grid item xs={6}>{renderDropzone("back", backImage)}</Grid>
      </Grid>

      {extractedData.front && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          <strong>Extracted Front ID Data:</strong> {extractedData.front}
        </Typography>
      )}
      {extractedData.back && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          <strong>Extracted Back ID Data:</strong> {extractedData.back}
        </Typography>
      )}

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
    </div>
  );
};

export default EmiratesIDVerification;
