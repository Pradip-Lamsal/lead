import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex w-full border-0 border-b border-gray-200 bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:shadow-none focus:border-b focus:border-gray-200 focus-visible:border-b-2 focus-visible:outline-none focus-visible:ring-0 appearance-none focus:appearance-none focus:no-underline outline-none transition-[border-bottom] resize-none",
        className
      )}
      ref={ref}
      {...props}
      style={{
        outline: "none",
        boxShadow: "none",
        ...(props.style || {})
      }}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
