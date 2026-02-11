import { keyframes, type Keyframes } from "@emotion/react";
import { styled } from "@mui/system";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface AnimationComponentProps {
  children: ReactNode;
  moveDirection: "left" | "right";
}

const moveFromLeftToRight = keyframes`
  0% { transform: translateX(-20vw); }
  100% { transform: translateX(0); }
`;

const moveFromRightToLeft = keyframes`
  0% { transform: translateX(20vw); }
  100% { transform: translateX(0); }
`;

const StyledAnimationComponent = styled("div", {
  shouldForwardProp: (prop) => prop !== "startAnimation" && prop !== "kf",
})<{ startAnimation: boolean; kf: Keyframes }>(({ startAnimation, kf }) => ({
  animation: startAnimation ? `${kf} 1s linear` : "none",
  willChange: "transform",
}));

const AnimationComponent: React.FC<AnimationComponentProps> = ({
  children,
  moveDirection,
}) => {
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

  const kf = moveDirection === "right" ? moveFromLeftToRight : moveFromRightToLeft;

  return (
    <StyledAnimationComponent ref={componentRef} startAnimation={startAnimation} kf={kf}>
      {children}
    </StyledAnimationComponent>
  );
};

export default AnimationComponent;
