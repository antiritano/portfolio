import styles from './styles.module.css';
import { BsArrowDownCircleFill } from 'react-icons/bs';
import 'animate.css/animate.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground';

const Projects = (menuOpen) => {
  return (
    <div className={styles.Projects} id="projects">
      <AnimatedBackground />
      <AnimationOnScroll animateIn="animate__fadeInRight">
        <div className={styles.Projects__title}>
          <h1>Projects</h1>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="2xl:mx-auto 2xl:container flex justify-center">
          <div className="2xl:px-20 px-6  w-full lg:w-4/5">
            {/* Carousel for Small-Sized Screen */}
            <CarouselProvider
              className="relative block"
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={6}
              visibleSlides={1}
              step={1}
              infinite={true}
            >
              <div className="js-flickity flex justify-center items-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="w-6 h-6 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute left-0 lg:ml-8 -ml-4 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer z-30"
                  id="prev"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7L7 13"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonBack>
                <Slider>
                  <Slide index={0}>
                    <div className={styles.Projects__project}>
                      <div className={styles.Projects__projectImage}>
                        <img
                          className={styles.Projects__projectLogoInvert}
                          src="./gxve-logo-cropped.svg"
                        ></img>
                        <h2>by Gwen Stefani</h2>
                      </div>
                      <div className={styles.Projects__projectText}>
                        <h2>
                          <span className={styles.Green}>Description: </span>
                          <br />
                          Migrated the existing GXVE beauty shopify eccomerce
                          site to a new custom built React application utilizing
                          a headless CMS. The new site provided an updated user
                          experience and design while drastically increasing the
                          speed and performance of the site.
                        </h2>
                        <h2 className={styles.Project__text}>
                          <span className={styles.Green}>Tech Stack: </span>
                          <br />
                          React, Next.js, GraphQL, Contentful CMS, Jest
                        </h2>
                        <h2 className={styles.Project__text}>
                          <a
                            href="https://gxvebeauty.com/"
                            className={styles.Green}
                          >
                            GXVEbeauty.com
                          </a>
                        </h2>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className={styles.Projects__project}>
                      <div className={styles.Projects__projectImage}>
                        <img
                          className={styles.Projects__projectLogo}
                          src="./VeeFriends.png"
                        ></img>
                      </div>
                      <div className={styles.Projects__projectText}>
                        <h2>
                          <span className={styles.Green}>Description: </span>
                          <br />
                          Created the Gary Bee's Adventure pre mint game on a
                          strict 3 week deadline using Game Maker Studio (GML).
                          Handled all aspects of the project from start to
                          finish including: Game design & development, sound
                          design, sprite animation and background art.
                        </h2>
                        <h2 className={styles.Project__text}>
                          <span className={styles.Green}>Tech Stack: </span>
                          <br />
                          Game Maker Studio, GML, Photoshop, Illustrator,
                          Audacity
                        </h2>
                        <h2 className={styles.Project__text}>
                          <a
                            href="https://series2.veefriends.com/game/play"
                            className={styles.Green}
                          >
                            VeeFriends.com
                          </a>
                        </h2>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    {' '}
                    <div className={styles.Projects__project}>
                      <div className={styles.Projects__projectImage}>
                        <img
                          className={styles.Projects__projectLogo}
                          src="./peeq.png"
                        ></img>
                      </div>
                      <div className={styles.Projects__projectText}>
                        <h2>
                          <span className={styles.Green}>Description: </span>
                          <br />
                          PEEQ discovery is a web application that helps users
                          find the best media partners. The platform features a
                          robust front end built with React allowing partners,
                          planners and admins to have unique experiences based
                          on their role.
                        </h2>
                        <h2 className={styles.Project__text}>
                          <span className={styles.Green}>Tech Stack: </span>
                          <br />
                          React, Next.js, GraphQL, Contentful CMS, Jest
                        </h2>
                        <h2 className={styles.Project__text}>
                          <a
                            href="https://beta.peeqdisco.com/"
                            className={styles.Green}
                          >
                            PEEQdisco.com
                          </a>
                        </h2>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className={styles.Projects__project}>
                      <div className={styles.Projects__projectImage}>
                        <img
                          className={styles.Projects__projectLogo}
                          src="./redpanda.svg"
                        ></img>
                      </div>
                      <div className={styles.Projects__projectText}>
                        <h2>
                          <span className={styles.Green}>Description: </span>
                          <br />
                          Migrated the existing Redpanda Gatsby website to a new
                          custom built React application utilizing a headless
                          CMS. The new site provided an updated user experience
                          and design while providing the client with an easier
                          way to upload and edit the content on the site.
                        </h2>
                        <h2 className={styles.Project__text}>
                          <span className={styles.Green}>Tech Stack: </span>
                          <br />
                          React, Next.js, GraphQL, Contentful CMS, Jest
                        </h2>
                        <h2 className={styles.Project__text}>
                          <a
                            href="https://redpanda.com/"
                            className={styles.Green}
                          >
                            Redpanda.com
                          </a>
                        </h2>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={4}>
                    {' '}
                    <div className={styles.Projects__project}>
                      <div className={styles.Projects__projectImage}>
                        <img
                          className={styles.Projects__projectLogo}
                          src="./SQQLogo.png"
                        ></img>
                      </div>
                      <div className={styles.Projects__projectText}>
                        <h2>
                          <span className={styles.Green}>Description: </span>
                          <br />
                          Built a Discord Bot using Javascript to integrate
                          Super Quick Question into the Discord server
                          environment.
                        </h2>
                        <h2 className={styles.Project__text}>
                          <span className={styles.Green}>Tech Stack: </span>
                          <br />
                          Javascript, Discord.js, Node.js
                        </h2>
                        <h2 className={styles.Project__text}>
                          <a
                            href="https://www.superquickquestion.com/"
                            className={styles.Green}
                          >
                            superquickquestion.com
                          </a>
                        </h2>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={5}>
                    {' '}
                    <div className={styles.Projects__projectLast}>
                      <div className={styles.Projects__projectImage}>
                        <img
                          className={styles.Projects__projectLogoInvert}
                          src="./islandrock.svg"
                        ></img>
                      </div>
                      <div className={styles.Projects__projectText}>
                        <h2>
                          <span className={styles.Green}>Description: </span>
                          <br />
                          Manage and maintain the Island Rock website codebase.
                          The site is built with Handlebars and utilizes a
                          headless CMS.
                        </h2>
                        <h2 className={styles.Project__text}>
                          <span className={styles.Green}>Tech Stack: </span>
                          <br />
                          Handlebars, Node.js, Express, Contentful CMS
                        </h2>
                        <h2 className={styles.Project__text}>
                          <a
                            href="https://www.islandrock.com/"
                            className={styles.Green}
                          >
                            islandrock.com
                          </a>
                        </h2>
                      </div>
                    </div>
                  </Slide>
                </Slider>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="w-6 h-6 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute right-0 lg:mr-8 -mr-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  id="next"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
        <div className={styles.Project__downArrow}>
          <a href="#contact">
            <BsArrowDownCircleFill
              fill="rgb(22 163 74)"
              className={styles.Project__downArrowIcon}
            />
          </a>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Projects;
