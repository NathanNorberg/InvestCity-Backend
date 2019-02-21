let bcrypt = require('bcrypt-nodejs')
let SALT_WORK_FACTOR = 10;

module.exports = {

  hash: function(adminSuper){
    return new Promise((resolve, reject)=>{
      bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
          if (err) reject(err);

          // hash the password using our new salt
          bcrypt.hash(adminSuper.password, salt, null, function(err, hash) {
              if (err) reject(err);

              // override the cleartext password with the hashed one
              adminSuper.password = hash;
              resolve(adminSuper);
          });
      });
    })

  },

  check: function(encryptedUser, adminSuper){
    return new Promise((resolve, reject)=>{
      bcrypt.compare(adminSuper.password, encryptedUser.password, function(err, isMatch) {
          if (err) reject(err);
          resolve(isMatch);
      });
    })

  }


}
