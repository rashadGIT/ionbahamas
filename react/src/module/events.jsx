import moment from 'moment';
import { zeroPad } from '../module/util'

const getGeneralMeetings = () =>{
  let array = [];
  for(let y = 0; y <= 2; y++){
    let year = new Date().getFullYear() + y;
    for(let m = 1; m <= 12; m++){
      if(m % 3 === 0){
        let int_d = new Date(year, m,1);
        let day = new Date(int_d - 1);
        let meeting = moment(`${year}-${zeroPad(m,2)}-${day.getDate()}`);
        let meetingDate = meeting.endOf('month').startOf('week');
        array.push({
          allDay: false,
          startDate: meetingDate.toDate(),
          endDate: meetingDate.toDate(),
          startTime : "6:00pm",
          endTime : "6:00pm",
          title: 'General Meeting',
          description : "Join the conversation.",
          calendarLink: null,
          mapURL : null,
          location : null
        })
      }
    }
  }
  return array;
}

let scheduledMeetings = getGeneralMeetings()
.filter(meeting => {
  if(meeting.startDate.getFullYear() === 2020) return false;
  return true;
})
.map(virtualMeeting => {
  let arr = [
    // new Date("03/28/2021").getTime(),
    // new Date("09/26/2021").getTime()
  ]
  if(arr.includes(virtualMeeting.startDate.getTime())){
    virtualMeeting.virtualEventLink = "https://www.google.com"
  }
  return virtualMeeting;
})
.map(cancelledMeeting => {
  let arr = [
    // new Date("03/28/2021").getTime(),
    // new Date("09/26/2021").getTime()
  ]
  if(arr.includes(cancelledMeeting.startDate.getTime())){
    cancelledMeeting.cancelled = true;
  }
  return cancelledMeeting;
})
;

let list = [
  // {
  //   allDay: false,
  //   startDate: new Date("12/21/2020"),
  //   endDate: new Date("12/21/2020"),
  //   startTime : "7:00pm",
  //   endTime : "10:00pm",
  //   title: 'A Taste of Paradise Fundraising Gala Dinner & Silent Auction',
  //   description : "Featuring a Uniquely Bahamian Mini Fashion Show",
  //   calendarLink: "https://www.google.com/calendar/render?action=TEMPLATE&text=A+Taste+of+Paradise+Gala+Dinner&details=African+American+Museum+of+Dallas+-+3536+Grand+Ave%2C+Dallas%2C+TX+75210&location=3536+Grand+Ave%2C+Dallas%2C+TX+75210&dates=20190922T000000Z%2F20190922T030000Z",
  //   mapURL : "https://goo.gl/maps/1K96gzDvLR2TiDn68",
  //   location : "African American Museum At Fair Park"

  // },
  // {
  //   allDay: false,
  //   startDate: new Date("12/09/2020"),
  //   endDate: new Date("12/14/2020"),
  //   startTime : "8:00am",
  //   endTime : "3:00pm",
  //   title: 'Bahamas Relief Donation Drop-Off',
  //   description : "Collecting Donation for Hurricane Dorain Survivors",
  //   calendarLink: null,
  //   mapURL : "https://goo.gl/maps/Nb6swsFeVxZhuKG57",
  //   location : "1434 Patton Place Suite 106b, Carrollton, TX 75007"

  // },
  // {
  //   allDay: false,
  //   startDate: new Date("11/03/2020"),
  //   endDate: new Date("11/05/2020"),
  //   startTime : "3:00pm",
  //   endTime : "6:00pm",
  //   title: 'Bowl-A-Thon',
  //   description : "ION Bahamas 1st Annual Bowl-A-Thon",
  //   calendarLink: null,
  //   mapURL : "https://www.google.com/maps/search/?api=1&query=1950+Marketplace+Dr.+Garland+TX+75401",
  //   location : "1950 Marketplace Dr, Garland, TX 75041, United States"
  // },
  // {
  //   allDay: false,
  //   startDate: null,
  //   endDate: null,
  //   title: 'Golf Tournament',
  //   description : null
  // }
];

list = [...list, ...scheduledMeetings]

let events = list
      .filter(x => {
          if(x.startDate === null) return false;
          return x.startDate > new Date(Date.now() - (1000 * 60 * 60 * 24 * 30))
      })
      .sort((a,b) => a.startDate - b.startDate)
      .slice(0,5)

let upComingEvents = list
.filter(x => {
  return x.startDate === null
})
.sort((a,b) => {
  if(a.startDate) return -1;
  return a.startDate - b.startDate;
})

export {
  events,
  upComingEvents
}