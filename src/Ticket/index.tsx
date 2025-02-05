import TicketImg from "./assets/pattern-ticket.svg";

export default function Ticket() {
  return (
    <div style={{ zIndex: "10", marginTop: "20px" }}>
      <img src={TicketImg} alt="Ticket Image" />
    </div>
  );
}
