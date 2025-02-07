import { Text } from "@radix-ui/themes";

export default function TicketNumber() {
  function generateRandomId() {
    return Math.floor(Math.random() * 100000 + 1);
  }

  return (
    <Text
      size="7"
      style={{
        position: "absolute",
        display: "block",
        right: "5px",
        top: "40%",
        transform: "rotate(90deg)",
        color: "var(--neutral-70)",
        opacity: "0.4",
      }}
    >
      #{generateRandomId()}
    </Text>
  );
}
