import * from "./crud"
import { hashPassword } from "./utils"

export interface LoginFields { 
  username: string
  password: string
}

export interface SignUpFields {
  username: string
  password: string
  email: string
  first_name: string
  last_name: string
} 

export async function login(formData: FormData): Promise<void> {

  const credentials: SignUpFields = {
    username: formData.username,
    password: formData.password,
  }

  const queryResults: UserParams = getUserByUsername(credentials.username)

}

export async function signup(formData: FormData): Promise<void> {

  const accountInfo: SignUpFields = {
    username: formData.username,
    password: formData.password,
    email: formData.email,
    first_name: formData.first_name,
    last_name: formData.last_name,
  }

  const queryResults: UserParams = getUserByUsername(credentials.username)


}
