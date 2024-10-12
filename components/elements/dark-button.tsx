"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const DarkButton = ({
  icon,
  label,
  className,
  ...props
}: {
  icon: ReactNode;
  label: string;
  className: string | undefined;
}) => {
  return (
    <div
      className={cn(
        "cursor-pointer border border-neutral-700 bg-black hover:bg-neutral-700 text-white rounded-2xl flex flex-row items-center min-w-[80px] h-[36px] p-4 gap-2",
        className
      )}
      {...props}
    >
      <div>{icon}</div>
      <div>{label}</div>
    </div>
  );
};

export default DarkButton;
