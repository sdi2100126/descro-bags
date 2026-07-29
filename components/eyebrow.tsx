export function Eyebrow({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-[0.25em] text-accent-foreground/70 ${className}`}
    >
      {children}
    </p>
  )
}
