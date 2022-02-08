control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_PIN_EVT_PULSE_HI, function () {
    Fente += 1
    t1 = input.runningTimeMicros() / 1000000
    d1 = Fente / 6 * 9.6 / 100
    Vitesse = Math.abs(d2 - d1) / Math.abs(t2 - t1)
    radio.sendString("" + (Vitesse))
    t2 = t1
    d2 = d1
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.pause(500)
    basic.showString("!")
    control.reset()
})
let t2 = 0
let d2 = 0
let Vitesse = 0
let d1 = 0
let t1 = 0
let Fente = 0
basic.showIcon(IconNames.Yes)
radio.setGroup(10)
pins.setEvents(DigitalPin.P0, PinEventType.Pulse)
Fente = 0
t1 = 0
d1 = 0
