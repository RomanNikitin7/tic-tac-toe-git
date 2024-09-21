import clsx from "clsx";

/**
 * @param {{
 *    children,
 *    className: string,
 *    size: 'lg' | 'md',
 *    variant: "primary" | "outline"
 * }} props
 */
export function UiButton({ size, variant, children, className }) {
  const buttonStyles = clsx(
    className,
    "leading-tight transition-colors",
    {
      lg: "text-2xl px-5 py-2 rounded-lg",
      md: "text-sm px-6 py-2 rounded",
    }[size],
    {
      primary: "text-white bg-teal-600 hover:bg-teal-500",
      outline:
        "text-teal-600 border-solid border border-teal-600 hover:bg-teal-50",
    }[variant],
  );
  return <button className={buttonStyles}>{children}</button>;
}
