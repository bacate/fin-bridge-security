import http from "http"
import { authenticationController } from "./controllers/authentication-controller"
import { METHODS } from "./utils/methods"
import { ROUTES } from "./utils/routes"

export const app = (async (request: http.IncomingMessage, response: http.ServerResponse) => {
    if (request.method === METHODS.POST && request.url === ROUTES.AUTHENTICATION) {
        await authenticationController(request, response)
    }
})