import { Database } from "jsr:@db/sqlite@0.12.0";

const db = new Database("test.db");

// Create a table for the tasks if it does not exists
const createTableSQL = `CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT CHECK(status IN ('pending', 'completed')) DEFAULT 'pending'
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME,
  )`;

// trigger for updated_at so that it will update everytime a value change in the row
const triggerUpdatedAt = `CREATE TRIGGER IF NOT EXISTS update_timestamp
AFTER UPDATE ON users
FOR EACH ROW
BEGIN
    UPDATE users
    SET updated_at = CURRENT_TIMESTAMP
    WHERE id = OLD.id;
END;`;

db.exec(createTableSQL);
db.exec(triggerUpdatedAt);

export default db;
