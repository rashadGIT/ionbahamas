import { Cause } from '../interfaces/Cause'
const distinct = (value: number, index:number, self:number[]) => self.indexOf(value) === index;
const sort = (a: number,b: number) => a + b;
const relative = '../images/donationCauses'
const causes : Cause[] = [
    {
        type : "General",
        title : "General Donation",
        subTitle : "Enhancing Our Everyday Initiatives",
        description : "By generously donating, you play a crucial role in sustaining our operations and ensuring the continuity of our mission-driven efforts. Your support directly contributes to maintaining the essential resources that enable us to make a positive impact in our community and beyond, and for that, we are immensely grateful.",
        img : require(`../images/donationCauses/General-Donations.png`),
        suggestedDonations : [10, 20, 10, 30, 50 ].filter(distinct).sort(sort)
    },
    {
        type : "Agriculture",
        title : "Bahamian Agriculture Fund",
        subTitle : "Championing the Battle Against Food Insecurity",
        description : "Supporting a Resilient Agricultural Ecosystem in The Bahamas, Enabling Local Farmers to Cultivate, Harvest, and Distribute Fresh, Nutritious Produce to Bolster Food Security and Foster Sustainable Community Well-being.",
        img : require(`../images/donationCauses/farming.jpg`),
        suggestedDonations : [10, 20, 10, 30, 50 ].filter(distinct).sort(sort)
    },
    {
        type : "StudentRelief",
        title : "Student Relief Fund",
        subTitle : "Nurturing Student Excellence Through Dedicated Support",
        description : "Empowering and Enabling Ambitious Students to Overcome Financial Barriers and Pursue Their College Education, Ensuring a Brighter Future and Access to Expansive Opportunities for Personal and Professional Growth.",
        img : require(`../images/donationCauses/student.jpg`),
        suggestedDonations : [20, 50, 100].filter(distinct).sort(sort)
    },
    // {
    //     type : "DisasterRelief",
    //     title : "Disaster Relief Fund",
    //     subTitle : "People Helping People",
    //     description : "Helping communities most affected natural disasters.",
    //     // img : require('../imgs/diasterRelief.jpg'),
    //     img : require('../images/cat.jpg'),
    //     suggestedDonations : [20, 50, 100].filter(distinct).sort(sort)
    // },
    // {
    //     type : "DorianRelief",
    //     title : "Dorian Relief Fund",
    //     subTitle : "Together, We can Rebuild",
    //     description : "Helping those still being effected by the aftermath of Hurricane Dorian.",
    //     // img : require('../imgs/Dorian Aftermath.jpeg'),
    //     img : require('../images/cat.jpg'),
    //     suggestedDonations : [20, 50, 100].filter(distinct).sort(sort)
    // }

]
export default causes;