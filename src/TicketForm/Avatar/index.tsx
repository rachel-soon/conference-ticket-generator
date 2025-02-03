import "./styles.css";
import * as Form from "@radix-ui/react-form";
import { Box } from "@radix-ui/themes";
import iconUpload from "./assets/icon-upload.svg";
import IconInfo from "../../UI/Icon/IconInfo";
import React, { useState } from "react";

export default function TicketFormAvatar() {
  const [fileSizeExceeded, setFileSizeExceeded] = useState(false);
  const [fileTypeError, setFileTypeError] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file);

      // get the size in kb
      // 1 byte = 1024kb
      const fileSize = Math.floor(event.target.files[0].size / 1024);
      if (fileSize > 500) {
        setFileSizeExceeded(true);
      } else setFileSizeExceeded(false);

      // validate file type
      const fileType = file.type.split("/")[1];

      if (!["jpg", "jpeg", "png"].includes(fileType)) {
        setFileTypeError(true);
      } else setFileTypeError(false);
    }
  };
  return (
    <>
      <Form.Field name="avatar" className="avatar">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Label className="FormLabel">
            Upload Avatar
            <Box className="InputUpload"></Box>
          </Form.Label>

          <Form.Control asChild className="FormControl">
            <input
              type="file"
              className="Input"
              onChange={handleFileChange}
              accept=".jpg, .jpeg, .png"
            />
          </Form.Control>

          <div className="uploadIcon">
            <img src={iconUpload} alt="upload icon" />
          </div>
          <p className="upload">Drag and drop or click to upload</p>
          {/* Image display preview */}

          <div></div>
        </div>

        <p
          style={{
            position: "absolute",
            bottom: "-28px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <IconInfo error={fileSizeExceeded || fileTypeError} />

          {fileSizeExceeded ? (
            <span style={{ color: "var(--orange-700)" }}>
              File too large. Please upload a photo under 500KB.
            </span>
          ) : fileTypeError ? (
            <span style={{ color: "var(--orange-700)" }}>
              File is in wrong format. Please upload JPG or PNG.
            </span>
          ) : (
            <span style={{ fontSize: "14px" }}>
              Upload your photo (JPG or PNG, max size: 500KB).
            </span>
          )}
        </p>
      </Form.Field>
    </>
  );
}
