import './Footer.css'
import logo from '../../../../images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>

      <footer className="footer_area section_padding_130_0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-footer-widget section_padding_0_130">
                <div className="footer-logo mb-3">
                  <img src={logo} className="footlogo" />
                </div>
                <p>KrypticDSF is completely creative, lightweight, clean app landing page.</p>
                <div className="copywrite-text mb-5">
                  <p className="mb-0">© 2022 KrypticDSF. All rights reserved.</p>
                </div>
                <div className="footer_social_area"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest"><i className="fa fa-pinterest"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Skype"><i className="fa fa-skype"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a></div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5 className="widget-title">ABOUT</h5>
                <div className="footer_menu">
                  <ul>
                    <li><Link to="/about">About KrypticDSF</Link></li>
                    <li><Link to="/about">Support</Link></li>
                    <li><Link to="/about">How It Works</Link></li>
                    <li><Link to="/about">Terms &amp; Policy</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5 className="widget-title">FANTASY SPORTS</h5>
                <div className="footer_menu">
                  <div className='footer_menu_one'>
                    <ul>
                      <li><Link to="/nfl">NFL</Link></li>
                      <li><Link to="/nfl">NBA</Link></li>
                      <li><Link to="/nfl">NHL</Link></li>
                      <li><Link to="/nfl">MLB</Link></li>
                      <li><Link to="/nfl">Soccer</Link></li>
                    </ul>
                  </div>
                  <div className='footer_menu_two'>
                    <ul>
                      <li><Link to="/nfl">CFB</Link></li>
                      <li><Link to="/nfl">Golf</Link></li>
                      <li><Link to="/nfl">Tennis</Link></li>
                      <li><Link to="/nfl">NASCAR</Link></li>
                      <li><Link to="/nfl">WNBA</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5 className="widget-title">CONTACT</h5>
                <div className="footer_menu">
                  <ul>
                    <li><Link to="/contact">Membership Plan</Link></li>
                    <li><Link to="/contact">Email Us</Link></li>
                    <li><Link to="/contact">Term &amp; Conditions</Link></li>
                    <li><Link to="/contact">Help Center</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5 className="widget-title">SUBSCRIBE US</h5>
                <p>Subscribe to get latest news article and resources  </p>

                <form action="#" className="sub-form">
                  <input type="text" className="form-control mb-3" placeholder="Subscribe Now ..."/>
                    <a href="#" className="btn btn-main btn-small">subscribe</a>
                </form>
              </div>
            </div>


          </div>
        </div>
      </footer>
    </>
  )
}


export default Footer;