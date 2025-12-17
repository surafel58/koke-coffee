import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#D4A853] text-[#1A1A1A] hover:bg-[#E8A54B] focus-visible:ring-[#D4A853]",
        secondary:
          "bg-[#F5E6D3] text-[#1A1A1A] hover:bg-[#E8A54B]/20 focus-visible:ring-[#D4A853]",
        outline:
          "border-2 border-[#D4A853] bg-transparent text-[#D4A853] hover:bg-[#D4A853] hover:text-[#1A1A1A]",
        ghost:
          "hover:bg-[#D4A853]/10 hover:text-[#D4A853]",
        dark:
          "bg-[#1A1A1A] text-[#F5E6D3] hover:bg-[#3D3D3D] focus-visible:ring-[#D4A853]",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
