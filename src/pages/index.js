import React, {Component} from "react"
import { Link, graphql} from "gatsby"
import ReactFullpage from '@fullpage/react-fullpage';

import {Layout, Menu, NavBottom} from '../components';
import SEO from "../components/seo"

import {Hero, Project} from '../components'

import {ThemeProvider, ThemeContext} from '../context/ThemeContext';
import {TOTAL_SECTIONS} from '../constants'


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
    const section = document.querySelector('.section');
    this.setState({currentSection: {index:0, item:section}}, ()=>{console.log(this.state.currentSection)});

    // this.setState({totalSections: sections.length});
    // set active section on first load







    const {tsJson, fhhsJson, keiyakuJson, perfectoJson} = this.props.data;
    this.setState({projects:[tsJson, keiyakuJson, fhhsJson,  perfectoJson]});
    // console.log({props});

  
    
    
  
    // let stateA = seeState()
    // toggleTheme();
    // let stateB = seeState()
    // console.log({stateA}, {stateB});
  }
  updateTheme(){
    let darkSide = Array.from(this.state.currentSection.item.classList).includes('dark');
    darkSide ? this.setState({navTheme: 'light'}) : this.setState({navTheme: 'dark'})
  }




  onLeave(origin, destination, direction) {
    // console.log('onLeave', { origin, destination, direction });
    let classList = Array.from(destination.item.classList);
    this.setState({currentSection: destination});
    this.updateTheme();
  }

  toggleMenu(){
    this.setState({menuVisible: !this.state.menuVisible}, ()=>{
      // callback after state updates, update the theme color to match menu state
      if(this.state.menuVisible) {this.setState({navTheme: 'light'})}
      else {
        this.updateTheme();

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
      menuVisible={menuVisible}
>
    <SEO title="Home" />
    <ReactFullpage
    //fullpage options
    scrollingSpeed = {1000} /* Options here */
    licenseKey={`OPEN-SOURCE-GPLV3-LICENSE`}
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
                 return (<Project key={project.slug} project={project}></Project>)
                })}
  
        </ReactFullpage.Wrapper>
      );
    }}
  />
  {this.state.currentSection && <NavBottom  theme={this.state.navTheme} totalSections={TOTAL_SECTIONS} sectionIndex={this.state.currentSection.index}></NavBottom>}
  </Layout>
  </ThemeProvider>

    )
  }
}

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



export default IndexPage;