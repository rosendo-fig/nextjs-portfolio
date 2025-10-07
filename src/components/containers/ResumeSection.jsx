"use client";

import EducationTimeline from "./EducationTimeline";
import JobTimeline from "./JobTimeline";

const ResumeSection = () => {
  return (
    <div>
      {/* Full width row for download button */}
      <div className="w-full mb-12 text-center">
        <a href="/resume.pdf" className="btn" download>
          <span>Download My Resume</span>
        </a>
      </div>

      {/* Existing 2-column grid */}
      <div className="grid grid-cols-2 gap-14 lg:gap-7">
        <div className="col-span-2 lg:col-span-1">
          <EducationTimeline />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <JobTimeline />
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
