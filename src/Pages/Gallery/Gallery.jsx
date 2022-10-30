import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Gallery.module.css";
import "./Gallery.css";

import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import EventPics from "./data/EventPics";
import News from "./data/News";

import fvimg from "./assets/fvimg.png";

const Gallery = () => {
  const [evalue, setEValue] = React.useState(0);

  const ehandleChange = (event, newValue) => {
    setEValue(newValue);
  };

  const [nvalue, setNValue] = React.useState(0);

  const nhandleChange = (event, newValue) => {
    setNValue(newValue);
  };

  const [program, setProgram] = useState(EventPics[0]);
  const [news, setNews] = useState(News[0]);

  const allPics = EventPics.map((event) => event.pics).flat();

  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                Welcome to <span>µLearn </span> Gallery
              </p>
              <p className={styles.fv_tagline}>
                Welcome, to µLearn Gallery, Listed below are the key pictures of
                various milestones accomplished by µLearn in the past one year.
                Together, we learned and witnessed a lot of things and going
                back and taking a look at those wonderful memories again is a
                always something special!.{" "}
              </p>
            </div>
            <div className={styles.fv_images}>
              <img src={fvimg} alt='' className={styles.fv_img} />
            </div>
          </div>
        </div>

        {/* Gallery Header */}
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>
                <span>µLearn</span> Community Event Gallery.
              </p>
              <p className={styles.sv_tagline}>
                Beautiful memories often need to be documented, so that you
                could revisit them. These are some of the pictures from our
                events.
              </p>
            </div>

            <div className={styles.tabs_container}>
              {EventPics.map((event) => (
                <p
                  className={styles.tab}
                  onClick={() => {
                    setProgram(event);
                    console.log(event);
                  }}
                >
                  {event.Event_Name}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Body */}
        {program && (
          <section id='gallery'>
            <div className='gallery_grid'>
              {(program.Event_Name == "All Images" ? allPics : program.pics)
                .slice(0, 30)
                .map((pic) => (
                  <div className='gallery_item'>
                    <img
                      className='gallery_img'
                      src={pic}
                      alt=''
                      loading='lazy'
                    />
                  </div>
                ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
