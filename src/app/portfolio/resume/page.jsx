import { ResumeSection, SkillsSection } from "@/components/containers";
import { SectionHeading } from "@/components/utils";
import React from "react";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <React.Fragment>
      {/* Start Skills Section
			<section name="section-skills" className="skills-section pt-24 lg:pt-28 xl:pt-32">
				<div className="container mx-auto">
					<SectionHeading title="My Skills" watermark="Skills" animated={false} />
					<SkillsSection />
				</div>
			</section>
			End Skills Section */}

      {/* Start Resume Section */}
      <section name="section-resume" className="resume-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading
            title="The Work I’ve Been Trusted To Do"
            watermark="Resume"
            animated={false}
          />
          <ResumeSection />
        </div>
      </section>
      {/* End Resume Section */}

      <span className="block pb-24 lg:pb-28 xl:pb-32"></span>
    </React.Fragment>
  );
}
