import { ReactNode } from "react";

interface Tab {
  id: string;
  label: string;
}

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
  tabs?: Tab[];
  activeTab?: string | null;
  onTabClick?: (id: string) => void;
}

const TerminalWindow = ({ title = "terminal", children, className = "", tabs, activeTab, onTabClick }: TerminalWindowProps) => (
  <div className={`rounded border border-border bg-card overflow-hidden flex flex-col ${className}`}
    style={{ boxShadow: "var(--terminal-glow)" }}>
    {/* Title bar */}
    <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/50 shrink-0">
      <div className="w-2.5 h-2.5 rounded-full bg-secondary opacity-80" />
      <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground opacity-50" />
      <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground opacity-30" />
      <span className="ml-2 text-xs text-muted-foreground font-mono-terminal">{title}</span>
    </div>
    {/* Tabs bar */}
    {tabs && tabs.length > 0 && (
      <div className="flex border-b border-border bg-muted/30 shrink-0 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabClick?.(tab.id)}
            className={`px-4 py-2 text-xs font-mono-terminal border-r border-border transition-all duration-200 whitespace-nowrap
              ${activeTab === tab.id
                ? "bg-card text-secondary text-glow border-b-2 border-b-secondary"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
          >
            ./{tab.label}
          </button>
        ))}
      </div>
    )}
    {/* Content */}
    <div className="p-5 font-mono-terminal text-sm leading-relaxed overflow-y-auto flex-1">
      {children}
    </div>
  </div>
);

export default TerminalWindow;
