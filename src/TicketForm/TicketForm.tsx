import * as Form from "@radix-ui/react-form";
import "./TicketForm.css";
import TicketFormEmail from "./TicketFormEmail";
import TicketFormFullName from "./TicketFormFullName";
import TicketFormGithub from "./TicketFormGithub";

export default function TicketForm() {
  return (
    <Form.Root className="FormRoot" style={{ zIndex: "10", marginTop: "20px" }}>
      <TicketFormFullName />
      <TicketFormEmail />
      <TicketFormGithub />

      {/* Use asChild prop to allow rendering native/custom HTML elements inside Form.Control */}
      <Form.Submit asChild>
        <button className="Button" style={{ marginTop: 20 }}>
          Generate My Ticket
        </button>
      </Form.Submit>
    </Form.Root>
  );
}
