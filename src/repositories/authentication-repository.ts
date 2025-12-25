import { AuthenticationModel } from "../models/authentication-model"

export const authenticationRepository = async (): Promise<AuthenticationModel> => {

    const user: AuthenticationModel = {
        
        id: "694d5b0869f68eb7642b3dc9",
        username: "gabriel",
        password: "1234",
        accountId: "69494a5d1b676649888d0f27"

    }

    return user

}