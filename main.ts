input.onButtonPressed(Button.A, function () {
    jugador_abajo.change(LedSpriteProperty.Y, -1)
    jugador_arriba.change(LedSpriteProperty.Y, -1)
    basic.pause(500)
    jugador_abajo.change(LedSpriteProperty.Y, 1)
    jugador_arriba.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    jugador_arriba.change(LedSpriteProperty.Y, -1)
    jugador_arriba.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
    jugador_arriba.change(LedSpriteProperty.Y, 1)
    jugador_arriba.change(LedSpriteProperty.Y, 1)
})
let jugador_arriba: game.LedSprite = null
let jugador_abajo: game.LedSprite = null
jugador_abajo = game.createSprite(1, 4)
jugador_arriba = game.createSprite(1, 3)
let objeto = game.createSprite(4, 4)
basic.forever(function () {
    objeto.change(LedSpriteProperty.X, -1)
    basic.pause(200)
    if (objeto.get(LedSpriteProperty.X) == 0) {
        objeto.change(LedSpriteProperty.X, 4)
    }
    if (jugador_abajo.isTouching(objeto)) {
        game.gameOver()
        basic.showNumber(game.score())
    }
})
