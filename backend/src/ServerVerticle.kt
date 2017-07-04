import io.vertx.core.AbstractVerticle

class ServerVerticle : AbstractVerticle() {
    override fun start() {
        val port = 8080
        val server = vertx.createHttpServer()

        server.websocketHandler { socket ->
            socket.close()
        }

        server.listen(port)
        println("Server listening on port $port")
    }
}