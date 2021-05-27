scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
    startNextLevel()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -230
    }
})
function startNextLevel () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    currentLevel += 1
    if (currentLevel == 1) {
        scene.setBackgroundColor(11)
        tiles.setTilemap(tilemap`platformer12`)
    } else if (currentLevel == 2) {
        scene.setBackgroundColor(6)
        tiles.setTilemap(tilemap`platformer1`)
    } else {
        game.over(true)
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`tile3`)
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        myEnemy = sprites.create(img`
            ..fff...........
            fffcc........fff
            ffccc.cc...fcbbc
            ffc3cc3ccffbbbc.
            ffc3bc3bcfbbccc.
            fcbbbbbbcfbcbcc.
            cc1bbb1bcbbcbbc.
            cbbbbbbbbbcccbc.
            cb1ff1cbbccccc..
            cf1ff1fbbbbfc...
            fffffffbbbbfc...
            ff2222fbbbbfcc..
            .f22222bbbcf....
            ..f222bbbcf.....
            ...fffffff......
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ....bbbbbb......
            `, SpriteKind.Enemy)
        tiles.placeOnTile(myEnemy, value)
        myEnemy.ay = 500
        myEnemy.vx = -30
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    game.over(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    if (mySprite.bottom < otherSprite.y) {
        mySprite.vy = -230
    } else {
        info.changeLifeBy(-1)
    }
})
let myEnemy: Sprite = null
let currentLevel = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 b 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 b 3 3 1 1 3 3 3 1 1 1 3 . 
    . 3 3 3 3 1 1 f 1 3 3 1 f 1 3 . 
    . 3 3 3 3 3 1 1 1 3 3 1 1 1 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 1 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
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
startNextLevel()
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.isHittingTile(CollisionDirection.Bottom)) {
            if (value.vx < 0 && value.tileKindAt(TileDirection.Left, assets.tile`tile1`)) {
                value.vy = -200
            } else if (value.vx > 0 && value.tileKindAt(TileDirection.Right, assets.tile`tile1`)) {
                value.vy = -200
            }
        } else if (value.isHittingTile(CollisionDirection.Left)) {
            value.vx = 30
        } else if (value.isHittingTile(CollisionDirection.Right)) {
            value.vx = -30
        }
    }
})
