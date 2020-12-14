import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"

const PostTemplate = ({data}) => {
    const {jsonData} = data;
    const{title, date} = jsonData;

    return(
        <Layout>
        <SEO title="Page two" />
        <div className="project-page">
            <div className="project-header">
                <h1 className="project-header__title">{title ||  'Lorem Dipsum Dipset'}</h1>
                <p className="project-header__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi velit voluptatem? Laudantium accusamus libero, officiis quo ad culpa beatae saepe voluptate explicabo autem iste! Recusandae eligendi voluptatem odit hic cumque, corrupti exercitationem voluptate nisi explicabo non quis, facere est rerum. Atque, odit. Voluptates assumenda ea autem doloremque reprehenderit delectus?</p>
    
            </div>
        </div>
      </Layout>
    )
}


export default PostTemplate;