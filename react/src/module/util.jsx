import { format } from "date-fns";
const dateFormat = (date) => format(date, "EEE LLL do, yyyy");
const color = (num) => (num & 1) ? '#e6e6e6' : 'white'
const zeroPad = (num, places) => String(num).padStart(places, '0')

export{
    dateFormat,
    color,
    zeroPad
}