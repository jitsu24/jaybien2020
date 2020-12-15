import React from "react"
import { Link, graphql} from "gatsby"


import {Layout, Menu, NavBottom} from '../components';
import SEO from "../components/seo"



const ProjectPage = ({props})=>{
    console.log({props});
    return(
      <div className={`project-page`}>
          <h1>Hello World</h1>
      </div>

    )
}





export default ProjectPage;