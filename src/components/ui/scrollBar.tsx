import React, { ReactNode } from "react";

interface ScrollBarProps {
  children: ReactNode;
}

const ScrollBar: React.FC<ScrollBarProps> = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "auto",
        height: "100%", // Allow the scrollbar wrapper to take up full height
        scrollbarWidth: "thin",
        scrollbarColor: "#4F46E5 #F3F4F6",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollBar;
