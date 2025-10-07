"use client";

import { getInformation } from "@/fetchers";
import { childrenAnimation } from "@/lib/motion";
import { shimmer, toBase64 } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useQuery } from "react-query";

const AboutSection = () => {
  const { data } = useQuery("information", getInformation);

  if (!data) return null;

  return (
    <div className="grid grid-cols-2 items-start gap-7">
      <div className="col-span-2 lg:col-span-1">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          variants={childrenAnimation}
          className="about-image overflow-hidden rounded-lg w-fit lg:max-w-[500px] lg:ml-auto lg:w-auto"
        >
          <div className="about-image-inner fiximage relative border-10 border-primary border-opacity-20">
            <span className="absolute -top-2.5 left-0 z-10 h-2.5 w-10 animate-ledgerleftright rounded-full bg-gradient-to-r from-transparent to-primary"></span>
            <span className="absolute top-auto -bottom-2.5 left-auto z-10 h-2.5 w-10 animate-ledgerrightleft rounded-full bg-gradient-to-r from-primary to-transparent"></span>
            <span className="absolute -left-2.5 top-auto z-10 h-10 w-2.5 animate-ledgerbottomtop rounded-full bg-gradient-to-t from-transparent to-primary"></span>
            <span className="absolute left-auto -right-2.5 z-10 h-10 w-2.5 animate-ledgertopbottom rounded-full bg-gradient-to-b from-transparent to-primary"></span>
            <Image
              src={data.largeImage}
              height={422}
              width={500}
              quality={100}
              alt="Rosendo Figueroa posing in front of Gilbert mural."
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(500, 422))}`}
            />
          </div>
        </motion.div>
      </div>
      <div className="col-span-2 lg:col-span-1">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          variants={childrenAnimation}
          className="about-content"
        >
          <h3>
            I build technology that helps people
            <span className="text-primary"> feel seen, supported, and connected </span>
            to their community.
          </h3>
          <p>
            <span dangerouslySetInnerHTML={{ __html: data.about.replace(/\n/g, "<br><br>") }} />
          </p>
          <a href="/portfolio/contact" className="btn my-5">
            <span>Let’s Connect</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
