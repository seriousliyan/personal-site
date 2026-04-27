import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import TerminalWindow from "@/components/TerminalWindow";
import TerminalPrompt from "@/components/TerminalPrompt";
import TypewriterText from "@/components/TypewriterText";

const SECTIONS = ["about", "skills", "projects", "contact"] as const;
type Section = typeof SECTIONS[number];

const RESUME_PATH = `${import.meta.env.BASE_URL}Li Yan – Full-Stack Resume.pdf`;

const CONTENT: Record<Section, React.ReactNode> = {
  about: (
    <div className="space-y-3">
      <p className="text-foreground text-glow">
        Hello, I'm <span className="text-secondary font-semibold">Li Yan</span> — a senior
        full-stack engineer building AI-driven products.
      </p>
      <p className="text-muted-foreground">
        I work on LLM evaluation pipelines, real-time voice systems, and ML classification
        in production — the kind of plumbing that cuts operational effort and improves reliability.
      </p>
      <p className="text-muted-foreground">
        I build end-to-end web platforms and data-rich interfaces — from responsive React
        dashboards to backend services — translating complex data into clear, actionable experiences.
      </p>
    </div>
  ),
  skills: (
    <div className="space-y-2">
      {[
        { name: "TypeScript / React", level: 92 },
        { name: "Python / FastAPI", level: 88 },
        { name: "LLM & Voice Agents", level: 86 },
        { name: "Evals & Observability", level: 84 },
        { name: "Audio ML / WavLM", level: 78 },
      ].map((s) => (
        <div key={s.name} className="flex items-center gap-3">
          <span className="text-muted-foreground w-44 shrink-0 text-xs">{s.name}</span>
          <div className="flex-1 h-2 bg-muted rounded-sm overflow-hidden">
            <motion.div
              className="h-full bg-secondary rounded-sm"
              initial={{ width: 0 }}
              animate={{ width: `${s.level}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <span className="text-xs text-muted-foreground w-8 text-right">{s.level}%</span>
        </div>
      ))}
    </div>
  ),
  projects: (
    <div className="space-y-4">
      {[
        {
          name: "multi-agent-voice",
          desc: "Outbound voice agents that verify hotel reservations end-to-end. Cut FinOps labor by 60%.",
          tag: "VOICE AI",
        },
        {
          name: "llm-eval-pipeline",
          desc: "BrainTrust-based eval pipeline to train, validate, and benchmark prompt/model updates against a golden dataset.",
          tag: "LLM QUALITY",
        },
        {
          name: "apm-ai-assistant",
          desc: "Chat assistant + responsive dashboards turning APM metrics into actionable troubleshooting insights.",
          tag: "OBSERVABILITY",
        },
        {
          name: "voice-classifier",
          desc: "WavLM-based model deployed to detect human vs. automated voices. 95% accuracy, sub-200ms latency.",
          tag: "AUDIO ML",
        },
      ].map((p) => (
        <div key={p.name} className="border border-border rounded p-3 hover:border-secondary/50 transition-colors">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-secondary text-glow font-semibold text-sm">{p.name}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">{p.tag}</span>
          </div>
          <p className="text-xs text-muted-foreground">{p.desc}</p>
        </div>
      ))}
    </div>
  ),
  contact: (
    <div className="space-y-2 text-sm">
      <p className="text-muted-foreground">
        <span className="text-foreground text-glow">email</span>    →{" "}
        <a href="mailto:seriousliyan@gmail.com" className="text-secondary hover:underline">
          seriousliyan@gmail.com
        </a>
      </p>
      <p className="text-muted-foreground">
        <span className="text-foreground text-glow">resume</span>   →{" "}
        <a href={RESUME_PATH} download target="_blank" rel="noreferrer" className="text-secondary hover:underline">
          Li Yan – Full-Stack Resume.pdf
        </a>
      </p>
      <p className="text-muted-foreground">
        <span className="text-foreground text-glow">linkedin</span> →{" "}
        <a href="https://www.linkedin.com/in/seriousliyan" target="_blank" rel="noreferrer" className="text-secondary hover:underline">
          linkedin.com/in/seriousliyan
        </a>
      </p>
      <p className="text-muted-foreground">
        <span className="text-foreground text-glow">site</span>     → seriousli.info
      </p>
    </div>
  ),
};

const Index = () => {
  const [booted, setBooted] = useState(false);
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setBooted(true), 1800);
    return () => clearTimeout(t);
  }, []);

  const executeCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const matched = SECTIONS.find((s) => s === trimmed);
    if (matched) {
      setActiveSection(matched);
    } else if (trimmed === "clear") {
      setActiveSection(null);
    }
    setInputValue("");
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") executeCommand(inputValue);
  };

  if (!booted) {
    return (
      <div className="min-h-screen flex items-center justify-center scanlines crt-flicker">
        <div className="font-mono-terminal text-sm text-glow space-y-1 text-center">
          <p className="text-secondary">▓▓▓ SYSTEM BOOT ▓▓▓</p>
          <TypewriterText text="Initializing kernel modules..." delay={30} />
          <motion.div
            className="mt-4 h-1 bg-secondary/30 rounded w-64 mx-auto overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-secondary rounded"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    );
  }

  const tabs = SECTIONS.map((s) => ({ id: s, label: s }));

  const handleTabClick = (id: string) => {
    setActiveSection(id as Section);
  };

  return (
    <div className="h-screen scanlines crt-flicker p-4 md:p-8 max-w-4xl mx-auto flex flex-col">
      {/* Header */}
      <motion.header
        className="mb-6 shrink-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-secondary text-glow font-mono-terminal tracking-tight">
          li.yan
        </h1>
        <p className="text-muted-foreground text-sm mt-1 font-mono-terminal">
          full-stack engineer · ai/llm systems · data interfaces
        </p>
      </motion.header>

      {/* Terminal */}
      <motion.div
        className="flex-1 min-h-0 flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <TerminalWindow
          title="li@seriousli.info ~ %"
          tabs={tabs}
          activeTab={activeSection}
          onTabClick={handleTabClick}
          className="flex-1 min-h-0"
        >
          {!activeSection ? (
            <div className="text-muted-foreground text-xs space-y-1">
              <p>Welcome to Li Yan's terminal. Last login: just now.</p>
              <p>
                Type <span className="text-secondary">about</span>,{" "}
                <span className="text-secondary">skills</span>,{" "}
                <span className="text-secondary">projects</span>, or{" "}
                <span className="text-secondary">contact</span> — or click a tab above.
              </p>
              <div className="flex gap-2 items-center mt-4">
                <span className="text-secondary text-glow shrink-0">❯</span>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-foreground text-glow caret-secondary font-mono-terminal text-sm"
                  placeholder="type a command..."
                  autoFocus
                  spellCheck={false}
                />
              </div>
            </div>
          ) : (
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TerminalPrompt command={activeSection} />
              <div className="ml-5 mt-3">{CONTENT[activeSection]}</div>
            </motion.div>
          )}
        </TerminalWindow>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="mt-4 shrink-0 text-center text-xs text-muted-foreground font-mono-terminal pb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>© 2026 li.yan · built with caffeine and amber phosphor</p>
      </motion.footer>
    </div>
  );
};

export default Index;
