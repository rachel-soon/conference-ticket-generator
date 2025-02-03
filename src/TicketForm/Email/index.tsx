import * as Form from "@radix-ui/react-form";
import IconInfo from "../../UI/Icon/IconInfo";

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
          <IconInfo />
          Please enter a valid email
        </Form.Message>

        <Form.Message className="FormMessage" match="typeMismatch">
          <IconInfo />
          Please enter a valid email
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
