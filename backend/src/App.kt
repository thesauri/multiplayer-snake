import io.vertx.core.Vertx

fun main(args: Array<String>) {
    val vertx = Vertx.vertx()

    // Start listening to WebSocket requests
    vertx.deployVerticle(ServerVerticle())
}