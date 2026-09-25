"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { CloseIcon, SendIcon, SparkIcon } from "./icons";

type Message = {
  role: "user" | "assistant";
  text: string;
  references?: { label: string; href?: string }[];
};

export function AskPortfolio() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          text: "Hi — I'm Arthur's portfolio assistant. I answer only from his structured portfolio data. Try a question below.",
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  async function ask(question: string) {
    const q = question.trim();
    if (!q || loading) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text: data.answer ?? "I couldn't find that in my data.",
          references: data.references,
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-lift transition-all duration-200 hover:bg-accent hover:shadow-lift"
        aria-label={open ? "Close Ask Portfolio" : "Open Ask Portfolio"}
        aria-expanded={open}
      >
        {open ? <CloseIcon /> : <SparkIcon className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[32rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-lift">
          <div className="flex items-center justify-between border-b border-line bg-paper px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
                <SparkIcon className="h-4 w-4" />
              </span>
              <div className="flex flex-col">
                <span className="text-body font-semibold text-ink">Ask Portfolio</span>
                <span className="text-micro text-faint">Answers from structured data only</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-line hover:text-ink"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-small ${
                    m.role === "user"
                      ? "rounded-br-sm bg-ink text-white"
                      : "rounded-bl-sm bg-paper text-ink"
                  }`}
                >
                  <p>{m.text}</p>
                  {m.references && m.references.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {m.references.map((r) =>
                        r.href ? (
                          <a
                            key={r.label}
                            href={r.href}
                            className="rounded-full bg-surface px-2 py-0.5 text-micro font-medium text-accent"
                          >
                            {r.label} →
                          </a>
                        ) : (
                          <span
                            key={r.label}
                            className="rounded-full bg-surface px-2 py-0.5 text-micro text-muted"
                          >
                            {r.label}
                          </span>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-paper px-4 py-2.5 text-small text-muted">
                  Thinking…
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-line px-4 py-3">
            <div className="mb-2 flex gap-1.5 overflow-x-auto pb-1">
              {profile.askQuestions.slice(0, 3).map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => ask(q)}
                  className="shrink-0 rounded-full border border-line bg-paper px-3 py-1.5 text-micro text-muted transition-colors hover:border-ink hover:text-ink"
                >
                  {q}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Arthur's work…"
                className="flex-1 rounded-full border border-line bg-paper px-4 py-2.5 text-small text-ink outline-none placeholder:text-faint focus:border-accent"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-accent disabled:opacity-40"
              >
                <SendIcon />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
