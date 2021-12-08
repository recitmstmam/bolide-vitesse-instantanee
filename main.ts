control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_PIN_EVT_PULSE_HI, function () {
    Fente += 1
    t1 = input.runningTimeMicros() / 1000000
    d1 = Fente / 4 * 9.57 / 100
    Vitesse = Math.abs(d3 - d1) / Math.abs(t3 - t1)
    serial.writeString("" + d1 + "," + t1 + "," + d2 + "," + t2 + "," + d3 + "," + t3 + "," + Vitesse)
    serial.writeLine("")
    t2 = t1
    d2 = d1
    t3 = t2
    d3 = d2
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.pause(500)
    basic.showString("!")
    control.reset()
})
let Vitesse = 0
let d3 = 0
let d2 = 0
let d1 = 0
let t3 = 0
let t2 = 0
let t1 = 0
let Fente = 0
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
pins.setEvents(DigitalPin.P0, PinEventType.Pulse)
Fente = 0
t1 = 0
t2 = 0
t3 = 0
d1 = 0
d2 = 0
d3 = 0
