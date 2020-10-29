import { format } from "date-fns";
const dateFormat = (date) => format(date, "EEE LLL do, yyyy");
const color = (num) => (num & 1) ? '#e6e6e6' : 'white'
const zeroPad = (num, places) => String(num).padStart(places, '0')
const distinct = (value, index, self) => self.indexOf(value) === index;
const sort = (a,b) => a + b;

export{
    dateFormat,
    color,
    zeroPad,
    sort,
    distinct
}