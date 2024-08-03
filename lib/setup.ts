import { openDb } from "./lib/db"
import { Database } from "sqlite"

const buildUserTableQuery: string = `
  CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT,
    banned BOOLEAN
  );
`

const setup = async (): void => {
  
  const db: Database = await openDb()

  try {
    
    await db.exec(buildUserTableQuery)

  } catch (e: Error) {
  
    console.error(e)

  }
    
  await db.close()

}

export setup
