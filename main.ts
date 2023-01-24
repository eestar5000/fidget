input.onButtonPressed(Button.A, function () {
    basic.showString("yes")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("mybe")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("no")
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 3; index++) {
        music.playMelody("C5 B - C5 B - C5 B ", 137)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # .
        # . . . .
        # # # # #
        `)
})
basic.showString("Hello my beta!")
basic.showIcon(IconNames.Heart)
basic.showString("how is your day?")
