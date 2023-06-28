const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }

  insert(phone) {
    return this.database.query(
      `insert into ${this.table} (name,
          marque,
          os,
          picture
         values (?, ?, ?, ?)`,
      [phone.name, phone.marque, phone.os, phone.picture, phone.id]
    );
  }

  update(phone) {
    return this.database.query(
      `update ${this.table} set name = ?, marque = ?, os = ?, picture = ? where id = ?`,
      [phone.name, phone.marque, phone.os, phone.picture, phone.id]
    );
  }
}

module.exports = PhoneManager;
