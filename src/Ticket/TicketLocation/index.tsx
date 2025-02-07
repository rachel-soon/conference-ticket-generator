import { Box, Text } from "@radix-ui/themes";
import logoIcon from "../assets/logo-mark.svg";

export default function TicketLocation() {
  return (
    <Box
      style={{
        display: "flex",
        width: "fit-content",
        gap: "15px",
      }}
    >
      <img
        src={logoIcon}
        alt="Logo"
        style={{ height: "fit-content", marginTop: "15px" }}
      />

      <Box
        style={{
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text weight="bold" style={{ fontSize: "38px" }}>
          Coding Conf
        </Text>
        <Text size="5">Jan 31, 2025 &nbsp;/ &nbsp;Austin, TX</Text>
      </Box>
    </Box>
  );
}
