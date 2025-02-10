import * as Form from "@radix-ui/react-form";
import "./style.css";
import { useNavigate } from "react-router";

import TicketFormAvatar from "./Avatar";
import IconInfo from "../UI/Icon/IconInfo";

export default function TicketForm() {
  const navigate = useNavigate();

  const fields = [
    {
      key: "full_name",
      name: "full_name",
      type: "text",
      required: false,
      label: "Full Name",
      placeholder: "",
    },
    {
      key: "email",
      name: "email",
      type: "email",
      required: true,
      label: "Email Address",
      placeholder: "example@email.com",
      validators: [
        { type: "typeMismatch", msg: "Please enter a valid email" },
        { type: "valueMissing", msg: "Please enter a valid email" },
      ],
    },
    {
      key: "github",
      name: "github",
      type: "text",
      required: false,
      label: "GitHub Username",
      placeholder: "@yourusername",
    },
  ];

  // This will only fire when there are no errors on the form
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { full_name, github, avatar, email } = event.target.elements;

    console.log("full name", full_name.value);
    console.log("github", github.value);
    // console.log("avatar", avatar.value);
    console.log("email", email.value);
    console.log(event.target.elements);

    navigate("/ticket");
  };

  return (
    <Form.Root
      className="FormRoot"
      style={{ zIndex: "10", marginTop: "20px" }}
      onSubmit={submitForm}
    >
      <TicketFormAvatar />

      {fields.map((field) => {
        return (
          <Form.Field className="FormField" name={field.name} key={field.key}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">{field.label}</Form.Label>

              {field.validators &&
                field.validators.map((validator) => {
                  return (
                    <>
                      <Form.Message
                        key={validator.type}
                        className="FormMessage"
                        match={validator.type}
                      >
                        <IconInfo error={false} />
                        {validator.msg}
                      </Form.Message>
                    </>
                  );
                })}
            </div>

            <Form.Control asChild className="FormControl">
              <input
                className="Input"
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
              />
            </Form.Control>
          </Form.Field>
        );
      })}

      {/* Use asChild prop to allow rendering native/custom HTML elements inside Form.Control */}
      <Form.Submit asChild>
        <button className="Button" style={{ marginTop: 20 }}>
          Generate My Ticket
        </button>
      </Form.Submit>
    </Form.Root>
  );
}
