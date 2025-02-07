import { Box, Text } from "@radix-ui/themes";
import logoIcon from "../assets/logo-mark.svg";
import logoGithub from "./icon-github.svg";

export default function TicketUser() {
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
        style={{
          height: "fit-content",
          marginTop: "15px",
          width: "80px",
          borderRadius: "10px",
        }}
      />

      <Box
        style={{
          height: "inherit",
          display: "flex",
          flexDirection: "column",
          placeItems: "center",
        }}
        mt="3"
      >
        <Text weight="medium" style={{ fontSize: "28px" }}>
          Jonatan Kristof
        </Text>

        <Box
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
          }}
        >
          <img
            src={logoGithub}
            alt="Logo"
            style={{
              height: "fit-content",
            }}
          />
          <Text size="5">@jonatankristof0101</Text>
        </Box>
      </Box>
    </Box>
  );
}
