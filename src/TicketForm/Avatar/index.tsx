import "./style.scss";
import * as Form from "@radix-ui/react-form";
import { Box } from "@radix-ui/themes";
import iconUpload from "./assets/icon-upload.svg";
import IconInfo from "../../UI/Icon/IconInfo";
import React, { useState } from "react";

export default function TicketFormAvatar() {
  const [fileSizeExceeded, setFileSizeExceeded] = useState(false);
  const [fileTypeError, setFileTypeError] = useState(false);
  const [formData, setFormData] = useState<File>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];

      // get the size in kb
      // 1 byte = 1024kb
      const fileSize = Math.floor(event.target.files[0].size / 1024);
      const fileType = file.type.split("/")[1];

      if (fileSize > 500) {
        setFileSizeExceeded(true);
      } else if (!["jpg", "jpeg", "png"].includes(fileType)) {
        setFileTypeError(true);
      } else {
        setFileSizeExceeded(false);
        setFileTypeError(false);
        setFormData(file);
      }
    }
  };
  return (
    <Form.Field name="avatar" className="avatar">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Form.Label className="FormLabel">
          Upload Avatar
          <Box className="InputUpload avatar__input-upload"></Box>
        </Form.Label>

        <Form.Control asChild className="FormControl">
          <input
            type="file"
            className="Input"
            onChange={handleFileChange}
            accept=".jpg, .jpeg, .png"
          />
        </Form.Control>

        {/* Image preview */}
        {formData ? (
          <div className="avatar__preview">
            <div
              style={{
                marginBottom: "6px",
                textAlign: "center",
              }}
            >
              <img
                src="https://media.istockphoto.com/id/182174009/photo/curious-bunny.jpg?s=1024x1024&w=is&k=20&c=-MZ2Ik6UH0RRmp7Gd4P4rdryVt85juR6WWWAmQ7OhZI="
                style={{
                  objectFit: "cover",
                  height: "70px",
                  width: "70px",
                  borderRadius: "15px",
                  border: "1px solid var(--neutral-0)",
                }}
              />
            </div>

            {/* Action buttons */}
            <div style={{ display: "flex", gap: "15px" }}>
              <button className="btn btn--remove" type="button">
                Remove image
              </button>
              <button className="btn btn--change" type="button">
                Change image
              </button>
            </div>
          </div>
        ) : (
          <div className="avatar__icon-container">
            <img src={iconUpload} alt="upload icon" className="avatar__icon" />
            <p className="avatar__icon-text">
              Drag and drop or click to upload
            </p>
          </div>
        )}
      </div>

      <p className="avatar__msg">
        <IconInfo error={fileSizeExceeded || fileTypeError} />

        {fileSizeExceeded ? (
          <span className="avatar__msg--error">
            File too large. Please upload a photo under 500KB.
          </span>
        ) : fileTypeError ? (
          <span className="avatar__msg--error">
            File is in wrong format. Please upload JPG or PNG.
          </span>
        ) : (
          <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
        )}
      </p>
    </Form.Field>
  );
}
