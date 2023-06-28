const AbstractManager = require("./AbstractManager");

class RamManager extends AbstractManager {
  constructor() {
    super({ table: "ram" });
  }

  insert(ram) {
    return this.database.query(
      `insert into ${this.table} (value,
          points2
          )
         values (?, ?)`,
      [ram.value, ram.points2]
    );
  }

  update(ram) {
    return this.database.query(
      `update ${this.table} set value = ?, points2 = ? where id = ?`,
      [ram.value, ram.points2, ram.id]
    );
  }
}

module.exports = RamManager;
