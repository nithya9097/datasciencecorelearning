"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/* -------------------------------------------------------------------------- */
/* Types & constants                                                          */
/* -------------------------------------------------------------------------- */

type Message = { role: "user" | "assistant"; content: string };

const MAX_HISTORY_MESSAGES = 8;
const MAX_INPUT_LENGTH = 2000;

const STARTERS = [
  "Explain this topic simply",
  "Give me a real-world example",
  "Ask me a practice question",
];

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi! I'm your DataSciencePath Tutor. Ask me to explain a topic, walk through code, give a real-world example, or quiz you. If you're viewing a lesson, I'll use that lesson as context.",
};

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Lightweight rendering: preserves line breaks and fenced code blocks
 * without injecting any HTML.
 */
function formatAnswer(text: string) {
  return text.split(/(```[\s\S]*?```)/g).map((part, index) => {
    const isCodeBlock = part.startsWith("```") && part.endsWith("```");

    if (isCodeBlock) {
      const code = part.replace(/^```[^\n]*\n?/, "").replace(/```$/, "");
      return (
        <pre className="dspChatCode" key={index}>
          <code>{code}</code>
        </pre>
      );
    }

    const lines = part.split("\n");
    return (
      <span key={index}>
        {lines.map((line, lineIndex) => (
          <span key={lineIndex}>
            {line}
            {lineIndex < lines.length - 1 ? <br /> : null}
          </span>
        ))}
      </span>
    );
  });
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function ChatbotAssistant() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);

  const endRef = useRef<HTMLDivElement>(null);

  // If the learner is on /learn/<moduleId>/<topicId>, send that as context
  const routeContext = useMemo(() => {
    const parts = (pathname || "").split("/").filter(Boolean);
    return parts[0] === "learn" && parts.length >= 3
      ? { moduleId: parts[1], topicId: parts[2] }
      : {};
  }, [pathname]);

  // Keep the latest message in view
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, busy, open]);

  /* ------------------------------ Handlers -------------------------------- */

  async function sendMessage(event?: FormEvent, suggested?: string) {
    event?.preventDefault();

    const question = (suggested ?? input).trim();
    if (!question || busy) return;

    setError("");
    setInput("");
    setBusy(true);

    // Exclude the welcome message from the history sent to the API
    const history = messages
      .filter((_, index) => index !== 0)
      .slice(-MAX_HISTORY_MESSAGES);

    setMessages((current) => [...current, { role: "user", content: question }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, messages: history, ...routeContext }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not get an answer.");

      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.answer },
      ]);
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setBusy(false);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    // Enter sends, Shift+Enter inserts a new line
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  }

  /* -------------------------------- Render -------------------------------- */

  return (
    <div className="dspChatRoot">
      {open && (
        <section className="dspChatPanel" aria-label="DataSciencePath Tutor">
          {/* Header */}
          <header className="dspChatHeader">
            <div className="dspChatAvatar">DS</div>
            <div className="dspChatHeaderText">
              <strong>DataSciencePath Tutor</strong>
              <span>Learning assistant · AI-powered</span>
            </div>
            <button
              className="dspChatIconButton"
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
            >
              ×
            </button>
          </header>

          {/* Messages */}
          <div className="dspChatMessages" aria-live="polite">
            {messages.map((message, index) => (
              <div
                className={`dspChatMessage ${message.role}`}
                key={`${message.role}-${index}`}
              >
                <div className="dspChatBubble">{formatAnswer(message.content)}</div>
              </div>
            ))}

            {busy && (
              <div className="dspChatMessage assistant">
                <div className="dspChatBubble dspChatTyping">
                  Thinking through your question…
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* Starter suggestions (only before the first question) */}
          {messages.length === 1 && (
            <div className="dspChatStarters">
              {STARTERS.map((starter) => (
                <button
                  key={starter}
                  type="button"
                  onClick={() => void sendMessage(undefined, starter)}
                  disabled={busy}
                >
                  {starter}
                </button>
              ))}
            </div>
          )}

          {error && (
            <p className="dspChatError" role="alert">
              {error}
            </p>
          )}

          {/* Input */}
          <form className="dspChatForm" onSubmit={(event) => void sendMessage(event)}>
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Python, SQL, ML..."
              aria-label="Ask the learning assistant"
              rows={2}
              maxLength={MAX_INPUT_LENGTH}
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send message"
            >
              {busy ? "…" : "Send"}
            </button>
          </form>

          <p className="dspChatDisclaimer">
            AI can make mistakes. Verify important code and concepts.
          </p>
        </section>
      )}

      {/* Launcher button */}
      <button
        className="dspChatLauncher"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close learning assistant" : "Open learning assistant"}
      >
        {open ? (
          "×"
        ) : (
          <>
            <span className="dspChatLauncherIcon">✦</span>
            <span>Ask Tutor</span>
          </>
        )}
      </button>
    </div>
  );
}