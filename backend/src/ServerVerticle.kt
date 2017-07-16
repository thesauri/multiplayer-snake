import io.vertx.core.AbstractVerticle
import io.vertx.core.json.JsonObject

class ServerVerticle : AbstractVerticle() {
    override fun start() {
        val port = 8080
        val server = vertx.createHttpServer()
        val gameId = 1L

        vertx.deployVerticle(GameVerticle(gameId, 20, 20))

        server.websocketHandler { socket ->
            vertx.eventBus().consumer<JsonObject>("game$gameId-update", { message ->
                socket.writeFinalTextFrame(message.body().encode())
            })
        }

        server.listen(port)
        println("Server listening on port $port")
    }
}