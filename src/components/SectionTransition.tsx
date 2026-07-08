export default function SectionTransition({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="section-transition" style={inverted ? { transform: "rotate(180deg)" } : undefined}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
