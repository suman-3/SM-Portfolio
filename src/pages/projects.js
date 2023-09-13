import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/My_Git_Project_SS/1.png"
import project2 from "../../public/My_Git_Project_SS/2.png"
import project3 from "../../public/My_Git_Project_SS/3.png"
import project4 from "../../public/My_Git_Project_SS/4.png"
import project5 from "../../public/My_Git_Project_SS/5.png"
import project6 from "../../public/My_Git_Project_SS/6.png"
import project7 from "../../public/My_Git_Project_SS/7.png"
import project8 from "../../public/My_Git_Project_SS/8.png"
import project9 from "../../public/My_Git_Project_SS/9.png"
import project10 from "../../public/My_Git_Project_SS/10.png"
import project11 from "../../public/My_Git_Project_SS/11.png"
import project12 from "../../public/My_Git_Project_SS/12.png"
import project13 from "../../public/My_Git_Project_SS/13.png"
import project14 from "../../public/My_Git_Project_SS/14.png"
import project15 from "../../public/My_Git_Project_SS/15.png"
import project16 from "../../public/My_Git_Project_SS/16.png"
import project17 from "../../public/My_Git_Project_SS/17.png"
import project18 from "../../public/My_Git_Project_SS/18.png"
import project19 from "../../public/My_Git_Project_SS/19.png"
import project20 from "../../public/My_Git_Project_SS/20.png"


import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between  relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
       rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.8rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image priority src={img} alt="project image" className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-0">
        <span className="text-primary font-medium text-xl pt-2 dark:text-primaryDark xs:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
       rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt="project image"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between  mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between ">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline underline-offset-1 md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>CodeX | Projects Page</title>
        <meta name="description" content="Introducing my latest Next.js portfolio app: a sleek, dynamic platform combining modern design and cutting-edge technology. With intuitive navigation and stunning visuals, it's tailored to showcase your skills. Elevate your online presence and highlight your expertise with Next.js." />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 !text-7xl lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 ">
              <FeaturedProject
                title="SPIE OPTICA STUDENT CHAPTER UEMK OFFICIAL WEBSITE"
                img={project1}
                summary="    Promoted involvement in chapter events, activities, and
                member profiles, enhancing interaction within the community."
                link="https://spie-optica-uemk.vercel.app/"
                type="Fullstack Webpage"
                github="https://github.com/UEMKSPIEOPTICA/SPIE.OPTICA.UEMK"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                title=" GYM web front application"
                img={project20}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://gym-web-one.vercel.app/"
                type="GYM Website"
                github="https://github.com/suman-3/GYM.web"
              />
            </div>
            <div className="col-span-6  sm:col-span-12">
              <Project
                title="Movie application"
                img={project8}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://suman-3.github.io/movie.flex.mon/"
                type="Frontend Webpage"
                github="https://github.com/suman-3/movie.flex.mon"
              />
            </div>
            <div className="col-span-12 ">
              <FeaturedProject
                title="Tvflix website using TMDB API"
                img={project7}
                summary="  In the world of innovation and technology, one individual's vision has transformed the entertainment landscape. With creativity and code, a brilliant mind brought forth a groundbreaking creation - a TVflix movie application, powered by the robust TMDB API."
                link="https://suman-3.github.io/Tvflix/"
                type="Websites Using API Services"
                github="https://github.com/suman-3/Tvflix"
              />
            </div>
            <div className="col-span-6  sm:col-span-12">
              <Project
                title="NEXUS image Gallery using API"
                img={project12}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://suman-3.github.io/NeXus2.0/"
                type="Search You Image Here"
                github="https://github.com/suman-3/NeXus2.0"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                title="Get details of all SUPERHERO"
                img={project6}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://suman-3.github.io/superhero.mon/"
                type="Mark Your Favourite Super Hero"
                github="https://github.com/suman-3/superhero.mon"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                title="Weather Checker Application"
                img={project19}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://weather-hazel-seven.vercel.app/"
                type="Weather app using API"
                github="https://github.com/suman-3/weather"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                title="QR CODE generator application"
                img={project9}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://suman-3.github.io/QR_code/"
                type="Create QR code using API"
                github="https://github.com/suman-3/QR_code"
              />
            </div>
            <div className="col-span-12 ">
              <FeaturedProject
                title="Web application created using 3D elements"
                img={project17}
                summary="In the ever-evolving landscape of web development, the integration of three-dimensional elements has opened up exciting new avenues for creativity and user engagement. One notable project I undertook was the creation of a web application that harnessed the power of 3D elements to deliver an immersive user experience."
                link="https://magma-olive.vercel.app/"
                type="3D Webpages "
                github="https://github.com/suman-3/magma"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                title="Apple Vision Pro clone webpage"
                img={project15}
                summary="Web application created using 3D elements"
                link="https://business-web-bice.vercel.app/"
                type="Clone Project"
                github="https://github.com/suman-3/business.web"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                title="3D movemnt animation while scrolling"
                img={project16}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://github.com/suman-3/CodeX"
                type="webpage using Scroll Trigger"
                github="https://github.com/suman-3/CodeX"
              />
            </div>
            <div className="col-span-12 ">
              <FeaturedProject
                title="Honey - Online food shop demo webpage"
                img={project10}
                summary= {`  I conceptualized and developed "Honey," an innovative online food shop demo webpage. Honey offers users a seamless and user-friendly platform to browse, select, and order a wide range of culinary delights from the comfort of their homes.`}
                link="https://suman-3.github.io/food.honey/"
                type="Web Applications for Business Purpose"
                github="https://github.com/suman-3/food.honey"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Cara - Shopping web application"
                img={project4}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://cara-suman.vercel.app/"
                type="Demo of a E-Commerce application"
                github="https://github.com/suman-3/cara.suman"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                 title="EGATOR - Grow with us"
                 img={project14}
                 summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
           It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
           local currency."
                 link="https://suman-3.github.io/EGATOR/"
                 type="Education related demo webpage"
                 github="https://github.com/suman-3/EGATOR"
              />
            </div>
            <div className="col-span-12 ">
              <FeaturedProject
                title="QuickDecide: Rock, Paper, Scissors Game"
                img={project13}
                summary="   In the realm of web development, creating interactive and engaging games is a rewarding endeavor. One such project I undertook was the development of a web-based Rock, Paper, Scissors game webpage. This project aimed to provide users with a classic gaming experience while showcasing the potential for interactive web applications."
                link="https://suman-3.github.io/game.r.p.s/"
                type="Created games using Javascript "
                github="https://github.com/suman-3/game.r.p.s"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                 title="Meomory Reminder Game"
                 img={project11}
                 summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
           It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
           local currency."
                 link="https://suman-3.github.io/memory_game/"
                //  type="games using javascript"
                 github="https://github.com/suman-3/memory_game"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                 title="TIC TAC TOE game"
                 img={project2}
                 summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
           It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
           local currency."
                 link="https://suman-3.github.io/tic_tac.game/"
                //  type="Featured Project"
                 github="https://github.com/suman-3/game.Tic_Tac_Toe"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                 title="Draw Your pattern here!"
                 img={project3}
                 summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
           It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
           local currency."
                 link="https://suman-3.github.io/Cross_Switch/"
                //  type="Featured Project"
                 github="https://github.com/suman-3/Cross_Switch"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                 title="Hangman Game"
                 img={project5}
                 summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
           It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
           local currency."
                 link="https://suman-3.github.io/hangman.game/"
                //  type="Featured Project"
                 github="https://github.com/suman-3/hangman.game"
              />
            </div>
            
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
