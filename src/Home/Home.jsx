import React, { Component } from 'react';

import img from '../Assets/img/avataaars.svg'

class Home extends Component {
    render() {
        return  <>
 
 <header className="masthead bg-primar text-white text-center">
  <div className="container d-flex align-items-center flex-column">
    <img className="masthead-avatar mb-5" src={img} alt />
    
    <h2 className="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
    {/* Icon Divider*/}
    <div className="divider-custom divider-light">
      <div className="divider-custom-line" />
      <div className="divider-custom-icon"><i className="fa fa-star" /></div>
      <div className="divider-custom-line" />
    </div>
    {/* Masthead Subheading*/}
    <p className="pre-wrap masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
  </div>
</header>



</>
    }
}

export default Home;