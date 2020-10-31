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
        subTitle : "Fight against food insecurity",
        description : "Helping farmers in The Bahamas feed their local communities.",
        template : "generalDonation.jade",
        img : require('../imgs/tractor.jpg'),
        suggestedDonations : [10, 20, 10, 30, 50 ].filter(distinct).sort(sort)
    },
    {
        type : "StudentRelief",
        title : "Student Relief Fund",
        subTitle : "Supporting Excellence",
        description : "Helping students continue their college education.",
        template : "generalDonation.jade",
        img : require('../imgs/student.jpg'),
        suggestedDonations : [20, 50, 100].filter(distinct).sort(sort)
    },
    {
        type : "DisasterRelief",
        title : "Disaster Relief Fund",
        subTitle : "People Helping People",
        description : "Helping communities most affected natural disasters.",
        template : "generalDonation.jade",
        img : require('../imgs/diasterRelief.jpg'),
        suggestedDonations : [20, 50, 100].filter(distinct).sort(sort)
    },
    {
        type : "DorianRelief",
        title : "Dorian Relief Fund",
        subTitle : "Together, We can Rebuild",
        description : "Helping those still being effected by the aftermath of Hurricane Dorian.",
        template : "generalDonation.jade",
        img : require('../imgs/Dorian Aftermath.jpeg'),
        suggestedDonations : [20, 50, 100].filter(distinct).sort(sort)
    }

]