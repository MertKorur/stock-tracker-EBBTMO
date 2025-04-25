import Database from 'better-sqlite3';
import * as fs from 'fs';

const DB_PATH = './tmp/my_stocks.db';

let exists = fs.existsSync(DB_PATH);

// Ensure DB file exists
if (!exists) fs.mkdirSync('./tmp', { recursive: true });

const db = new Database(DB_PATH);

// Create table if it doesn't exist
db.prepare(`
	CREATE TABLE IF NOT EXISTS stocks (
		ticker TEXT PRIMARY KEY,
		data TEXT
	)
`).run();

export default db;
