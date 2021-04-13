def on_up_pressed():
    global facingUp, facingRight, facingLeft, facingDown
    facingUp = True
    facingRight = False
    facingLeft = False
    facingDown = False
    animation.run_image_animation(Playablecharacter,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        200,
        True)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    global facingRight, facingLeft, facingDown
    facingRight = False
    facingLeft = True
    facingDown = False
    animation.run_image_animation(Playablecharacter,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    global facingLeft, facingRight, facingDown
    facingLeft = False
    facingRight = True
    facingDown = False
    animation.run_image_animation(Playablecharacter,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    global facingDown, facingRight, facingLeft
    facingDown = True
    facingRight = False
    facingLeft = False
    animation.run_image_animation(Playablecharacter,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        200,
        True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_on_overlap(sprite, otherSprite):
    ememies.destroy()
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap)

def on_on_overlap2(sprite, otherSprite):
    if facingDown:
        Playablecharacter.y += -13
        pause(100)
        Playablecharacter.y += 2
    elif facingLeft:
        Playablecharacter.x += 13
        pause(100)
        Playablecharacter.x += -2
    elif facingRight:
        Playablecharacter.x += -13
        pause(100)
        Playablecharacter.x += 2
    elif facingUp:
        Playablecharacter.y += 13
        pause(100)
        Playablecharacter.y += -2
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

playableCharacterProjectile: Sprite = None
facingDown = False
facingLeft = False
facingRight = False
facingUp = False
ememies: Sprite = None
Playablecharacter: Sprite = None
game.splash("Kill The Monsters!")
info.set_life(3)
timebetweenpresses = 850
lastpressed = 0
tiles.set_tilemap(tilemap("""
    level2
"""))
Playablecharacter = sprites.create(img("""
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
    """),
    SpriteKind.player)
scene.camera_follow_sprite(Playablecharacter)
Playablecharacter.set_position(randint(27, 98), randint(24, 90))
Playablecharacter.set_stay_in_screen(True)
ememies = sprites.create(sprites.builtin.forest_snake0, SpriteKind.enemy)
if not (ememies.overlaps_with(Playablecharacter)):
    ememies.set_position(randint(27, 98), randint(24, 90))
animation.run_image_animation(ememies,
    [img("""
            . . . . c c c c c c . . . . . . 
                . . . c 6 7 7 7 7 6 c . . . . . 
                . . c 7 7 7 7 7 7 7 7 c . . . . 
                . c 6 7 7 7 7 7 7 7 7 6 c . . . 
                . c 7 c 6 6 6 6 c 7 7 7 c . . . 
                . f 7 6 f 6 6 f 6 7 7 7 f . . . 
                . f 7 7 7 7 7 7 7 7 7 7 f . . . 
                . . f 7 7 7 7 6 c 7 7 6 f c . . 
                . . . f c c c c 7 7 6 f 7 7 c . 
                . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
                . c 7 7 2 7 7 c f c 6 7 7 6 c c 
                c 1 1 1 1 7 6 f c c 6 6 6 c . . 
                f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
                f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
                . f 6 1 1 1 1 1 1 6 6 6 f . . . 
                . . c c c c c c c c c f . . . .
        """),
        img("""
            . . . c c c c c c . . . . . . . 
                . . c 6 7 7 7 7 6 c . . . . . . 
                . c 7 7 7 7 7 7 7 7 c . . . . . 
                c 6 7 7 7 7 7 7 7 7 6 c . . . . 
                c 7 c 6 6 6 6 c 7 7 7 c . . . . 
                f 7 6 f 6 6 f 6 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                . f 7 7 7 7 6 c 7 7 6 f . . . . 
                . . f c c c c 7 7 6 f c c c . . 
                . . c 6 2 7 7 7 f c c 7 7 7 c . 
                . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
                . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
                . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
                . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
                . . c 6 1 1 1 1 1 7 6 6 c c . . 
                . . . c c c c c c c c c c . . .
        """)],
    500,
    True)
if ememies.x + 10 <= Playablecharacter.x and ememies.y + 10 <= Playablecharacter.x:
    ememies.follow(Playablecharacter, 20)

def on_on_update():
    Playablecharacter.y += controller.dy(70)
game.on_update(on_on_update)

def on_on_update2():
    Playablecharacter.x += controller.dx(70)
game.on_update(on_on_update2)

def on_forever():
    global playableCharacterProjectile, lastpressed
    if controller.A.is_pressed() and facingRight == True and game.runtime() - lastpressed >= timebetweenpresses:
        animation.run_image_animation(Playablecharacter,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            100,
            False)
        playableCharacterProjectile = sprites.create_projectile_from_sprite(img("""
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
            """),
            Playablecharacter,
            0,
            0)
        playableCharacterProjectile.set_position(playableCharacterProjectile.x + 18,
            playableCharacterProjectile.y)
        playableCharacterProjectile.lifespan = 100
        music.knock.play()
        lastpressed = game.runtime()
    elif controller.A.is_pressed() and facingLeft == True and game.runtime() - lastpressed >= timebetweenpresses:
        animation.run_image_animation(Playablecharacter,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            100,
            False)
        playableCharacterProjectile = sprites.create_projectile_from_sprite(img("""
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
            """),
            Playablecharacter,
            0,
            0)
        playableCharacterProjectile.set_position(playableCharacterProjectile.x - 10,
            playableCharacterProjectile.y)
        playableCharacterProjectile.lifespan = 100
        music.knock.play()
        lastpressed = game.runtime()
    elif controller.A.is_pressed() and facingDown == True and game.runtime() - lastpressed >= timebetweenpresses:
        animation.run_image_animation(Playablecharacter,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            100,
            False)
        playableCharacterProjectile = sprites.create_projectile_from_sprite(img("""
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
            """),
            Playablecharacter,
            0,
            0)
        playableCharacterProjectile.set_position(playableCharacterProjectile.x,
            playableCharacterProjectile.y + 15)
        playableCharacterProjectile.lifespan = 100
        music.knock.play()
        lastpressed = game.runtime()
forever(on_forever)
