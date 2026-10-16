import type { ComponentPropsWithoutRef, ElementType } from "react";

const COLOR_CLASSES = {
  amber: "bg-brand-amber",
  green: "bg-brand-green",
  white: "bg-white",
} as const;

const TEXT_SIZE_CLASSES = {
  20: "text-[20px]",
  24: "text-[24px]",
  28: "text-[28px]",
} as const;

type ButtonColor = keyof typeof COLOR_CLASSES;
type ButtonTextSize = keyof typeof TEXT_SIZE_CLASSES;

type ButtonOwnProps<T extends ElementType> = {
  as?: T;
  color?: ButtonColor;
  textSize?: ButtonTextSize;
  /** Nav's "Order Now" is smaller: 1px border, 10px padding, 20px text. */
  compact?: boolean;
  className?: string;
};

type ButtonProps<T extends ElementType> = ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>;

/**
 * The repeating pill-button pattern used across the design: rounded-full, black border,
 * flat (unblurred) drop-shadow, Di Grotesk/display Bold uppercase label. Fill color and
 * size vary per Figma instance (see .figma-cache/design-context/*.tsx for the exact
 * combinations pulled) — everything else about the shape is identical everywhere it appears.
 */
export function Button<T extends ElementType = "button">({
  as,
  color = "amber",
  textSize = 24,
  compact = false,
  className = "",
  children,
  ...props
}: ButtonProps<T>) {
  const Component = (as ?? "button") as ElementType;

  return (
    <Component
      className={[
        "inline-flex items-center justify-center rounded-pill border-black shadow-pill",
        compact ? "border p-[10px]" : "border-2 p-[15px]",
        COLOR_CLASSES[color],
        className,
      ].join(" ")}
      {...props}
    >
      <span
        className={[
          "font-display font-bold whitespace-nowrap text-ink-button uppercase",
          TEXT_SIZE_CLASSES[textSize],
        ].join(" ")}
      >
        {children}
      </span>
    </Component>
  );
}
