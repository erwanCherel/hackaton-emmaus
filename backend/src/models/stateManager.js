const AbstractManager = require("./AbstractManager");

class StateManager extends AbstractManager {
  constructor() {
    super({ table: "state" });
  }

  insert(state) {
    return this.database.query(
      `INSERT INTO ${this.table} (name, weighting) VALUES (?, ?)`,
      [state.name, state.weighting]
    );
  }

  update(state) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ?, weighting = ? WHERE id = ?`,
      [state.name, state.weighting, state.id]
    );
  }
}

module.exports = StateManager;
