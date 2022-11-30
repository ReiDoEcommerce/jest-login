interface LoaderCircleProps {
  size: number;
  color?: string;
}

export function LoaderCircle({ size, color }: LoaderCircleProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: "auto",
          background: "none",
          display: "block",
          shapeRendering: "auto",
        }}
        width={size + "px"}
        height={size + "px"}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="loader-button"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke={color ? color : "#ffffff"}
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="0.7874015748031495s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
    </>
  );
}
