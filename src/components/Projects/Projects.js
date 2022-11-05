import styles from './styles.module.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <div className={styles.Projects__title}>
        <h1>Projects</h1>
      </div>
      <div className={styles.Projects__container}>
        <AnimationOnScroll
          animateIn="animate__jackInTheBox"
          className="flex justify-center w-[90%]"
        >
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
                Migrated the existing GXVE beauty shopify eccomerce site to a
                new custom built React application utilizing a headless CMS. The
                new site provided an updated user experience and design while
                drastically increasing the speed and performance of the site.
              </h2>
              <h2 className={styles.Project__text}>
                <span className={styles.Green}>Tech Stack: </span>
                <br />
                React, Next.js, GraphQL, Contentful CMS, Jest
              </h2>
              <h2 className={styles.Project__text}>
                <a href="https://gxvebeauty.com/" className={styles.Green}>
                  GXVEbeauty.com
                </a>
              </h2>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__jackInTheBox"
          className="flex justify-center w-[90%]"
        >
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
                Created the Gary Bee's Adventure pre mint game on a strict 3
                week deadline using Game Maker Studio (GML). Handled all aspects
                of the project from start to finish including: Game design &
                development, sound design, sprite animation and background art.
              </h2>
              <h2 className={styles.Project__text}>
                <span className={styles.Green}>Tech Stack: </span>
                <br />
                Game Maker Studio, GML, Photoshop, Illustrator, Audacity
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
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__jackInTheBox"
          className="flex justify-center w-[90%]"
        >
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
                PEEQ discovery is a web application that helps users find the
                best media partners. The platform features a robust front end
                built with React allowing partners, planners and admins to have
                unique experiences based on their role.
              </h2>
              <h2 className={styles.Project__text}>
                <span className={styles.Green}>Tech Stack: </span>
                <br />
                React, Next.js, GraphQL, Contentful CMS, Jest
              </h2>
              <h2 className={styles.Project__text}>
                <a href="https://beta.peeqdisco.com/" className={styles.Green}>
                  PEEQdisco.com
                </a>
              </h2>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__jackInTheBox"
          className="flex justify-center w-[90%]"
        >
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
                Migrated the existing Redpanda Gatsby website to a new custom
                built React application utilizing a headless CMS. The new site
                provided an updated user experience and design while providing
                the client with an easier way to upload and edit the content on
                the site.
              </h2>
              <h2 className={styles.Project__text}>
                <span className={styles.Green}>Tech Stack: </span>
                <br />
                React, Next.js, GraphQL, Contentful CMS, Jest
              </h2>
              <h2 className={styles.Project__text}>
                <a href="https://redpanda.com/" className={styles.Green}>
                  Redpanda.com
                </a>
              </h2>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__jackInTheBox"
          className="flex justify-center w-[90%]"
        >
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
                Built a Discord Bot using Javascript to integrate Super Quick
                Question into the Discord server environment.
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
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__jackInTheBox"
          className="flex justify-center w-[90%]"
        >
          <div className={styles.Projects__project}>
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
                Manage and maintain the Island Rock website codebase. The site
                is built with Handlebars and utilizes a headless CMS to allow
                the client to easily update the content on the site.
              </h2>
              <h2 className={styles.Project__text}>
                <span className={styles.Green}>Tech Stack: </span>
                <br />
                Handlebars, Node.js, Express, Contentful CMS, Heroku
              </h2>
              <h2 className={styles.Project__text}>
                <a href="https://www.islandrock.com/" className={styles.Green}>
                  islandrock.com
                </a>
              </h2>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Projects;
