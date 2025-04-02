import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  thickness?: number;
}

const LoadingSpinner = ({
  size = 40,
  color = "var(--primary)",
  thickness = 4,
}: LoadingSpinnerProps) => {
  const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 1,
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          border: `${thickness}px solid rgba(0, 0, 0, 0.1)`,
          borderTopColor: color,
          borderLeftColor: color,
        }}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
};

export default LoadingSpinner;
