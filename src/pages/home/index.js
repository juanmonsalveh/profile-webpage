import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, avatarProperties } from "../../content_option";
import { Link } from "react-router-dom";
import {Avatar} from "@readyplayerme/visage";

const style = { width: '100%', height: '100vh', border: 'none' };
export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          {/*<Avatar className="h_bg-image order-1 order-lg-2 h-100 " modelSrc={introdata.your_model_url} />*/}

          <Avatar className="h_bg-image order-1 order-lg-2 "
                  modelSrc={avatarProperties.modelSrc}
                  headMovement={true}
                  style={getAvatarStyles()}
          />
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x typewriter-text">
                  Software&nbsp;
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth,
                        introdata.animated.fifth,
                        introdata.animated.sixth,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x intro_description">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_h" className="ac_btn btn ">
                      Projects
                    </div>
                  </Link>
                  <Link to="/about">
                    <div id="button_h" className="ac_btn btn">
                      About Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
function getAvatarStyles() {
    const mobStyles = {
        height: "50vh",
        width: "50vh",
        background: "transparent",
        margin: "1vh auto",
        borderRadius: "50%"
    }
    const webStyles = {
        background: "transparent",
        height: "50%",
        width: "50%",
        margin: "auto",
        // margin: "auto",
        // border: "solid white 2px",
        borderRadius: "50%"
    }
    return (  (( window.innerHeight <= 800 ) && ( window.innerWidth <= 600 )) ) ? mobStyles : webStyles

}