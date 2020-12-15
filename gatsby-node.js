/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// create pages programatically from json 
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  let nodes = await node;
  console.log(`NODE CREATED TYPE: ${node.internal.type}`);
  
}


exports.createPages = async ({graphql, actions})=>{
  const result = await graphql(`
  query{ tsJson {
    title
    subtitle
    excerpt
    date
    blobFill
    slug
    featuredImage {
      id
      childImageSharp {
        fluid(quality: 100) {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
          originalImg
          originalName
          src
          srcSet
        }
      }
    }
  }
  fhhsJson {
    title
    subtitle
    excerpt
    date
    blobFill
    slug
    featuredImage {
      id
      childImageSharp {
        fluid(quality: 100) {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
          originalImg
          originalName
          src
          srcSet
        }
      }
    }
  }
  keiyakuJson {
    title
    subtitle
    excerpt
    date
    blobFill
    slug
    featuredImage {
      id
      childImageSharp {
        fluid(quality: 100) {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
          originalImg
          originalName
          src
          srcSet
        }
      }
    }
  }
  perfectoJson {
    title
    subtitle
    excerpt
    date
    blobFill
    slug
    featuredImage {
      id
      childImageSharp {
        fluid(pngQuality: 100) {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
          originalImg
          originalName
          src
          srcSet
        }
      }
    }
  }
  }
  `);

  console.log(JSON.stringify(result, null, 4));
}