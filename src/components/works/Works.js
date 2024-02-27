/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import AspiSport from '../../assets/recentprojects/aspirationSport.png';
import PortFam from '../../assets/recentprojects/portfam.png';
import Cpaie from '../../assets/recentprojects/cpaie.png';
import DressMeUp from '../../assets/recentprojects/dressmeup.png';
import Morning from '../../assets/recentprojects/morning.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'C + Paie', 
      description: `Showcase site in React & TailwindCSS to increase the visibility and sales of the company`,
      href:`none`,
      hrefCode:`none`,
      alt: 'C + Paie',
      image: `${Cpaie}`,
    },
    { 
      id: 2,
      title: 'Dress Me Up', 
      description: `A mobile dressing room to prepare your outfits from wherever you want. Within a team of 3 developers,
      we used the following technologies to create the mobile application:
      React Native, Expo, Node Js, and a Mongo Db database`,
      href:`none`,
      hrefCode:`https://github.com/coderensemble/dressMeUp-backend`,
      alt: 'Dress Me Up',
      image: `${DressMeUp}`,
    },
    { 
      id: 3,
      title: 'Morning News', 
      description: `A web application with secure authentication
      which allows you to organize a personal playlist from an API.
      User information is stored in database.
      React, Node and mongo DB were the main technologies used.`,
      href:`https://morning-frontend-topaz.vercel.app/`,
      alt: 'Morning News',
      image: `${Morning}`,
    },
    { 
      id: 4,
      title: 'Portail Famille', 
      description: `Web/mobile application simplifying registrations and tracking
      extracurricular. Developed with React Native, PHP Symfony and a
       Secure SQL database. The mobile app is still under construction.`,
       href:`none`,
       hrefCode:`https://github.com/coderensemble/Collectivite`,
      alt: 'Portail Famille',
      image: `${PortFam}`,
    },
    { 
      id: 5,
      title: 'Aspiration Sport', 
      description: `I created Aspiration Sport: an online sports coaching platform,
       combining technical expertise and passion for sport. I used React, node and mongo DB to did it. 
       The web app is still under construction.`,
       href:`none`,
       hrefCode:`none`,
      alt: 'Aspiration Sport',
      image: `${AspiSport}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
              <div className="link">
              {project.href !== 'none' && (<p><a href={project.href} target="_blank" rel="noopener noreferrer" style={{color:'#d8b88d', textDecoration:'none'}}>See the website</a></p>)}
              {project.hrefCode !== 'none' && (<p><a href={project.hrefCode} target="_blank" rel="noopener noreferrer" style={{color:'#d8b88d', textDecoration:'none'}}>Explore the code</a></p>)}
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
