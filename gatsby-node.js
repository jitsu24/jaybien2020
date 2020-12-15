/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// create pages programatically from json 
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');



exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  let nodes = await node;
  console.log(`NODE CREATED TYPE: ${node.internal.type}`);
  
}


exports.createPages = async ({graphql, actions})=>{
  const {createPage} = actions;
  const result = await graphql(`
  query{
    allProjectJson{
      edges{
        node{
          slug
          title
        }
      }
    }
   }
  `);

console.log(JSON.stringify(result, null, 4));

result.data.allProjectJson.edges.forEach( ({node}) =>{
  createPage({
    path: node.slug,
    component: path.resolve(`./src/templates/project-page.js`),
    context:{
      slug: node.slug
    }
  })

})

  // for(let project in result.data){
  //   const node = result.data.project;
  //   // console.log({node});
  //   // createPage({
  //   //   path: node.slug,
  //   //   component: path.resolve(`./src/templates/project-page.js`)
  //   // })
  // }




}