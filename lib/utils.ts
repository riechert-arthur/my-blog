import * as bcrypt from "bcrypt"

const saltRounds: number = 20

export async function hashPassword(password: string): Promise<string> {
  
  try {

    const salt: string = await bcrypt.genSalt(saltRounds)
    const hashedPassword: string = await bcrypt.hash(password, salt)

    return hashedPassword

  } catch (e: Error) {

    console.error("Error hashing password: ", error)
    throw e

  }

}
