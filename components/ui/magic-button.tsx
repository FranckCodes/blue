"use client"

import { forwardRef, type CSSProperties } from "react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type MagicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: LucideIcon
  textClassName?: string
  active?: boolean
  variant?: "primary" | "ghost"
}

type MagicButtonStyle = CSSProperties & {
  "--active"?: number
}

export const MagicButton = forwardRef<HTMLButtonElement, MagicButtonProps>(
  (
    {
      className,
      children,
      icon: Icon,
      textClassName,
      active = false,
      variant = "primary",
      style,
      ...props
    },
    ref,
  ) => {
    const mergedStyle: MagicButtonStyle = {
      ...(style as MagicButtonStyle | undefined),
    }
    if (active && variant === "primary") {
      mergedStyle["--active"] = 1
    }

    return (
      <button
        ref={ref}
        className={cn("magic-button", className)}
        style={mergedStyle}
        data-variant={variant}
        {...props}
      >
        <span aria-hidden className="magic-button__dots" />
        <Icon aria-hidden className="magic-button__icon" />
        <span className={cn("magic-button__text whitespace-nowrap", textClassName)}>{children}</span>
      </button>
    )
  },
)

MagicButton.displayName = "MagicButton"

