import { Box, Text } from "@radix-ui/themes";
import logoIcon from "../assets/logo-mark.svg";
import logoGithub from "./icon-github.svg";
import { useTicketFormStore } from "../../store/ticketFormStore";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function TicketUser() {
  const { user_name, user_github } = useTicketFormStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user_name === "") {
      navigate("/form");
    }
  }, [user_name, navigate]);

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
          placeItems: "start",
        }}
        mt="3"
      >
        <Text
          weight="medium"
          style={{ fontSize: "28px", textTransform: "capitalize" }}
        >
          {user_name}
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
          <Text size="5">@{user_github}</Text>
        </Box>
      </Box>
    </Box>
  );
}
