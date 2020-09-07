const distinct = (value, index, self) => self.indexOf(value) === index;
const sort = (a,b) => a + b;

export const causes = [
    {
        type : "General",
        title : "General Donation",
        subTitle : "For our general activities",
        description : "Your donation will go towards helping us keep the lights on.",
        template : "generalDonation.jade",
        img : require('../imgs/logo.jpg'),
        suggestedDonations : [10, 20, 10, 30, 50 ].filter(distinct).sort(sort)
    },
    {
        type : "Agriculture",
        title : "Bahamian Agriculture Fund",
        subTitle : "For our general activities",
        description : "Helping farmers in The Bahamas feed their local communities.",
        template : "generalDonation.jade",
        img : require('../imgs/tractor.jpg'),
        suggestedDonations : [10, 20, 10, 30, 50 ].filter(distinct).sort(sort)
    },
    {
        type : "StudentRelief",
        title : "Student Relief Fund",
        subTitle : "For our general activities",
        description : "Help students continue their college education.",
        template : "generalDonation.jade",
        img : require('../imgs/student.jpg'),
        suggestedDonations : [20, 50, 100].filter(distinct).sort(sort)
    }

]