export function BackgroundGrid() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.03] to-transparent">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  )
}
