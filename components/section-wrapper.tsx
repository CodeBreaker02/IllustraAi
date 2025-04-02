import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
  containerClassName?: string;
}

export default function SectionWrapper({
  id,
  className,
  children,
  containerClassName,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("w-full py-16 md:py-24", className)}>
      <div
        className={cn(
          "container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
