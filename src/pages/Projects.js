import React from "react";
import { TabTitle } from "../utils/GeneralFunction";
import screen1 from "../images/screen-1.png";
import screen2 from "../images/screen-2.png";
import screen3 from "../images/screen-3.png";
import screen4 from "../images/screen-4.png";
import screen5 from "../images/screen-5.png";
import shopping from "../images/shopping.PNG";
import dashboard from "../images/dashboard.png";
import game from "../images/game.png"

const Projects = () => {
  TabTitle("Projects");
  return (
    <>
      <div className="container-item">
        <h1 className="text-48 mt-30 wow fadeInDown primary-color">
          Things I've made trying to put my skills out there.
        </h1>
        <div className="row mt-16 sm:mt-20">
          {/* first col */}
          <div className="col-md-6 col-sm-12 projec-page mb-5">
            <a href="https://tweetxapp.netlify.app/" target="_blank">
              <div className="content-bg">
                <p className="relative z-10 relative z-10 role-title mb-3">
                  Tweet app (MERN)
                </p>
                {/* <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 role-sub-title">A Collaborative Tweeting Experience</p> */}
                <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 group-hover:scale-100 group-hover:opacity-100">
                  <div>
                    <img src={screen3} alt="" loading="lazy" />
                  </div>
                  <div>
                    <img src={screen5} alt="" loading="lazy" />
                  </div>
                  <div>
                    <img src={screen4} alt="" loading="lazy" />
                  </div>
                  <div>
                    <img src={screen2} alt="" loading="lazy" />
                  </div>
                  <div>
                    <img src={screen1} alt="" loading="lazy" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* second col */}
          <div className="col-md-6 col-sm-12 projec-page mb-5">
            <a href="https://angaddi.netlify.app/" target="_blank">
              <div className="content-bg">
                <p className="relative z-10 relative z-10 role-title mb-3">
                  Shopping app
                </p>
                {/* <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 role-sub-title">A shopping Experience</p> */}
                <div className="grid grid-flow-col">
                  <div className="mt-25">
                    <img src={shopping} alt="" loading="lazy" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* third col */}
          <div className="col-md-6 col-sm-12 projec-page mb-5">
            <a href="https://admindsboard.netlify.app/" target="_blank">
              <div className="content-bg">
                <p className="relative z-10 relative z-10 role-title mb-3">
                  Dashboard (MERN)
                </p>
                {/* <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 role-sub-title">A shopping Experience</p> */}
                <div className="grid grid-flow-col">
                  <div className="mt-25">
                    <img src={dashboard} alt="" loading="lazy" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* fourth col */}
          <div className="col-md-6 col-sm-12 projec-page mb-5">
            <a href="https://slayergame.netlify.app" target="_blank">
              <div className="content-bg">
                <p className="relative z-10 relative z-10 role-title mb-3 vue-title">
                  Monster Slayer game (Vuejs)
                </p>
                {/* <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 role-sub-title">A shopping Experience</p> */}
                <div className="grid grid-flow-col">
                  <div className="mt-25">
                    <img src={game} alt="" loading="lazy" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
