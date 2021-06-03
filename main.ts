namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Invincible = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
    if (info.score() == 8) {
        info.changeLifeBy(1)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
    startNextLevel()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx < 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 . . . . 2 2 2 . . . 
            . . 2 2 2 2 2 . . 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 3 2 2 2 . . 
            . . 2 2 2 2 2 2 2 3 3 3 2 2 . . 
            . . 2 2 2 2 2 2 3 3 3 3 2 2 . . 
            . . . 2 2 2 2 2 2 3 3 2 2 . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -100, 0)
        projectile.lifespan = 700
    } else if (mySprite.vx > 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 . . . . 2 2 2 . . . 
            . . 2 2 2 2 2 . . 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 3 2 2 2 . . 
            . . 2 2 2 2 2 2 2 3 3 3 2 2 . . 
            . . 2 2 2 2 2 2 3 3 3 3 2 2 . . 
            . . . 2 2 2 2 2 2 3 3 2 2 . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, 0)
        projectile.lifespan = 700
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 . . . . 2 2 2 . . . 
            . . 2 2 2 2 2 . . 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 3 2 2 2 . . 
            . . 2 2 2 2 2 2 2 3 3 3 2 2 . . 
            . . 2 2 2 2 2 2 3 3 3 3 2 2 . . 
            . . . 2 2 2 2 2 2 3 3 2 2 . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, randint(-10, 10), randint(0, -10))
        projectile.lifespan = 700
    }
    music.spooky.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -220
        music.pewPew.play()
    }
})
function startNextLevel () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    currentLevel += 1
    if (currentLevel == 1) {
        scene.setBackgroundImage(img`
            7777777cbcc7777777777cfbddddddddddd111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffcdd777777c7c77777
            7777777cc7777c777777bfddddddddd11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccdb77777777777777
            7777777c777777b777777ddddddddd1111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffcb77777777777cdc7
            777777c77777777bd7777ddddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc777777d7b7777777
            7c7777777cdcd77d77dccdddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb777777d77777777
            777777777dbddc77777cddddd1111111111111111111111111111111111111111111dddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddc7c77777c777b777
            7c7777b77b77777777bbddddd111111111111111111111111111111111111111111d11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdc777777777b7777
            7cb777777c7777777cdddd1111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc77777777777777
            7dccc7777db77c77ccdddd111111111111111111771111111111111111111111111d111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddc777777777777777
            777777777777777cdddd11111111111111111117777111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7c7777777777777
            77777777777777cbddd11111111111111111111777711111111111111111111111111111dddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddc77777777777777
            7777777ddc777dddddd111111111111111111117777711111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777777777
            7777777dddb77bddd111111111111111111111777777111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbc777c7777777777
            777777cb7cccddddd111111111111111111111777777711111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc7777777777777
            777777777cfddddd1111111111111111111111777777711111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddc777777777777
            77777777dfcdddd1111111d11111d1111111117777777711111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfb777c7777777
            77777777cfbddd111111111111111111111117777777771111111111111111111111111111111111d1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddb777d77777777
            7777777cdcdddd1111111111111111111111177777777771111111777111111111777111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777777
            77777b777cddd1111111111111111111111177777777777111111177771117111177711111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbc777777777777
            7cc77dcb7bddd111111111111111111111117777777777771111117777117771117771111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbc777777777777
            777c77cd7bdd111111111111111111111117777777777777771111771711777117777111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbc777777777777
            77dd777bbbdd111111111111111111111177777777777777771111771711777117117111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddc7cc777777777
            c7d7777bcdd11111111111111111111111777777777777777711117777777777777771111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddb7cd777777777
            777777ccdd111111111111111111111111777777777777777711117777777777777771111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc7b777777777
            77c777bdb1111111111111111111111111117777777777771111117777777777777771111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddc7db77777777
            77777cddddd111111111111111111111111177177177d1771111117777777777777771111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddb7c777777777
            77777bdddd11111111111111111111111111771771777177111111177777777777771111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddc7c777777777
            7777cbddddd1111111111111111111111111777777777777111111117777777777711111111111111111d1ddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbc77777777777
            777ccddddd11111111111111111111111111777777777777111111111777777777711111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddbb777777777777
            77dcbddddd11111111111111111111111111777777777777111111111777777777111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddb7777777777c7
            77ccddddddd11111111111111111111111111777777777711111111117777777771111111111111111111dddddddddddddddddddddddddddddddddddddddddddddbddddddbbdddddddbc777777777777
            77cbdddddd11111111111111111111111111117777777711b11111111777777777111111111111bb1111ddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbdddddddbcc77777777777
            77cbddddd1111111111111111111111111111117777777b77777771117777777771111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbddbddddddbdddddddd7777777777777
            7cbbdddddd1111111111777b1777111177771117777777777777777717777777771111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbddddbbbc77777777777
            7cddddddd11111111117777b177771177777111777777777bb77bbb777777777771111111111111b111ddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddbbbc7777777777777
            ccddddddd111111111177777b77771177777111777777777bb777bb77777777777111111111111111111dddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbddbbbb77777777777777
            ddddddddd1111111111777177777777717771117777777777777777777777777771111111111111b111bdddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbddbbbbcc7777777777777
            dddddddd11111111111771177711777717771117777777771111777777777777771111111111111b111bddd1dddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbbbbbbcc7777777777777
            dddddddd111111111117777777b7777777777117777777711111117777777777771111111111111b111bddd1dddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbbbbbbcc7777777777777
            dddddddd111111111117777777777777777711177777771111b1111777777777771111111111111b1dbb1ddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbbbbbcc77777777777777
            dddddddddd11111111177777777777777771bb177777771111bb1117777777777711111b1111111b1dbbdddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbbbbbcb77777777777777
            dddddddddd11111111117777777777777777777777777711111111177777777777bb11111111111b1db1dddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbbbbcc777777777777777
            dddddddddd111111111117777777777777b77bb77777771111111b177777777777bbbb111111111b1db1ddd1ddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbbbcbbc77777777777777
            ddddddddd1d11111111111777777777777bb7bb77777771111111b17777777777771b1111111111bbbddddd1dddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbbccbc777777777777777
            ddddddddd1d11b11111111777777777777b77b77777777111111bb1777777777777111111111111bbbdddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbbbbbc7777777777777777
            ddddddddd1d11b111111117777777777777777777777771111111bb77777777777711111111111bbbdddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbcc77777777777777777
            dddddddddddddbbd1bb111777777777777111d17777777d1d1111bb77777777777711111111111bbb1ddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbbcc7777777777777777
            dddddddddddddbbd1b1111777777777777ddb777777777771ddddb777777777777711111111bb1bb11dddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbc777777777777777777
            ddddddddddddddbd1b11bb77777777777777777777777777b77777777777777777b1d111111bbbbbdddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbc777777777777777777
            ddddddddddddddbb1b11bb77777777777777777777777777777777777777777777d1111b1111bbb11ddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbbbbc777777777777777777
            dddddddddddddddb1b1db17777777777777777777777777777777777777777777771111d1111bbb11dddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbbbbbbc77777777777777777
            ddddddddddddddddbb1bbd77777777777777777777777777777777777777777777b1111d1111bbbddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbbbbbc777777777777777777
            ddddddddddddddddbb1bbd77777777777777777777777777777777777777777777b1b11d1111bbbddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbbbbbc7c77777777777777c77
            ddddddddddddddddbb1b11777777777777777777777777777777777777777777777bbb111111bbbddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbcc7777777777777777777
            ddddddddddddddddbddbd177777777777777777777777777777777777777777777bbb111d111bbbb1dddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbbbbc7c777777777777777777
            ddddddddddddddddbbb111777777777777777777777777777777777777777777771bb1111111bbbbddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbbbb777777777777777777c77
            ddddddddddddddddbbd11177777777777777777777777777777777777777777777d1bbb11111bbbbdddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbbbc777777777777777777777
            ddddddddddddddddbbdd1d77777777777777777777777777777777777777777777111bb11111bbbbdddd1ddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbbbc7777777c7777777777777
            dddddddbbdddddbbbbdddd77777777777777777777777777777777777777777777111bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbddddbdbddddddddddddddddddddddd777777777777777777777
            dbddddddddbbbbbbbbbbbb77777777777777777777777777777777777777b77777b11bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbc777777777777777777777
            ddbddbddbbbbbbbbbbbbbb77777777777777777777777777777b77777777777777d11b11111bbbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbc7777777777777777777777
            dbbbbbbbbbbbbbbbbbbbbb77777777777777777777777777777777777777777777111bb111bbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcd777777777777777777777
            bbbbbbbbbbbbbbbbbbbbbb77777777777777777777777777777777777777777777bb1bb1bbbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbcc7dd777777777777777777777
            dbbbbbbbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbc77777777777777777777777777
            bbbbbbbbbbbbbbbbbbbbbb77777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbddddbdddddddddddddddddddddddddddcc77777777777777777777777777
            bbbbbbbbddbbbbbbbbbbbb777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbddddddddddbddddddddddddddddddddddbdddddbbb77bd77777777777777777777777
            bbbbbbbdddddbbbbbbbbbb777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbddddbddddddddbdddddddddddddddddddddddddddbdd7cb7d7777777777777777777777
            bbbbddddddddddddddbbbb77777777777777777777777777777777777777777777777bbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddbd77d77bc777777777777777777777
            bbbddddddddddddbbbbbbb7777777777777777777777777777777777777777777777777bbbdbbdbdddddddbddddbddddddddddddddddddddddddddddddddddddddc77cd77777777777777777c7777777
            bbdddddddddddddbbbbbbb777777777777777777777777777777777777777777777b777bbbbbddbdddddddddddddddddddddddddddddddddddddddddddddddddbcd77d7cd77777777777777777777777
            bddddddddddddddbdbbbb777777777777777777777777777777777777777777b7bbb7bddddddddddddbddddddddddddddddddddddddddddddddddbddddddddddbfc7777c777777777777777777777777
            ddddddddddddddddbdbbb77777777777777777777777777777777777777777bb7ddddcdbddddbbddddbbdddddddddddbdddddddddddddddddddbddddddddddddcbd7777777777b77777c77777777cb77
            dbdbddddddddbdbdbbbb7777777777777777777777777777777777b777b7bbdb7ddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddc777777777777777777777777c777dd7
            ddddddbddddddddbbbbb7777777777777777777777777777777bb7b77bbbbdbdddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddb777777777777777777777777cd777c77
            ddddddddddddbdbbbbbb777777777777777777777777777777bbbbbbdddddddbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddc777777777777777777777777777d7777
            dddddddddddddbbbbbb77777777777777777777777777777bbbcddddbdbcdddcddddddddddddddddbdddbddddddddddbdddddddddddddddddddddddddddddddcc7777777777777777777777777777777
            ddddddddddddbbbbbbb777777777777777777777777777bbddddddddbdbddddbdddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddc7c7777777777777777c77777777777777
            bdbddddddbddbbbbbb77777777777777777777777777bddddbbdddddddddddddddddddbddddddddddddddddddddddddddddbdbdddddddddddddddddddddddb77777777c7777777777777777c7c777777
            dbddbdddddddbbbb777777777777777777777777777dbdbdddddddddddddddddddddddbddddddddbdcbddddddddddddddddddddddddddddddddddddddddddc777777777777777777777777777c777777
            dddddddddddddddddb7b777777777777777777777bddcbbcdddbddddddddddddcdbddddddddddddddddddddbddddddddddddddddddddddddddddddddddddd777b77777777777777777777777777c7777
            ddddddddddddcddddddbb7777777777777777b7b7bddddddbdbcddddddddddddddddddddddddddcbddddddddddddbdddddddddddddddddddddddddddddddc777d7777777777777777777777777777777
            dddddddddddbcdddddbdd7bb7777777b777bbbbb77ddbddddbdbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddb7777c7777777777777777777777777777777
            bdddddddddcdddddddddb7bbb7bbb7bbbdddbddddbddddddddddddddddbddddddddddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddbdd77777777777c7777777777777777ccc777
            ddddddddddddbddddbdddbbdb7bddbdbddddddddddbdddddddbdddddcddddddddddddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddcd77777777777777777777777777777cc777c
            dddcdddddddddddddddddcdddddddbdbbbdddbddddddddddddccdddddbddddddddcddddddddcddddddddddddddddddddddddddddddddddddddddcddddddc777777777777777777777777777777777777
            dddbdddddddddddddddddcdddddddcbddddbbddddddcdbddbdddddddddddbcbbbdcbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddc777777777777777c77777777777777777777
            bdddddddddddddddddddddddddddbddbdbcbdbbddddbdddddddddddddbbbbbb7bbbbcdbbddddbddbcddddddddddddddddbdddddddddddddddddddddddddc7777bdc77777777c7777777777c777777777
            dddddddddddddddddddddddddddbbdddddbcdddddddbddddcdbbdbbbb777bb7777b7b7bbbbbbbb77b7bbbdbbbbddddddddddddddddddddddddddbbbbdddc7777c7b77777777777777777777777777777
            dddddddddddddddddddbdddddcbbddddddbbdddddddbbddddbbbbb7777777777777777777777777777b77b7bb77bdbbdddddddddddddddddddbbbbbbddbcc7dd77777777777bb7777777777777777777
            bbbdddddddbddddddddddddbddcddbdddddbbddb77b777bb7bbb7b77777777777777777777777777b7777777777777bbbdddddddddddddbbbbccccbbddcc77777c777777777777777777777777777777
            777bddddddddddddddddddddddbdddddbbb7b77777b777777777777777777777777777777777777777777777777777b7777bdbdddbdbbb777bccbbbdddb77777d7777777777777777777777777777777
            7777ddbddddddddddd7dddd77bbb77bb7bb777777b77777777777777777777777777777777777777777777777777777777777777777777777bcccbddddd777777777777777c777777777777777777777
            77bbbbbddddddddddb7ddd777777777b7777777777777777777777777777777777777777777777777777777777777777b77777777777777777bbddddddb7777777777777777777777777777777777777
            777777bcbbbdddddb777b77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bddddddddb7777777777777777777777777777777777777
            7777777b77bbbcb7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777b7bdddddddddbc7777777777777777cb7777777777777777777
            77777777777b7b7777777777777777777777777777777777777777777777777777777777777777777777777777777b7777777777777777bbdddddbdddbc7777777777777777777777777777777777777
            777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777b7bb7777777777777bbbbddddddddddbc77c7777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777b777bb77777bb7777777bbbbdddddddddddbcc777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777b7bddddddbb7bbbdb7777bbdddddbdddddddddc77d77d77777777777777777777777777777777
            7777777777777777777777777777777bb7777777777777777777777777777777777777777b777bbbbbbddddddddddddddbbbbbbdddddcdddddddddddbc7777777777777777777777777777777777777c
            77777777777777777777777777777bbdd7b7777b777777777777777777777777777777bdbbbbddddbdddddbddddddddddddddddddddddccdddddddddc777777777777777777777777777777777777777
            777777777777777777777777777bbbcddbb7bbbbb77bb777777777777777777777bbbddddbbdddddbdccddbdddddddddddddddddddddddddddddddbc77777777777777777777c7777777777777777777
            77777777777777777777777777bddddddbbbbddbbbbdb777777777777777777b7ddddddddddbddcbdccbddddddddddddddddddddddddddddddddcb7d7777777777777777777777777777777777777777
            777777777777777b77777777b7dddddddddbddddddbbbddbbbb777777777777dbdddddddddddbddddddddddddddddddddddddddddddddddddddc7c77777777777777777cb77777777777777c77777777
            77777777777777777777777777bddddddddddddddbcbcdddddbbb77777bbb7dddddddbdddddddddddddddddddddddddddddddddddddddddddcd77b777777777777777777b777777777777cbc77777777
            777777777777777777777777777bdddddddddddddddbdbddddddcdb7bdddddddddddddddddddddddddddddddddddddddddddddddddddddddbc777d77c77777b777777777dcc777777777777777777777
            777777777777777777777777777ccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbc777777dd777777777777777dd7777777777777777777777
            7777777777777777777777d77777cfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbc777777777d777777777c77777777777777b77777777777777
            777777777777777777777777777cfccddddddddddbdcdddddddddddddddddddddddddddddddddddddddddddddbccbbccbcbbbdbbbdb777d7777777777777777c7777777777777dd77777777777777777
            7777777777777777777777777777bc7cdddddddddccbdbdddddddddddddddddddddddddddddddddddddddbdd7ccccb7c77777cbc777c77c7777777777cc777c77777777777777db77777777777777777
            7c77777777777777777777777777777bcbbdddddbcbcdbbbcbdbddddddddddddddddddddddddddddddbbcc7777777777777777cb77777777777d7777c7777777777777777777cc777777777777777777
            7777777777777777777777777777777c777cdc777cbcfcbcc7ccbddddddddddddddddddddddddddddbbbc7777777777777777777cdb777777777777cd7d7777777777777777777777777777777777777
            777777777777777777777777777777777777c777777dffdfc7777ccddddddddddddddddddddddddbdcc777777777777777777777c7777c77777777777777777777777777777777777777777777777777
            777777777777777777777777777777d77777b7b77777bcfb777777cccbcbcbdddddddddddddcccc777777777777777777777777777777777777777777c7777777cc77777777777777777777777777777
            7777777777777777777777777777cc77777777777777d7dc77777dd77c77cccc77bdbbbdddcfd777777777777777777777777777777777777777777777777777777777b7777777777777777777777777
            7777777777777777777c77777777777777777777777777777777dd7c7b77777777777777777c777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777c77777dc777dd7777777777777777b7777cb7777777777c7777777777777777777777777777777777777777777777777777777777c77c77777
            7777777777777777777777d777777777c7777777b7777777777d777777777777777777c77777777777777777777777777777777777777777777777777777777777bd7777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777b7777b7777d777cddc77777777777777777
            777777777777777777777777777777777b777777b7777777777777777777777b7c7777c777777777777777c7777777777777777777777777777777777777777777777777777ddd7777777777cc777777
            `)
        tiles.setTilemap(tilemap`platformer12`)
    } else if (currentLevel == 2) {
        tiles.setTilemap(tilemap`platformer1`)
    } else {
        game.over(true)
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`tile3`)
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        myEnemy = sprites.create(img`
            ................
            ...ee...........
            ..eee.ee........
            ..e3ee3ee.eeee..
            ..e34e34ec444e..
            .e444444ec4e4ee.
            ee214421e44e44e.
            e444444444eee4e.
            e41ff1e44eece4e.
            ee1ff1f4444ce4ee
            ecfffff4444ce44e
            ec2f22f4444cee4e
            4c22222444ec444e
            44c222444ec.4e4c
            4e4cccccccc.ccc.
            .cce44cc44e.....
            ...e4eec4e......
            ...e4e.e4e......
            ...e4e.e4e......
            ...e4e.e44......
            .4444e.e4e44....
            4eee4e.e4eee44..
            4e444e.e4444e4..
            cccce...ceeccc..
            `, SpriteKind.Enemy)
        tiles.placeOnTile(myEnemy, value)
        myEnemy.ay = 500
        myEnemy.vx = -30
    }
    for (let index = 0; index < 20; index++) {
        coiny = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        coiny,
        [img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 5 5 5 b . . 
            b 5 d 3 d 5 b . 
            b 5 3 5 1 5 b . 
            c 5 3 5 1 d c . 
            c 5 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        100,
        true
        )
        tiles.placeOnRandomTile(coiny, assets.tile`transparency16`)
    }
    for (let index = 0; index < 1; index++) {
        fruit = sprites.create(img`
            . . . . . . . . . . . 6 6 6 6 6 
            . . . . . . . . . 6 6 7 7 7 7 8 
            . . . . . . 8 8 8 7 7 8 8 6 8 8 
            . . e e e e c 6 6 8 8 . 8 7 8 . 
            . e 2 5 4 2 e c 8 . . . 6 7 8 . 
            e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
            e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
            e 2 e e 2 2 2 2 e e e e c 6 8 . 
            c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
            . c 2 e e e 2 e 2 4 2 2 2 2 c . 
            . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
            . . . e c c e c 2 2 2 2 2 2 2 e 
            . . . . . . . c 2 e e 2 2 e 2 c 
            . . . . . . . c e e e e e e 2 c 
            . . . . . . . . c e 2 2 2 2 c . 
            . . . . . . . . . c c c c c . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(fruit, assets.tile`transparency16`)
    }
    for (let index = 0; index < 1; index++) {
        fruit = sprites.create(img`
            . . . . . . b b b b . . . . . . 
            . . . . . . b 4 4 4 b . . . . . 
            . . . . . . b b 4 4 4 b . . . . 
            . . . . . b 4 b b b 4 4 b . . . 
            . . . . b d 5 5 5 4 b 4 4 b . . 
            . . . . b 3 2 3 5 5 4 e 4 4 b . 
            . . . b d 2 2 2 5 7 5 4 e 4 4 e 
            . . . b 5 3 2 3 5 5 5 5 e e e e 
            . . b d 7 5 5 5 3 2 3 5 5 e e e 
            . . b 5 5 5 5 5 2 2 2 5 5 d e e 
            . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
            . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
            b d 3 2 d 5 5 5 d d d 4 4 . . . 
            b 5 5 5 5 d d 4 4 4 4 . . . . . 
            4 d d d 4 4 4 . . . . . . . . . 
            4 4 4 4 . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(fruit, assets.tile`transparency16`)
    }
}
function makePlayer () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . . 3 b 3 3 3 3 3 3 3 3 3 . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . 3 3 b 3 3 1 1 3 3 3 1 1 1 3 . 
        . 3 3 3 3 1 1 f 1 3 3 1 f 1 3 . 
        . 3 3 3 3 3 1 1 1 3 3 1 1 1 3 . 
        . 3 3 3 3 3 9 3 3 3 3 3 9 3 3 . 
        . 3 3 3 3 3 9 3 3 3 3 3 9 3 3 . 
        . c 3 3 c 3 3 3 3 f f f 3 3 3 . 
        . c 3 3 c 3 3 3 3 f f 3 3 3 3 . 
        . 3 c c 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 2 2 2 3 3 3 3 3 2 2 2 2 . 
        . . c 2 2 2 2 2 c c c 2 2 2 2 2 
        . . . c c c c c . . . c c c c c 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = 500
    scene.cameraFollowSprite(mySprite)
    return mySprite
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    sprite.vy = -150
    sprite.setKind(SpriteKind.Invincible)
    sprite.lifespan = 1000
    sprite.startEffect(effects.disintegrate)
    info.changeLifeBy(-1)
    music.zapped.play()
})
sprites.onDestroyed(SpriteKind.Invincible, function (sprite) {
    makePlayer().setPosition(sprite.x, sprite.y)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.warmRadial, 100)
    music.smallCrash.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 500)
    if (mySprite.bottom < otherSprite.y) {
        mySprite.vy = -230
        otherSprite.setImage(img`
            ................
            ...ee...........
            ..eee.ee........
            ..e3ee3ee.eeee..
            ..e34e34ec444e..
            .e444444ec4e4ee.
            eeff44ffe44e44e.
            e444444944eee4e.
            e41ff1e94eece4e.
            ee1ff1f4944ce4ee
            ecfffff4944ce44e
            ec2f22f4444cee4e
            4c22222444ec444e
            44c222444ec.4e4c
            4e4cccccccccccc.
            .cce44cc44ecccc.
            ccce4eec4eeee...
            eeee4e.e444e....
            .e444e.e4eeee...
            `)
        music.knock.play()
    } else {
        info.changeLifeBy(-1)
        music.zapped.play()
    }
})
let fruit: Sprite = null
let coiny: Sprite = null
let myEnemy: Sprite = null
let currentLevel = 0
let projectile: Sprite = null
let mySprite: Sprite = null
makePlayer()
startNextLevel()
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.isHittingTile(CollisionDirection.Bottom)) {
            if (value.vx < 0 && !(value.tileKindAt(TileDirection.Left, assets.tile`transparency16`))) {
                value.vy = -150
                music.thump.play()
            } else if (value.vx > 0 && !(value.tileKindAt(TileDirection.Right, assets.tile`transparency16`))) {
                value.vy = -150
                music.thump.play()
            }
        } else if (value.isHittingTile(CollisionDirection.Left)) {
            value.vx = 30
            value.setImage(img`
                ................
                ...........ee...
                ........ee.eee..
                ..eeee.ee3ee3e..
                ..e444ce43e43e..
                .ee4e4ce444444e.
                .e44e44e124412ee
                .e4eee444444444e
                .e4ecee44e1ff14e
                ee4ec4444f1ff1ee
                e44ec4444fffffce
                e4eec4444f22f2ce
                e444ce44422222c4
                c4e4.ce444222c44
                .ccc.cccccccc4e4
                .....e44cc44ecc.
                ......e4cee4e...
                ......e4e.e4e...
                ......e4e.e4e...
                ......44e.e4e...
                ....44e4e.e4444.
                ..44eee4e.e4eee4
                ..4e4444e.e444e4
                ..ccceec...ecccc
                `)
        } else if (value.isHittingTile(CollisionDirection.Right)) {
            value.vx = -30
            value.setImage(img`
                ................
                ...ee...........
                ..eee.ee........
                ..e3ee3ee.eeee..
                ..e34e34ec444e..
                .e444444ec4e4ee.
                ee214421e44e44e.
                e444444444eee4e.
                e41ff1e44eece4e.
                ee1ff1f4444ce4ee
                ecfffff4444ce44e
                ec2f22f4444cee4e
                4c22222444ec444e
                44c222444ec.4e4c
                4e4cccccccc.ccc.
                .cce44cc44e.....
                ...e4eec4e......
                ...e4e.e4e......
                ...e4e.e4e......
                ...e4e.e44......
                .4444e.e4e44....
                4eee4e.e4eee44..
                4e444e.e4444e4..
                cccce...ceeccc..
                `)
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        if (value.vx < 0) {
            value.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 3 3 3 . . . 
                . . 3 3 3 3 3 3 3 3 3 b 3 . . . 
                . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
                . 3 1 1 1 3 3 3 1 1 3 3 b 3 3 . 
                . 3 1 f 1 3 3 1 f 1 1 3 3 3 3 . 
                . 3 1 1 1 3 3 1 1 1 3 3 3 3 3 . 
                . 3 3 9 3 3 3 3 3 9 3 3 3 3 3 . 
                . 3 3 9 3 3 3 3 3 9 3 3 3 3 3 . 
                . 3 3 3 f f f 3 3 3 3 c 3 3 c . 
                . 3 3 3 3 f f 3 3 3 3 c 3 3 c . 
                . 3 3 3 3 3 3 3 3 3 3 3 c c 3 . 
                . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
                . 2 2 2 2 3 3 3 3 3 2 2 2 3 3 . 
                2 2 2 2 2 c c c 2 2 2 2 2 c . . 
                c c c c c . . . c c c c c . . . 
                `)
        } else if (value.vx > 0) {
            value.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 3 3 3 . . . 
                . . . 3 b 3 3 3 3 3 3 3 3 3 . . 
                . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
                . 3 3 b 3 3 1 1 3 3 3 1 1 1 3 . 
                . 3 3 3 3 1 1 f 1 3 3 1 f 1 3 . 
                . 3 3 3 3 3 1 1 1 3 3 1 1 1 3 . 
                . 3 3 3 3 3 9 3 3 3 3 3 9 3 3 . 
                . 3 3 3 3 3 9 3 3 3 3 3 9 3 3 . 
                . c 3 3 c 3 3 3 3 f f f 3 3 3 . 
                . c 3 3 c 3 3 3 3 f f 3 3 3 3 . 
                . 3 c c 3 3 3 3 3 3 3 3 3 3 3 . 
                . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
                . 3 3 2 2 2 3 3 3 3 3 2 2 2 2 . 
                . . c 2 2 2 2 2 c c c 2 2 2 2 2 
                . . . c c c c c . . . c c c c c 
                `)
        }
    }
})
