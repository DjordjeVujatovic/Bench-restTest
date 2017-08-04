import React from 'react';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebokOfficial from 'react-icons/lib/fa/facebook-official';
import FaInstagram from 'react-icons/lib/fa/instagram';

const FooterComponent = () => {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <div className="footerLeft">
          <div className="footerLeftTop">
            <div className="benchImage">
              <img className="benchLogoHeader" src="https://bench.imgix.net/resources/images/pages/media-resources/logos/logo-gold.png" alt="Bench Logo" />
            </div>
            <div className="help">
              <p>help@bench.co</p>
            </div>
            <div className="refer">
              <p>Refer a Friend</p>
            </div>
            <div className="press">
              <p>Press Kit</p>
            </div>
            <div className="partners">
              <p>Partners</p>
            </div>
          </div>
          <div className="footerLeftBottom">
            <p>1 (888) 760 1940 - Our hours are weekdays 7am to 5pm PDT</p>
          </div>
        </div>
        <div className="footerRight">
          <div className="footerRightTop">
            <FaTwitter />
            <FaFacebokOfficial />
            <FaInstagram />
          </div>
          <div className="footerRightBottom">
            <p>© Bench 2011-2017 Terms of Service Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
