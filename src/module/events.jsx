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
          endTime : "7:00pm",
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
    new Date("03/28/2021").getTime(),
    new Date("06/27/2021").getTime()
  ]
  if(arr.includes(virtualMeeting.startDate.getTime())){
    virtualMeeting.virtualEventLink = "https://zoom.us/j/9710750828?pwd=WFY4d3ZxcGRQMUJoYjMyRkNyOHpHZz09"
  }
  return virtualMeeting;
})
.map(cancelledMeeting => {
  let arr = [
    new Date("03/28/2021").getTime(),
    new Date("06/27/2021").getTime()
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
  //   startDate: new Date("09/10/2021"),
  //   endDate: new Date("09/10/2021"),
  //   startTime : "8:00am",
  //   endTime : "12:00pm",
  //   title: 'ION Walk-A-Thon',
  //   description : "Come and join us for a walk around white rock lake to celebrate Bahamas Independence.",
  //   calendarLink: null,
  //   mapURL : "https://www.google.com/maps/place/32%C2%B050'35.7%22N+96%C2%B043'06.9%22W/@32.8432437,-96.7207657,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d32.8432437!4d-96.718577?hl=en",
  //   location : "White Rock Lake"
  // },
  {
    allDay: false,
    startDate: new Date("04/09/2022"),
    endDate: new Date("04/09/2022"),
    startTime : "3:00pm",
    endTime : "9:00pm",
    title: 'A Bahamian Ting Potluck',
    description : "Well, ION Bahamas is happy to present to you, Fun Day at the Motts'!  A time where we can safely gather and get some socialization going on.  Please RSVP by signing up so we can have an accuate head count. We would love for you to join us!",
    calendarLink: "https://calendar.google.com/event?action=TEMPLATE&tmeid=XzY0czNlZGhqNzUyajBiOWg2OHM0MmI5azY4cTRjYjlvNnAwazhiOW42aDEzMGNpNDg1MmthZTlwOGcgcmFzaGFkLmJhcm5ldHRAbQ&tmsrc=rashad.barnett%40gmail.com",
    mapURL : "https://goo.gl/maps/zrRt4rtiPPJerJDYA",
    location : "Mott Farms"
  },
  {
    allDay: false,
    startDate: new Date("10/15/2022"),
    endDate: new Date("10/15/2022"),
    startTime : "7:30pm",
    endTime : "10:30pm",
    title: 'Annual Scholarship Fundraising Gala',
    description : "Tickets $65 | Dinner included | Silent Auction | 6633 Virginia Parkway, Suite #102, McKinney",
    calendarLink: null,
    mapURL : "https://goo.gl/maps/wD6LUTTfRwhNfAH8A",
    location : "The Guitar Sanctuary"
  },
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

//list = [...list, ...scheduledMeetings]

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