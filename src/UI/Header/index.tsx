import { Heading, Text, Container, Section } from "@radix-ui/themes";
import Logo from "../Logo";
import { useLocation } from "react-router";
import { useTicketFormStore } from "../../store/ticketFormStore";

export default function Header() {
  const location = useLocation();
  console.log(location.pathname);

  const { user_email } = useTicketFormStore();

  const headerText = () => {
    switch (location.pathname) {
      case "/form":
      case "":
        return "Secure your spot at this year's biggest coding conference";
      case "/ticket":
        return `We've emailed your ticket to ${user_email} and will send updates in the run up to the event`;
    }
  };

  return (
    <Section
      size="2"
      p="0"
      style={{ position: "relative", marginBottom: "20px" }}
    >
      <Container size="3" style={{ textAlign: "center" }}>
        <Logo />
        <Heading size="9" style={{ width: "55vw" }} my="5">
          Your Journey to Coding Conf 2025 Starts Here!
        </Heading>
        <Text size="6">{headerText()}</Text>
      </Container>
    </Section>
  );
}
