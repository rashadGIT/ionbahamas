var sql = require('../util/db.js');
const bcrypt = require('bcrypt');

exports.getUser = (username,password) => {
  return sql.query('SELECT * FROM users where Lower(email) = Lower(?)', [username])
  .then(x => x[0][0])
  .then(user => {
    if(bcrypt.compareSync(password, user.password)){
      if(user.email_verified == 0){
        return {
          status : 403,
          message : 'Email Not Verified',
          type : 'access error'

        }
      }
      return {
        status : 200,
        id : user.id,
        name : user.name,
        email : user.email,
        publicKey : user.publicKey,
        email_verified : (user.email_verified != 0) ? true : false
      };
    }
    else{
      return {
        status:401, 
        message: 'Invalid Username and Password', 
        type:'internal error'
      }
    }
  })
  .catch(err => {
    return {status : 500,
      message : err.message,
      type:'internal error'
    };
  });
}

exports.addUser = (name,email,password,publicKey) => {
    let insert = "INSERT INTO users VALUES (null,?, ?, ?, ?, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";
    let bcryptPassword = bcrypt.hashSync(password, 10);
    return sql.query(insert,[name,email,bcryptPassword,publicKey])
    .then(x => x[0])
    .then(x => {
      return {
        status : 200,
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

exports.resetPassword = (email,newPassword) => {
  let reset = "update users set password = ?, updated_at = CURRENT_TIMESTAMP where upper(email) = upper(?)";
  let bcryptPassword = bcrypt.hashSync(newPassword, 10);
  return sql.query(reset,[bcryptPassword,email])
  .then(x => x[0])
  .then(x => {
    return {
      status : 200,
      message : x.info,
      type : "updated record"
    }
  });
}

exports.updateProfileInfo = (email,newName,newPublicKey) => {
  let update = "update users set name = ?, publicKey = ?, updated_at = CURRENT_TIMESTAMP where upper(email) = upper(?)";
  return sql.query(update,[newName,newPublicKey,email])
  .then(x => x[0])
  .then(x => {
    return {
      status : 200,
      message : x.info,
      type : "updated record"
    }
  });
}

exports.getProfileInfo = (email) => {
  let userInfo = "select id, name, email, publicKey, created_at from users where upper(email) = upper(?)"
  return sql.query(userInfo,[email])
  .then(x => x[0][0])
  .then(x => {
    return {
      status : 200,
      id : x.id,
      name : x.name,
      email : x.email,
      publicKey : x.publicKey,
      created_at : x.created_at,
      type : "user acquired"
    }
  })
}
