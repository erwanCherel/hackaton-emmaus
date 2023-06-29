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

  findByBrand(marque) {
    return this.database.query(
      `select * from  ${this.table} where marque = ?`,
      [marque]
    );
  }

  findByMemory(parametreGo) {
    return this.database.query(
      `SELECT p.id, p.name, p.marque, p.os, p.picture, m.parametreGo
    FROM phone p
    JOIN memory_state_ram msr ON p.id = msr.phone_id
    JOIN memory m ON msr.memory_id = m.id
    where m.parametreGo = ?`,
      [parametreGo]
    );
  }
}

module.exports = PhoneManager;
