import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/finbridge-security").then(() => {
    console.log("Database connected")
}).catch((error) => console.log(`Database error ${error}`))

const authenticationSchema = new mongoose.Schema({
    username: String,
    password: String,
})

const AuthenticationDataBaseModel = mongoose.model("authentications", authenticationSchema)

export const repositoryAuthentication = async (username: String, password: String) => {
    return await AuthenticationDataBaseModel.findOne({ username, password })
}