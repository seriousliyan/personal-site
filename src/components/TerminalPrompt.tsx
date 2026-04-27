interface TerminalPromptProps {
  command?: string;
  children?: React.ReactNode;
  showCursor?: boolean;
}

const TerminalPrompt = ({ command, children, showCursor = false }: TerminalPromptProps) => (
  <div className="flex gap-2 items-start">
    <span className="text-secondary text-glow shrink-0">❯</span>
    <div className="text-foreground text-glow">
      {command && <span>{command}</span>}
      {children}
      {showCursor && <span className="cursor-blink text-secondary ml-0.5">▌</span>}
    </div>
  </div>
);

export default TerminalPrompt;
