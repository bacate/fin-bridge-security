import http from "http"
import { STATUSCODE } from "../utils/status-code"
import { authenticationToken } from "../services/authentication-service"

export const authenticationController = async (
    request: http.IncomingMessage,
    response: http.ServerResponse
) => {

    let body = ""

    request.on("data", chunk => {
        body += chunk
    })

    request.on("end", async () => {

        try {

            if (!body) {
                response.writeHead(STATUSCODE.BAD_REQUEST)
                response.end("Body não enviado")
                return
            }

            const { username, password } = JSON.parse(body)

            if (!username || !password) {
                response.writeHead(STATUSCODE.BAD_REQUEST)
                response.end("Username e password são obrigatórios")
                return
            }

            const token = await authenticationToken(username, password)

            response.writeHead(STATUSCODE.OK, {
                "Content-Type": "application/json"
            })

            response.end(JSON.stringify({ token }))

        } catch (error: any) {

            if (error.message === "Credenciais inválidas") {
                response.writeHead(STATUSCODE.UNAUTHORIZED)
                response.end("Usuário ou senha inválidos")
                return
            }

            console.error("Erro no authenticationController:", error)

            response.writeHead(STATUSCODE.ERROR)
            response.end("Erro interno")
        }
    })
}
