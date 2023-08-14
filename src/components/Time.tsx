import { useState, useEffect } from 'react';
import '../css/time.css'; // Import your custom styles here
import moment from 'moment-timezone';

const Time = (props: { message?: string; timezone?: string; format?: string; }) => {
  const [nassauTime, setNassauTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const nassauTimeZone = props.timezone || 'America/Nassau';
      const nassauTimeFormatted = moment().tz(nassauTimeZone).format(props.format || 'h:mm:ss A');
      setNassauTime(nassauTimeFormatted);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="content">
        <div>{props.message}</div>
        <p className="time">{nassauTime}</p>
    </div>
  );
};

export default Time;
