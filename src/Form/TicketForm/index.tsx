import * as Form from "@radix-ui/react-form";
import "./style.css";
import TicketFormEmail from "./Email";
import TicketFormFullName from "./Name";
import TicketFormGithub from "./Github";
import TicketFormAvatar from "./Avatar";

export default function TicketForm() {
  return (
    <Form.Root className="FormRoot" style={{ zIndex: "10", marginTop: "20px" }}>
      <TicketFormAvatar />
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
