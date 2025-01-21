import * as Form from "@radix-ui/react-form";

export default function TicketFormEmail() {
  return (
    <Form.Field className="FormField" name="email">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Form.Label className="FormLabel">Email Address</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid email
        </Form.Message>
      </div>

      <Form.Control asChild className="FormControl">
        <input
          className="Input"
          type="email"
          required
          placeholder="example@email.com"
        />
      </Form.Control>
    </Form.Field>
  );
}
