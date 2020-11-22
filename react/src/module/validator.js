import axios from 'axios';
import { environment as env } from '../env/env.js';

const isValidMember = async (event, formData) => {
    event.preventDefault();
    let err = [];
    let message = "";
    console.log(formData)
    if(formData.fName.trim().length === 0) err.push("fName");
    if(formData.lName.trim().length === 0) err.push("lName");
    if(formData.email.trim().length === 0) err.push("email");
    if(formData.primaryPhone.trim().length === 0) err.push("phone");
    if(formData.address.trim().length === 0) err.push("address");
    if(formData.city.trim().length === 0) err.push("city");
    if(formData.state.trim().length === 0) err.push("state");
    if(formData.zip.trim().length === 0) err.push("zip");
    if(formData.country.trim().length === 0) err.push("country");
    if(formData.isFamily){
        for(let key in formData.secondaryMembers){
            let hashMap = formData.secondaryMembers[key];
            if(typeof hashMap === 'undefined' || hashMap === null) continue;
            let fName = hashMap.get("fName");
            let lName = hashMap.get("lName");

            if(typeof fName !== 'undefined' && fName.trim().length === 0){
            fName = undefined;
            }
            if(typeof lName !== 'undefined' && lName.trim().length === 0){
            lName = undefined;
            }

            if(fName === undefined && typeof lName !== 'undefined'){
            err.push(`secfName${key}`)
            }

            if(lName === undefined && typeof fName !== 'undefined'){
            err.push(`seclName${key}`)
            }

            if(fName === undefined && lName === undefined){
                formData.secondaryMembers[key] = null;
            }
        }
    }
    let email = formData.email;
    let primaryPhone = formData.primaryPhone

    let alreadyAMember = await axios.post(`${env.sever}/members/getMemberByEmailOrPhone`,
    { 
        email,
        primaryPhone
    })
    .then(x => {
    if(x.data){ return x.data}
    return x;
    })
    .catch(err => {
    console.log(err.message)
    return err
    });

    if(alreadyAMember.email && alreadyAMember.email === formData.email.toUpperCase()){
        err.push("email");
        message = `${formData.email.trim()} is already exist in our system.\nPlease try a different email.`
    }
    else if(alreadyAMember.phone && alreadyAMember.phone === parseInt(formData.primaryPhone)){
        err.push("phone");
        message = `${formData.primaryPhone.trim()} is already exist in our system.\nPlease try a different Primary phone number.`
    }
    
    if(formData.isFamily && Object.keys(formData.secondaryMembers).length === 0) {
        err.push(`secfName1`);
        err.push(`seclName1`);
        message = `At least one secondary family member required to create family Membership.`
    }

    return [ err, message ];
}

const isValidDonation = async (event, formData) => {
    event.preventDefault();
    let err = [];
    let message = "";
    const regex = RegExp('^(\\d+.\\d{0,2})$');
    if(formData.fName.trim().length === 0) err.push("fName");
    if(formData.lName.trim().length === 0) err.push("lName");
    if(formData.email.trim().length === 0) err.push("email");
    if(formData.amount === 0) err.push("amount");
        
    if(!regex.test(formData.amount)){
        err.push("amount");
        message = `${formData.amount} is an  invalid amount.`;
    }

    if(parseInt(formData.amount) > 50000){
        err.push(`To Much Money`)
        message = `Thank you for your generosity.\nIf you would like to Donate an amount Greater than $50,000 please contact our board director.`
    }

    return [err, message]
}

export{
    isValidMember,
    isValidDonation
}