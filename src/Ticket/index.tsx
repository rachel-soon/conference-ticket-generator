import TicketImg from "./assets/pattern-ticket.svg";
import logoIcon from "./assets/logo-mark.svg";
import { Box, Text } from "@radix-ui/themes";
import { generateRandomId } from "../utils/random";

export default function Ticket() {
  return (
    <>
      <div
        style={{
          zIndex: "10",
          marginTop: "20px",
          position: "relative",
        }}
      >
        <img src={TicketImg} alt="Ticket Image" />

        {/* Ticket content */}
        <Box
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            padding: "1.5rem",
          }}
        >
          <Box mr="4" mt="3">
            <img src={logoIcon} alt="Logo" />
          </Box>

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
        </Box>
      </div>
    </>
  );
}
