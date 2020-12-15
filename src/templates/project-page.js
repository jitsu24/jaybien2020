import React from "react"
import { Link, graphql} from "gatsby"


import {Layout, Menu, NavBottom} from '../components';
import SEO from "../components/seo"



const ProjectPage = ({props})=>{
    console.log({props});
    return(
        <Layout
        navTheme={this.state.navTheme}
        toggleMenu={this.toggleMenu}
        menuVisible={menuVisible}
    >
      <SEO title="Home" />
      <div className={`project-page`}>
          <h1>Hello World</h1>
      </div>

      </Layout>
    )
}





export default ProjectPage;