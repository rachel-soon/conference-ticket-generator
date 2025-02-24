import TicketImg from "./assets/pattern-ticket.svg";
import { Box } from "@radix-ui/themes";
import TicketNumber from "./TicketNumber";
import TicketLocation from "./TicketLocation";
import TicketUser from "./TicketUser";

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

        {/* Ticket id */}
        <TicketNumber />

        {/* Ticket content */}
        <Box
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            padding: "1.5rem",
          }}
        >
          <TicketLocation />
          <TicketUser />
        </Box>
      </div>
    </>
  );
}
