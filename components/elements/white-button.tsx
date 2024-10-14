"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const WhiteButton = ({
  icon,
  label,
  className,
  onClick,
  ...props
}: {
  icon: ReactNode;
  label: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "cursor-pointer bg-white hover:bg-neutral-200 text-black rounded-2xl flex flex-row items-center min-w-[80px] h-[36px] p-4 gap-2",
        className
      )}
      {...props}
    >
      <div>{icon}</div>
      <div>{label}</div>
    </div>
  );
};

export default WhiteButton;
