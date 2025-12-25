import http from "http"
import { authenticationService } from "../services/authentication-service"
import { STATUSCODE } from "../utils/status-code"

export const authenticationController = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    const content = await authenticationService()

    response.writeHead(STATUSCODE.OK, {'Content-Type':'Application/JSON'})
    response.write(JSON.stringify(content))
    response.end()
}