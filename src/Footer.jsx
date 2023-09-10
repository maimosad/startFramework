import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return <>
        
       <footer className="footer text-center">
  <div className="container">
    <div className="row">
      {/* Footer Location*/}
      <div className="col-lg-4 mb-5 mb-lg-0">
        <h4 className="mb-4">LOCATION</h4>
        <p className="pre-wrap lead mb-0">2215 John Daniel Drive
          Clark, MO 65243</p>
      </div>
      {/* Footer Social Icons*/}
      <div className="col-lg-4 mb-5 mb-lg-0">
        <h4 className="mb-4">AROUND THE WEB</h4>
        <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/">
          <i className="fa fa-fw fa-facebook-f" /></a>
          <a className="btn btn-outline-light btn-social mx-1" href="https://www.twitter.com/">
            <i className="fa fa-fw fa-twitter" /></a>
            <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/">
              <i className="fa fa-fw fa-linkedin" /></a>
              <a className="btn btn-outline-light btn-social mx-1" href="https://www.dribble.com/">
                <i className="fa fa-fw fa-dribbble" /></a>
      </div>
      {/* Footer About Text*/}
      <div className="col-lg-4">
        <h4 className="mb-4">ABOUT FREELANCER</h4>
        <p className="pre-wrap lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap</p>
      </div>
    </div>
  </div>
</footer>


        
        </>
    }
}

export default Footer;