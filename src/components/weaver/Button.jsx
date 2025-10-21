import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils"

const weaverButtonVariants = cva(
  "inline-flex items-center justify-center gap-weaver-xxs flex-shrink-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-weaver-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      style: {
        primary: "bg-weaver-primary text-white shadow-weaver hover:bg-weaver-primary-hover",
        secondary: "bg-weaver-secondary text-weaver-text-default shadow-weaver hover:bg-weaver-secondary-hover",
        soft: "bg-weaver-bg-subtle text-weaver-text-default shadow-weaver hover:bg-weaver-bg-muted",
        outline: "border border-weaver-border-default bg-transparent text-weaver-text-default hover:bg-weaver-bg-subtle",
        ghost: "bg-transparent text-weaver-text-default hover:bg-weaver-bg-subtle",
        danger: "bg-weaver-danger text-white shadow-weaver hover:bg-weaver-red-600",
        "ghost-primary": "bg-transparent text-weaver-primary hover:bg-weaver-bg-subtle",
        "soft-danger": "bg-weaver-red-50 text-weaver-danger hover:bg-weaver-red-100",
        white: "bg-weaver-white text-weaver-text-default shadow-weaver hover:bg-weaver-gray-50",
        dashed: "border border-dashed border-weaver-border-default bg-transparent text-weaver-text-default hover:bg-weaver-bg-subtle",
      },
      state: {
        default: "",
        hover: "",
        pressed: "",
        focused: "",
        disabled: "opacity-50 cursor-not-allowed",
      },
      size: {
        lg: "h-12 px-weaver-6xl py-weaver-md text-base",
        md: "h-10 px-weaver-5xl py-weaver-md text-sm",
        sm: "h-9 px-weaver-4xl py-weaver-sm text-sm",
        xs: "h-8 px-weaver-3xl py-weaver-sm text-xs",
      },
      rtl: {
        true: "flex-row-reverse",
        false: "flex-row",
      },
    },
    defaultVariants: {
      style: "primary",
      state: "default",
      size: "md",
      rtl: false,
    },
  }
)

const WeaverButton = React.forwardRef(({ 
  className, 
  style, 
  state, 
  size, 
  rtl = false,
  showLeadingIcon = true,
  leadingIcon,
  showTrailingIcon = true,
  trailingIcon,
  label,
  ARlabel,
  children,
  asChild = false,
  ...props 
}, ref) => {
  const Comp = asChild ? Slot : "button"
  const displayLabel = rtl && ARlabel ? ARlabel : label
  
  return (
    <Comp
      className={cn(weaverButtonVariants({ style, state, size, rtl, className }))}
      ref={ref}
      {...props}
    >
      {showLeadingIcon && leadingIcon && (
        <span className="flex items-center">
          {leadingIcon}
        </span>
      )}
      {displayLabel && (
        <span>{displayLabel}</span>
      )}
      {children}
      {showTrailingIcon && trailingIcon && (
        <span className="flex items-center">
          {trailingIcon}
        </span>
      )}
    </Comp>
  );
})
WeaverButton.displayName = "WeaverButton"

export { WeaverButton, weaverButtonVariants }
