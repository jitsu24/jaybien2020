import React from "react"
import { Link, graphql} from "gatsby"


import {Layout, Menu, NavBottom} from '../components';
import {Blob} from '../components/images';
import SEO from "../components/seo"
import '../styles/project-page.scss';



const ProjectPage = ({data})=>{
    console.log({data});
    const {projectJson: project} = data;
    const {title, subtitle, body, blobFill, involvement, featuredImage, projectImages, link} = project;
    return(
      <div className={`project-page`}>
          <div className="project-header">
              <h1 className="project-header__title">{title}</h1>
              <p className={"project-header__body"}> {body}</p>
          </div>
          <div className={'project-display'}>

              <div className={'project-display__cell'}>
                  <Blob className={'project-display__blob'} ></Blob>
                <img src={`${featuredImage.publicURL}`} className={'project-display__img'}/>
              </div>
              <div className={'project-display__cell'}>
                <h2 className={'project-display__subtitle'}>Involvement</h2>
                <ul className={'project-display__list'}>
                    {involvement.map(i => (<li>{i}</li>))}
                </ul>

                {link && (<a href={link} target="_blank">Visit</a>)}
                
               
              </div>

              {projectImages.map(img => (
                <div className={'project-display__cell'}>
                    <img src={`${img.publicURL}`} className={'display__img'}/>
                </div>
              ))}
      
               
          </div>
      </div>

    )
}

export const query = graphql`
    query($slug: String!){
        projectJson(slug: {eq: $slug}){
            title
            subtitle
            date
            featuredImage{
                publicURL
            }
            projectImages{
                publicURL
            }
            blobFill
            involvement
            body
            link
        }
    }
    
`





export default ProjectPage;