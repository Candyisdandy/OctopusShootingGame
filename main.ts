controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`laser things`, mySprite, 0, -150)
    projectile.startEffect(effects.bubbles, 500)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.spray, 200)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.spray, 100)
    scene.cameraShake(4, 500)
})
let fish1: Sprite = null
let hermits: Sprite = null
let FISH2: Sprite = null
let myenemy: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
assets.animation`Octopus Animation`,
140,
true
)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite)
scene.setBackgroundColor(8)
scene.setBackgroundImage(assets.image`backgeound`)
info.setLife(3)
info.startCountdown(20)
game.onUpdate(function () {
    if (info.life() == 0) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Octopus AnimationgameOver`,
        140,
        true
        )
        game.over(false)
    }
})
game.onUpdate(function () {
    if (info.score() >= 12) {
        game.over(true, effects.confetti)
    }
})
game.onUpdateInterval(5000, function () {
    myenemy = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
    myenemy.setPosition(0, randint(15, 80))
    myenemy.vx = 75
    animation.runImageAnimation(
    myenemy,
    assets.animation`myAnim2`,
    200,
    true
    )
})
game.onUpdateInterval(5000, function () {
    FISH2 = sprites.create(assets.image`myImage2`, SpriteKind.Food)
    FISH2.setPosition(0, randint(15, 80))
    FISH2.vx = 75
    animation.runImageAnimation(
    FISH2,
    assets.animation`myAnim1`,
    200,
    true
    )
})
game.onUpdateInterval(7000, function () {
    hermits = sprites.create(assets.image`myImage5`, SpriteKind.Food)
    hermits.setPosition(scene.screenWidth(), 100)
    hermits.vx = -75
    animation.runImageAnimation(
    hermits,
    assets.animation`myAnim3`,
    200,
    true
    )
})
forever(function () {
    music.playMelody("F C D - F C D - ", 120)
    music.playMelody("- C E D - C E D ", 120)
})
game.onUpdateInterval(3000, function () {
    fish1 = sprites.create(assets.image`myImage3`, SpriteKind.Food)
    fish1.setPosition(scene.screenWidth(), randint(25, 75))
    fish1.vx = -75
    animation.runImageAnimation(
    fish1,
    assets.animation`myAnim0`,
    200,
    true
    )
})
