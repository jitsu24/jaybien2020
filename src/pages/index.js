import React, {Component} from "react"
import { Link, graphql} from "gatsby"
import ReactFullpage from '@fullpage/react-fullpage';

import {Layout, Menu} from '../components';
import SEO from "../components/seo"

import {Hero, Project} from '../components'

import {ThemeProvider, ThemeContext} from '../context/ThemeContext';


class IndexPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      navTheme: 'light',
      totalSections: null,
      currentSection: null,
      projects: [],
      menuVisible: false,
    }

    // attach toggle menu func to the instance of this index page
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount(){
    // can't get # of sections from fullpage directly for menu and location indicator...
    // so yeah, need to create custom location indicator
    const sections = Array.from(document.querySelectorAll('.section'));
    this.setState({totalSections: sections.length});
    // set active section on first load
    const active = sections.find(section => {
      console.log(Array.from(section.classList));
    });
    console.log({active});






    const {tsJson, fhhsJson, keiyakuJson, perfectoJson} = this.props.data;
    console.log(this.props);
    this.setState({projects:[tsJson, keiyakuJson, fhhsJson,  perfectoJson]}, ()=>{console.log(this.state)});
    console.log(this.state);
    // console.log({props});

  
    
    
  
    // let stateA = seeState()
    // toggleTheme();
    // let stateB = seeState()
    // console.log({stateA}, {stateB});
    
  }


  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    let classList = Array.from(destination.item.classList);
    if(classList.includes('dark')){
      this.setState({navTheme: 'light'})
    } else {
      this.setState({navTheme: 'dark'})
    }
    console.log({classList});
  }

  toggleMenu(currentSectionTheme){
    console.log(this.state.menuVisible);
    this.setState({menuVisible: !this.state.menuVisible}, ()=>{
      // callback after state updates, update the theme color to match menu state
      if(this.state.menuVisible) {this.setState({navTheme: 'light'})}
      else {
// if menu is closing / closed, update nav theme based on current section theme
        let classList = Array.from(this.state.currentSection)

      }
    });
  }

  


  render(){
    const {projects, menuVisible} = this.state;

    return(
      <ThemeProvider>
      <Layout

      navTheme={this.state.navTheme}
      toggleMenu={this.toggleMenu}
>
    <SEO title="Home" />
    <ReactFullpage
    //fullpage options
    scrollingSpeed = {1000} /* Options here */
    licenseKey={null}
    navigation= {false}
    navigationPosition= {'left'}
    onLeave={this.onLeave.bind(this)}
    render={({ state, fullpageApi }) => {
     

      return (
        <ReactFullpage.Wrapper
          
        >
                <Menu isVisible={menuVisible} ></Menu>
                <Hero></Hero>

                {projects && projects.map(project => {

                 return (<Project project={project}></Project>)
                })}
  
        </ReactFullpage.Wrapper>
      );
    }}
  />
  </Layout>
  </ThemeProvider>

    )
  }
}



export default IndexPage;


export const query = graphql`
 query HomePageQuery {
  tsJson {
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
  }`;