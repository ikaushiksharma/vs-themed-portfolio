import React from 'react';
import CommentSyntaxHighlighter from './CommentSyntaxHighlighter';
import AboutCard from './AboutCard';
import { currPage } from '@/utils/types';
import SkillSection from './SkillSection';

type Props = {
  currentPage: currPage;
};

const LeftContent = ({ currentPage }: Props) => {
  const bio = ` /**
    * I'm an accomplished MERN stack developer
    * with a proven track record of creating
    * exceptional web applications. With 
    * expertise in React, Next.js, Node.js,
    *  and Express.js,
    * 
    * I bring a unique blend of technical
    * skills and a keen eye for detail to
    * every project. With 1 year of
   * experience with React.js and its
   *  libraries/frameworks,
   * 
   * I have successfully delivered
   * cutting-edge solutions that exceed client
   * expectations. Continuously staying abreast
   * of the latest trends and technologies,
   * 
   * I thrive on solving challenges and
   * creating seamless user experiences.
   * Collaborate with me to bring your vision
   * to life and achieve extraordinary results."
   */
    `;
  const responsiveBio = `
    I&apos;m an accomplished MERN stack developer with a proven track record of creating
    exceptional web applications. With expertise in React, Next.js, Node.js, and Express.js, <br /> I bring
    a unique blend of technical skills and a keen eye for detail to every project. With 1 year of
   exeperience with React.js and its libraries/frameworks, <br />
    <br /> I have successfully delivered cutting-edge solutions that exceed client expectations.
    Continuously staying abreast of the latest trends and technologies. <br /><br /> I thrive on solving
    challenges and creating seamless user experiences. Collaborate with me to bring your vision to
    life and achieve extraordinary results.
  `;
  const interested = `/**
  * As a web developer,
  * I have a keen interest in emerging
  * technologies and innovative web 
  * solutions. 
  * I'm passionate about creating seamless
  * user experiences and leveraging the 
  * power of web development to bring 
  * ideas to life. Constantly learning
  * and exploring new trends, I thrive
  * on the dynamic nature of the web 
  * development industry. Let's collaborate
  * and build extraordinary digital
  * experiences together.
  */`;
  const responsiveInterested = `
      As a web developer, I have a keen interest in emerging technologies and innovative web
      solutions. <br /> I&apos;m passionate about creating seamless user experiences and leveraging
      the power of web development to bring ideas to life. Constantly learning and exploring new
      trends. <br /> I thrive on the dynamic nature of the web development industry. Let&apos;s
      collaborate and build extraordinary digital experiences together.
    `;
  const reading = `/**
  * I am an avid reader and enjoy
  *  exploring various genres,
  *  including self-improvement
  *  and motivational literature.
  *  Some of my favorite books include
  * "The Subtle Art of Not Giving a F*ck" by
  *  Mark Manson, "The Alchemist" by
  *  Paulo Coelho, and "Ikigai." Reading
 *  not only enriches my knowledge but 
 * also helps me gain valuable insights
 * and perspectives.
 */`;
  const responsiveReading = `
  I am an avid reader and enjoy exploring various genres, including self-improvement and 
  motivational literature.<br /><br /> Some of my favorite books include &quot;The Subtle
   Art of Not Giving a F*ck&quot; by Mark Manson, &quot;The Alchemist&quot; by Paulo Coelho, 
   and &quot;Ikigai&quot;<br/><br /> Reading not only enriches my knowledge but also helps
    me gain valuable insights and perspectives.

  `;

  const music = `/**
  * Listening to music is my beloved hobby.
  * It brings me joy and inspiration, and I 
  * enjoy exploring diverse genres and artists.
  * This passion for music has taught me
  * valuable lessons in discipline and
  * creativity, enhancing both my personal
  * and professional life.
  */`;

  const musicResponsive = `
  Listening to music is my beloved hobby. It brings me joy and inspiration, and I
  enjoy exploring diverse genres and artists.<br /><br />This passion for music has taught me valuable lessons in discipline 
  and creativity, <br /><br />
  enhancing both my personal and professional life.
  `;

  return (
    <div
      className="overflow-visible lg:overflow-y-scroll"
      data-aos="fade-right"
    >
      {currentPage.folder === 'bio' && (
        <CommentSyntaxHighlighter responsiveContent={responsiveBio}>
          {bio}
        </CommentSyntaxHighlighter>
      )}
      {currentPage.folder === 'interests' && (
        <CommentSyntaxHighlighter responsiveContent={responsiveInterested}>
          {interested}
        </CommentSyntaxHighlighter>
      )}
      {currentPage.folder === 'education' &&
        currentPage.file === 'university' && (
          <AboutCard
            icon="https://www.chitkara.edu.in/wp-content/themes/chitkara/images/CU_logo-5.svg"
            // icon="/icons/education/university.svg"
            institute="Chitkara University, Patiala"
            courses={[
              {
                title: 'Bachelor of Engineering in CSE',
                duration: '2021 - 2025',
                description: 'CGPA: 9.98',
                skills: [
                  'ReactJs',
                  'NodeJs',
                  'ExpressJs',
                  'MongoDB',
                  'C++',
                  'Java',
                  'HTML',
                  'CSS',
                  'JavaScript',
                ],
              },
            ]}
          />
        )}
      {currentPage.folder === 'education' &&
        currentPage.file === 'high-school' && (
          <AboutCard
            icon="https://brightland.org/wp-content/uploads/2022/01/logo-300x273.png"
            //icon="/icons/education/school.svg"
            institute="Bright Land School, Amritsar"
            courses={[
              {
                title: 'Senior Secondary Education in PCM',
                duration: '2019 - 2021',
                skills: ['Mathematics', 'Physics', 'Chemistry'],
                description: '95% (CBSE)',
              },
              {
                title: 'Secondary Education',
                duration: '2018 - 2019',
                skills: ['English', 'Mathematics', 'Science'],
                description: '97.8% (CBSE)',
              },
            ]}
          />
        )}
      {/* TODO: Certifications Section needs to be added */}

      {/* Professional Section */}
      {currentPage.folder === 'experience' &&
        currentPage.file === 'communities' && (
          <>
            <AboutCard
              icon="https://gfgcuiet.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=1920&q=75"
              institute="Geeks For Geeks Student Chapter"
              courses={[
                {
                  title: 'Tech Lead',
                  duration: 'Jul 2023 - Present',
                  skills: [
                    'NextJs',
                    'TailwindCSS',
                    'MongoDB',
                    'NodeJs',
                    'ExpressJs',
                    'Framer Motion',
                  ],
                  description:
                    'Revamped and built the new club website "https://gfgcuiet.vercel.app" and organized various events and workshops as speaker',
                },
              ]}
            />
            <AboutCard
              icon="https://logogen.gdscasu.com/logos/gdsc-logo.png"
              institute="Google Developer Student Clubs"
              courses={[
                {
                  title: 'Web Developer',
                  duration: 'Sept 2022 - Jul 2023',
                  skills: ['ReactJs', 'TailwindCSS'],
                  description:
                    'Worked on various projects such as TENET, OCTAHACKS, etc',
                },
              ]}
            />
            <AboutCard
              icon="https://gfg-frontend.vercel.app/images/logo.png"
              institute="Geeks For Geeks Student Chapter"
              courses={[
                {
                  title: 'Technical Coordinator',
                  duration: 'Apr 2022 - Present',
                  skills: ['ReactJs', 'NodeJs', 'ExpressJs', 'MongoDB'],
                  description:
                    'Build Club Website and organized various events and workshops',
                },
              ]}
            />
          </>
        )}
      {currentPage.folder === 'experience' &&
        currentPage.file === 'industry' && (
          <>
            {' '}
            <AboutCard
              institute="Freelance Web Developer"
              icon="https://static.vecteezy.com/system/resources/thumbnails/004/485/532/small/man-working-at-laptop-work-at-home-concept-design-freelance-man-working-on-laptop-smiling-man-is-sitting-with-laptop-around-the-internet-email-message-icons-freelancer-programmer-with-a-laptop-vector.jpg"
              courses={[
                {
                  title: 'Web Developer',
                  duration: 'May 2023 - Present',
                  skills: [
                    'ReactJs',
                    'TailwindCSS',
                    'NextJs',
                    'NodeJs',
                    'SQL',
                    'AWS',
                    'Framer Motion',
                    'GSAP',
                    'Spline',
                    'WebRTC',
                    'Redis',
                  ],
                  description:
                    'Worked on various projects such as E-commerce, Social Media, and Video Conferencing such as "https://capilus.in"',
                },
              ]}
            />
            <AboutCard
              institute="Attirox Ventures, Pvt Ltd"
              icon="https://www.attirox.in/logoMini.png"
              courses={[
                {
                  title: 'Web Lead',
                  duration: 'May 2023 - Nov 2023',
                  skills: ['ReactJs', 'TailwindCSS', 'NextJs', 'Framer Motion'],
                  description:
                    'Build and maintain the company website and other projects',
                },
              ]}
            />
          </>
        )}
      {currentPage.folder === 'skills' && currentPage.file === 'front-end' && (
        <SkillSection
          title="front-end"
          items={[
            {
              title: 'HTMl',
              icon: 'https://symbols.getvecta.com/stencil_25/37_html5.d4d8050235.svg',
            },
            {
              title: 'CSS',
              icon: 'https://symbols.getvecta.com/stencil_25/14_css3.d930bfb832.svg',
            },
            {
              title: 'JavaScript',
              icon: 'https://symbols.getvecta.com/stencil_25/41_javascript.0ca26ec4ab.svg',
            },
            {
              title: 'TypeScript',
              icon: 'https://symbols.getvecta.com/stencil_25/87_typescript.cb2d7326fa.svg',
            },
            {
              title: 'ReactJs',
              icon: 'https://symbols.getvecta.com/stencil_25/72_react.76a8d36b4b.svg',
            },
            {
              title: 'NextJs',
              icon: 'https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png',
            },
            {
              title: 'TailwindCSS',
              icon: 'https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png',
            },
            {
              title: 'Framer Motion',
              icon: 'https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png',
            },
            {
              title: 'Bootstrap',
              icon: 'https://symbols.getvecta.com/stencil_25/5_bootstrap.bbf5d3d59c.svg',
            },
            {
              title: 'RemixJs',
              icon: 'https://avatars.githubusercontent.com/u/64235328?s=200&v=4',
            },
            {
              title: 'SvelteJs',
              icon: 'https://seeklogo.com/images/S/svelte-logo-E3497608CB-seeklogo.com.png',
            },
          ]}
        />
      )}
      {currentPage.folder === 'skills' && currentPage.file === 'back-end' && (
        <SkillSection
          title="back-end"
          items={[
            {
              title: 'NodeJs',
              icon: 'https://symbols.getvecta.com/stencil_25/63_nodejs.124d3fe0e1.svg',
            },
            {
              title: 'ExpressJs',
              icon: 'https://www.guayerd.com/wp-content/uploads//2021/04/expressjs-logo.svg',
            },
            {
              title: 'Socket.io',
              icon: 'https://socket.io/images/logo-dark.svg',
            },
            {
              title: 'Pusher',
              icon: 'https://seeklogo.com/images/P/pusher-logo-4C7555E4D0-seeklogo.com.png',
            },
            {
              title: 'NextJs',
              icon: 'https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png',
            },
            {
              title: 'Vercel',
              icon: 'https://assets.vercel.com/image/upload/front/favicon/vercel/60x60.png',
            },
            {
              title: 'Cloudinary',
              icon: 'https://seeklogo.com/images/C/cloudinary-logo-91D46BA298-seeklogo.com.png',
            },
          ]}
        />
      )}
      {currentPage.folder === 'skills' && currentPage.file === 'databases' && (
        <SkillSection
          title="databases"
          items={[
            {
              title: 'Mongo DB',
              icon: 'https://symbols.getvecta.com/stencil_261/25_mongodb.cef7d00b8a.svg',
            },
            {
              title: 'SQL',
              icon: 'https://symbols.getvecta.com/stencil_261/27_mysql.4e2ff8ff6c.svg',
            },
            {
              title: 'Vercel Postgres',
              icon: 'https://images.ctfassets.net/e5382hct74si/3Sc0rfZZ1Mnl6O6HdD7191/6c885d60bc8c7f957028d202074aff84/Postgres-Active-Desktop-Light.svg',
            },
            {
              title: 'Firebase',
              icon: 'https://symbols.getvecta.com/stencil_3/3_firebase.39b6ba3587.svg',
            },
          ]}
        />
      )}
      {currentPage.folder === 'skills' && currentPage.file === 'others' && (
        <SkillSection
          title="other"
          items={[
            {
              title: 'Java',
              icon: 'https://symbols.getvecta.com/stencil_25/40_java.bc46b9254c.svg',
            },
            {
              title: 'C/C++',
              icon: 'https://seeklogo.com/images/C/c-logo-1B1817C041-seeklogo.com.png',
            },
            {
              title: 'Linux',
              icon: 'https://seeklogo.com/images/L/Linux_Tux-logo-DA252F3C21-seeklogo.com.png',
            },
            {
              title: 'ESLint',
              icon: 'https://seeklogo.com/images/E/eslint-logo-4B5C528034-seeklogo.com.png',
            },
            {
              title: 'CosmicJS',
              icon: 'https://www.cosmicjs.com/favicon.ico',
            },
            {
              title: 'SwiperJS',
              icon: 'https://swiperjs.com/images/swiper-logo.svg',
            },
            {
              title: 'Git',
              icon: 'https://symbols.getvecta.com/stencil_28/88_visual-studio-team-services-git-repository.c595f4166d.svg',
            },
            {
              title: 'GitHub',
              icon: 'https://seeklogo.com/images/G/github-logo-45146A3FBE-seeklogo.com.png',
            },
          ]}
        />
      )}
      {currentPage.folder === 'reading' && (
        <CommentSyntaxHighlighter responsiveContent={responsiveReading}>
          {reading}
        </CommentSyntaxHighlighter>
      )}
      {currentPage.folder === 'music' && (
        <CommentSyntaxHighlighter responsiveContent={musicResponsive}>
          {music}
        </CommentSyntaxHighlighter>
      )}
    </div>
  );
};

export default LeftContent;
