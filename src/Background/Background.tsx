import { Box } from "@radix-ui/themes";
import backgroundImage from "./assets/background-desktop.png";
import linesImage from "./assets/pattern-lines.svg";
import squigglyLinesImage from "./assets/pattern-squiggly-bottom.svg";
import squigglyLineTopImage from "./assets/pattern-squiggly-line-top.svg";
import circleImage from "./assets/pattern-circle.svg";
import { ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  const sharedStyle = (imageUrl: string) => {
    return {
      height: "100vh",
      width: "100vw",
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
  };
  return (
    <>
      <Box
        style={{
          ...sharedStyle(backgroundImage),
          position: "relative",
          zIndex: "0",
        }}
      >
        <Box
          style={{
            ...sharedStyle(linesImage),
            position: "fixed",
            zIndex: "1",
            top: "0",
          }}
        />
        <Box>
          <img
            src={squigglyLinesImage}
            style={{ position: "fixed", bottom: "0", zIndex: "1" }}
          />
        </Box>
        <Box>
          <img
            src={squigglyLineTopImage}
            style={{ position: "fixed", top: "0", right: "0", zIndex: "1" }}
          />
        </Box>
        <Box>
          <img
            src={circleImage}
            style={{
              position: "fixed",
              top: "-70px",
              left: "60px",
              width: "14%",
              zIndex: "1",
            }}
          />
        </Box>

        <Box
          py="8"
          style={{
            display: "flex",
            flexDirection: "column",
            placeItems: "center",
            zIndex: "2",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
