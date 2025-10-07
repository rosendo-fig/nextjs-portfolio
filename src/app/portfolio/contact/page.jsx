import { ContactSection } from "@/components/containers";
import { SectionHeading } from "@/components/utils";
import React from "react";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <React.Fragment>
      {/* Start Contact Section */}
      <section name="section-contact" className="contact-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading title="Let’s Connect" watermark="Contact" animated={false} />
          <ContactSection />
        </div>
      </section>
      {/* End Contact Section */}

      <span className="block pb-24 lg:pb-28 xl:pb-32"></span>
    </React.Fragment>
  );
}
