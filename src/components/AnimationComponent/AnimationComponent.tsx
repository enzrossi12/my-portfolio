import { keyframes } from "@emotion/react";
import { styled } from "@mui/system";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface AnimationComponentProps {
  children: ReactNode;
}

const paperReveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(18px) rotate(-0.8deg);
    filter: blur(1px);
  }
  60% {
    opacity: 1;
    transform: translateY(-2px) rotate(0.25deg);
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(0);
    filter: blur(0);
  }
`;

const StyledAnimationComponent = styled("div", {
  shouldForwardProp: (prop) => prop !== "startAnimation",
})<{ startAnimation: boolean }>(({ startAnimation }) => ({
  opacity: startAnimation ? 1 : 0,
  transform: startAnimation ? "translateY(0) rotate(0)" : "translateY(18px) rotate(-0.8deg)",
  animation: startAnimation ? `${paperReveal} 700ms ease-out both` : "none",
  willChange: "opacity, transform",
}));

const AnimationComponent: React.FC<AnimationComponentProps> = ({ children }) => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const el = componentRef.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        setStartAnimation(true);
        observer.disconnect();
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <StyledAnimationComponent ref={componentRef} startAnimation={startAnimation}>
      {children}
    </StyledAnimationComponent>
  );
};

export default AnimationComponent;
