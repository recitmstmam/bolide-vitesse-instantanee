input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.pause(500)
    basic.showString("!")
    control.reset()
})
pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
    Fente += 1
})
let t2 = 0
let d2 = 0
let Vitesse = 0
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
let Fente = 0
let t1 = 0
let d1 = 0
basic.forever(function () {
    t1 = input.runningTimeMicros() / 1000000
    d1 = Fente / 10 * 9.6 / 100
    Vitesse = Math.abs(d2 - d1) / Math.abs(t2 - t1)
    radio.sendString("" + (Vitesse))
    t2 = t1
    d2 = d1
})
