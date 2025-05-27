import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 hover:scale-105 btn-modern",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-white hover:shadow-glow border-primary/30",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-destructive",
        outline: "border-primary bg-transparent text-primary hover:bg-primary/10 hover:shadow-glow",
        secondary: "bg-gradient-secondary text-white hover:shadow-glow border-secondary/30",
        ghost: "hover:bg-accent/10 hover:text-accent border-transparent hover:border-accent/30",
        link: "text-primary underline-offset-4 hover:underline border-transparent",
        soft: "bg-primary/15 text-primary hover:bg-primary/25 border-primary/30 hover:shadow-glow",
        white: "bg-white text-primary hover:bg-white/90 shadow-soft hover:shadow-glow border-primary/30",
        accent: "bg-accent text-white hover:shadow-glow border-accent/30",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 rounded-full px-6",
        lg: "h-14 rounded-full px-10 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
