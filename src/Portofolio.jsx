import React, { Component } from 'react';
import logo from './Assets/img/portfolio/cabin.png';
import logo1 from './Assets/img/portfolio/cake.png';
import logo2 from './Assets/img/portfolio/circus.png';
import logo3 from './Assets/img/portfolio/game.png';
import logo4 from './Assets/img/portfolio/safe.png';
import logo5 from './Assets/img/portfolio/submarine.png';
class Portofolio extends Component {
    render() {
        return  <>
         
           
          
           <section className="page-section masthead  p-5 portfolio"  >
    <div className="container">
      
      <div className="text-center">
        <h2 className="page-section-heading text-secondary mb-0 d-inline-block">PORTFOLIO</h2>
      </div>
   
      <div className="divider-custom">
        <div className="divider-custom-line" />
        <div className="divider-custom-icon"><i className="fa fa-star" /></div>
        <div className="divider-custom-line" />
      </div>
     
      <div className="row justify-content-center">
   
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal0">
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white"><i className="fa fa-plus fa-3x" /></div>
            </div><img className="img-fluid" src={logo} alt="Log Cabin" />
          </div>
     
        </div>
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white"><i className="fa fa-plus fa-3x" /></div>
            </div><img className="img-fluid" src={logo1} alt="Tasty Cake" />
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white"><i className="fa fa-plus fa-3x" /></div>
            </div><img className="img-fluid" src={logo2} alt="Circus Tent" />
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white"><i className="fa fa-plus fa-3x" /></div>
            </div><img className="img-fluid" src={logo3} alt="Controller" />
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white"><i className="fa fa-plus fa-3x" /></div>
            </div><img className="img-fluid" src={logo4} alt="Locked Safe" />
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-5">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white"><i className="fa fa-plus fa-3x" /></div>
            </div><img className="img-fluid" src={logo5} alt="Submarine" />
          </div>
        </div>
      </div>
    </div>
  
    <div className="portfolio-modal modal fade" id="portfolioModal0" tabIndex={-1} role="dialog" aria-labelledby="portfolioModal0Label" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered " role="document">
    
        
        
                {/* Portfolio Modal - Image*/}<img className="img-fluid rounded mb-5" src={logo}alt="Log Cabin" />
             
              
       
       
    </div>
  </div>
 
  <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-labelledby="portfolioModal0Label" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered " role="document">
    
        
        
                {/* Portfolio Modal - Image*/}<img className="img-fluid rounded mb-5" src={logo1}alt="Log Cabin" />
             
              
       
       
    </div>
  </div>
  <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-labelledby="portfolioModal0Label" aria-hidden="true">
    <div className="modal-dialog  modal-dialog-centered" role="document">
    
        
        
                {/* Portfolio Modal - Image*/}<img className="img-fluid rounded mb-5" src={logo2}alt="Log Cabin" />
             
              
       
       
    </div>
  </div>
  <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-labelledby="portfolioModal0Label" aria-hidden="true">
    <div className="modal-dialog  modal-dialog-centered" role="document">
    
        
        
                {/* Portfolio Modal - Image*/}<img className="img-fluid rounded mb-5" src={logo3}alt="Log Cabin" />
             
              
       
       
    </div>
  </div>
  <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-labelledby="portfolioModal0Label" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered " role="document">
    
        
        
                {/* Portfolio Modal - Image*/}<img className="img-fluid rounded mb-5" src={logo4}alt="Log Cabin" />
             
              
       
       
    </div>
  </div>
  <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} role="dialog" aria-labelledby="portfolioModal0Label" aria-hidden="true">
    <div className="modal-dialog  " role="document">
    
        
        
                {/* Portfolio Modal - Image*/}<img className="img-fluid rounded mb-5" src={logo5}alt="Log Cabin" />
             
              
       
       
    </div>
  </div>
  </section>
           </>
         
    }
}

export default Portofolio;