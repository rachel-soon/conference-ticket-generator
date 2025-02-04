import "./style.scss";
import * as Form from "@radix-ui/react-form";
import { Box } from "@radix-ui/themes";
import iconUpload from "./assets/icon-upload.svg";
import IconInfo from "../../UI/Icon/IconInfo";
import React, { useState } from "react";
import { useRef } from "react";

export default function TicketFormAvatar() {
  const [fileSizeExceeded, setFileSizeExceeded] = useState(false);
  const [fileTypeError, setFileTypeError] = useState(false);
  const [formData, setFormData] = useState<File | null>();
  const [imageSrc, setImageSrc] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];

    if (file) {
      // get the size in kb
      // 1 byte = 1024kb
      const fileSize = Math.floor(file.size / 1024);
      const fileType = file.type.split("/")[1];

      if (fileSize > 500) {
        setFileSizeExceeded(true);
      } else if (!["jpg", "jpeg", "png"].includes(fileType)) {
        setFileTypeError(true);
      } else {
        setFileSizeExceeded(false);
        setFileTypeError(false);
        setFormData(file);

        // generate image url
        const url = URL.createObjectURL(file);
        setImageSrc(url);
      }
    }
  };

  const handleRemoveImage = () => {
    setFormData(null);
    setFileTypeError(false);
    setFileSizeExceeded(false);
  };

  const handleChangeImage = () => {
    fileInput.current?.click();
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
            ref={fileInput}
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
                src={imageSrc}
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
              <button
                className="btn btn--remove"
                type="button"
                onClick={handleRemoveImage}
              >
                Remove image
              </button>
              <button
                className="btn btn--change"
                type="button"
                onClick={handleChangeImage}
              >
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
