import React, { Component } from 'react';
import axios from 'axios';

import SliderWidget from '../Utils/slider';
import Suscriptions from '../Utils/Subscribe';
import Blocks from './blocks';
import Poll from './polls';
import { URL_HOME } from '../Utils/paths';

class Home extends Component {

  state = {
    home:''
  }

  componentDidMount(){
    axios.get(URL_HOME)
      .then(response => {
        console.log(response.data);
        this.setState({home:response.data})
      })
  }

render(){
  return(
    <>
      <SliderWidget slides={this.state.home.slider}/>
      <Suscriptions />
      <Blocks blocks={this.state.home.blocks}/>
      <Poll />
    </>
  )
}

}

export default Home;
