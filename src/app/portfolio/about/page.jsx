import { AboutSection, ReviewsSection, ServicesSection } from "@/components/containers";
import { SectionHeading } from "@/components/utils";
import React from "react";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <React.Fragment>
      {/* Start About Section */}
      <section className="about-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading title="Who I Am" watermark="About" animated={false} />
          <AboutSection />
        </div>
      </section>
      {/* End About Section */}

      {/* Start Service Section
      <section name="section-service" className="services-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading title="My Services" watermark="Services" animated={false} />
          <ServicesSection />
        </div>
      </section>
      End Service Section */}

      {/* Start Reviews Section
			<section name="section-reviews" className="reviews-section pt-24 lg:pt-28 xl:pt-32">
				<div className="container mx-auto">
					<SectionHeading title="Client Reviews" watermark="Reviews" animated={false} />
					<ReviewsSection />
				</div>
			</section>
			End Reviews Section */}
      <span className="block pb-24 lg:pb-28 xl:pb-32"></span>
    </React.Fragment>
  );
}
