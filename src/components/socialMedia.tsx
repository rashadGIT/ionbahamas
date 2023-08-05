import {
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    EmailIcon,
  } from 'react-share';

export default (props : any) => <div>
          <FacebookIcon className="socialMediaSpacing" size={40} round={true} onClick={()=>window.open("https://www.facebook.com/ionbahama")}/>
          {/* <TwitterIcon className="socialMediaSpacing" size={40} round={true} onClick={()=>window.open("https://twitter.com/rashad_barnett")}/> */}
          {/* <LinkedinIcon className="socialMediaSpacing" size={40} round={true} onClick={()=>window.open("https://www.linkedin.com/in/rashadbarnett/")}/> */}
</div>