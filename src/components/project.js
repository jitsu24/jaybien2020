/**
 * Template component for displaying project previews on index page
 */


import React, { useEffect } from "react";
import PropTypes from "prop-types";
import '../styles/project.scss';
import {Blob, ProjectImage} from './images';

const Project = ({ project, classNames }) => {


const { blobFill, date, excerpt, featuredImage, slug, subtitle, title, } = project;

  
  useEffect(()=>{
        // console.log(TS_Home);
        console.log({project});
    }, []);
    

  return (
<div className={'section light'} id={`project`} data-anchor="project">
    <div className={`project ${classNames}`}>
        <div className={'project__display'}>
     
            <div className={`project__image-container`}>
                <img src={`${featuredImage.publicURL}`} className={'project__image'}/>
                <Blob className={'project__blob'} fill={`${blobFill}`}></Blob>
            </div>
        </div>
        <div className='project__information'>
            <h2 className='project__title'>{title}</h2>
            <h3 className={'project__subtitle'}>{subtitle}</h3>
            <p className={'project__description'}> 
            {excerpt}
              </p>
            <a href={`${slug}`} className='project__button'>View Project</a>
        </div>
    </div>
</div>
  )
}

Project.propTypes = {
  children: PropTypes.node,
}

export default Project;
