import * as Form from "@radix-ui/react-form";
import "./style.css";
import { useNavigate } from "react-router";

import TicketFormEmail from "./Email";
import TicketFormFullName from "./Name";
import TicketFormGithub from "./Github";
import TicketFormAvatar from "./Avatar";

export default function TicketForm() {
  const navigate = useNavigate();

  // This will only fire when there are no errors on the form
  const submitForm = (event) => {
    event.preventDefault();
    const { full_name, github, avatar, email } = event.target.elements;

    console.log("full name", full_name.value);
    console.log("github", github.value);
    console.log("avatar", avatar.value);
    console.log("email", email.value);

    navigate("/ticket");
  };

  return (
    <Form.Root
      className="FormRoot"
      style={{ zIndex: "10", marginTop: "20px" }}
      onSubmit={submitForm}
    >
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
