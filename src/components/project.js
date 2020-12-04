import React, { useEffect } from "react";
import PropTypes from "prop-types";
import '../styles/project.scss';
import {TS, Blob} from './images';

const Project = ({ Project, classNames }) => {
    const {TS_Home} = TS;
    useEffect(()=>{
        console.log(TS_Home);
    }, []);
    

  return (
<div className={'section'} id={`project`}>
    <div className={`project ${classNames}`}>
        <div className={'project__display'}>
     
            <div className={`project__image-container`}>
                <Blob className={`project__blob`}></Blob>
                <TS_Home className="project__image"></TS_Home>
            </div>
        </div>
        <div className='project__information'>
            <h2 className='project__title'>Title</h2>
            <h3 className={'project__subtitle'}>WordPress Theme</h3>
            <p className={'project__description'}> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptas, cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorum
              ipsam alias beatae dolore quo amet accusantium in, repellendus minima! 
              </p>
            <a href={``} className='project__button'>View Project</a>
        </div>
    </div>
</div>
  )
}

Project.propTypes = {
  children: PropTypes.node,
}

export default Project;
