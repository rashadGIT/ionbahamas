import React, { Component } from 'react';
import Layout from '../components/Layout';
import Calendar from 'react-calendar';
import moment from 'moment'

const bread = [
  {order : 2, title: "Donate", link : "/donate"},
  {order : 1, title: "Home", link : "/"}
].sort((a,b) => a.order - b.order);

// const localizer = momentLocalizer(moment)

const myEventsList = [
  {
      start: '2015-07-20',
      end: '2015-07-02',
      eventClasses: 'optionalEvent',
      title: 'test event',
      description: 'This is a test description of an event',
  },
  {
      start: '2015-07-19',
      end: '2015-07-25',
      title: 'test event',
      description: 'This is a test description of an event',
      data: 'you can add what ever random data you may want to use later',
  },
];

class donate extends Component {
  constructor(props){
    super(props);
    this.state={
      loading : true,
      err : false
    }
  }

  componentWillMount(){

  }

  componentDidMount(){

  }
  componentDidCatch(error, errorInfo){
    this.setState({err : true})
  }

  
  render() {
    return (
      <div>
        <Calendar firstMonth={1}
          date={moment("2014-01-01")}
          weekNumbers={true}
          size={12}
          startDate={ moment() }
          endDate={ moment().endOf('year') }
          weekNumbers={true}
          size={12}
          mods={
            [
              {
                component: [ 'day' ],
                events: {
                  onClick: (date) => alert(date)
                }
              }
            ]
          } />
      </div>
    );
  }
}

export default Layout(donate,bread);
