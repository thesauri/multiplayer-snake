import io.vertx.core.AbstractVerticle
import io.vertx.core.json.JsonArray
import io.vertx.core.json.JsonObject

class GameVerticle(val id: Long, val width: Int, val height: Int) : AbstractVerticle() {

    data class Vector2(val x: Int, val y: Int) {
        fun plus(other: Vector2): Vector2 {
            return Vector2(x + other.x, y + other.y)
        }
    }
    data class PlayerState(val position: Vector2, val direction: Vector2, val color: String,
                           val maxTailLength: Int = 0, val tail: List<Vector2> = listOf())
    var state = mapOf<Int, PlayerState>(
        1 to PlayerState(Vector2(0, 0), Vector2(1, 0), "#3498db"),
        2 to PlayerState(Vector2(0, 4), Vector2(1, 0), "#2ecc71")
    )

    override fun start() {
        vertx.setPeriodic(200, {
            tick()
        })
    }

    fun tick() {
        // Move all players one step forward and add the old position to the tail
        state = state.mapValues {
            it.value.copy(
                    position = it.value.position.plus(it.value.direction),
                    tail = it.value.tail.plus(it.value.position).take(it.value.maxTailLength)
            )
        }

        val stateMessage = JsonObject(state.mapKeys {
            it.key.toString()
        }.mapValues {
            val state = JsonArray(it.value.tail.plus(it.value.position).map {
                JsonObject().put("x", it.x).put("y", it.y)
            })
            state
        })

        vertx.eventBus().publish("game$id-update", stateMessage)
    }
}