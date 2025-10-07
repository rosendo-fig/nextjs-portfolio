"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "react-icons/ri";
import { useQuery } from "react-query";
import { getInformation } from "../../fetchers";
import { childrenAnimation } from "../../lib/motion";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const { data } = useQuery("information", getInformation);

  if (!data) return null;

  return (
    <div className="grid grid-cols-9 gap-7">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        variants={childrenAnimation}
        className="col-span-9 lg:col-span-4"
      >
        <div className="contact-information">
          <h3 className="text-[22px]">I’d Love to Hear from You</h3>
          <p>
            I welcome conversations about web strategy, user experience, accessibility, and
            technical leadership. Whether you’re reaching out about a project, collaboration, or
            research opportunity, I’d be glad to connect and exchange ideas. My work focuses on
            building technology that serves people, supports communities, and fosters connection.
            I’m always open to meaningful discussions that explore how design and innovation can
            make a lasting impact.
          </p>
          <span className="inline-block h-1 w-20 rounded-full bg-primary bg-opacity-20"></span>
          <div className="contact-blocks mt-5 space-y-5">
            <div className="contact-block card flex p-4 md:p-5">
              <span className="icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary">
                <RiPhoneLine />
              </span>
              <div className="content">
                <h4 className="mb-2 text-[18px]">Give Me a Call</h4>
                {data.phoneNumbers.map((number, index) => (
                  <p className="mb-0" key={index}>
                    <Link href={`tel:${number.split("-").join("")}`} className="no-underline">
                      {number}
                    </Link>
                  </p>
                ))}
              </div>
            </div>
            <div className="contact-block card flex p-4 md:p-5">
              <span className="icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary">
                <RiMailLine />
              </span>
              <div className="content">
                <h4 className="mb-2 text-[18px]">Send Me a Message</h4>
                {data.emailAddress.map((email, index) => (
                  <p className="mb-0" key={index}>
                    <Link href={`mailto:${email}`} className="no-underline">
                      {email}
                    </Link>
                  </p>
                ))}
              </div>
            </div>
            <div className="contact-block card flex p-4 md:p-5">
              <span className="icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary">
                <RiMapPinLine />
              </span>
              <div className="content">
                <h4 className="mb-2 text-[18px]">I’m Here in the Greater Phoenix Area</h4>
                <p className="mb-0">{data.address}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        variants={childrenAnimation}
        className="col-span-9 lg:col-span-5"
      >
        <ContactForm />
      </motion.div>
    </div>
  );
};

export default ContactSection;
