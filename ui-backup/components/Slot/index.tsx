import { styled } from "../../stitches.config";

export const Slot = styled("div", {
  position: "absolute",
  // bgTone5: "mauve",
  // boxSize: 80,
  borderRadius: "$xl",
  zIndex: 1,
  variants: {
    position: {
      left: {
        left: 2,
        top: "50%",
        transform: "translateY(-50%)"
      },
      right: {
        right: 2,
        top: "50%",
        transform: "translateY(-50%)"
      },
      top: {
        top: 2,
        left: "50%",
        transform: "translateX(-50%)"
      },
      bottom: {
        bottom: 2,
        left: "50%",
        transform: "translateX(-50%)"
      },
      topLeft: {
        top: 2,
        left: 2
      },
      topRight: {
        top: 2,
        right: 2
      },
      bottomLeft: {
        bottom: 2,
        left: 2
      },
      bottomRight: {
        bottom: 2,
        right: 2
      }
    }
  },
  defaultVariants: {
    position: "left"
  }
});

export const SlotWrapper = styled("div", {
  position: "relative",
  display: "block"
});