import * as Form from "@radix-ui/react-form";
import "./TicketFormAvatar.css";
import { Box } from "@radix-ui/themes";

export default function TicketFormAvatar() {
  return (
    <>
      <Form.Field name="avatar">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">
            Upload Avatar
            <Box className="InputUpload"></Box>
          </Form.Label>
        </div>

        <Form.Control asChild className="FormControl">
          <input type="file" />
        </Form.Control>
      </Form.Field>
    </>
  );
}
