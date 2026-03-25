type Stat = {
  label: string;
  value: string;
  tone: string;
};

const toneStyles: Record<string, string> = {
  warm: "bg-[linear-gradient(180deg,rgba(255,248,238,0.98),rgba(249,221,178,0.88))]",
  olive: "bg-[linear-gradient(180deg,rgba(255,250,243,0.98),rgba(201,224,206,0.88))]",
  neutral: "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(231,225,213,0.9))]",
};

export function StatGrid({ items }: { items: Stat[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className={`card-border rounded-[1.8rem] p-5 ${toneStyles[item.tone] ?? toneStyles.neutral}`}>
          <div className="text-xs uppercase tracking-[0.22em] text-[rgba(98,87,72,0.95)]">{item.label}</div>
          <div className="display-font mt-4 text-5xl tracking-[-0.05em]">{item.value}</div>
        </div>
      ))}
    </div>
  );
}
