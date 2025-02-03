import "./styles.css";
import * as Form from "@radix-ui/react-form";
import { Box } from "@radix-ui/themes";
import iconUpload from "./assets/icon-upload.svg";
import IconInfo from "../../UI/Icon/IconInfo";

export default function TicketFormAvatar() {
  return (
    <>
      <Form.Field name="avatar" className="avatar">
        <div className="flex justify-between">
          <Form.Label className="FormLabel">
            Upload Avatar
            <Box className="InputUpload"></Box>
          </Form.Label>
        </div>

        <Form.Control asChild className="FormControl">
          <input type="file" className="Input" />
        </Form.Control>

        <div className="uploadIcon">
          <img src={iconUpload} alt="upload icon" />
        </div>

        <p className="upload">Drag and drop or click to upload</p>

        <p className="absolute -bottom-[40px] flex items-center gap-3">
          <IconInfo />
          <span className="text-[14px]">
            Upload your photo (JPG or PNG, max size: 500KB).
          </span>
        </p>
      </Form.Field>
    </>
  );
}
