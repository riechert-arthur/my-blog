import { openDb } from "./lib/db" 
import { Database } from "sqlite"
import { hashPassword } from "./lib/utils"

export interface NewAccountParams {
  username: string,
  password: string,
  email: string,
  first_name: string,
  last_name: string,
}

const createNewUserQuery: string = `
  INSERT INTO users (username, password_hash, email, first_name, last_name, banned) 
  VALUES (?, ?, ?, ?, ?, ?)
`

export async function create(params: NewAccountParams): Promise<void> { 

  const db: Database = await openDb()

  try {

    const passwordHash = await hashPassword(params.password)

    await db.run(
      createNewUserQuery,
      params.username,
      passwordHash,
      params.email,
      params.first_name,
      params.last_name,
      false
    )

  } catch (e: Error) {

    console.error("Error while creating a new user: ", e)
    throw e

  } finally {
   
    db.close()

  }
}

const deleteUserQuery: string = `
  DELETE FROM users WHERE id = ?
`

export async function deleteUser(id: number): Promise<void> {

  const db: Database = await openDb()

  try {

    await db.run(deleteUserQuery, id)

  } catch (e: Error) {

    console.error("Error while deleting a user: ", e)
    throw e

  } finally {

    db.close()

  }
}

export interface UserParams {
  id: number,
  username: string,
  password: string,
  email: string,
  first_name: string,
  last_name: string,
  banned: boolean,
}

const getUserQuery: string = `
  SELECT * FROM users WHERE id = ?
`

export async function getUser(id: number): Promise<UserParams> {
  
  const db: Database = await openDb()

  try {

    return await db.get(getUserQuery, id)

  } catch (e: Error) {

    console.error("Error while fetching user from db: ", e)
    throw e

  } finally {

    db.close()

  }
}

const updateUserQuery: string = `
  UPDATE users
  SET username = ?, password_hash = ?, email = ?, first_name = ?, last_name = ?
  WHERE id = ?
`

export async function updateUser(params: UserParams): Promise<void> {
  
  const db: Database = await openDb()

  try {

    return await db.run(
      updateUserQuery,
      params.username,
      params.password_hash,
      params.email,
      params.first_name,
      params.last_name,
      params.id
    )
  
  } catch (e: Error) {

    console.log("Error while updating user profile: ", e)
    throw e

  } finally {

    db.close()

  }
}
