import { Box } from "@radix-ui/themes";
import LogoImage from "./assets/logo-full.svg";

export default function Logo() {
  return (
    <Box style={{ textAlign: "center" }}>
      <img src={LogoImage} alt="Main logo" />
    </Box>
  );
}
