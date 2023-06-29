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
          picture)
         values (?, ?, ?, ?)`,
      [phone.name, phone.marque, phone.os, phone.picture]
    );
  }

  update(phone) {
    return this.database.query(
      `update ${this.table} set name = ?, marque = ?, os = ?, picture = ? where id = ?`,
      [phone.name, phone.marque, phone.os, phone.picture, phone.id]
    );
  }

  findByPhoneId(phoneId) {
    return this.database.query(
      `SELECT p.id, p.name, p.marque, p.os, p.picture, m.parametreGo, r.value
    FROM phone p
    JOIN memory_state_ram msr ON p.id = msr.phone_id
    JOIN memory m ON msr.memory_id = m.id
    JOIN ram r ON msr.ram_id = r.id where p.id = ?`,
      [phoneId]
    );
  }
}

// `SELECT r.id, r.title FROM ${this.table} AS r INNER JOIN nursery_reglement AS nr ON r.id  = nr.reglement_id WHERE nr.nursery_id= ?`,
module.exports = PhoneManager;
