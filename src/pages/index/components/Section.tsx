import React from "react";

interface SectionProps extends React.ComponentProps<"section"> {
  children: React.ReactNode;
}

export function Section({ children, className, ...rest }: SectionProps) {
  return (
    <section className={`full flex flex-col ${className}`} {...rest}>
      {children}
    </section>
  );
}
