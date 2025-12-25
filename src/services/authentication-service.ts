import { AuthenticationModel } from "../models/authentication-model"
import { authenticationRepository } from "../repositories/authentication-repository"

export const authenticationService = async (): Promise<AuthenticationModel> => {
    return await authenticationRepository()
}