import {
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    EmailIcon
  } from 'react-share';
  
const size: number = 40
export default (props : any) => <div>
  <FacebookIcon className="socialMediaSpacing" size={size} round={true} onClick={()=>window.open("https://www.facebook.com/ionbahama")}/>
  <TwitterIcon className="socialMediaSpacing" size={size} round={true} onClick={()=>window.open("https://twitter.com/IonBahamas")}/>
  <LinkedinIcon className="socialMediaSpacing" size={size} round={true} onClick={()=>window.open("https://www.linkedin.com/company/ionbahamas/")}/>
  <EmailIcon className="socialMediaSpacing" size={size} round={true} onClick={()=>window.open("mailto:info@ionbahamas.org")}/>
</div>