import React, { useState, useEffect } from "react";
import TerminalPractice from "./TerminalPractice";
import QuizCard from "./QuizCard";

export default function ContentArea({
  module,
  section,
  isCompleted,
  toggleSectionCompleted,
  onPrev,
  onNext,
  hasPrev,
  hasNext
}) {
  const [deepDiveOpen, setDeepDiveOpen] = useState({});

  // Reset state when section changes
  useEffect(() => {
    setDeepDiveOpen({});
    // Scroll to top of main content when section changes
    window.scrollTo(0, 0);
  }, [section]);

  const handleToggleDeepDive = (index) => {
    setDeepDiveOpen((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Helper to copy text to clipboard
  const handleCopyCode = (codeText) => {
    navigator.clipboard.writeText(codeText);
    alert("코드가 클립보드에 복사되었습니다!");
  };

  if (!section) return null;

  return (
    <main className="main-content">
      <div className="content-inner">
        {/* Header navigation bar */}
        <div className="content-header">
          <div className="breadcrumb">
            {module?.title.split(" ").slice(1).join(" ")} &gt; <span>{section.title}</span>
          </div>
          <button
            className={`complete-section-btn ${isCompleted ? "completed" : ""}`}
            onClick={toggleSectionCompleted}
          >
            {isCompleted ? "✓ 학습 완료" : "○ 완료로 표시"}
          </button>
        </div>

        {/* Content body */}
        <article className="handbook-body">
          <h1 className="article-title">{section.title}</h1>
          <p className="article-description">{section.description}</p>
          
          <div className="section-divider"></div>

          {/* Render markdown-like structures inside section.content */}
          <div 
            dangerouslySetInnerHTML={{ __html: section.content }} 
          />

          {/* Copy-paste hooks for pre tags if they are rendered inside content */}
          {/* We'll handle interactive custom sub-components below */}

          {/* Interactive terminal practice if present */}
          {section.practice && (
            <TerminalPractice 
              practice={section.practice} 
              onComplete={() => {
                if (!isCompleted) toggleSectionCompleted();
              }}
            />
          )}

          {/* Quiz card if present */}
          {section.quiz && (
            <QuizCard 
              quiz={section.quiz}
              onComplete={() => {
                if (!isCompleted) toggleSectionCompleted();
              }}
            />
          )}
        </article>

        {/* Bottom navigation buttons */}
        <div className="content-footer">
          <button 
            className="nav-btn" 
            onClick={onPrev} 
            disabled={!hasPrev}
          >
            ← 이전 단원
          </button>
          <button 
            className="nav-btn" 
            onClick={onNext} 
            disabled={!hasNext}
            style={hasNext ? { backgroundColor: "var(--accent-primary)", color: "white", borderColor: "transparent" } : {}}
          >
            {hasNext ? "다음 단원 →" : "모든 과정 완료! 🎉"}
          </button>
        </div>
      </div>
    </main>
  );
}
