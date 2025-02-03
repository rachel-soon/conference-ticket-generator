import * as Form from "@radix-ui/react-form";

export default function TicketFormGithub() {
  return (
    <Form.Field className="FormField" name="github">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Form.Label className="FormLabel">GitHub Username</Form.Label>
      </div>

      <Form.Control asChild className="FormControl">
        <input className="Input" type="text" placeholder="@yourusername" />
      </Form.Control>
    </Form.Field>
  );
}
