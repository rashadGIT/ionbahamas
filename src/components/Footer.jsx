import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import SocialMediaIcons from 'react-social-media-icons';
import '../css/footer.css';

const FooterPage = () => {
    const socialMediaIcons = [
        {
          url: 'https://www.facebook.com/ION-Bahamas-101203231240251/',
          className: 'fa-facebook-square',
        },
        {
          url: 'https://twitter.com/IonBahamas',
          className: 'fa-twitter',
        },
        // {
        //   url: 'https://www.npmjs.com/~andrewgbliss',
        //   className: 'fa-instagram',
        // },
        {
            url: 'https://www.linkedin.com/company/ionbahamas/',
            className: 'fa-linkedin',
          },
          {
            url: 'https://www.youtube.com/channel/UCb2et4HKMjjCh4eamPyIPQA',
            className: 'fa-youtube',
          },
      ];
  return (
    <div className="footer">
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="3">
              <h5 className="title">Contact Us</h5>
              <label>Email: &nbsp;</label><b><a href="mailto:info@ionbahamas.org">info@ionbahamas.org</a></b><br />
              <label>Phone: &nbsp;</label><b><a href="tel:469-294-5834">(469) 294-5834</a></b><br />
              <label>Mailing Address: &nbsp;</label><b>3371 FM 1562, Celeste, TX 75423</b>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Mission Statement</h5>
              <p className="missionFooter">
              Our mission is to be of assistance to and enhance the lives of Bahamians and those with a connection to the Bahamas either at home or abroad via education and civic engagement.
              </p>
              {/* <ul>
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul> */}
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title">Help</h5>
              <div style={{paddingBottom : '10px'}}>
                <div className="helpDocs">
                  <a href="#">FAQs</a>
                </div>&nbsp;&bull;&nbsp;
                <div className="helpDocs">
                  <a href="#">Resources</a>
                </div>&nbsp;&bull;&nbsp;
                <div className="helpDocs">
                  <a href="#">Documentation</a>
                </div>&nbsp;&bull;&nbsp;
                <div className="helpDocs">
                  <a href="#">Press Center</a>
                </div>&nbsp;&bull;&nbsp;
                <div className="helpDocs">
                  <a href="#">Code of Conduct</a>
                </div>
              </div>
              <h5>Follow Us</h5>
              <div className="socialMedia">
                  <SocialMediaIcons
                      icons={socialMediaIcons}
                      iconSize={'1.3em'}
                      iconColor={'#495056'}
                  />
              </div>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
              <a href="/">Conditions of Use</a> 
              <a href="/"> Privacy Notice</a> 
              &nbsp; &copy; 2019 - {new Date().getFullYear()} <a target="_blank" href="http://www.ionbahamas.org"> IonBahamas.org</a> or its affiliates
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}

export default FooterPage;