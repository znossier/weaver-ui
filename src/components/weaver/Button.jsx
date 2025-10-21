import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils"

const weaverButtonVariants = cva(
  "inline-flex items-center justify-center gap-weaver-xxs flex-shrink-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-weaver-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-weaver-md",
  {
    variants: {
      style: {
        primary: "bg-blue-600 text-white shadow-sm hover:bg-blue-700",
        "outline-blue": "border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-50",
        "ghost-blue": "bg-transparent text-blue-600 hover:bg-blue-50",
        "soft-blue": "bg-[rgba(88,123,140,0.10)] text-blue-600 shadow-[0_1px_0_0_rgba(255,255,255,0.00)_inset] hover:bg-blue-100",
        danger: "bg-red-600 text-white shadow-sm hover:bg-red-700",
        "soft-danger": "bg-red-50 text-red-600 shadow-[0_1px_0_0_rgba(255,255,255,0.00)_inset] hover:bg-red-100",
        secondary: "bg-[#F9FBFC] text-gray-700 border border-[rgba(22,64,112,0.15)] shadow-[0_-1px_0_0_rgba(0,0,0,0.08)_inset,0_1px_2px_0_rgba(15,17,20,0.05)] hover:bg-gray-50",
        "outline-gray": "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50",
        "ghost-gray": "bg-transparent text-gray-700 hover:bg-gray-50",
        dashed: "border border-dashed border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50",
      },
      state: {
        default: "",
        hover: "",
        pressed: "",
        focused: "",
        disabled: "opacity-50 cursor-not-allowed bg-gray-100 text-gray-400 border-gray-200",
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
