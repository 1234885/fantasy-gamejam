enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const building = SpriteKind.create()
    export const hole = SpriteKind.create()
}
namespace StatusBarKind {
    export const EnemyHealth2 = StatusBarKind.create()
    export const EnemyHealth3 = StatusBarKind.create()
    export const EnemyHealth4 = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    facingUp = true
    facingRight = false
    facingLeft = false
    facingDown = false
    animation.runImageAnimation(
    Playablecharacter,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
})
function enemyAwarenessTwo (snake: Sprite) {
    if (snake.x + 10 >= Playablecharacter.x && snake.x - 10 <= Playablecharacter.x || snake.y + 10 >= Playablecharacter.y && snake.y - 10 <= Playablecharacter.y) {
        snake.follow(Playablecharacter, 20)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.building, function (sprite, otherSprite) {
    if (facingDown) {
        Playablecharacter.y += -5
    } else if (facingLeft) {
        Playablecharacter.x += 5
    } else if (facingRight) {
        Playablecharacter.x += -5
    } else if (facingUp) {
        Playablecharacter.y += 5
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    facingRight = false
    facingLeft = true
    facingDown = false
    animation.runImageAnimation(
    Playablecharacter,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.hole, function (sprite, otherSprite) {
    if (slayedEnemies == 4) {
        game.over(true)
    } else {
        game.splash("Your cowardice shall be noted...")
        game.reset()
    }
})
function movementBuffChange () {
    if (movementBuff < 130) {
        movementBuff += 20
    }
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false, effects.dissolve)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    facingLeft = false
    facingRight = true
    facingDown = false
    animation.runImageAnimation(
    Playablecharacter,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    facingDown = true
    facingRight = false
    facingLeft = false
    animation.runImageAnimation(
    Playablecharacter,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
})
statusbars.onStatusReached(StatusBarKind.EnemyHealth4, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 1, function (status) {
    enemyFour.destroy(effects.disintegrate, 250)
    slayedEnemies += 1
})
statusbars.onStatusReached(StatusBarKind.EnemyHealth2, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 1, function (status) {
    enemyTwo.destroy(effects.disintegrate, 250)
    slayedEnemies += 1
})
function enemyHit () {
    statusbar.value += -20
    pause(200)
}
statusbars.onStatusReached(StatusBarKind.EnemyHealth3, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 1, function (status) {
    enemyThree.destroy(effects.disintegrate, 250)
    slayedEnemies += 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.overlapsWith(ememyOne)) {
        info.changeScoreBy(1)
        enemystatusbar.value += -33
        pause(200)
    } else if (sprite.overlapsWith(enemyTwo)) {
        info.changeScoreBy(1)
        enemystatusbar2.value += -33
        pause(200)
    } else if (sprite.overlapsWith(enemyThree)) {
        info.changeScoreBy(1)
        enemystatusbar3.value += -33
        pause(200)
    } else if (sprite.overlapsWith(enemyFour)) {
        info.changeScoreBy(1)
        enemystatusbar4.value += -33
        pause(200)
    }
})
statusbars.onStatusReached(StatusBarKind.EnemyHealth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 1, function (status) {
    ememyOne.destroy(effects.disintegrate, 250)
    slayedEnemies += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if ((Playablecharacter && facingDown) == true) {
        Playablecharacter.y += -13
        enemyHit()
    } else if ((Playablecharacter && facingLeft) == true) {
        Playablecharacter.x += 13
        enemyHit()
    } else if (Playablecharacter && facingRight) {
        Playablecharacter.x += -13
        enemyHit()
    } else if ((Playablecharacter && facingUp) == true) {
        Playablecharacter.y += 13
        enemyHit()
    }
})
let playableCharacterProjectile: Sprite = null
let lastpressed = 0
let facingDown = false
let facingLeft = false
let facingRight = false
let facingUp = false
let enemystatusbar4: StatusBarSprite = null
let enemyFour: Sprite = null
let enemystatusbar3: StatusBarSprite = null
let enemyThree: Sprite = null
let enemystatusbar2: StatusBarSprite = null
let enemyTwo: Sprite = null
let enemystatusbar: StatusBarSprite = null
let ememyOne: Sprite = null
let Playablecharacter: Sprite = null
let movementBuff = 0
let slayedEnemies = 0
let statusbar: StatusBarSprite = null
game.splash("Kill The Monsters!")
statusbar = statusbars.create(85, 6, StatusBarKind.Health)
statusbar.setLabel("HP", 15)
statusbar.setBarBorder(1, 15)
statusbar.positionDirection(CollisionDirection.Top)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
slayedEnemies = 0
movementBuff = 70
info.setScore(0)
let timebetweenpresses = 500
tiles.setTilemap(tilemap`level2`)
let hole2 = sprites.create(img`
    .........................
    .........bbbb............
    .........bfffbbbbbb......
    ........bffffffffffb.....
    ........bfffffffffffb....
    .....bbbfffffffffffffbb..
    ....bffffffffffffffffffb.
    ....bfffffffffffffffffffb
    ....bfffffffffffffffffffb
    .....bffffffffffffffffffb
    .....bffffffffffffffffffb
    ......bfffffffffffffffffb
    .......bffffffffffffffffb
    ........bbffffffffffffffb
    ..........bffffffffffbbb.
    ...........bbbbbbbbbb....
    `, SpriteKind.hole)
hole2.setPosition(25, 210)
Playablecharacter = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
Playablecharacter.say("Oh great, I'm trapped", 3500)
scene.cameraFollowSprite(Playablecharacter)
let spawnPointsX = [16, 304]
let spawnPointsY = [96, 200]
Playablecharacter.setPosition(spawnPointsX[randint(0, spawnPointsX.length - 1)], spawnPointsY[randint(0, spawnPointsY.length - 1)])
Playablecharacter.setStayInScreen(true)
ememyOne = sprites.create(sprites.builtin.forestSnake0, SpriteKind.Enemy)
enemystatusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
enemystatusbar.value = 100
enemystatusbar.attachToSprite(ememyOne)
enemystatusbar.setBarBorder(1, 15)
enemyTwo = sprites.create(sprites.builtin.forestSnake0, SpriteKind.Enemy)
enemystatusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth2)
enemystatusbar2.value = 100
enemystatusbar2.attachToSprite(enemyTwo)
enemystatusbar2.setBarBorder(1, 15)
enemyThree = sprites.create(sprites.builtin.forestSnake0, SpriteKind.Enemy)
enemystatusbar3 = statusbars.create(20, 4, StatusBarKind.EnemyHealth3)
enemystatusbar3.value = 100
enemystatusbar3.attachToSprite(enemyThree)
enemystatusbar3.setBarBorder(1, 15)
enemyFour = sprites.create(sprites.builtin.forestSnake0, SpriteKind.Enemy)
enemystatusbar4 = statusbars.create(20, 4, StatusBarKind.EnemyHealth4)
enemystatusbar4.value = 100
enemystatusbar4.attachToSprite(enemyFour)
enemystatusbar4.setBarBorder(1, 15)
let snakes = [ememyOne, enemyTwo, enemyThree, enemyFour]
ememyOne.setPosition(64, 48)
enemyTwo.setPosition(256, 48)
enemyThree.setPosition(256, 208)
enemyFour.setPosition(80, 192)
forever(function () {
    controller.moveSprite(Playablecharacter, movementBuff, movementBuff)
})
forever(function () {
    if (controller.A.isPressed() && facingRight == true && game.runtime() - lastpressed >= timebetweenpresses) {
        animation.runImageAnimation(
        Playablecharacter,
        [img`
            ........................
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef...cc.......
            .ffffee2222ef.cdc.......
            .fe222ffffe2fcddc.......
            fffffffeeeffcddc........
            ffe44ebf44ecddc.........
            fee4d41fddecdc..........
            .feee4dddedccc..........
            ..ffee44e4dde...........
            ...f222244ee............
            ...f2222e2f.............
            ...f444455f.............
            ....ffffff..............
            .....fff................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            .......fff..............
            ....fffff2f.............
            ..ffeeeee22ff...........
            .ffeeeeee222ff..........
            .feeeefffeeeef..........
            .fffffeee2222ef.........
            fffe222fffffe2f.........
            fffffffffeeefff.....cc..
            fefe44ebbf44eef...ccdc..
            .fee4d4bbfddef..ccddcc..
            ..feee4dddddfeecdddc....
            ...f2222222eeddcdcc.....
            ...f444445e44ddccc......
            ...ffffffffeeee.........
            ...fff...ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            .......ff...............
            ....ffff2ff.............
            ..ffeeeef2ff............
            .ffeeeeef22ff...........
            .feeeeffeeeef...........
            .fffffee2222ef..........
            fffe222ffffe2f..........
            ffffffffeeefff..........
            fefe44ebf44eef..........
            .fee4d4bfddef...........
            ..feee4dddee.c..........
            ...f2222eeddeccccccc....
            ...f444e44ddecddddd.....
            ...fffffeeee.ccccc......
            ..ffffffff...c..........
            ..fff..ff...............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef............
            .ffffee2222ef...........
            .fe222ffffe2f...........
            fffffffeeefff...........
            ffe44ebf44eef...........
            fee4d41fddef............
            .feee4ddddf.............
            ..fdde444ef.............
            ..fdde22ccc.............
            ...eef22cdc.............
            ...f4444cddc............
            ....fffffcddc...........
            .....fff..cddc..........
            ...........cdc..........
            ............cc..........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        false
        )
        playableCharacterProjectile = sprites.createProjectileFromSprite(img`
            . . 5 . 5 . 
            4 . 4 5 . . 
            . 5 5 5 . 4 
            4 4 . 2 5 . 
            . . 4 . 2 . 
            . . 5 4 . 2 
            . 4 . 4 . . 
            4 . 5 2 5 . 
            . 5 4 2 . 2 
            . 2 2 5 2 . 
            2 . 2 . 5 . 
            . 2 . 5 2 2 
            `, Playablecharacter, 0, 0)
        playableCharacterProjectile.setPosition(playableCharacterProjectile.x + 17, playableCharacterProjectile.y)
        playableCharacterProjectile.lifespan = 100
        music.knock.play()
        lastpressed = game.runtime()
    } else if (controller.A.isPressed() && facingLeft == true && game.runtime() - lastpressed >= timebetweenpresses) {
        animation.runImageAnimation(
        Playablecharacter,
        [img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            .......cc...feeeeffeeef.
            .......cdc.fe2222eeffff.
            .......cddcf2effff222ef.
            ........cddcffeeefffffff
            .........cddce44fbe44eff
            ..........cdceddf14d4eef
            ..........cccdeddd4eeef.
            ...........edd4e44eeff..
            ............ee442222f...
            .............f2e2222f...
            .............f554444f...
            ..............ffffff....
            ................fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ..............fff.......
            .............f2fffff....
            ...........ff22eeeeeff..
            ..........ff222eeeeeeff.
            ..........feeeefffeeeef.
            .........fe2222eeefffff.
            .........f2efffff222efff
            ..cc.....fffeeefffffffff
            ..cdcc...fee44fbbe44efef
            ..ccddcc..feddfbb4d4eef.
            ....cdddceefddddd4eeef..
            .....ccdcddee2222222f...
            ......cccdd44e544444f...
            .........eeeeffffffff...
            .............ff...fff...
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ...............ff.......
            .............ff2ffff....
            ............ff2feeeeff..
            ...........ff22feeeeeff.
            ...........feeeeffeeeef.
            ..........fe2222eefffff.
            ..........f2effff222efff
            ..........fffeeeffffffff
            ..........fee44fbe44efef
            ...........feddfb4d4eef.
            ..........c.eeddd4eeef..
            ....ccccccceddee2222f...
            .....dddddcedd44e444f...
            ......ccccc.eeeefffff...
            ..........c...ffffffff..
            ...............ff..fff..
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            ............feeeeffeeef.
            ...........fe2222eeffff.
            ...........f2effff222ef.
            ...........fffeeefffffff
            ...........fee44fbe44eff
            ............feddf14d4eef
            .............fdddd4eeef.
            .............fe444eddf..
            .............ccc22eddf..
            .............cdc22fee...
            ............cddc4444f...
            ...........cddcfffff....
            ..........cddc..fff.....
            ..........cdc...........
            ..........cc............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            ............feeeeffeeef.
            ...........fe2222eeffff.
            ...........f2effff222ef.
            ...........fffeeefffffff
            ...........fee44fbe44eff
            ............feddf14d4eef
            .............fdddd4eeef.
            .............fe444eeff..
            .............f222edd4...
            .............f222edde...
            .............f554feef...
            ..............ffffff....
            ................fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        false
        )
        playableCharacterProjectile = sprites.createProjectileFromSprite(img`
            . . 5 . 5 . 
            4 . 4 5 . . 
            . 5 5 5 . 4 
            4 4 . 2 5 . 
            . . 4 . 2 . 
            . . 5 4 . 2 
            . 4 . 4 . . 
            4 . 5 2 5 . 
            . 5 4 2 . 2 
            . 2 2 5 2 . 
            2 . 2 . 5 . 
            . 2 . 5 2 2 
            `, Playablecharacter, 0, 0)
        playableCharacterProjectile.setPosition(playableCharacterProjectile.x - 17, playableCharacterProjectile.y)
        playableCharacterProjectile.lifespan = 100
        music.knock.play()
        lastpressed = game.runtime()
    } else if (controller.A.isPressed() && facingDown == true && game.runtime() - lastpressed >= timebetweenpresses) {
        animation.runImageAnimation(
        Playablecharacter,
        [img`
            ........................
            .....ffff...............
            ...fff22fff.............
            ..fff2222fff............
            .fffeeeeeefff...........
            .ffe222222eef...........
            .fe2ffffff2ef...........
            .ffffeeeeffff...........
            ffefbf44fbfeff..........
            fee41fddf14eef..........
            .ffffdddddeef...........
            fddddf444eef............
            fbbbbf2222f4e...........
            fbbbbf2222fd4...........
            .fccf45544f44...........
            ..ffffffff..............
            ....ff..ff..............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ......ffff..............
            ....fff22fff............
            ...fff2222fff...........
            ..fffeeeeeefff..........
            ..ffe222222eef..........
            ..fe2ffffff2ef..........
            ..ffffeeeeffff..........
            .ffefbf44fbfeff.........
            .fee41fddf14eef.........
            fdfeeddddd4eff..........
            fbffee444edd4e..........
            fbf4f2222edde...........
            fcf.f22cccee............
            .ff.f44cdc4f............
            ....fffddcff............
            .....fddcff.............
            ....cddc................
            ....cdc.................
            ....cc..................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            .......ff...............
            .....ff22ff.............
            ...fff2222fff...........
            ..fff222222fff..........
            ..fff222222fff..........
            ..feeeeeeeeeeff.........
            .ffe22222222eff.........
            .fffffeeeefffff.........
            fdfefbf44fbfeff.........
            fbfe41fddf14ef..........
            fbffe4dddd4efe..........
            fcfef22222f4e...........
            .ff4f44554f4e...........
            ....ffffffdde...........
            .....ffffedde...........
            ..........ee............
            .........ccc............
            ........cc1cc...........
            .........c1c............
            .........c1c............
            .........c1c............
            .........c1c............
            `,img`
            ......ffff..............
            ....fff22fff............
            ...fff2222fff...........
            ..fffeeeeeefff..........
            ..ffe222222eef..........
            ..fe2ffffff2ef..........
            ..ffffeeeeffff......ccc.
            .ffefbf44fbfeff....cddc.
            .ffefbf44fbfeff...cddc..
            .fee4dddddd4eef.ccddc...
            fdfeeddddd4eeffecddc....
            fbffee4444ee4fddccc.....
            fbf4f222222f1edde.......
            fcf.f222222f44ee........
            .ff.f445544f............
            ....ffffffff............
            .....ff..ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        false
        )
        playableCharacterProjectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . 
            4 . . . . . . . . . . . . . 
            . 5 . . . . . . . . . . . . 
            . 4 . 2 . . . . . . . . . 5 
            . . . . 2 . . . . . . 4 5 . 
            . . 5 4 . 4 . . . . 5 . . 2 
            . 4 . . 5 . 5 . . 5 . 2 . 5 
            . . 5 . 4 . 4 . 4 2 . . . . 
            . . . 2 . 4 . 5 . 5 . 4 5 . 
            . . . . 2 . 4 4 . 2 5 . . . 
            `, Playablecharacter, 0, 0)
        playableCharacterProjectile.setPosition(playableCharacterProjectile.x, playableCharacterProjectile.y + 17)
        playableCharacterProjectile.lifespan = 100
        music.knock.play()
        lastpressed = game.runtime()
    }
})
forever(function () {
    for (let value of snakes) {
        enemyAwarenessTwo(value)
    }
})
