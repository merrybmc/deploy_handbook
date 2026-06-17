import React, { useState, useEffect, useRef } from "react";

export default function TerminalPractice({ practice, onComplete }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const bodyRef = useRef(null);

  // Reset state when practice prompt changes
  useEffect(() => {
    setHistory([]);
    setInput("");
    setIsSuccess(false);
  }, [practice]);

  // Scroll to bottom when history updates
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const newHistory = [...history, { type: "input", text: trimmedInput }];

    // Normalize command matching: collapse multiple spaces and trim
    const normalizedInput = trimmedInput.replace(/\s+/g, " ");
    const normalizedExpected = practice.expectedCommand.replace(/\s+/g, " ");

    if (normalizedInput === normalizedExpected) {
      setIsSuccess(true);
      newHistory.push({
        type: "success",
        text: `✓ Success: ${practice.successMessage}`
      });
      if (onComplete) onComplete();
    } else {
      newHistory.push({
        type: "error",
        text: `✗ Error: Command not recognized.\nHint: ${practice.commandHint}`
      });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div className="practice-section">
      <div className="practice-title">
        <span>💻</span> 실습 명령어 연습
      </div>
      <div className="practice-desc">
        배운 내용을 토대로 아래 문제를 읽고 터미널에 올바른 명령어를 입력하세요.
        <p style={{ marginTop: "8px", fontWeight: "600", color: "var(--text-primary)" }}>
          🔍 문제: {practice.prompt}
        </p>
      </div>

      <div className="mock-terminal">
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-title">ubuntu@aws-server-vps:~</div>
          <div style={{ width: "36px" }}></div>
        </div>

        <div 
          className="terminal-body" 
          ref={bodyRef}
          style={{ height: "200px", overflowY: "auto" }}
          onClick={() => document.getElementById("terminal-input-field")?.focus()}
        >
          <div className="terminal-history">
            <div className="history-item text-muted">
              Welcome to Ubuntu Server 22.04 LTS (GNU/Linux 5.15.0-generic)
              <br />
              * Documentation: https://help.ubuntu.com
              <br />
              * Management:     https://landscape.canonical.com
            </div>
            {history.map((item, index) => (
              <div key={index} className="history-item">
                {item.type === "input" ? (
                  <div className="terminal-prompt-line history-input">
                    <span className="prompt-prefix">ubuntu@aws-server</span>
                    <span className="prompt-arrow">:~$</span>
                    <span>{item.text}</span>
                  </div>
                ) : (
                  <div className={`history-output ${item.type === "error" ? "error" : "success"}`}>
                    {item.text}
                  </div>
                )}
              </div>
            ))}
          </div>

          {!isSuccess && (
            <form onSubmit={handleSubmit} className="terminal-prompt-line">
              <span className="prompt-prefix">ubuntu@aws-server</span>
              <span className="prompt-arrow">:~$</span>
              <input
                id="terminal-input-field"
                type="text"
                className="terminal-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoComplete="off"
                autoFocus
                placeholder="여기에 명령어를 입력하고 Enter 키를 누르세요..."
              />
            </form>
          )}

          {isSuccess && (
            <div className="terminal-prompt-line" style={{ color: "#34d399", fontWeight: "600" }}>
              🎉 실습 완료! 다음 단계로 가셔도 좋습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
