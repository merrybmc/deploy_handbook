import React, { useState, useEffect } from "react";

export default function Sidebar({
  curriculumData,
  activeSectionId,
  setActiveSectionId,
  completedSections,
  searchQuery,
  setSearchQuery,
  theme,
  toggleTheme,
  isOpen,
  setIsOpen
}) {
  const [openModules, setOpenModules] = useState({});

  // When active section changes, ensure its module is open
  useEffect(() => {
    if (activeSectionId) {
      const activeModuleId = curriculumData.find((mod) =>
        mod.sections.some((sec) => sec.id === activeSectionId)
      )?.id;

      if (activeModuleId) {
        setOpenModules((prev) => ({ ...prev, [activeModuleId]: true }));
      }
    }
  }, [activeSectionId, curriculumData]);

  const toggleModule = (moduleId) => {
    setOpenModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  // Calculate overall progress percentage
  const totalSections = curriculumData.reduce((acc, mod) => acc + mod.sections.length, 0);
  const completedCount = completedSections.length;
  const progressPercent = totalSections > 0 ? Math.round((completedCount / totalSections) * 100) : 0;

  // Filter modules/sections based on search query
  const filteredCurriculum = curriculumData.map((module) => {
    const filteredSections = module.sections.filter(
      (sec) =>
        sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sec.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sec.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...module, sections: filteredSections };
  }).filter((module) => module.sections.length > 0);

  return (
    <aside className={`sidebar ${isOpen ? "mobile-open" : ""}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon">N</div>
          <div className="logo-text">
            <h1>NGINX 배포 학습서</h1>
            <span>AWS CloudFront + S3</span>
          </div>
        </div>
        <div className="search-box">
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="단원 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Progress Panel */}
      <div className="progress-stat-panel">
        <div className="progress-header">
          <span>학습 완료율</span>
          <span className="progress-percent">{progressPercent}% ({completedCount}/{totalSections})</span>
        </div>
        <div className="progress-track-bar">
          <div 
            className="progress-fill-bar" 
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Menu / Scroll area */}
      <div className="sidebar-menu">
        {filteredCurriculum.length > 0 ? (
          filteredCurriculum.map((module, mIdx) => {
            const isModuleOpen = openModules[module.id] || searchQuery.length > 0;
            return (
              <div 
                key={module.id} 
                className={`module-accordion ${isModuleOpen ? "open" : ""} ${
                  module.sections.some((sec) => sec.id === activeSectionId) ? "active-module" : ""
                }`}
              >
                <button 
                  className="module-header"
                  onClick={() => toggleModule(module.id)}
                >
                  <div className="module-title-wrapper">
                    <span className="module-icon-num">{mIdx + 1}</span>
                    <span style={{ fontSize: "0.85rem", fontWeight: "600", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                      {module.title.substring(module.title.indexOf(" ") + 1)}
                    </span>
                  </div>
                  <svg
                    className="arrow-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="lessons-list">
                  {module.sections.map((section) => {
                    const isActive = section.id === activeSectionId;
                    const isCompleted = completedSections.includes(section.id);
                    return (
                      <button
                        key={section.id}
                        className={`lesson-item ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
                        onClick={() => {
                          setActiveSectionId(section.id);
                          setIsOpen(false); // Close mobile menu on select
                        }}
                      >
                        <span style={{ maxWidth: "80%", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                          {section.title}
                        </span>
                        <span className="checkbox-indicator"></span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ padding: "2rem", textAlign: "center", color: "var(--text-muted)", fontSize: "0.85rem" }}>
            검색 결과가 없습니다.
          </div>
        )}
      </div>

      {/* Sidebar Footer */}
      <div className="sidebar-footer">
        <button className="theme-toggle-btn" onClick={toggleTheme} title="테마 변경">
          {theme === "dark" ? (
            <svg
              className="theme-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m2.828-9.9a5 5 0 117.07 7.07l-7.07-7.07z"
              />
            </svg>
          ) : (
            <svg
              className="theme-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
        <span className="author-link">Version 1.0.0</span>
      </div>
    </aside>
  );
}
