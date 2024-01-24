import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/My_Git_Project_SS/1.png";
import project2 from "../../public/My_Git_Project_SS/2.png";
import project3 from "../../public/My_Git_Project_SS/3.png";
import project4 from "../../public/My_Git_Project_SS/4.png";
import project5 from "../../public/My_Git_Project_SS/5.png";
import project6 from "../../public/My_Git_Project_SS/6.png";
import project7 from "../../public/My_Git_Project_SS/7.png";
import project8 from "../../public/My_Git_Project_SS/8.png";
import project9 from "../../public/My_Git_Project_SS/9.png";
import project10 from "../../public/My_Git_Project_SS/10.png";
import project11 from "../../public/My_Git_Project_SS/11.png";
import project12 from "../../public/My_Git_Project_SS/12.png";
import project13 from "../../public/My_Git_Project_SS/13.png";
import project14 from "../../public/My_Git_Project_SS/14.png";
import project15 from "../../public/My_Git_Project_SS/15.png";
import project16 from "../../public/My_Git_Project_SS/16.png";
import project17 from "../../public/My_Git_Project_SS/17.png";
import project18 from "../../public/My_Git_Project_SS/18.png";
import project19 from "../../public/My_Git_Project_SS/19.png";
import project20 from "../../public/My_Git_Project_SS/20.png";
import project21 from "../../public/My_Git_Project_SS/21.png";
import project22 from "../../public/My_Git_Project_SS/22.png";
import project23 from "../../public/My_Git_Project_SS/23.png";
import project24 from "../../public/My_Git_Project_SS/24.png";
import project25 from "../../public/My_Git_Project_SS/25.png";
import project26 from "../../public/My_Git_Project_SS/26.png";
import project27 from "../../public/My_Git_Project_SS/27.png";
import project28 from "../../public/My_Git_Project_SS/28.png";
import project29 from "../../public/My_Git_Project_SS/29.png";
import project30 from "../../public/My_Git_Project_SS/30.png";
import project31 from "../../public/My_Git_Project_SS/31.png";
import project32 from "../../public/My_Git_Project_SS/32.png";
import project33 from "../../public/My_Git_Project_SS/33.png";
import project34 from "../../public/My_Git_Project_SS/34.png";
import project35 from "../../public/My_Git_Project_SS/35.png";
import project36 from "../../public/My_Git_Project_SS/36.png";
import project37 from "../../public/My_Git_Project_SS/37.png";
import project38 from "../../public/My_Git_Project_SS/38.png";

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
        <Image
          priority
          src={img}
          alt="project image"
          className="w-full h-auto"
        />
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
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
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
          <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-2xl">
            {title}
          </h2>
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
        <meta
          name="description"
          content="Introducing my latest Next.js portfolio app: a sleek, dynamic platform combining modern design and cutting-edge technology. With intuitive navigation and stunning visuals, it's tailored to showcase your skills. Elevate your online presence and highlight your expertise with Next.js."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 !text-7xl lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 ">
              <FeaturedProject
                title="BLOGSPACE DEV"
                img={project35}
                summary="Discover the joy of expressing your thoughts, ideas, and stories in our vibrant blogging community! 📝✨"
                link="https://blogspace-dev.vercel.app/"
                type="Fullstack Blogging Webpage"
                github="https://github.com/suman-3/Blogspace_Client"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                title="README.md Creator"
                img={project29}
                summary="Effortlessly craft polished README files with our intuitive web application. Enhance project presentation for seamless collaboration, whether solo or in a team. Elevate your documentation game with ease."
                link="https://readme-creator-fawn.vercel.app/"
                type="Simplify Project Documentation"
                github="https://github.com/suman-3/README_Creator_Next.Js_App"
              />
            </div>
            <div className="col-span-6  sm:col-span-12">
              <Project
                title="Export script into Image"
                img={project31}
                summary={""}
                link="https://code-script-image.vercel.app/"
                type="Script to Image"
                github="https://github.com/suman-3/Code_Script_Image"
              />
            </div>

            <div className="col-span-12 ">
              <FeaturedProject
                title="SPIE OPTICA STUDENT CHAPTER UEMK OFFICIAL WEBSITE"
                img={project1}
                summary="    Promoted involvement in chapter events, activities, and
                member profiles, enhancing interaction within the community."
                link="https://spie-optica-uemk.vercel.app/"
                type="College Student Club Project"
                github="https://github.com/UEMKSPIEOPTICA/SPIE.OPTICA.UEMK"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                title=" Fullstack Notion Clone using Next.js 13, React, Convex, Tailwind"
                img={project22}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://jotion-note.vercel.app/"
                type="Jotion Note App"
                github="https://github.com/suman-3/Jotion"
              />
            </div>
            <div className="col-span-6  sm:col-span-12">
              <Project
                title="Created NFT Collection Landing Page in React JS"
                img={project23}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://the-weirdos-nine.vercel.app/"
                type="The Weirdos"
                github="https://github.com/suman-3/The_Weirdos"
              />
            </div>


            <div className="col-span-12 ">
              <FeaturedProject
                title="WIBE-STUDIO Shopping Collection"
                img={project33}
                summary="Build a Stunning Fashion Studio Website with React JS [ Locomotive Scroll + GSAP + Framer Motion ]"
                link="https://wibe-studio-beta.vercel.app/"
                type="E-Commerce Page Frontend"
                github="https://github.com/suman-3/Wibe_Studio"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                title="Responsive Halloween Website 🎃"
                img={project34}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://halloween-web-rho.vercel.app/"
                type="Frontend Project"
                github="https://github.com/suman-3/Halloween_Web"
              />
            </div>
            <div className="col-span-6  sm:col-span-12">
              <Project
                title="GameX - Gaming website"
                img={project32}
                summary=" "
                link="https://game-x-landing-page.vercel.app/"
                type="Landing Page"
                github="https://github.com/suman-3/GameX_landing_page"
              />
            </div>


            <div className="col-span-12 ">
              <FeaturedProject
                title="Crypto Bucks Web Appplication "
                img={project36}
                summary="Build Feature Rich Crypto Screener App with Tailwind CSS ⭐"
                link="https://crypto-bucks-coral.vercel.app/"
                type="Crypto Currency Checker"
                github="https://github.com/suman-3/CryptoBucks"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                title="Messenger Clone NEXT 13.Js Project"
                img={project37}
                summary=""
                link="https://messenger-one-theta.vercel.app/"
                type="Realtime Chat Application"
                github="https://github.com/suman-3/Messenger_App"
              />
            </div>
            <div className="col-span-6  sm:col-span-12">
              <Project
                title="Query: Your Developer Hub for Coding Wisdom and Collaboration"
                img={project38}
                summary=" "
                link="https://query-chi.vercel.app/"
                type="Fullstack Webpage"
                github="https://github.com/suman-3/Query"
              />
            </div>

            <div className="col-span-12 ">
              <FeaturedProject
                title="Created a Full Stack Social Media App | React JS, Appwrite, Tailwind CSS, React Query"
                img={project21}
                summary="Build a modern social app with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, and amazing performance using React JS, Appwrite, TypeScript, and more."
                link="https://snapgram-social.vercel.app/sign-in"
                type="Fullstack Webpage"
                github="https://github.com/suman-3/Snapgram"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                title=" GYM web front application"
                img={project20}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://jym-web-ruby.vercel.app/"
                type="GYM Website"
                github="https://github.com/suman-3/JYM_Web"
              />
            </div>
            <div className="col-span-6  sm:col-span-12">
              <Project
                title="MOVIEFLIX DEMO WEB"
                img={project8}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://movie-web-gilt.vercel.app/"
                type="Movie website design"
                github="https://github.com/suman-3/Movie_Web"
              />
            </div>

            <div className="col-span-12 ">
              <FeaturedProject
                title="Tvflix website using TMDB API"
                img={project7}
                summary="  In the world of innovation and technology, one individual's vision has transformed the entertainment landscape. With creativity and code, a brilliant mind brought forth a groundbreaking creation - a TVflix movie application, powered by the robust TMDB API."
                link="https://tvflix-seven.vercel.app/"
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
                link="https://nexus-image-gen.vercel.app/"
                type="Search You Image Here"
                github="https://github.com/suman-3/nexus-image-gen"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                title="Get details of all SUPERHERO"
                img={project6}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://superhero-search-seven.vercel.app/"
                type="Mark Your Favourite Super Hero"
                github="https://github.com/suman-3/Superhero_search"
              />
            </div>

            <div className="col-span-12 ">
              <FeaturedProject
                title="NFT Landing Page"
                img={project28}
                summary={` I've recently designed an NFT landing page that combines the finest SCSS techniques with cutting-edge 3D effects. This fusion results in a visually captivating and engaging user experience. The page showcases the potential of modern web development, setting a high standard for NFT platforms.`}
                link="https://nft-landing-jet.vercel.app/"
                type="Web Applications with 3D Effects"
                github="https://github.com/suman-3/Nft_landing"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Smooth website landing page"
                img={project27}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://shery-effect-1.vercel.app/"
                type="Created using gsap and Shery.Js"
                github="https://github.com/suman-3/Shery_Effect_1"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                title="3D website landing page"
                img={project26}
                summary=" I recently built a striking 3D landing page using Shery.js, a dynamic JavaScript library. The page boasts immersive 3D elements, captivating animations, and seamless transitions, all thanks to Shery.js. This project exemplifies the power of modern web development for creating visually stunning and user-friendly online experiences. "
                link="https://shery-effect-2.vercel.app/"
                type="Web Applications with 3D Effects"
                github="https://github.com/suman-3/Shery_Effect_2"
              />
            </div>

            <div className="col-span-12 ">
              <FeaturedProject
                title="Honey - Online food shop demo webpage"
                img={project10}
                summary={`  I conceptualized and developed "Honey," an innovative online food shop demo webpage. Honey offers users a seamless and user-friendly platform to browse, select, and order a wide range of culinary delights from the comfort of their homes.`}
                link="https://honey-food.vercel.app/"
                type="Web Applications for Business Purpose"
                github="https://github.com/suman-3/Honey_Food"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Cara - Shopping web application"
                img={project4}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://cara-shopping.vercel.app/"
                type="Demo of a E-Commerce application"
                github="https://github.com/suman-3/Cara_Shopping"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                title="Sidcup Family Golf website design"
                img={project25}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
           It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
           local currency."
                link="https://sidcup-family-golf-one.vercel.app/"
                type="Created this HTML, CSS and JavaScript"
                github="https://github.com/suman-3/Sidcup_Family_Golf"
              />
            </div>

            <div className="col-span-12 ">
              <FeaturedProject
                title="Web application created using 3D elements"
                img={project17}
                summary="In the ever-evolving landscape of web development, the integration of three-dimensional elements has opened up exciting new avenues for creativity and user engagement. One notable project I undertook was the creation of a web application that harnessed the power of 3D elements to deliver an immersive user experience."
                link="https://magma-build.vercel.app/"
                type="3D Webpages "
                github="https://github.com/suman-3/Magma_Build"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                title="Apple Vision Pro clone webpage"
                img={project15}
                summary="Web application created using 3D elements"
                link="https://apple-vision-snowy.vercel.app/"
                type="Clone Project"
                github="https://github.com/suman-3/Apple_Vision"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                title="This is just a stimulator"
                img={project24}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://calling-jadoo-pi.vercel.app/"
                type="Calll Jadoo😅"
                github="https://github.com/suman-3/calling_jadoo"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                title="Weather Checker Application"
                img={project19}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://weather-app-alpha-eight-75.vercel.app/"
                type="Weather app using API"
                github="https://github.com/suman-3/Weather_app"
              />
            </div>
            <div className="col-span-6  sm:col-span-12 ">
              <Project
                title="QR CODE generator application"
                img={project9}
                summary="    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
                link="https://qr-gen-chi.vercel.app/"
                type="Create QR code using API"
                github="https://github.com/suman-3/QR_Gen"
              />
            </div>

            {/* <div className="col-span-12 ">
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
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
