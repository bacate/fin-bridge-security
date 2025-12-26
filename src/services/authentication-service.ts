import jwt, { SignOptions, Secret } from "jsonwebtoken"
import { repositoryAuthentication } from "../repositories/authentication-repository"

export const authenticationToken = async (username: string, password: string): Promise<string> => {

  const authenticatedUser = await repositoryAuthentication(username, password)

  if (!authenticatedUser || !authenticatedUser.username) {
    throw new Error("Credenciais inválidas")
  }

  const payload = {
    username: authenticatedUser.username
  }

  const secret: Secret = "12345"

  const options: SignOptions = {
    subject: authenticatedUser.username,
    expiresIn: "1h"
  }

  const token = jwt.sign(payload, secret, options)

  return token
}
