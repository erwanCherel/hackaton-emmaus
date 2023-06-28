const AbstractManager = require("./AbstractManager");

class RamManager extends AbstractManager {
  constructor() {
    super({ table: "ram" });
  }

  insert(ram) {
    return this.database.query(
      `INSERT INTO ${this.table} (value, points2) VALUES (?, ?)`,
      [ram.value, ram.points2]
    );
  }

  update(ram) {
    return this.database.query(
      `UPDATE ${this.table} SET value = ?, points2 = ? WHERE id = ?`,
      [ram.value, ram.points2, ram.id]
    );
  }
}

module.exports = RamManager;
