import { PortfoliosSection } from "@/components/containers";
import { SectionHeading } from "@/components/utils";
import React from "react";

export const metadata = {
  title: "Works",
};

export default function WorksPage() {
  return (
    <React.Fragment>
      {/* Start Portfolios Section */}
      <section name="section-portfolios" className="portfolios-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading title="The Work I’m Called to Do" watermark="Work" animated={false} />
          <PortfoliosSection />
        </div>
      </section>
      {/* End Portfolios Section */}

      <span className="block pb-24 lg:pb-28 xl:pb-32"></span>
    </React.Fragment>
  );
}
