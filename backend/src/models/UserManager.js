const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (email,
          password)
         values (?, ?)`,
      [user.email, user.password]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set email = ?,  = ?, password = ? where id = ?`,
      [user.email, user.password, user.id]
    );
  }
}

module.exports = UserManager;
