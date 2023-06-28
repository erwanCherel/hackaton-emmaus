const AbstractManager = require("./AbstractManager");

class StateManager extends AbstractManager {
  constructor() {
    super({ table: "state" });
  }

  insert(state) {
    return this.database.query(
      `insert into ${this.table} (name,
          weighting
          )
         values (?, ?)`,
      [state.name, state.weighting]
    );
  }

  update(state) {
    return this.database.query(
      `update ${this.table} set name = ?, weighting = ? where id = ?`,
      [state.name, state.weighting, state.id]
    );
  }
}

module.exports = StateManager;
