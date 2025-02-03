import * as Form from "@radix-ui/react-form";

export default function TicketFormFullName() {
  return (
    <Form.Field className="FormField" name="full_name">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Form.Label className="FormLabel">Full Name</Form.Label>
      </div>

      <Form.Control asChild className="FormControl">
        <input className="Input" type="text" />
      </Form.Control>
    </Form.Field>
  );
}
