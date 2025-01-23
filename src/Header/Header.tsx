import { Heading, Text, Container, Section } from "@radix-ui/themes";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <Section
      size="2"
      p="0"
      style={{ position: "relative", marginBottom: "20px" }}
    >
      <Container size="3" style={{ textAlign: "center" }}>
        <Logo />
        <Heading size="8" style={{ width: "40vw" }} my="5">
          Your Journey to Coding Conf 2025 Starts Here!
        </Heading>
        <Text>Secure your spot at this year's biggest coding conference.</Text>
      </Container>
    </Section>
  );
}
