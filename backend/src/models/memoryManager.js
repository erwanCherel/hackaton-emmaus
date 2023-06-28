const AbstractManager = require("./AbstractManager");

class MemoryManager extends AbstractManager {
  constructor() {
    super({ table: "memory" });
  }

  insert(memory) {
    return this.database.query(
      `INSERT INTO ${this.table} (parametreGo, points) VALUES (?, ?)`,
      [memory.parametreGo, memory.points]
    );
  }

  update(memory) {
    return this.database.query(
      `UPDATE ${this.table} SET parametreGo = ?, points = ? WHERE id = ?`,
      [memory.parametreGo, memory.points, memory.id]
    );
  }
}

module.exports = MemoryManager;
