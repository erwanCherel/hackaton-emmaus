const AbstractManager = require("./AbstractManager");

class MemoryManager extends AbstractManager {
  constructor() {
    super({ table: "memory" });
  }

  insert(memory) {
    return this.database.query(
      `insert into ${this.table} (parametreGo, points) values (?, ?)`,
      [memory.parametreGo, memory.points]
    );
  }

  update(memory) {
    return this.database.query(
      `update ${this.table} set parametreGo = ?, points = ? where id = ?`,
      [memory.parametreGo, memory.points, memory.id]
    );
  }
}

module.exports = MemoryManager;
