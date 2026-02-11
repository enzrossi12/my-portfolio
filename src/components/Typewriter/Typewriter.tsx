import { Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";
import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  delay: number;
  variant?: TypographyProps["variant"];
  color?: TypographyProps["color"];
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delay,
  variant,
  color,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <Typography variant={variant} color={color} textAlign="center">
      {currentText}
    </Typography>
  );
};

export default Typewriter;
