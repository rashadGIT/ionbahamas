const distinct = (value, index, self) => self.indexOf(value) === index;
const sort = (a,b) => a + b;

const walk = [
    {
        type : "walk-a-thon",
        title : "Walk-a-Thon",
        subTitle : "Walk-a-Thon at White Rock Lake",
        description : "Walk-a-Thon at White Rock Lake",
        template : "renew2.jade",
        img : require('../imgs/walk-a-thon.jpg'),
        suggestedDonations : [{type: "Adult", price : 20}, { type : "Kids 12 to 18", price : 5}, {type : "Kids under 12", price : 0}].filter(distinct).sort(sort)
    }/*,
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
    }*/

]

const getCause = (type) =>  walk.find(x => x.type === type)

export{
    walk,
    getCause
}