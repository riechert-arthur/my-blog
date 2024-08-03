import sqlite3 from "sqlite3"
import { open, Database } from "sqlite"
import { settings } from "./settings"

const openDb = async (): Promise<Database> => {

  try {

    return open({
      filename: `${ settings.path }/${ name }.db`,
      driver: sqlite3.Database,
    })

  } catch (e: Error) {

    console.error("Error while opening database: ", e)

  }
}

export default openDb
