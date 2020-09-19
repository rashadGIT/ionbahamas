"use strict";
var path = require('path');
const resolve = path.resolve;
const sql = require(`${resolve(__dirname, '../..')}/express/util/db.js`);

const getMembershipData = () => {
    return sql.query(`SELECT id, Type, Price FROM membershipType`)
    .then(x => x[0])
    .catch(err => {
        return {
          status : 500,
          message : err.message,
          type : 'internal error'
          }
    });
}

const getMembersByEmailOrPhone = (email,phone) => {
    return sql.query(`select email, primary_phone from members where
    upper(Email) = upper(?) or
    primary_phone = ? LIMIT 1`,[email,phone])
    .then(x => x[0])
    .catch(err => {
        return {
          status : 500,
          message : err.message,
          type : 'internal error'
          }
    });
}


const getMembers = () => {
    return sql.query(`Select
    members.id,
    members.FName,
    members.LName,
    members.Email,
    members.Address,
    members.City,
    members.State,
    members.Zip,
    members.Country,
    members.primary_phone,
    members.secondary_phone,
    members.IsPrimary,
    members.secondary_member_of,
    members.isActive,
    membershipType.Type
    from members
    inner join membershipType
    on
    (members.membershipType_id = membershipType.id)`)
    .then(x => x[0])
    .catch(err => {
        return {
          status : 500,
          message : err.message,
          type : 'internal error'
          }
    });
}

const getLastMonthsMembers = () => {
    return sql.query(`SELECT 
        m.Fname, 
        m.Lname, 
        mt.Type, 
        mt.Price, 
        DATE_FORMAT(m.date_created,"%W, %M %D, %Y %l:%i:%s %p") record_created
        FROM members as m
        inner join membershipType as mt
        on m.membershipType_id = mt.id
        where m.isPrimary and m.date_created between
        (DATE_FORMAT(CURRENT_DATE() - INTERVAL 1 MONTH,'%Y-%m-01')) 
        AND 
        DATE_FORMAT(CURRENT_DATE() - INTERVAL 0 MONTH,'%Y-%m-01')`)
    .then(x => x[0])
    .catch(err => {
        return {
          status : 500,
          message : err.message,
          type : 'internal error'
          }
    });
}

const setMember = (memberData) => {
    let insert = `INSERT INTO members
        (id, FName, LName, Email, Address, City, State, Zip, Country, primary_phone,secondary_phone,IsPrimary, membershipType_id, secondary_member_of, isActive)
        VALUES
        (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)`;
    return sql.execute(insert,[
        memberData.fName,
        memberData.lName,
        memberData.email,
        memberData.address,
        memberData.city,
        memberData.state,
        memberData.zip,
        memberData.country,
        memberData.primaryPhone,
        memberData.secondaryPhone,
        (memberData.isPrimary ? 1:0),
        memberData.membershipTypeId,
        memberData.secondaryMemberOf,
        1])
    .then(x => x[0])
    .then((x) => {
        return {
        status : 200,
        id : x.insertId,
        message : 'Insert successful',
        type : 'Record Inserted'
    }})
    .catch(err => {
        return {
        status : 500,
        message : err.message,
        type : 'internal error'
        }
        });
}

const deleteMember = (id) => {
  let deleteSQL = "delete FROM ionbaham_Test.members where id = ? or secondary_member_of = ?";
  return sql.execute(deleteSQL,[id,id]);
}

module.exports = {
    getMembers,
    setMember,
    getMembershipData,
    getMembersByEmailOrPhone,
    deleteMember,
    getLastMonthsMembers
};
