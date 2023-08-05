export default [
    {
      name : "Carlisle Mott",
      bio : (
        <div>
          <p>Carlisle Mott is the principal Financial Advisor at Carlisle Mott Financial, LLC. They provide a range of professional services in financial planning and wealth management for individual investors. Born and raised in The Bahamas, he is a graduate of The College of The Bahamas. He obtained his Bachelor of Science degree in Electrical Engineering from the University of Texas at Dallas and worked at Texas Instruments for 13 years.</p>
          <p>Carlisle and his wife Maria have 3 children. They have a heart for serving and helping others. They have sponsored numerous give-back activities in The Bahamas.</p>
        </div>),
      img : require('../images/board/Carlisle.jpeg'),
      position : "Chairman of the Board/President",
      order : 1
    },
    {
      name: "Renee Pargo",
      bio : (<div>
              <p>
                Renee Pargo, a native of Nassau, Bahamas, is a financial professional with more than twenty years of experience in the technology space,
                having worked in various capacities in the telecom, semiconductor, and energy sectors.
              </p>
              <p>
                A graduate of Missouri State University, Pargo holds a double major in Accounting and Management with a minor in Spanish.
                She earned her MBA in Technology from The University of Dallas, with additional coursework and certifications from both UD and
                The University of Texas at Dallas. She currently lives in Dallas with her daughter Payton. Renee has a passion for people and has spent many years
                advocating on behalf of children and the elderly.
              </p>
          </div>),
      img : require('../images/board/Renee.jpeg'),
      position : "Assistant Chairman of the Board",
      order : 2
    },
    {
      name: "Cardell Davis",
      bio : (<div>
              <p>
                Cardell Davis is a Tennessee native; his grandfather Thomas L. Mott Sr. is from Inagua, 
                Cardell graduated from Middle Tennessee State University. He has been an entrepreneur for 
                the last three years. During that experience, he has gained a more profound passion for the 
                love of marketing and enhancing businesses.
              </p>
              <p>
                His goal is always to expand his horizons and achieve higher experiences. A quote that he 
                lives by is, “If the old door isn’t opening, then let me help you build a new door that 
                will open for you.” In other words, if the old setup isn’t working, let me assist you in 
                making a new setup.
              </p>
              <p>
                When he is not working, his hobbies are hanging with family and friends and hiking, 
                and going on new adventures.
              </p>
          </div>),
      img : require('../images/board/Cardell.jpg'),
      position : "Director of PR/ Marketing",
      order : 9
    },
    {
      name: "Maria Mott",
      bio : (<div>
        <p>Maria was born and raised in El Paso, Texas. She currently resides in the Dallas area with her husband Carlisle and 3 kids.
          She's a graduate of UT Arlington with a Bachelors degree in Production Quality Management.
          With over 15 years of experience as a procurement professional, Maria works at a fortune 500 semi-conductor company.</p>
        <p>Both Maria and her husband are passionate about making a difference in the lives of those around them.
          Among their favored activities is engaging youth through faith ministry and education.</p>
      </div>),
      img : require('../images/board/Maria.jpeg'),
      position : "Treasurer",
      order : 4
    },
    {
      name: "Lestia Walker",
      bio : (<div>
        <p>Dr. Lestia Walker welcomes her appointment to the role of Director of Community Services,
          in line with her dedication and devotion to humanistic care and community empowerment.</p>
        <p>Born and raised in the Bahamas, she adopted and honed her skills at the Latin American School of Medicine, Havana, graduating with honors.</p>
        <p>She has proactively and repeatedly volunteered to serve various organizations since 2009.
          Some of her most cherished contributions through volunteerism include organizing community projects and working with Imerman Angels in support of cancer fighters, survivors and caregivers.</p>
      </div>),
      img : require('../images/board/Lestia.jpeg'),
      position : "Director of Community Services",
      order : 5
    },
    {
      name: "Sean Smith",
      bio : (
        <div>
          <p>Sean was raised in Grant's Town, Nassau, Bahamas.
            He's the co-owner of Party DJ Dallas, where they provide personalized DJ services and ensures that each event is made special.</p>
          <p>He's also the Partners First Program Manager with The Crowther Group, where he is responsible for the development of diversity
            and safety policies that impact people's lives by providing a workplace free of harassment and discrimination.</p>
        </div>),
      img : require('../images/board/Sean.jpg'),
      position : "Director of Fundraising/Events",
      order : 7
    },
    {
      name: "Rashad Barnett",
      bio : (<div>
        <p>
          Rashad Barnett was born in Freeport, Grand Bahama, Bahamas. He graduated from Florida State University in Tallahassee, FL.
          After receiving his education, Rashad moved to the Dallas/Fort Worth Metroplex to pursue his career.
          Rashad currently works as a Software Engineer at a fortune 500 company.
        </p>
        <p>Rashad is a loving son, supportive brother and lifelong friend to many.
          He is passionate about making a positive difference in the lives of others through his talents and drive.
          The only this he loves more than Bahamian culture is sharing that culture with those around him.
        </p>
        </div>),
      img : require('../images/board/Rashad.jpg'),
      position : "Director of Technology & Logistics",
      order : 9
    }
  ].sort((a, b) => a.order - b.order);