import React, { useRef } from "react";

interface Props {
  children: React.ReactNode;
  tooltip?: string;
}

const ToolTip: React.FC<Props> = ({ children, tooltip }): JSX.Element => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const container = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={container}
      onMouseEnter={({ clientX }) => {
        if (!tooltipRef.current || !container.current) return;
        const { left } = container.current.getBoundingClientRect();

        tooltipRef.current.style.left = clientX - left + "px";
      }}
      className="group relative inline-block"
    >
      {children}
      <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-blue-700 text-white p-1 rounded-full top-full mt-2"></span>
    </div>
  );
};

export default ToolTip;
