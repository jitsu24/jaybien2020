import React, {Component} from "react"
import { Link } from "gatsby"
import ReactFullpage from '@fullpage/react-fullpage';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import {Hero, Project} from '../components'

class IndexPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      navTheme: 'light'
    }
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
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }


  handleChangeColors() {

  }



  render(){
    return(
<Layout
navTheme={this.state.navTheme}
>
    <SEO title="Home" />
    <ReactFullpage
    //fullpage options
    scrollingSpeed = {1000} /* Options here */
    licenseKey={null}
    navigation= {true}
    onLeave={this.onLeave.bind(this)}
    render={({ state, fullpageApi }) => {
     

      return (
        <ReactFullpage.Wrapper
          
        >
                <Hero></Hero>
      <Project

      ></Project>
        </ReactFullpage.Wrapper>
      );
    }}
  />


    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
    )
  }
}



export default IndexPage
