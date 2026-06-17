import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";
import { curriculumData } from "./data/curriculumData";

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState("1-1");
  const [completedSections, setCompletedSections] = useState(() => {
    const saved = localStorage.getItem("handbook_completed_sections");
    return saved ? JSON.parse(saved) : [];
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("handbook_theme");
    return saved ? saved : "dark";
  });
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Sync theme with DOM attribute
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("handbook_theme", theme);
  }, [theme]);

  // Sync progress with localStorage
  useEffect(() => {
    localStorage.setItem(
      "handbook_completed_sections",
      JSON.stringify(completedSections)
    );
  }, [completedSections]);

  // Find active module and section objects
  let activeModule = null;
  let activeSection = null;

  for (const mod of curriculumData) {
    const sec = mod.sections.find((s) => s.id === activeSectionId);
    if (sec) {
      activeModule = mod;
      activeSection = sec;
      break;
    }
  }

  // Linear flat list of all sections to ease next/prev navigation
  const flatSections = curriculumData.reduce((acc, mod) => {
    return [...acc, ...mod.sections.map((s) => ({ ...s, moduleId: mod.id }))];
  }, []);

  const activeIndex = flatSections.findIndex((s) => s.id === activeSectionId);
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < flatSections.length - 1;

  const handlePrev = () => {
    if (hasPrev) {
      setActiveSectionId(flatSections[activeIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      setActiveSectionId(flatSections[activeIndex + 1].id);
    } else {
      alert("축하합니다! 모든 배포 학습 코스를 정상 이수하셨습니다. 이제 완벽한 무중단 배포 엔지니어입니다! 🎉");
    }
  };

  const toggleSectionCompleted = () => {
    setCompletedSections((prev) => {
      if (prev.includes(activeSectionId)) {
        return prev.filter((id) => id !== activeSectionId);
      } else {
        return [...prev, activeSectionId];
      }
    });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app-container">
      {/* Mobile Burger Menu */}
      <button 
        className="mobile-burger-btn"
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      >
        <svg
          style={{ width: "24px", height: "24px" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMobileSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Sidebar Navigation */}
      <Sidebar
        curriculumData={curriculumData}
        activeSectionId={activeSectionId}
        setActiveSectionId={setActiveSectionId}
        completedSections={completedSections}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        theme={theme}
        toggleTheme={toggleTheme}
        isOpen={isMobileSidebarOpen}
        setIsOpen={setIsMobileSidebarOpen}
      />

      {/* Main Content Pane */}
      <ContentArea
        module={activeModule}
        section={activeSection}
        isCompleted={completedSections.includes(activeSectionId)}
        toggleSectionCompleted={toggleSectionCompleted}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />
    </div>
  );
}
