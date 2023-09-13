import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position} &nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark
          capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-40">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]
        "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="SPIE OPTICA UEMK CHAPTER"
            company="UEMK SPIE OPTICA GROUP"
            companyLink="https://spie-optica-uemk.vercel.app/"
            time=" 2022-Present"
            address="| New Town, Kolkata"
            work="Creating the SPIE Optica website was a significant milestone in my web development journey. This experience not only showcased my technical proficiency but also demonstrated my ability to merge design aesthetics with functional requirements."
          />
          <Details
            position="Versatile Project Contributions"
            company="Own Projects"
            // companyLink=""
            time=" 2022-Present"
            work="In my web development journey, I've tackled a diverse range of projects. From creating Threads Clone to contributing to Whatsapp and Airbnb Clones, developing E-Commerce platforms, to crafting entertainment-focused projects like Spotify and a Movie Website with TMDB API. I've even ventured into 3D web design. These experiences showcase my technical prowess and collaborative skills in seamlessly integrating complex functionalities."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
