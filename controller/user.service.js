const pool = require("../database/db.config");

module.exports = {

  signup: (data, callBack) => {
    pool.query(
      `insert into user (firstName, lastName, gender, email, password, number) 
                values(?,?,?,?,?,?)`,
      [
        data.firstName,
        data.lastName,
        data.gender,
        data.email,
        data.password,
        data.number,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },


  getUsers: (callBack) => {
    pool.query(
      `select id,firstName,lastName,gender,email,password,number from user`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },


  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id,firstName,lastName,gender,email,password,number from user where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },


  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from user where email = ?`,
      [email],
      (error, [results], fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },


  updateUser: (data, callBack) => {
    pool.query(
      `update user set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id = ?`,
      [
        data.firstName,
        data.lastName,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },


  deleteUser: (id, callBack) => {
    pool.query(
      `delete from user where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },


  getAllEmails: (email, callback) => {
    pool.query(`SELECT email FROM user`, (err, results, fields) => {
      if (err) {
        callback(err);

        // console.log(results)
      }
      return callback(null, results);
    });
  }

};
